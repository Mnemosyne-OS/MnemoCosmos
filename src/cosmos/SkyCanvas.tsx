/**
 * SkyCanvas.tsx — the sky itself.
 *
 * One `THREE.Points` for the whole star field with per-vertex colour and size,
 * because 8 920 individual objects is 8 920 draw calls and a slideshow. The
 * same reason drives the rest: one `LineSegments` for every constellation
 * figure, one `Points` for the deep sky, one for the bodies.
 *
 * Selection does NOT go through a raycaster — see `sky.ts`, `pick()`. The
 * threshold a raycaster wants is in world units, so the click target grows with
 * the zoom; projecting to the screen and taking the nearest within a pixel
 * budget is the thing actually wanted.
 *
 * Labels are DOM, not sprites. A canvas-texture label per object is a texture
 * upload per object, and the text would be blurry at every zoom but one. The
 * handful that are on screen at a readable size are absolutely positioned over
 * the canvas, which also makes them selectable text and reachable by a screen
 * reader.
 *
 * 🪤 Everything created here is disposed on unmount — geometries, materials,
 * the renderer, the resize observer, the animation frame. A cartridge is an
 * iframe the host can tear down at any moment, and a leaked WebGL context is
 * not reclaimed by closing the window.
 */
import { useEffect, useMemo, useRef, useState } from 'react';
import * as THREE from 'three';
import type { Constellation, Dso, Star } from './catalog';
import {
  clampFov, colourFromCi, drag, pick, projectPoint, raDecToVec3, SPHERE_RADIUS,
  starSize, zoom, type Look, type Pickable,
} from './sky';
import { dsoKey, starKey } from './identity';
import type { BodyPosition } from './solar';
import { listenToGestures } from '../gestures/listen';
import { getSpeeds } from '../gestures/settings';
import { slideLook, zoomLook } from '../gestures/moves';

export interface SkyLayers {
  figures: boolean;
  constellationNames: boolean;
  deepSky: boolean;
  planets: boolean;
  starNames: boolean;
  grid: boolean;
  /** Faintest star drawn. Never above the catalogue's own limit. */
  magLimit: number;
}

export interface Marked {
  ra: number;
  dec: number;
  /**
   * A name to print beside the ring, once there is one to print.
   *
   * 🚨 It is drawn with the same priority as a planet, ahead of every budgeted
   * label. Measured: after answering, M54 got no label at all — fourteen
   * brighter deep-sky objects had taken the budget, so the sky did not show the
   * thing the whole screen was about. The panel says the answer in words; the
   * sky has to show WHERE it is, which is the half a person came for.
   */
  label?: string;
}

interface Props {
  stars: Star[];
  dsos: Dso[];
  constellations: Constellation[];
  bodies: BodyPosition[];
  layers: SkyLayers;
  look: Look;
  onLook: (next: Look) => void;
  /** Index into `stars`, or into `dsos`, or a body name — whichever was hit. */
  onPick: (hit: { kind: 'star' | 'dso' | 'body'; index: number } | null) => void;
  selected: Marked | null;
  /** A ring drawn without a name, for the quiz. */
  quizTarget: Marked | null;
  /**
   * The catalogue id of an object whose LABEL must not be drawn.
   *
   * 🚨 The quiz asks "which object is marked?" and then brings the camera to
   * it — so without this the answer is printed beside the ring. Hiding the one
   * label and nothing else is the point: everything around it stays named,
   * because recognising a thing by where it sits among its neighbours is the
   * skill being tested.
   */
  hiddenLabel: string | null;
  /** Names of constellations in the reader's language, keyed by IAU id. */
  constellationLabel: (c: Constellation) => string;
  /** Localised body name, keyed by the astronomy-engine body string. */
  bodyLabel: (body: string) => string;
  /** The hand's « frame again » (doc 106 §32): back to the page's default look. */
  onRecenter?: () => void;
}

interface Label {
  key: string;
  text: string;
  /** Screen position in CSS pixels, relative to the canvas box. */
  x: number;
  y: number;
  kind: 'star' | 'constellation' | 'dso' | 'body';
}

/** A drag shorter than this many pixels is a click, not a pan. */
const CLICK_SLOP = 4;

