/**
 * skySearch.ts — the search panel's one search, shared with the agent (doc 149) so both find
 * the same objects in the same order.
 *
 * Sun, Moon and planets come FIRST: someone typing "Jupiter" into a sky atlas means the planet,
 * and they are drawn right there. Stars are brightest-first from the build script, so the first
 * twenty hits are the twenty most prominent ones, not the first twenty rows.
 */
import type { Catalog } from './catalog';
import { dsoToSkyObject, toSkyObject, type SkyObject } from './identity';

/** Shorter than this is not a query yet: one letter matches half the sky. */
export const MIN_QUERY = 2;
/** The panel's ceilings: stars stop at this many results, deep-sky objects at the second. */
export const STAR_CAP = 20;
export const TOTAL_CAP = 40;

/** Objects whose name, key or any alias contains `query`, bodies first. */
export function searchSky(catalog: Catalog, bodies: readonly SkyObject[], query: string): SkyObject[] {
  const q = query.trim().toLowerCase();
  if (q.length < MIN_QUERY) return [];
  const out: SkyObject[] = [];
  const matches = (o: SkyObject) =>
    o.name.toLowerCase().includes(q)
    || o.id.toLowerCase().includes(q)
    || o.aliases.some((a) => a.toLowerCase().includes(q));
  for (const o of bodies) if (matches(o)) out.push(o);
  for (const s of catalog.stars) {
    if (out.length >= STAR_CAP) break;
    const o = toSkyObject(s);
    if (matches(o)) out.push(o);
  }
  for (const d of catalog.dsos) {
    if (out.length >= TOTAL_CAP) break;
    const o = dsoToSkyObject(d);
    if (matches(o)) out.push(o);
  }
  return out;
}
