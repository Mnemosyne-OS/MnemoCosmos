/**
 * cosmosAgent.ts — what an agent may do in Cosmos (doc 149), as plain functions over the page's
 * own state and its own moves. Declared in `mnemo-plugin.json` › agentActions, served by
 * `CosmosAgentActions` while the window is open.
 *
 * 🚨 Every move is the one the person's own control makes: an object goes through `goTo` (a
 * search result: the card opens and the sky turns to it), the search through `searchSky` (the
 * search panel's own), a time through `setWhen` (the time buttons), a place through `readPlace`
 * and `storePlace` (the place form), layers and zoom through the controls panel's setters.
 *
 * 🚨 During a review the sky is the question: opening an object's card would show its name, the
 * answer. Picking an object is refused while a review is open, as a click on the sky is.
 *
 * ⛔ The memory card (`CosmosMemory`) is not exposed: asking it runs a model.
 *
 * 🚨 By voice (doc 149 §19) the orb plans the sentence without reading Cosmos first: an object or a
 * constellation is taken by the words a person says (« la planète Mars », « la Grande Ourse »,
 * « nébuleuse d'Orion »), in English, French or Spanish, and a key still works. Several matches
 * are refused AMBIGUOUS with their keys, never the first one taken.
 *
 * Refusals throw `CODE: reason`, and an unknown name says how to name the right ones.
 */
import type { Catalog, Constellation } from './catalog';
import { dsoToSkyObject, toSkyObject, type SkyObject } from './identity';
import { findNamed, fold, listed, nameWords, type Named } from './agentFind';
import { translate, type Key } from '../i18n/strings';
import { MAX_FOV, MIN_FOV, lookAt, type Look } from './sky';
import { readPlace, type Place } from './solar';
import { storePlace } from './placeStore';
import type { SkyLayers } from './SkyCanvas';
import { MIN_QUERY, TOTAL_CAP, searchSky } from './skySearch';

/** The page's state and its own moves, read fresh at every call. */
export interface CosmosAgentContext {
  catalog: Catalog;
  /** Sun, Moon and planets as the search sees them right now (none when the planets layer is off). */
  bodies: readonly SkyObject[];
  look: Look;
  setLook: (l: Look) => void;
  defaultLook: Look;
  layers: SkyLayers;
  setLayers: (l: SkyLayers) => void;
  when: Date;
  setWhen: (d: Date) => void;
  place: Place | null;
  setPlace: (p: Place | null) => void;
  selected: SkyObject | null;
  reviewing: boolean;
  goTo: (o: SkyObject) => void;
  constellations: readonly Constellation[];
  /** Which panel of the top bar is open: the page's own state. */
  panel: CosmosPanel;
  setPanel: (p: CosmosPanel) => void;
  setQuery: (q: string) => void;
  setSelected: (o: SkyObject | null) => void;
  /** The « Review » button's own move, and the review's own close button. */
  openReview: () => void;
  closeReview: () => void;
}

export type CosmosPanel = 'none' | 'about' | 'place' | 'search';

/** The panels a voice may open or close, as the person calls them: `credits` is the page's `about`. */
const PANELS = ['search', 'place', 'credits', 'review'] as const;
const CLOSABLE = ['card', ...PANELS] as const;
/** The widest field a constellation is shown in: most of them span 20 to 50 degrees. */
export const CONSTELLATION_FOV = 45;

/** How many objects `search` answers at most: what the manifest declares as `limit`'s maximum. */
export const SEARCH_LIMIT = { min: 1, max: 40, default: 10 } as const;
/** The years the sky can be shown for: what the manifest says of `at`. */
export const YEAR_LIMITS = { min: 1000, max: 3000 } as const;
/** A time shift, in hours: a century either way. */
export const SHIFT_LIMIT = 876_600;

const LAYER_KEYS = ['figures', 'constellationNames', 'starNames', 'deepSky', 'planets', 'grid'] as const;

const str = (v: unknown): string => (typeof v === 'string' ? v.trim() : '');
const num = (v: unknown): number | null => (typeof v === 'number' && Number.isFinite(v) ? v : null);

function objectRow(o: SkyObject) {
  return { id: o.id, name: o.name, kind: o.kind, constellation: o.con || null, magnitude: o.mag };
}

/** A whole number of results inside the declared limits; anything else is refused, never clamped. */
export function readLimit(v: unknown): number {
  if (v === undefined || v === null) return SEARCH_LIMIT.default;
  if (typeof v !== 'number' || !Number.isInteger(v) || v < SEARCH_LIMIT.min || v > SEARCH_LIMIT.max) {
    throw new Error(`BAD_ARG: limit must be a whole number from ${SEARCH_LIMIT.min} to ${SEARCH_LIMIT.max}`);
  }
  return v;
}