export function SkyCanvas({
  stars, dsos, constellations, bodies, layers, look, onLook, onPick,
  selected, quizTarget, hiddenLabel, constellationLabel, bodyLabel, onRecenter,
}: Props) {
  const host = useRef<HTMLDivElement>(null);
  const canvasBox = useRef<{ width: number; height: number }>({ width: 1, height: 1 });
  const [labels, setLabels] = useState<Label[]>([]);

  // Refs, not state: these are read inside the render loop, and a loop that
  // closed over state would repaint the sky with whatever was true when the
  // effect last ran.
  const lookRef = useRef(look);
  lookRef.current = look;
  const layersRef = useRef(layers);
  layersRef.current = layers;
  const selectedRef = useRef(selected);
  selectedRef.current = selected;
  const quizRef = useRef(quizTarget);
  quizRef.current = quizTarget;
  const hiddenRef = useRef(hiddenLabel);
  hiddenRef.current = hiddenLabel;
  // 🚨 Bodies move with the clock — every tick is a NEW array. If it were a
  // dependency of the scene effect, advancing the time by one hour would tear
  // down and rebuild 8 920 stars and 150 constellation segments to move ten
  // points. It travels by ref and its ten positions are rewritten per frame.
  const bodiesRef = useRef(bodies);
  bodiesRef.current = bodies;
  const matrix = useRef(new THREE.Matrix4());

  /** Everything clickable, in one list, in the order the picker prefers. */
  const pickables = useMemo(() => {
    const out: (Pickable & { kind: 'star' | 'dso' | 'body'; index: number })[] = [];
    bodies.forEach((b, i) => out.push({ ra: b.ra, dec: b.dec, rank: -30 + i, kind: 'body', index: i }));
    stars.forEach((s, i) => out.push({ ra: s.ra, dec: s.dec, rank: s.mag, kind: 'star', index: i }));
    // A deep-sky object with no magnitude still has to be clickable. Ranking it
    // at its real brightness is impossible; ranking it at 0 would make it beat
    // Sirius. 20 puts it behind everything measured, which is the honest place
    // for "we do not know how bright this is".
    dsos.forEach((d, i) => out.push({ ra: d.ra, dec: d.dec, rank: d.mag ?? 20, kind: 'dso', index: i }));
    return out;
  }, [stars, dsos, bodies]);
  const pickablesRef = useRef(pickables);
  pickablesRef.current = pickables;

  const onPickRef = useRef(onPick);
  onPickRef.current = onPick;
  const onLookRef = useRef(onLook);
  onLookRef.current = onLook;

  // ── the scene ──────────────────────────────────────────────────────────────
  useEffect(() => {
    const mount = host.current;
    if (!mount) return;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));
    renderer.setClearColor(0x05070d, 1);
    mount.appendChild(renderer.domElement);
    renderer.domElement.style.display = 'block';
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(look.fov, 1, 0.1, SPHERE_RADIUS * 4);
    // The camera sits at the centre of the sphere, which is where an observer
    // stands. Everything is painted on the inside.
    camera.position.set(0, 0, 0);

    const disposables: { dispose(): void }[] = [];
    const keep = <T extends { dispose(): void }>(x: T): T => { disposables.push(x); return x; };

    // -- stars ---------------------------------------------------------------
    const starGeo = keep(new THREE.BufferGeometry());
    {
      const pos = new Float32Array(stars.length * 3);
      const col = new Float32Array(stars.length * 3);
      const siz = new Float32Array(stars.length);
      stars.forEach((s, i) => {
        const v = raDecToVec3(s.ra, s.dec);
        pos[i * 3] = v.x; pos[i * 3 + 1] = v.y; pos[i * 3 + 2] = v.z;
        // A star with no measured colour index is painted neutral white. There
        // is no plausible colour to give it: the colour IS the measurement.
        const rgb = colourFromCi(s.ci) ?? [1, 1, 1];
        col[i * 3] = rgb[0]; col[i * 3 + 1] = rgb[1]; col[i * 3 + 2] = rgb[2];
        siz[i] = starSize(s.mag, 6.5);
      });
      starGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
      starGeo.setAttribute('color', new THREE.BufferAttribute(col, 3));
      starGeo.setAttribute('size', new THREE.BufferAttribute(siz, 1));
      starGeo.setAttribute('mag', new THREE.BufferAttribute(
        Float32Array.from(stars.map((s) => s.mag)), 1,
      ));
    }

    const starMat = keep(new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      uniforms: {
        uScale: { value: 1 },
        uMagLimit: { value: layers.magLimit },
      },
      vertexShader: `
        attribute float size;
        attribute float mag;
        uniform float uScale;
        uniform float uMagLimit;
        varying vec3 vColor;
        varying float vDrop;
        void main() {
          vColor = color;
          // Fainter than the filter: dropped by making it degenerate rather
          // than by rebuilding the buffer on every slider move.
          vDrop = mag > uMagLimit ? 1.0 : 0.0;
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * mv;
          gl_PointSize = size * uScale * (vDrop > 0.5 ? 0.0 : 1.0);
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        varying float vDrop;
        void main() {
          if (vDrop > 0.5) discard;
          vec2 d = gl_PointCoord - vec2(0.5);
          float r = length(d) * 2.0;
          if (r > 1.0) discard;
          float a = smoothstep(1.0, 0.15, r);
          gl_FragColor = vec4(vColor, a);
        }
      `,
      vertexColors: true,
    }));
    const starPoints = new THREE.Points(starGeo, starMat);
    starPoints.frustumCulled = false;
    scene.add(starPoints);

    // -- constellation figures ----------------------------------------------
    const figureGeo = keep(new THREE.BufferGeometry());
    {
      const pts: number[] = [];
      for (const c of constellations) {
        for (const seg of c.lines) {
          for (let i = 0; i + 1 < seg.length; i++) {
            const a = raDecToVec3(seg[i]![0], seg[i]![1], SPHERE_RADIUS * 0.995);
            const b = raDecToVec3(seg[i + 1]![0], seg[i + 1]![1], SPHERE_RADIUS * 0.995);
            pts.push(a.x, a.y, a.z, b.x, b.y, b.z);
          }
        }
      }
      figureGeo.setAttribute('position', new THREE.BufferAttribute(Float32Array.from(pts), 3));
    }
    const figureMat = keep(new THREE.LineBasicMaterial({ color: 0x3f6f9e, transparent: true, opacity: 0.55 }));
    const figures = new THREE.LineSegments(figureGeo, figureMat);
    figures.frustumCulled = false;
    scene.add(figures);

    // -- coordinate grid -----------------------------------------------------
    const gridGeo = keep(new THREE.BufferGeometry());
    {
      const pts: number[] = [];
      const push = (ra1: number, dec1: number, ra2: number, dec2: number) => {
        const a = raDecToVec3(ra1, dec1, SPHERE_RADIUS * 0.99);
        const b = raDecToVec3(ra2, dec2, SPHERE_RADIUS * 0.99);
        pts.push(a.x, a.y, a.z, b.x, b.y, b.z);
      };
      for (let h = 0; h < 24; h += 2) {
        for (let d = -90; d < 90; d += 5) push(h * 15, d, h * 15, d + 5);
      }
      for (let d = -60; d <= 60; d += 30) {
        for (let r = 0; r < 360; r += 5) push(r, d, r + 5, d);
      }
      for (let r = 0; r < 360; r += 5) push(r, 0, r + 5, 0);
      gridGeo.setAttribute('position', new THREE.BufferAttribute(Float32Array.from(pts), 3));
    }
    const gridMat = keep(new THREE.LineBasicMaterial({ color: 0x24405c, transparent: true, opacity: 0.4 }));
    const grid = new THREE.LineSegments(gridGeo, gridMat);
    grid.frustumCulled = false;
    scene.add(grid);

    // -- deep sky ------------------------------------------------------------
    const dsoGeo = keep(new THREE.BufferGeometry());
    {
      const pos = new Float32Array(dsos.length * 3);
      dsos.forEach((d, i) => {
        const v = raDecToVec3(d.ra, d.dec, SPHERE_RADIUS * 0.99);
        pos[i * 3] = v.x; pos[i * 3 + 1] = v.y; pos[i * 3 + 2] = v.z;
      });
      dsoGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    }
    const dsoMat = keep(new THREE.PointsMaterial({
      color: 0x8fd6c0, size: 5, sizeAttenuation: false, transparent: true, opacity: 0.75,
    }));
    const dsoPoints = new THREE.Points(dsoGeo, dsoMat);
    dsoPoints.frustumCulled = false;
    scene.add(dsoPoints);

    // -- Sun, Moon, planets --------------------------------------------------
    const bodyGeo = keep(new THREE.BufferGeometry());
    const bodySlots = 16; // more than the ten bodies, so the buffer never resizes
    const bodyPos = new Float32Array(bodySlots * 3);
    bodyGeo.setAttribute('position', new THREE.BufferAttribute(bodyPos, 3));
    bodyGeo.setDrawRange(0, 0);
    const bodyMat = keep(new THREE.PointsMaterial({
      color: 0xffd79a, size: 11, sizeAttenuation: false, transparent: true, opacity: 0.95,
    }));
    const bodyPoints = new THREE.Points(bodyGeo, bodyMat);
    bodyPoints.frustumCulled = false;
    scene.add(bodyPoints);

    // -- the two rings -------------------------------------------------------
    const ringGeo = keep(new THREE.RingGeometry(1.6, 1.9, 48));
    const selMat = keep(new THREE.MeshBasicMaterial({ color: 0xffcf6b, side: THREE.DoubleSide, transparent: true }));
    const quizMat = keep(new THREE.MeshBasicMaterial({ color: 0xff7d6b, side: THREE.DoubleSide, transparent: true }));
    const selRing = new THREE.Mesh(ringGeo, selMat);
    const quizRing = new THREE.Mesh(ringGeo, quizMat);
    selRing.visible = false;
    quizRing.visible = false;
    scene.add(selRing, quizRing);

    const placeRing = (ring: THREE.Mesh, at: Marked | null) => {
      if (!at) { ring.visible = false; return; }
      const v = raDecToVec3(at.ra, at.dec, SPHERE_RADIUS * 0.96);
      ring.position.set(v.x, v.y, v.z);
      ring.lookAt(0, 0, 0);
      // Constant apparent size: the ring is a marker, not an object with a
      // physical extent, and one that shrank on zoom-in would vanish exactly
      // when it is being used.
      const s = (lookRef.current.fov / 60) * 1.6;
      ring.scale.setScalar(s);
      ring.visible = true;
    };

    // -- the loop ------------------------------------------------------------
    let frame = 0;
    const draw = () => {
      frame = requestAnimationFrame(draw);
      const { width, height } = canvasBox.current;
      const l = lookRef.current;
      const ly = layersRef.current;

      camera.fov = clampFov(l.fov);
      camera.aspect = width / Math.max(1, height);
      camera.updateProjectionMatrix();
      const target = raDecToVec3(l.ra, l.dec);
      camera.lookAt(target.x, target.y, target.z);
      camera.updateMatrixWorld();
      matrix.current.multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse);

      // Zoomed in, a star should get bigger: the same angular star covers more
      // pixels. Tied to the fov so the sky does not turn to mush at wide angles.
      starMat.uniforms.uScale!.value = Math.min(3.2, Math.max(0.55, 26 / l.fov));
      starMat.uniforms.uMagLimit!.value = ly.magLimit;

      const bods = bodiesRef.current;
      const shown = Math.min(bodySlots, bods.length);
      for (let i = 0; i < shown; i++) {
        const v = raDecToVec3(bods[i]!.ra, bods[i]!.dec, SPHERE_RADIUS * 0.98);
        bodyPos[i * 3] = v.x; bodyPos[i * 3 + 1] = v.y; bodyPos[i * 3 + 2] = v.z;
      }
      bodyGeo.setDrawRange(0, shown);
      bodyGeo.attributes.position!.needsUpdate = true;

      figures.visible = ly.figures;
      grid.visible = ly.grid;
      dsoPoints.visible = ly.deepSky;
      bodyPoints.visible = ly.planets && shown > 0;

      placeRing(selRing, selectedRef.current);
      placeRing(quizRing, quizRef.current);

      renderer.render(scene, camera);
      updateLabels();
    };

    // -- labels --------------------------------------------------------------
    /**
     * Which names to print, recomputed every frame from what is actually on
     * screen.
     *
     * 🚨 A BUDGET PER KIND, not one shared cap. The first version spent a
     * single budget of 42 in source order, and star names — of which a wide
     * field has dozens — took all of it: three constellation names were drawn
     * out of the twenty on screen, and turning the layer off changed almost
     * nothing. A layer switch whose effect depends on how many labels some
     * OTHER layer wanted is a switch nobody can reason about.
     *
     * Bodies get no budget at all: there are ten of them and they are the whole
     * reason someone opened the time controls.
     */
    const BUDGET = { star: 26, constellation: 24, dso: 14 } as const;
    /**
     * Overlapping text is not merely untidy here: two names printed across each
     * other read as one wrong name for one object, which is the same class of
     * lie as a fabricated value. "MahasimAURIGA" was on screen before this.
     *
     * The box is ESTIMATED from the character count and the anchor, because
     * measuring for real means a layout read per label per frame. It is
     * deliberately generous: dropping a label that would have fitted costs a
     * name, printing one that does not costs a false one.
     */
    const CHAR_PX = 5.6;
    const LINE_PX = 13;
    const box = (l: Label) => {
      const w = l.text.length * CHAR_PX + 10;
      // Star, deep-sky and body labels sit to the RIGHT of their point;
      // constellation names are centred on theirs. Two different anchors, so
      // two different boxes — assuming one shape shifts half of them sideways
      // and the collision test then guards the wrong rectangles.
      const left = l.kind === 'constellation' ? l.x - w / 2 : l.x + 6;
      return { left, right: left + w, top: l.y - LINE_PX / 2, bottom: l.y + LINE_PX / 2 };
    };
    let lastKey = '';
    const updateLabels = () => {
      const { width, height } = canvasBox.current;
      const ly = layersRef.current;
      const m = matrix.current.elements;
      const out: Label[] = [];

      const place = (ra: number, dec: number) => {
        const p = projectPoint(m, raDecToVec3(ra, dec));
        if (!p.visible) return null;
        return { x: ((p.x + 1) / 2) * width, y: ((1 - p.y) / 2) * height };
      };

      /** Places a label unless something is already printed over that space. */
      const placed: ReturnType<typeof box>[] = [];
      const add = (label: Label): boolean => {
        const b = box(label);
        for (const o of placed) {
          if (b.left < o.right && b.right > o.left && b.top < o.bottom && b.bottom > o.top) return false;
        }
        placed.push(b);
        out.push(label);
        return true;
      };

      // Bodies go FIRST so they win every collision. The Moon beside a
      // 4th-magnitude star is the object being looked at.
      if (ly.planets) {
        for (const b of bodiesRef.current) {
          const at = place(b.ra, b.dec);
          if (at) add({ key: `b${b.body}`, text: bodyLabel(b.body), ...at, kind: 'body' });
        }
      }
      // Constellation names are placed BEFORE star names, and the order is the
      // whole of the layering policy: when AURIGA and Mahasim want the same
      // pixels, the constellation wins. It is what someone reads to find out
      // where they are looking; one more 3rd-magnitude star name is not.
      if (ly.constellationNames) {
        let n = 0;
        for (const c of constellations) {
          if (n >= BUDGET.constellation) break;
          if (!c.label) continue;
          const at = place(c.label[0], c.label[1]);
          if (at && add({ key: `c${c.id}`, text: constellationLabel(c), ...at, kind: 'constellation' })) n++;
        }
      }
      // The answered quiz subject, ahead of every budget for the reason above.
      const q = quizRef.current;
      if (q?.label) {
        const at = place(q.ra, q.dec);
        if (at) add({ key: 'quiz', text: q.label, ...at, kind: 'body' });
      }
      if (ly.starNames) {
        // Brightest first, and `stars` is already sorted that way by the build
        // script — so this takes the brightest that are on screen, not the
        // first the array happens to hold.
        let n = 0;
        for (const s of stars) {
          if (n >= BUDGET.star) break;
          if (!s.proper || s.mag > Math.min(ly.magLimit, 3.6)) continue;
          if (hiddenRef.current && starKey(s) === hiddenRef.current) continue;
          const at = place(s.ra, s.dec);
          if (at && add({ key: `s${s.i}`, text: s.proper, ...at, kind: 'star' })) n++;
        }
      }
      if (ly.deepSky) {
        let n = 0;
        for (const d of dsos) {
          if (n >= BUDGET.dso) break;
          if (!d.messier && !d.common) continue;
          if (hiddenRef.current && dsoKey(d) === hiddenRef.current) continue;
          const at = place(d.ra, d.dec);
          if (at && add({ key: `d${d.i}`, text: d.messier ? `M${d.messier}` : d.common, ...at, kind: 'dso' })) n++;
        }
      }

      // React state every frame would be 60 re-renders a second of a list that
      // usually has not changed. Only push when the printed result differs.
      const key = out.map((l) => `${l.key}:${l.x | 0}:${l.y | 0}`).join('|');
      if (key !== lastKey) { lastKey = key; setLabels(out); }
    };

    // -- size ----------------------------------------------------------------
    const resize = () => {
      const rect = mount.getBoundingClientRect();
      const width = Math.max(1, Math.round(rect.width));
      const height = Math.max(1, Math.round(rect.height));
      canvasBox.current = { width, height };
      renderer.setSize(width, height, false);
    };
    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(mount);

    frame = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      for (const d of disposables) d.dispose();
      renderer.dispose();
      // forceContextLoss releases the GPU context immediately. Without it the
      // browser keeps it until GC, and a cartridge reopened a few times runs
      // into the per-page context limit and renders nothing, with no error.
      renderer.forceContextLoss();
      mount.removeChild(renderer.domElement);
    };
    // Rebuilt only when the DATA changes. Look, layers and selection all travel
    // through refs, so panning does not tear down 8 920 stars.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stars, dsos, constellations]);

  // ── pointer ────────────────────────────────────────────────────────────────
  const dragState = useRef<{ x: number; y: number; moved: number; id: number } | null>(null);

  const onPointerDown = (e: React.PointerEvent) => {
    (e.target as Element).setPointerCapture?.(e.pointerId);
    dragState.current = { x: e.clientX, y: e.clientY, moved: 0, id: e.pointerId };
  };

  const onPointerMove = (e: React.PointerEvent) => {
    const d = dragState.current;
    if (!d) return;
    const dx = e.clientX - d.x;
    const dy = e.clientY - d.y;
    d.moved += Math.abs(dx) + Math.abs(dy);
    d.x = e.clientX;
    d.y = e.clientY;
    onLookRef.current(drag(lookRef.current, dx, dy, canvasBox.current.height));
  };

  const onPointerUp = (e: React.PointerEvent) => {
    const d = dragState.current;
    dragState.current = null;
    if (!d) return;
    // A pan that happens to end near where it started is still a pan. Without
    // the slop, every drag selects whatever was under the finger at the end.
    if (d.moved > CLICK_SLOP) return;

    pickAt(e.clientX, e.clientY, (e.currentTarget as HTMLElement).getBoundingClientRect());
  };

  // One picking path for a click and for a hand's « select », so the two can
  // never disagree on which object is under the point.
  const pickAt = (clientX: number, clientY: number, rect: DOMRect) => {
    if (!rect.width || !rect.height) return;
    const pointer = {
      x: ((clientX - rect.left) / rect.width) * 2 - 1,
      y: -(((clientY - rect.top) / rect.height) * 2 - 1),
    };
    const ly = layersRef.current;
    const candidates = pickablesRef.current.filter((p) => {
      if (p.kind === 'body') return ly.planets;
      if (p.kind === 'dso') return ly.deepSky;
      return stars[p.index]!.mag <= ly.magLimit;
    });
    const hit = pick(candidates, matrix.current.elements, pointer, canvasBox.current);
    const chosen = hit ? candidates[hit.index]! : null;
    onPickRef.current(chosen ? { kind: chosen.kind, index: chosen.index } : null);
  };

  const pickAtRef = useRef(pickAt);
  pickAtRef.current = pickAt;
  const onRecenterRef = useRef(onRecenter);
  onRecenterRef.current = onRecenter;

  // The hand (doc 106 §32): the host sends these only while Cosmos is the
  // full-screen window. A slide is the mouse drag, a zoom narrows the field,
  // at the speeds the person chose in the gesture panel.
  useEffect(() => listenToGestures({
    pan: ({ dx, dy }) => {
      const next = slideLook(lookRef.current, dx, dy, canvasBox.current.height, getSpeeds().move);
      if (next) onLookRef.current(next);
    },
    depth: ({ factor }) => {
      const next = zoomLook(lookRef.current, factor, getSpeeds().zoom);
      if (next) onLookRef.current(next);
    },
    zoom: ({ factor }) => {
      const next = zoomLook(lookRef.current, factor, getSpeeds().zoom);
      if (next) onLookRef.current(next);
    },
    recenter: () => onRecenterRef.current?.(),
    select: ({ x, y }) => {
      const el = host.current;
      if (el) pickAtRef.current(x, y, el.getBoundingClientRect());
    },
  }), []);

  const onWheel = (e: React.WheelEvent) => {
    onLookRef.current(zoom(lookRef.current, e.deltaY > 0 ? 1 : -1));
  };

  return (
    <div className="sky-canvas">
      <div
        ref={host}
        className="sky-gl"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={() => { dragState.current = null; }}
        onWheel={onWheel}
      />
      <div className="sky-labels" aria-hidden="false">
        {labels.map((l) => (
          <span
            key={l.key}
            className={`sky-label sky-label-${l.kind}`}
            style={{ left: `${l.x}px`, top: `${l.y}px` }}
          >
            {l.text}
          </span>
        ))}
      </div>
    </div>
  );
}

export default SkyCanvas;
