/**
 * The geometry, the picker and the formatters — the three places where a sky
 * viewer can be confidently wrong without looking wrong.
 */
import { describe, expect, it } from 'vitest';
import * as THREE from 'three';
import {
  angularSeparation, clampFov, colourFromCi, drag, formatDec, formatDistance,
  formatRa, lookAt, MAX_FOV, MIN_FOV, pick, projectPoint, raDecToVec3,
  SPHERE_RADIUS, starSize, vec3ToRaDec, zoom, type Look,
} from './sky';

describe('coordinates', () => {
  it('round-trips right ascension and declination through the sphere', () => {
    for (const [ra, dec] of [[0, 0], [90, 45], [180, -30], [270, 80], [359.9, -89]] as const) {
      const back = vec3ToRaDec(raDecToVec3(ra, dec));
      expect(back.ra).toBeCloseTo(ra, 5);
      expect(back.dec).toBeCloseTo(dec, 5);
    }
  });

  it('puts the celestial pole on the axis, not somewhere near it', () => {
    const north = raDecToVec3(123, 90);
    expect(north.y).toBeCloseTo(SPHERE_RADIUS, 6);
    expect(Math.hypot(north.x, north.z)).toBeLessThan(1e-6);
  });

  it('measures the angle between two directions', () => {
    expect(angularSeparation(0, 0, 90, 0)).toBeCloseTo(90, 6);
    expect(angularSeparation(0, 0, 0, 0)).toBeCloseTo(0, 6);
    expect(angularSeparation(0, -90, 0, 90)).toBeCloseTo(180, 6);
    // Sirius to Betelgeuse, roughly 27 degrees on the real sky.
    expect(angularSeparation(101.287, -16.716, 88.793, 7.407)).toBeCloseTo(27.1, 0);
  });
});

describe('what a star looks like', () => {
  it('draws a bright star bigger than a faint one', () => {
    expect(starSize(-1.44, 6.5)).toBeGreaterThan(starSize(2, 6.5));
    expect(starSize(2, 6.5)).toBeGreaterThan(starSize(6.4, 6.5));
  });

  it('never returns zero or a negative radius, however faint', () => {
    // A zero-size point is an invisible star that is still clickable, which is
    // worse than a small visible one.
    expect(starSize(6.5, 6.5)).toBeGreaterThan(0);
    expect(starSize(30, 6.5)).toBeGreaterThan(0);
  });

  it('gives no colour at all to a star with no measured colour index', () => {
    // 206 of the shipped stars are in this state. A plausible yellow would be
    // an observation nobody made, rendered identically to ones that were.
    expect(colourFromCi(null)).toBeNull();
    expect(colourFromCi(NaN)).toBeNull();
  });

  it('makes a blue star bluer than a red one', () => {
    const blue = colourFromCi(-0.3)!;
    const red = colourFromCi(1.8)!;
    expect(blue[2]).toBeGreaterThan(blue[0]);
    expect(red[0]).toBeGreaterThan(red[2]);
  });

  it('keeps every channel inside the range a renderer accepts', () => {
    for (let ci = -0.5; ci <= 2.5; ci += 0.1) {
      for (const c of colourFromCi(ci)!) {
        expect(c).toBeGreaterThanOrEqual(0);
        expect(c).toBeLessThanOrEqual(1);
      }
    }
  });
});

// A real three.js camera, so the projection is tested against the matrix layout
// the app actually feeds it rather than against my belief about that layout.
function cameraMatrix(ra: number, dec: number, fov: number, aspect = 1.6): Float32Array {
  const cam = new THREE.PerspectiveCamera(fov, aspect, 0.1, SPHERE_RADIUS * 4);
  cam.position.set(0, 0, 0);
  const at = raDecToVec3(ra, dec);
  cam.lookAt(at.x, at.y, at.z);
  cam.updateMatrixWorld();
  const m = new THREE.Matrix4().multiplyMatrices(cam.projectionMatrix, cam.matrixWorldInverse);
  return Float32Array.from(m.elements);
}

describe('projection', () => {
  it('puts what the camera is aimed at in the middle of the screen', () => {
    const m = cameraMatrix(80, 12, 60);
    const p = projectPoint(m, raDecToVec3(80, 12));
    expect(p.visible).toBe(true);
    expect(p.x).toBeCloseTo(0, 5);
    expect(p.y).toBeCloseTo(0, 5);
  });

  it('refuses a point behind the camera instead of mirroring it onto the screen', () => {
    // This is the failure that makes a click on empty sky select a star behind
    // your head: divide by a negative w and the result lands somewhere entirely
    // plausible.
    const m = cameraMatrix(0, 0, 60);
    expect(projectPoint(m, raDecToVec3(180, 0)).visible).toBe(false);
  });

  it('refuses a point outside the frustum, not merely behind it', () => {
    const m = cameraMatrix(0, 0, 20);
    expect(projectPoint(m, raDecToVec3(40, 0)).visible).toBe(false);
  });
});