/** The languages a person speaks to Cosmos in: a body is found by its name in any of them. */
const SPOKEN = ['en', 'fr', 'es'] as const;

/** Sun, Moon and planets with their names in every spoken language (« Lune », « Saturno »). */
function withSpokenNames(bodies: readonly SkyObject[]): SkyObject[] {
  return bodies.map((b) => ({
    ...b,
    aliases: [...new Set([...b.aliases, b.id, ...SPOKEN.map((l) => translate(l, `body.${b.id}` as Key))])],
  }));
}

/**
 * A word as a person says it in French or Spanish, onto the catalogue's English word (folded,
 * plural off, as `nameWords` leaves it): a deep-sky object's kind, and the few names that differ.
 */
const TYPE_WORDS: Record<string, string> = {
  nebuleuse: 'nebula', nebulosa: 'nebula', galaxie: 'galaxy', galaxia: 'galaxy',
  ama: 'cluster', cumulo: 'cluster', nuage: 'cloud', nube: 'cloud',
  crabe: 'crab', cangrejo: 'crab', polaire: 'polari', polar: 'polari',
};

/**
 * The words said, with a kind word and a constellation's French or Spanish name put back into
 * the catalogue's English (« nébuleuse d'Orion » → orion nebula, « galaxie d'Andromède » →
 * andromeda galaxy): the common names of deep-sky objects are English.
 */
function catalogueWords(ref: string, constellations: readonly Constellation[]): string[] {
  let w = nameWords(ref).map((x) => TYPE_WORDS[x] ?? x);
  for (const c of constellations) {
    const latin = nameWords(c.name);
    for (const local of [c.i18n.fr, c.i18n.es].filter((n): n is string => !!n).map(nameWords)) {
      if (!local.length || local.join(' ') === latin.join(' ')) continue;
      for (let i = 0; i + local.length <= w.length; i++) {
        if (local.every((x, j) => w[i + j] === x)) { w = [...w.slice(0, i), ...latin, ...w.slice(i + local.length)]; break; }
      }
    }
  }
  return w;
}

const said = (o: SkyObject): string[] => [o.id, o.name, ...o.aliases];

/**
 * An object by its key, then its name or any alias, exact (case and accents aside), then the
 * same with the words a sentence wraps a name in taken out (« la planète Mars »), then the
 * search panel's own match, then every word said found in its names (« nébuleuse d'Orion »).
 * Two candidates are AMBIGUOUS, never the first one.
 */
export function resolveObject(
  catalog: Catalog, bodies: readonly SkyObject[], ref: string, constellations: readonly Constellation[] = [],
): SkyObject {
  const r = fold(ref.trim());
  if (r.length < MIN_QUERY) throw new Error(`BAD_ARG: name an object with at least ${MIN_QUERY} characters`);
  const spokenBodies = withSpokenNames(bodies);
  // The exact pass reads the WHOLE catalogue: the panel's search stops at 40 hits, and a key
  // like "HIP 1" would otherwise be crowded out by the hundred keys that contain it.
  const exact: SkyObject[] = [];
  const isExact = (o: SkyObject) => said(o).some((n) => fold(n) === r);
  for (const o of spokenBodies) if (isExact(o)) exact.push(o);
  for (const s of catalog.stars) { const o = toSkyObject(s); if (isExact(o)) exact.push(o); }
  for (const d of catalog.dsos) { const o = dsoToSkyObject(d); if (isExact(o)) exact.push(o); }
  const byId = exact.filter((o) => fold(o.id) === r);
  if (byId.length === 1) return byId[0]!;
  let pool = exact;
  if (!pool.length) {
    // Only what a person names by words: bodies, deep-sky objects, stars that have a name.
    const named: SkyObject[] = [
      ...spokenBodies,
      ...catalog.dsos.map(dsoToSkyObject),
      ...catalog.stars.filter((s) => s.proper).map(toSkyObject),
    ];
    const asked = nameWords(ref).join(' ');
    if (asked) pool = named.filter((o) => said(o).some((n) => nameWords(n).join(' ') === asked));
    if (!pool.length) pool = searchSky(catalog, bodies, ref);
    if (!pool.length) {
      const words = catalogueWords(ref, constellations);
      if (words.length) {
        // A whole name said wins over the names that hold its words (« Polaris » over « Polaris Australis »).
        const whole = words.join(' ');
        pool = named.filter((o) => said(o).some((n) => nameWords(n).join(' ') === whole));
        if (!pool.length) {
          pool = named.filter((o) => {
            const have = new Set(said(o).flatMap(nameWords));
            return words.every((w) => have.has(w));
          });
        }
      }
    }
  }
  if (pool.length === 1) return pool[0]!;
  if (!pool.length) {
    const visible = bodies.length ? `bodies on screen: ${listed(bodies.map((b) => b.id))}` : 'the planets layer is off, so no Sun, Moon or planet';
    throw new Error(`NO_OBJECT: no object in the sky named "${ref}"; name it in English or by its key (Andromeda Galaxy, M31, NGC 224, Sirius, HIP 32349); ${visible}`);
  }
  const ids = pool.slice(0, 10).map((o) => `${o.id} (${o.name})`).join(', ');
  throw new Error(`AMBIGUOUS: "${ref}" names several objects: ${ids}${pool.length > 10 ? `, … (${pool.length})` : ''}; say which, by key`);
}

