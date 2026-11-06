/**
 * cosmosAgent — the agent's moves are the page's own, and every refusal is named.
 */
import { afterEach, describe, expect, it, vi } from 'vitest';
import type { Catalog, Constellation, Dso, Star } from './catalog';
import type { SkyObject } from './identity';
import {
  CONSTELLATION_FOV, cosmosAgentHandlers, readInstant, readLimit, resolveConstellation, resolveObject, type CosmosAgentContext,
} from './cosmosAgent';
import { PLACE_KEY } from './placeStore';

const star = (over: Partial<Star>): Star => ({
  i: 0, ra: 101.3, dec: -16.7, mag: -1.46, absmag: 1.4, dist: 2.6, ci: 0, hip: 32349, hd: 48915,
  con: 'CMa', spect: 'A1V', proper: 'Sirius', desig: '9Alp CMa', gliese: '', ...over,
});
const dso = (over: Partial<Dso>): Dso => ({
  i: 0, ra: 10.7, dec: 41.3, mag: 3.4, majAx: 190, minAx: 60, con: 'And', type: 'G', name: 'NGC 224',
  common: 'Andromeda Galaxy', messier: 31, ...over,
});
const catalog: Catalog = {
  stars: [
    star({}),
    star({ i: 1, hip: 1, hd: null, proper: '', desig: '' }),
    star({ i: 2, hip: 10, hd: null, proper: '', desig: '' }),
    star({ i: 3, hip: 11, hd: null, proper: '', desig: '' }),
  ],
  dsos: [
    dso({}), dso({ i: 1, name: 'NGC 598', common: 'Triangulum Galaxy', messier: 33 }),
    dso({ i: 2, name: 'NGC 1976', common: 'Orion Nebula', messier: 42, type: 'Neb', con: 'Ori' }),
    dso({ i: 3, name: 'NGC 1952', common: 'Crab Nebula', messier: 1, type: 'SNR', con: 'Tau' }),
  ],
  truncation: { magLimit: 6.5, starsOmitted: 0, starsNoDistance: 0, dsoOmitted: 0 },
};
const jupiter: SkyObject = { id: 'Jupiter', name: 'Jupiter', kind: 'body', ra: 1, dec: 1, mag: -2, con: '', aliases: [] };
// The page names bodies in the reader's language: here a French screen.
const moon: SkyObject = { id: 'Moon', name: 'Lune', kind: 'body', ra: 2, dec: 2, mag: -12, con: '', aliases: [] };
const constellation = (id: string, name: string, i18n: Record<string, string>, label: [number, number] | null = [80, 5]): Constellation => ({
  id, name, genitive: `${name}is`, rank: 1, label, i18n, lines: [],
});
const constellations = [
  constellation('Ori', 'Orion', { en: 'Orion', fr: 'Orion', es: 'Orión' }),
  constellation('And', 'Andromeda', { en: 'Andromeda', fr: 'Andromède', es: 'Andrómeda' }, [10, 38]),
  constellation('UMa', 'Ursa Major', { en: 'Big Dipper', fr: 'Grande Ourse', es: 'Osa Mayor' }, [165, 56]),
  constellation('UMi', 'Ursa Minor', { en: 'Little Dipper', fr: 'Petite Ourse', es: 'Osa Menor' }, [225, 78]),
  constellation('Tri', 'Triangulum', { en: 'Triangle', fr: 'Triangle', es: 'Triángulo' }, [30, 32]),
];

function ctx(over: Partial<CosmosAgentContext> = {}): CosmosAgentContext {
  const look = { ra: 90, dec: 20, fov: 65 };
  return {
    catalog, bodies: [jupiter, moon], look, setLook: vi.fn(), defaultLook: look,
    layers: { figures: true, constellationNames: true, deepSky: true, planets: true, starNames: true, grid: false, magLimit: 6.5 },
    setLayers: vi.fn(), when: new Date('2026-08-12T00:00:00Z'), setWhen: vi.fn(), place: null, setPlace: vi.fn(),
    selected: null, reviewing: false, goTo: vi.fn(), constellations, panel: 'none', setPanel: vi.fn(),
    setQuery: vi.fn(), setSelected: vi.fn(), openReview: vi.fn(), closeReview: vi.fn(), ...over,
  };
}

