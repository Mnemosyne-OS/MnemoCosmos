/**
 * moves — a hand step turned into a new look at the sky (doc 106 §32).
 *
 * The sky already knows how to move for a mouse (`drag`, `zoom` in sky.ts);
 * the hand reuses `drag` as it is, and zooms by the hand's own factor.
 */
import { clampFov, drag, type Look } from '../cosmos/sky';

/** The look after a hand slide of (dx, dy) px, at the chosen speed. */
export function slideLook(look: Look, dx: number, dy: number, heightPx: number, speed = 1): Look | null {
  if (![dx, dy, heightPx, speed].every(Number.isFinite) || heightPx <= 0 || speed <= 0) return null;
  return drag(look, dx * speed, dy * speed, heightPx);
}

/** The look after a hand zoom (> 1 = closer): the field of view narrows. */
export function zoomLook(look: Look, factor: number, speed = 1): Look | null {
  if (!Number.isFinite(factor) || factor <= 0 || !Number.isFinite(speed) || speed <= 0) return null;
  return { ...look, fov: clampFov(look.fov / Math.pow(factor, speed)) };
}
