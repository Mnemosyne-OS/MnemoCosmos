/**
 * sky.ts — where things go on screen, and which one the pointer is on.
 *
 * Pure. No three.js, no React, no clock: every function takes what it needs and
 * returns a value, so the rules below are tested against numbers instead of
 * against a canvas nobody can assert on.
 *
 * Two decisions worth knowing before reading the code.
 *
 * 1. THIS IS A CELESTIAL SPHERE, NOT A 3D UNIVERSE. Every object is placed on a
 *    sphere of one fixed radius, by direction only. That is not a simplification
 *    of a better thing that was too hard — it is what the data supports: 206 of
 *    the 8 920 shipped stars have no distance at all, and among those that do,
 *    the range is four orders of magnitude. A "3D" star field would have to put
 *    the 206 SOMEWHERE, and wherever it put them would be a claim nobody
 *    measured. The screen names the sphere, so what is being looked at is not
 *    left to be guessed.
 *
 * 2. PICKING IS DONE BY PROJECTION, NOT BY A RAY. A raycaster against a Points
 *    cloud takes a threshold in world units, which means the click radius grows
 *    and shrinks with the zoom and has to be re-tuned forever. Projecting every
 *    object and taking the nearest within a pixel budget is the thing actually
 *    wanted — "what did they click on the screen" — and 12 000 projections is
 *    under a millisecond.
 */

export const DEG = Math.PI / 180;

/** Radius of the celestial sphere in scene units. Nothing depends on the value. */
export const SPHERE_RADIUS = 100;

export interface Vec3 { x: number; y: number; z: number }

/**
 * Right ascension and declination to a point on the sphere.
 *
 * The camera sits at the origin looking OUT, which is where an observer
 * actually is, so the sky is painted on the inside of the sphere.
 */
export function raDecToVec3(raDeg: number, decDeg: number, radius = SPHERE_RADIUS): Vec3 {
  const ra = raDeg * DEG;
  const dec = decDeg * DEG;
  const cd = Math.cos(dec);
  return {
    x: radius * cd * Math.cos(ra),
    y: radius * Math.sin(dec),
    z: -radius * cd * Math.sin(ra),
  };
}

/** The inverse, for turning a look direction back into coordinates. */
export function vec3ToRaDec(v: Vec3): { ra: number; dec: number } {
  const r = Math.hypot(v.x, v.y, v.z);
  if (!r) return { ra: 0, dec: 0 };
  const dec = Math.asin(v.y / r) / DEG;
  let ra = Math.atan2(-v.z, v.x) / DEG;
  if (ra < 0) ra += 360;
  return { ra, dec };
}

/**
 * Angular separation in degrees. Used to find what is near a point, and by the
 * quiz to keep a question's options from being the same object twice.
 */
export function angularSeparation(
  ra1: number, dec1: number, ra2: number, dec2: number,
): number {
  const a = raDecToVec3(ra1, dec1, 1);
  const b = raDecToVec3(ra2, dec2, 1);
  const dot = Math.min(1, Math.max(-1, a.x * b.x + a.y * b.y + a.z * b.z));
  return Math.acos(dot) / DEG;
}

/**
 * How big a star is drawn, from how bright it looks.
 *
 * Magnitude is logarithmic and inverted — smaller is brighter, and Sirius at
 * -1.44 is about 250 times brighter than a magnitude 6 star. Mapped linearly
 * the whole sky is one size; mapped by true flux, Sirius is a disc and
 * everything else is invisible. This is the usual compromise and it is a
 * DRAWING decision, not a measurement: the object card states the magnitude,
 * and no reading should be taken off the dot.
 */
export function starSize(mag: number, limit: number, scale = 1): number {
  const clamped = Math.min(limit, mag);
  // 1.0 at the faint limit, growing towards the bright end.
  const t = (limit - clamped) / (limit + 2);
  return scale * (0.9 + 7 * t * t);
}

/**
 * Star colour from the B-V colour index.
 *
 * Returns null when the catalogue has no colour index, and the caller paints it
 * neutral: 206 stars here have no measured colour, and giving them a plausible
 * yellow would be inventing an observation. Coefficients are a common cubic fit
 * from B-V to sRGB; it is an approximation of appearance and is documented as
 * one rather than dressed up as a temperature.
 */
export function colourFromCi(ci: number | null): [number, number, number] | null {
  if (ci === null || !Number.isFinite(ci)) return null;
  const t = Math.min(2.0, Math.max(-0.4, ci));
  const r = Math.min(1, Math.max(0, 0.63 + 0.55 * t - 0.09 * t * t));
  const g = Math.min(1, Math.max(0, 0.83 - 0.03 * t - 0.10 * t * t));
  const b = Math.min(1, Math.max(0, 1.0 - 0.55 * t + 0.06 * t * t));
  return [r, g, b];
}

// -- picking ----------------------------------------------------------------

export interface Projected {
  /** Normalised device coordinates, both in [-1,1] when on screen. */
  x: number;
  y: number;
  /** True when the point is in front of the camera AND inside the frustum. */
  visible: boolean;
}

/**
 * Projects a world point through a 4x4 view-projection matrix in COLUMN-MAJOR
 * order, which is what three.js `Matrix4.elements` holds.
 *
 * A point behind the camera has negative w and, divided through, lands
 * somewhere plausible on screen — mirrored. Reporting it as visible is how a
 * click on empty sky selects a star that is behind your head.
 */
export function projectPoint(m: ArrayLike<number>, v: Vec3): Projected {
  const x = m[0]! * v.x + m[4]! * v.y + m[8]! * v.z + m[12]!;
  const y = m[1]! * v.x + m[5]! * v.y + m[9]! * v.z + m[13]!;
  const w = m[3]! * v.x + m[7]! * v.y + m[11]! * v.z + m[15]!;
  if (w <= 0) return { x: 0, y: 0, visible: false };
  const nx = x / w;
  const ny = y / w;
  return { x: nx, y: ny, visible: nx >= -1 && nx <= 1 && ny >= -1 && ny <= 1 };
}