afterEach(() => { localStorage.clear(); });

describe('resolveObject', () => {
  it('takes a key, a name or an alias, case aside', () => {
    expect(resolveObject(catalog, [jupiter], 'hip 32349').id).toBe('HIP 32349');
    expect(resolveObject(catalog, [jupiter], 'sirius').id).toBe('HIP 32349');
    expect(resolveObject(catalog, [jupiter], 'M31').id).toBe('NGC 224');
    expect(resolveObject(catalog, [jupiter], 'jupiter').kind).toBe('body');
  });
  it('an exact key wins over the keys that contain it', () => {
    expect(resolveObject(catalog, [jupiter], 'HIP 1').id).toBe('HIP 1');
  });
  it('refuses a partial name that matches several objects, with their keys', () => {
    expect(() => resolveObject(catalog, [jupiter], 'galaxy')).toThrow(/^AMBIGUOUS: .*NGC 224.*NGC 598/);
  });
  it('says how to name it, and which bodies are on screen, when nothing matches', () => {
    expect(() => resolveObject(catalog, [jupiter], 'Vega')).toThrow(/^NO_OBJECT: no object in the sky named "Vega"; .*M31.*bodies on screen: Jupiter$/);
    expect(() => resolveObject(catalog, [], 'Mars')).toThrow(/planets layer is off/);
  });
  it('takes a name the way a person says it, in French or Spanish, accents and fillers aside', () => {
    expect(resolveObject(catalog, [jupiter, moon], 'la Lune').id).toBe('Moon');
    expect(resolveObject(catalog, [jupiter, moon], 'Luna').id).toBe('Moon');
    expect(resolveObject(catalog, [jupiter, moon], 'Moon').id).toBe('Moon');
    expect(resolveObject(catalog, [jupiter, moon], 'la planète Júpiter').id).toBe('Jupiter');
    expect(resolveObject(catalog, [jupiter, moon], "l'étoile SIRIUS").id).toBe('HIP 32349');
    expect(resolveObject(catalog, [jupiter, moon], "la nébuleuse d'Orion", constellations).id).toBe('NGC 1976');
    expect(resolveObject(catalog, [jupiter, moon], "la galaxie d'Andromède", constellations).id).toBe('NGC 224');
    expect(resolveObject(catalog, [jupiter, moon], 'galaxia del Triángulo', constellations).id).toBe('NGC 598');
    expect(resolveObject(catalog, [jupiter, moon], 'la nebulosa del Cangrejo', constellations).id).toBe('NGC 1952');
  });
  it('refuses a spoken name that holds several objects, with their keys', () => {
    expect(() => resolveObject(catalog, [jupiter, moon], 'la galaxie', constellations))
      .toThrow(/^AMBIGUOUS: "la galaxie" names several objects: NGC 224 \(Andromeda Galaxy\), NGC 598 \(Triangulum Galaxy\); say which, by key$/);
  });
});

describe('resolveConstellation', () => {
  it('takes the Latin name, the abbreviation, or the name in any language', () => {
    expect(resolveConstellation(constellations, 'la Grande Ourse').id).toBe('UMa');
    expect(resolveConstellation(constellations, 'osa mayor').id).toBe('UMa');
    expect(resolveConstellation(constellations, 'uma').id).toBe('UMa');
    expect(resolveConstellation(constellations, "constellation d'Andromède").id).toBe('And');
  });
  it('refuses a name that two constellations share, and names them when none matches', () => {
    expect(() => resolveConstellation(constellations, 'ourse'))
      .toThrow(/^AMBIGUOUS: "ourse" names several constellations: Ursa Major \(Grande Ourse\), Ursa Minor \(Petite Ourse\); say which$/);
    expect(() => resolveConstellation(constellations, 'Dragon'))
      .toThrow(/^NO_CONSTELLATION: no constellation named "Dragon"; constellations: Orion, Andromeda \(Andromède\)/);
  });
});

