/**
 * placeStore.ts — where the human's declared observing place is kept between sessions. One
 * writer for the place form and the agent (doc 149), so both persist it the same way.
 */
import type { Place } from './solar';

export const PLACE_KEY = 'mnemo-cosmos.place';

/**
 * Keeps the place (or forgets it, for null). Answers whether it was kept: a private window or
 * storage that throws leaves the place working for this session only, and that is said.
 */
export function storePlace(place: Place | null): boolean {
  try {
    if (place) localStorage.setItem(PLACE_KEY, JSON.stringify(place));
    else localStorage.removeItem(PLACE_KEY);
    return true;
  } catch (err) {
    console.warn('[cosmos] place not stored:', err);
    return false;
  }
}