/** A constellation by its Latin name, its abbreviation, or its name in any language the file has. */
export function resolveConstellation(constellations: readonly Constellation[], ref: string): Constellation {
  const entries: Array<Named<Constellation>> = constellations.map((c) => ({
    item: c,
    id: c.id,
    names: [c.name, c.genitive, ...Object.values(c.i18n)],
    label: c.i18n.fr && fold(c.i18n.fr) !== fold(c.name) ? `${c.name} (${c.i18n.fr})` : c.name,
  }));
  return findNamed(entries, ref, { code: 'NO_CONSTELLATION', noun: 'constellation' });
}

/** An instant from `at` (ISO, or "now") or a shift from the instant on screen. */
export function readInstant(at: string, shiftHours: number | null, from: Date, now: () => Date = () => new Date()): Date {
  if (at && shiftHours !== null) throw new Error('BAD_ARG: give at or shiftHours, not both');
  if (!at && shiftHours === null) throw new Error('MISSING_ARG: setTime needs at or shiftHours');
  let d: Date;
  if (at) {
    d = at.toLowerCase() === 'now' ? now() : new Date(at);
    if (Number.isNaN(d.getTime())) throw new Error(`BAD_ARG: "${at}" is not a date; use ISO 8601 (2026-08-12T21:30:00Z) or "now"`);
  } else {
    if (Math.abs(shiftHours!) > SHIFT_LIMIT) throw new Error(`BAD_ARG: shiftHours must be within ±${SHIFT_LIMIT}`);
    d = new Date(from.getTime() + shiftHours! * 3_600_000);
  }
  const y = d.getUTCFullYear();
  if (y < YEAR_LIMITS.min || y > YEAR_LIMITS.max) throw new Error(`OUTSIDE: the sky is shown from ${YEAR_LIMITS.min} to ${YEAR_LIMITS.max}`);
  return d;
}

function notReviewing(c: CosmosAgentContext): void {
  if (c.reviewing) throw new Error('REVIEWING: a review is open and the sky is its question; ask again when it is closed');
}