describe('readLimit and readInstant', () => {
  it('refuses a negative or broken limit', () => {
    expect(readLimit(undefined)).toBe(10);
    expect(() => readLimit(-3)).toThrow(/^BAD_ARG/);
    expect(() => readLimit(41)).toThrow(/^BAD_ARG/);
    expect(() => readLimit(1.5)).toThrow(/^BAD_ARG/);
  });
  it('reads an ISO instant, "now", or a shift, never both, inside the years', () => {
    const from = new Date('2026-08-12T00:00:00Z');
    expect(readInstant('2026-01-01T00:00:00Z', null, from).toISOString()).toBe('2026-01-01T00:00:00.000Z');
    expect(readInstant('now', null, from, () => new Date('2030-01-01T00:00:00Z')).getUTCFullYear()).toBe(2030);
    expect(readInstant('', -24, from).toISOString()).toBe('2026-08-11T00:00:00.000Z');
    expect(() => readInstant('2026-01-01', 1, from)).toThrow(/^BAD_ARG/);
    expect(() => readInstant('', null, from)).toThrow(/^MISSING_ARG/);
    expect(() => readInstant('tomorrow-ish', null, from)).toThrow(/^BAD_ARG/);
    expect(() => readInstant('0500-01-01T00:00:00Z', null, from)).toThrow(/^OUTSIDE/);
  });
});