describe('picking', () => {
  const size = { width: 1000, height: 600 };
  const centre = { x: 0, y: 0 };

  it('finds the object the pointer is on', () => {
    const m = cameraMatrix(80, 12, 60);
    const hit = pick([{ ra: 80, dec: 12, rank: 1 }], m, centre, size);
    expect(hit?.index).toBe(0);
    expect(hit?.distance).toBeCloseTo(0, 3);
  });

  it('returns nothing when the pointer is on empty sky', () => {
    const m = cameraMatrix(80, 12, 60);
    expect(pick([{ ra: 130, dec: 40, rank: 1 }], m, centre, size)).toBeNull();
  });

  it('prefers the brighter object when two are the same distance away', () => {
    // Without the rank tie-break the winner is whichever the build script's
    // sort happened to put first — a decision nobody clicking can see.
    const m = cameraMatrix(80, 12, 60);
    const faintFirst = pick(
      [{ ra: 80, dec: 12, rank: 6 }, { ra: 80, dec: 12, rank: -1 }], m, centre, size,
    );
    expect(faintFirst?.index).toBe(1);
  });

  it('keeps the same click target in pixels whatever the zoom', () => {
    // The whole reason this is not a raycaster: the budget is 14 SCREEN pixels
    // at every zoom, so what you can hit is what you can see under the cursor.
    // The same angular offset therefore falls in or out depending on the field
    // of view, and that is the correct behaviour, not a bug — zoomed in, two
    // objects a third of a degree apart are 37 px apart and are separately
    // clickable; zoomed out they are 2 px apart and the nearer one wins.
    const wide = cameraMatrix(80, 12, 90);
    const tight = cameraMatrix(80, 12, 5);
    const near = [{ ra: 80.3, dec: 12, rank: 1 }];
    expect(pick(near, wide, centre, size)).not.toBeNull();
    expect(pick(near, tight, centre, size)).toBeNull();

    // And the budget itself is honoured: a world-unit threshold would make this
    // pair of assertions impossible to satisfy at both zooms at once.
    const under = pick([{ ra: 80.02, dec: 12, rank: 1 }], tight, centre, size);
    expect(under).not.toBeNull();
    expect(under!.distance).toBeLessThanOrEqual(14);
  });

  it('ignores an object behind the camera even when it projects onto the pointer', () => {
    const m = cameraMatrix(0, 0, 60);
    expect(pick([{ ra: 180, dec: 0, rank: 1 }], m, centre, size)).toBeNull();
  });
});

describe('looking around', () => {
  const base: Look = { ra: 100, dec: 0, fov: 60 };

  it('wraps right ascension, because right ascension wraps', () => {
    expect(drag({ ...base, ra: 1 }, 600, 0, 600).ra).toBeGreaterThan(300);
    expect(drag({ ...base, ra: 359 }, -600, 0, 600).ra).toBeLessThan(60);
  });

  it('CLAMPS declination instead of wrapping over the pole', () => {
    // Wrapping past the pole flips the horizon and the sky spins the wrong way
    // for the rest of the gesture, which reads as the view breaking.
    expect(drag({ ...base, dec: 80 }, 0, 10000, 600).dec).toBe(90);
    expect(drag({ ...base, dec: -80 }, 0, -10000, 600).dec).toBe(-90);
  });

  it('moves less per pixel when zoomed in', () => {
    const wide = drag({ ...base, fov: 90 }, 100, 0, 600);
    const tight = drag({ ...base, fov: 5 }, 100, 0, 600);
    expect(Math.abs(wide.ra - base.ra)).toBeGreaterThan(Math.abs(tight.ra - base.ra));
  });

  it('does not let the field of view leave the range the camera can render', () => {
    let l = base;
    for (let i = 0; i < 200; i++) l = zoom(l, -1);
    expect(l.fov).toBe(MIN_FOV);
    for (let i = 0; i < 400; i++) l = zoom(l, 1);
    expect(l.fov).toBe(MAX_FOV);
    expect(clampFov(0)).toBe(MIN_FOV);
    expect(clampFov(1000)).toBe(MAX_FOV);
  });

  it('keeps the zoom when centring on an object', () => {
    // Centring is "point at this", not "and also reframe": a person who has set
    // a 5-degree field to inspect something does not want it thrown away.
    const l = lookAt({ ...base, fov: 7 }, 200, 30);
    expect(l.fov).toBe(7);
    expect(l.ra).toBe(200);
    expect(l.dec).toBe(30);
  });
});

describe('formatting', () => {
  it('prints right ascension the way a chart does', () => {
    // Sirius: 6h 45m 08.9s.
    expect(formatRa(101.28715)).toBe('6h 45m 08.9s');
    expect(formatRa(0)).toBe('0h 00m 00.0s');
  });

  it('prints declination with a sign, always', () => {
    expect(formatDec(-16.716116)).toBe('-16° 42′ 58″');
    // A positive declination without its '+' reads as a number someone forgot
    // to sign, which is exactly the doubt a coordinate must not raise.
    expect(formatDec(41.269)).toBe('+41° 16′ 08″');
  });

  it('returns null for an unknown distance, and never a number', () => {
    // The single most load-bearing formatter here: the last place an unmeasured
    // distance could turn into a printed one.
    expect(formatDistance(null)).toBeNull();
    expect(formatDistance(NaN)).toBeNull();
    expect(formatDistance(0)).toBeNull();
    expect(formatDistance(-4)).toBeNull();
  });

  it('converts parsecs to light years', () => {
    expect(formatDistance(2.6371)).toBe('8.60 ly');
    expect(formatDistance(100)).toBe('326 ly');
    expect(formatDistance(800)).toBe('2.6 kly');
  });
});