/** The handlers, keyed by the action ids `mnemo-plugin.json` declares. */
export function cosmosAgentHandlers(ctx: () => CosmosAgentContext) {
  // agent-actions:begin
  return {
    status: () => {
      const c = ctx();
      return {
        when: c.when.toISOString(),
        place: c.place,
        look: { ra: c.look.ra, dec: c.look.dec, fov: c.look.fov },
        layers: c.layers,
        faintestPossible: c.catalog.truncation.magLimit,
        selected: c.selected ? objectRow(c.selected) : null,
        reviewing: c.reviewing,
        catalogue: { stars: c.catalog.stars.length, deepSky: c.catalog.dsos.length },
      };
    },
    search: (args: Record<string, unknown>) => {
      const c = ctx();
      const limit = readLimit(args.limit);
      const text = str(args.text);
      if (text.length < MIN_QUERY) throw new Error(`BAD_ARG: text needs at least ${MIN_QUERY} characters`);
      const hits = searchSky(c.catalog, c.bodies, text);
      return { found: hits.length, capped: hits.length >= TOTAL_CAP, objects: hits.slice(0, limit).map(objectRow) };
    },
    goTo: (args: Record<string, unknown>) => {
      const c = ctx();
      notReviewing(c);
      const o = resolveObject(c.catalog, c.bodies, str(args.object), c.constellations);
      c.goTo(o);
      return { shown: objectRow(o) };
    },
    setTime: (args: Record<string, unknown>) => {
      const c = ctx();
      const d = readInstant(str(args.at), num(args.shiftHours), c.when);
      c.setWhen(d);
      return { when: d.toISOString() };
    },
    setPlace: (args: Record<string, unknown>) => {
      const c = ctx();
      const lat = num(args.latitude), lon = num(args.longitude), elev = num(args.elevation);
      // The form's own reader: the same limits, the same refusals, named by field.
      const read = readPlace(lat === null ? '' : String(lat), lon === null ? '' : String(lon), elev === null ? '' : String(elev), str(args.label));
      if (!read.ok) throw new Error(`BAD_ARG: ${read.why} is out of range (latitude -90..90, longitude -180..180, elevation -500..9000 m)`);
      c.setPlace(read.place);
      const kept = storePlace(read.place);
      return { place: read.place, kept };
    },
    setLayers: (args: Record<string, unknown>) => {
      const c = ctx();
      if (!LAYER_KEYS.some((k) => typeof args[k] === 'boolean') && args.magLimit === undefined) {
        throw new Error(`MISSING_ARG: give at least one of ${LAYER_KEYS.join(', ')}, magLimit`);
      }
      const next: SkyLayers = { ...c.layers };
      for (const k of LAYER_KEYS) if (typeof args[k] === 'boolean') next[k] = args[k] as boolean;
      const mag = num(args.magLimit);
      if (mag !== null) {
        const top = c.catalog.truncation.magLimit;
        if (mag < 1 || mag > top) throw new Error(`BAD_ARG: magLimit must be from 1 to ${top}, the faintest star in the catalogue`);
        next.magLimit = mag;
      }
      c.setLayers(next);
      return { layers: next };
    },
    setView: (args: Record<string, unknown>) => {
      const c = ctx();
      if (args.reset === true) {
        c.setLook(c.defaultLook);
        return { look: c.defaultLook };
      }
      let next = c.look;
      if (args.centreOnSelected === true) {
        if (!c.selected) throw new Error('NOTHING_SELECTED: no object card is open. Use goTo first');
        next = lookAt(next, c.selected.ra, c.selected.dec);
      }
      const fov = num(args.fov);
      const zoom = str(args.zoom);
      if (zoom && zoom !== 'in' && zoom !== 'out') throw new Error('BAD_ARG: zoom must be in or out');
      if (zoom && fov !== null) throw new Error('BAD_ARG: give fov or zoom, not both');
      if (zoom) {
        // Half the field closer, twice the field farther, inside the slider's range.
        const to = Math.min(MAX_FOV, Math.max(MIN_FOV, zoom === 'in' ? next.fov / 2 : next.fov * 2));
        if (to === next.fov) throw new Error(`AT_LIMIT: the field is already ${zoom === 'in' ? 'the narrowest' : 'the widest'} (${to} degrees)`);
        next = { ...next, fov: to };
      }
      if (fov !== null) {
        if (fov < MIN_FOV || fov > MAX_FOV) throw new Error(`BAD_ARG: fov must be from ${MIN_FOV} to ${MAX_FOV} degrees`);
        next = { ...next, fov };
      }
      if (next === c.look) throw new Error('MISSING_ARG: setView needs reset, centreOnSelected, zoom or fov');
      c.setLook(next);
      return { look: next };
    },
    showConstellation: (args: Record<string, unknown>) => {
      const c = ctx();
      const k = resolveConstellation(c.constellations, str(args.constellation));
      if (!k.label) throw new Error(`NO_POSITION: ${k.name} has no position to turn to`);
      // A search result's turn, onto the constellation's label, wide enough to hold its figure.
      const next = { ...lookAt(c.look, k.label[0], k.label[1]), fov: Math.max(c.look.fov, CONSTELLATION_FOV) };
      c.setLook(next);
      return { shown: { id: k.id, name: k.name }, figures: c.layers.figures, look: next };
    },
    showPanel: (args: Record<string, unknown>) => {
      const c = ctx();
      const panel = str(args.panel);
      const text = str(args.text);
      if (!(PANELS as readonly string[]).includes(panel)) throw new Error(`BAD_ARG: panel must be ${PANELS.join(', ')}`);
      if (text && panel !== 'search') throw new Error('BAD_ARG: text goes with the search panel only');
      // The top bar's own buttons: search and credits close a review, the place panel does not.
      if (panel === 'review') c.openReview();
      else {
        if (panel !== 'place' && c.reviewing) c.closeReview();
        c.setPanel(panel === 'credits' ? 'about' : (panel as CosmosPanel));
        if (text) c.setQuery(text);
      }
      return { open: panel, ...(text ? { searched: text } : {}) };
    },
    closePanel: (args: Record<string, unknown>) => {
      const c = ctx();
      const asked = str(args.panel);
      if (asked && !(CLOSABLE as readonly string[]).includes(asked)) throw new Error(`BAD_ARG: panel must be ${CLOSABLE.join(', ')}`);
      const isOpen = (p: string) => {
        if (p === 'card') return c.selected !== null;
        if (p === 'review') return c.reviewing;
        return c.panel === (p === 'credits' ? 'about' : p);
      };
      const open = (asked ? [asked] : [...CLOSABLE]).filter(isOpen);
      if (!open.length) throw new Error(`NOTHING_OPEN: ${asked ? `the ${asked} is not open` : 'no panel and no object card is open'}`);
      // Each one's own close: ✕ on the card, the review's close button, the panel's toggle.
      for (const p of open) {
        if (p === 'card') c.setSelected(null);
        else if (p === 'review') c.closeReview();
        else c.setPanel('none');
      }
      return { closed: open };
    },
  };
  // agent-actions:end
}