describe('the handlers', () => {
  it("goTo goes through the search result's own goTo", () => {
    const c = ctx();
    cosmosAgentHandlers(() => c).goTo({ object: 'Andromeda Galaxy' });
    expect(c.goTo).toHaveBeenCalledWith(expect.objectContaining({ id: 'NGC 224' }));
  });

  it('goTo is refused while a review is open', () => {
    const c = ctx({ reviewing: true });
    expect(() => cosmosAgentHandlers(() => c).goTo({ object: 'Sirius' })).toThrow(/^REVIEWING/);
    expect(c.goTo).not.toHaveBeenCalled();
  });

  it('search needs two characters and answers at most limit objects', () => {
    const h = cosmosAgentHandlers(() => ctx());
    expect(() => h.search({ text: 'x' })).toThrow(/^BAD_ARG/);
    const r = h.search({ text: 'hip 1', limit: 2 });
    expect(r.found).toBe(3);
    expect(r.objects).toHaveLength(2);
  });

  it("setPlace uses the form's reader and keeps the place", () => {
    const c = ctx();
    const r = cosmosAgentHandlers(() => c).setPlace({ latitude: 48.85, longitude: 2.35, label: 'Paris' });
    expect(c.setPlace).toHaveBeenCalledWith({ latitude: 48.85, longitude: 2.35, elevation: 0, label: 'Paris' });
    expect(r.kept).toBe(true);
    expect(JSON.parse(localStorage.getItem(PLACE_KEY)!)).toMatchObject({ label: 'Paris' });
  });

  it('setPlace refuses a place out of range and writes nothing', () => {
    const c = ctx();
    expect(() => cosmosAgentHandlers(() => c).setPlace({ latitude: 95, longitude: 2 })).toThrow(/^BAD_ARG: latitude/);
    expect(c.setPlace).not.toHaveBeenCalled();
    expect(localStorage.getItem(PLACE_KEY)).toBeNull();
  });

  it('setLayers changes only the layers given and refuses a magnitude past the catalogue', () => {
    const c = ctx();
    cosmosAgentHandlers(() => c).setLayers({ grid: true });
    expect(c.setLayers).toHaveBeenCalledWith(expect.objectContaining({ grid: true, figures: true, magLimit: 6.5 }));
    expect(() => cosmosAgentHandlers(() => c).setLayers({ magLimit: 7 })).toThrow(/^BAD_ARG/);
  });

  it('setView centres only on an open card, and needs something to do', () => {
    const c = ctx();
    const h = cosmosAgentHandlers(() => c);
    expect(() => h.setView({ centreOnSelected: true })).toThrow(/^NOTHING_SELECTED/);
    expect(() => h.setView({})).toThrow(/^MISSING_ARG/);
    expect(() => h.setView({ fov: 1 })).toThrow(/^BAD_ARG/);
    h.setView({ fov: 20 });
    expect(c.setLook).toHaveBeenCalledWith({ ra: 90, dec: 20, fov: 20 });
  });

  it('goTo takes a spoken name and refuses a spoken name that holds several objects', () => {
    const c = ctx();
    const h = cosmosAgentHandlers(() => c);
    expect(h.goTo({ object: 'la Lune' }).shown.id).toBe('Moon');
    expect(c.goTo).toHaveBeenCalledWith(expect.objectContaining({ id: 'Moon' }));
    expect(() => h.goTo({ object: 'galaxie' })).toThrow(/^AMBIGUOUS/);
    expect(c.goTo).toHaveBeenCalledTimes(1);
  });

  it('setView zooms in and out by halves, and says when it is at the limit', () => {
    const c = ctx();
    const h = cosmosAgentHandlers(() => c);
    h.setView({ zoom: 'in' });
    expect(c.setLook).toHaveBeenLastCalledWith({ ra: 90, dec: 20, fov: 32.5 });
    h.setView({ zoom: 'out' });
    expect(c.setLook).toHaveBeenLastCalledWith({ ra: 90, dec: 20, fov: 110 });
    expect(() => h.setView({ zoom: 'in', fov: 20 })).toThrow(/^BAD_ARG/);
    expect(() => h.setView({ zoom: 'sideways' })).toThrow(/^BAD_ARG/);
    const wide = ctx({ look: { ra: 0, dec: 0, fov: 110 } });
    expect(() => cosmosAgentHandlers(() => wide).setView({ zoom: 'out' })).toThrow(/^AT_LIMIT/);
    expect(wide.setLook).not.toHaveBeenCalled();
  });

  it('showConstellation turns the sky to its label, wide enough, by a spoken name', () => {
    const c = ctx({ look: { ra: 0, dec: 0, fov: 10 } });
    const r = cosmosAgentHandlers(() => c).showConstellation({ constellation: 'la Grande Ourse' });
    expect(r.shown).toEqual({ id: 'UMa', name: 'Ursa Major' });
    expect(c.setLook).toHaveBeenCalledWith(expect.objectContaining({ fov: CONSTELLATION_FOV }));
    expect(() => cosmosAgentHandlers(() => c).showConstellation({ constellation: 'ourse' })).toThrow(/^AMBIGUOUS/);
    expect(c.setLook).toHaveBeenCalledTimes(1);
  });

  it('showPanel opens what the buttons open, and the search with its text', () => {
    const c = ctx({ reviewing: true });
    const h = cosmosAgentHandlers(() => c);
    h.showPanel({ panel: 'search', text: 'Vega' });
    expect(c.closeReview).toHaveBeenCalled();
    expect(c.setPanel).toHaveBeenCalledWith('search');
    expect(c.setQuery).toHaveBeenCalledWith('Vega');
    h.showPanel({ panel: 'credits' });
    expect(c.setPanel).toHaveBeenLastCalledWith('about');
    h.showPanel({ panel: 'review' });
    expect(c.openReview).toHaveBeenCalled();
    expect(() => h.showPanel({ panel: 'place', text: 'Paris' })).toThrow(/^BAD_ARG/);
    expect(() => h.showPanel({ panel: 'gestures' })).toThrow(/^BAD_ARG/);
  });

  it('closePanel closes what is open, and refuses when nothing is', () => {
    const open = ctx({ selected: jupiter, panel: 'about', reviewing: true });
    expect(cosmosAgentHandlers(() => open).closePanel({}).closed).toEqual(['card', 'credits', 'review']);
    expect(open.setSelected).toHaveBeenCalledWith(null);
    expect(open.setPanel).toHaveBeenCalledWith('none');
    expect(open.closeReview).toHaveBeenCalled();
    const shut = ctx();
    expect(() => cosmosAgentHandlers(() => shut).closePanel({})).toThrow(/^NOTHING_OPEN/);
    expect(() => cosmosAgentHandlers(() => shut).closePanel({ panel: 'card' })).toThrow(/^NOTHING_OPEN: the card is not open/);
  });
});