export interface Pickable {
  ra: number;
  dec: number;
  /** Lower sorts first when two candidates are the same distance from the
   *  pointer. Apparent magnitude does the job: a click between Sirius and a
   *  6th-magnitude neighbour should land on Sirius. */
  rank: number;
}

export interface PickResult {
  index: number;
  /** Distance from the pointer, in pixels. */
  distance: number;
}

/**
 * The object under the pointer, or null.
 *
 * `radiusPx` is a budget in real pixels, so the click target is the same size
 * whatever the zoom — which is the thing a raycaster threshold cannot give.
 */
export function pick(
  items: readonly Pickable[],
  matrix: ArrayLike<number>,
  pointer: { x: number; y: number },
  size: { width: number; height: number },
  radiusPx = 14,
): PickResult | null {
  let best: PickResult | null = null;
  let bestRank = Infinity;
  for (let i = 0; i < items.length; i++) {
    const it = items[i]!;
    const p = projectPoint(matrix, raDecToVec3(it.ra, it.dec));
    if (!p.visible) continue;
    const dx = ((p.x - pointer.x) * size.width) / 2;
    const dy = ((p.y - pointer.y) * size.height) / 2;
    const d = Math.hypot(dx, dy);
    if (d > radiusPx) continue;
    // Nearest wins; a tie goes to the brighter object. Without the rank tie-break
    // the winner is whichever happens to come first in the array, which is a
    // decision made by the build script's sort order and not by anything the
    // person clicking can see.
    if (!best || d < best.distance - 0.5 || (Math.abs(d - best.distance) <= 0.5 && it.rank < bestRank)) {
      best = { index: i, distance: d };
      bestRank = it.rank;
    }
  }
  return best;
}

// -- looking around ---------------------------------------------------------

export interface Look {
  /** Right ascension the camera points at, degrees [0,360). */
  ra: number;
  /** Declination the camera points at, degrees, clamped to [-90,90]. */
  dec: number;
  /** Vertical field of view in degrees. */
  fov: number;
}

export const MIN_FOV = 2;
export const MAX_FOV = 110;

export const clampFov = (fov: number): number => Math.min(MAX_FOV, Math.max(MIN_FOV, fov));

/**
 * Moves the look direction by a drag, in pixels.
 *
 * Declination is CLAMPED, not wrapped. Wrapping past the pole flips the horizon
 * and the sky spins the wrong way for the rest of the gesture, which reads as
 * the view breaking. Right ascension wraps, because it genuinely does.
 *
 * The drag scales with the field of view, so a small movement at high zoom
 * moves a small angle — otherwise a zoomed-in view is unusable.
 */
export function drag(look: Look, dxPx: number, dyPx: number, heightPx: number): Look {
  const perPixel = look.fov / Math.max(1, heightPx);
  const ra = look.ra - dxPx * perPixel / Math.max(0.2, Math.cos(look.dec * DEG));
  const dec = look.dec + dyPx * perPixel;
  return {
    ra: ((ra % 360) + 360) % 360,
    dec: Math.min(90, Math.max(-90, dec)),
    fov: look.fov,
  };
}

/** A wheel notch, as a multiplicative zoom. Clamped at both ends. */
export function zoom(look: Look, notches: number): Look {
  return { ...look, fov: clampFov(look.fov * Math.pow(1.15, notches)) };
}

/** Points the camera at an object without changing the zoom. */
export const lookAt = (look: Look, ra: number, dec: number): Look =>
  ({ ...look, ra: ((ra % 360) + 360) % 360, dec: Math.min(90, Math.max(-90, dec)) });

// -- formatting -------------------------------------------------------------

/** Right ascension as hours, minutes and seconds, the way charts print it. */
export function formatRa(deg: number): string {
  // Rounded ONCE, in tenths of a second, then split: rounding the last field
  // alone printed « 32m 60.0s » for 108 real objects (no carry into the minute).
  const tenths = Math.round(((((deg % 360) + 360) % 360) / 15) * 36000) % (24 * 36000);
  const h = Math.floor(tenths / 36000);
  const m = Math.floor((tenths % 36000) / 600);
  const s = (tenths % 600) / 10;
  return `${h}h ${String(m).padStart(2, '0')}m ${s.toFixed(1).padStart(4, '0')}s`;
}

/** Declination as signed degrees, arcminutes and arcseconds. */
export function formatDec(deg: number): string {
  const sign = deg < 0 ? '-' : '+';
  // Same rule as formatRa: whole arcseconds first, then split (« 37′ 60″ » was Muliphein).
  const total = Math.round(Math.abs(deg) * 3600);
  const d = Math.floor(total / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = total % 60;
  return `${sign}${d}° ${String(m).padStart(2, '0')}′ ${String(s).padStart(2, '0')}″`;
}

/**
 * A distance in parsecs, as light years, or the em dash.
 *
 * `null` in means the parallax gave nothing, and it must come out as a dash and
 * not as a number. This is the single most load-bearing formatter in the app:
 * it is the last place an unmeasured distance could turn into a printed one.
 */
export function formatDistance(parsecs: number | null): string | null {
  if (parsecs === null || !Number.isFinite(parsecs) || parsecs <= 0) return null;
  const ly = parsecs * 3.261563777;
  if (ly < 10) return `${ly.toFixed(2)} ly`;
  if (ly < 1000) return `${ly.toFixed(0)} ly`;
  return `${Math.round(ly / 100) / 10} kly`;
}
