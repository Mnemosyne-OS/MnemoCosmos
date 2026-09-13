/**
 * The writer lives in Node and the reader lives in a browser. Nothing but this
 * file makes them the same format, so it round-trips through BOTH rather than
 * asserting against a hand-written buffer — a fixture would only ever prove the
 * reader still reads what the reader used to read.
 */
import { describe, expect, it } from 'vitest';
// The encoder is plain .mjs on purpose: it is the build script's, not the app's.
// @ts-expect-error — no types for a build script, and giving it any would mean
// a second declaration of the format that could disagree with the first.
import { encodeCatalog } from '../../scripts/catalog-format.mjs';
import { constellationName, decodeCatalog, MAGIC, VERSION, type Constellation } from './catalog';

const bytes = (x: Uint8Array): ArrayBuffer =>
  x.buffer.slice(x.byteOffset, x.byteOffset + x.byteLength) as ArrayBuffer;

const sirius = {
  ra: 101.28715, dec: -16.716116, mag: -1.44, absmag: 1.454, dist: 2.6371, ci: 0.009,
  hip: 32349, hd: 48915, con: 'CMa', spect: 'A0m...', proper: 'Sirius',
  desig: '9Alp CMa', gliese: 'Gl 244A',
};

/** A star HYG has no parallax for: the 100000-parsec case, already converted. */
const anonymous = {
  ra: 12.5, dec: 45, mag: 6.2, absmag: NaN, dist: NaN, ci: NaN,
  hip: 0, hd: 0, con: 'And', spect: '', proper: '', desig: '', gliese: '',
};

const andromeda = {
  ra: 10.6847, dec: 41.269, mag: 3.44, majAx: 199.53, minAx: 70.79,
  con: 'And', type: 'G', name: 'NGC 224', common: 'Andromeda Galaxy', messier: 31,
};

/** A nebula OpenNGC has no magnitude and no size for. */
const dark = {
  ra: 85.24, dec: -2.458, mag: NaN, majAx: NaN, minAx: NaN,
  con: 'Ori', type: 'DrkN', name: 'B33', common: 'Horsehead Nebula', messier: 0,
};

const roundTrip = (over: Partial<Parameters<typeof encodeCatalog>[0]> = {}) =>
  decodeCatalog(bytes(encodeCatalog({
    stars: [sirius, anonymous], dsos: [andromeda, dark],
    magLimit: 6.5, starsOmitted: 110705, dsoOmitted: 10897, ...over,
  })));

describe('catalog round-trip', () => {
  it('brings every field of a fully-populated star back', () => {
    const s = roundTrip().stars[0]!;
    expect(s.hip).toBe(32349);
    expect(s.hd).toBe(48915);
    expect(s.proper).toBe('Sirius');
    expect(s.desig).toBe('9Alp CMa');
    expect(s.gliese).toBe('Gl 244A');
    expect(s.con).toBe('CMa');
    expect(s.spect).toBe('A0m...');
    // float32 storage, so compare with the precision it actually has.
    expect(s.ra).toBeCloseTo(101.28715, 3);
    expect(s.dec).toBeCloseTo(-16.716116, 3);
    expect(s.mag).toBeCloseTo(-1.44, 5);
    expect(s.absmag).toBeCloseTo(1.454, 5);
    expect(s.dist).toBeCloseTo(2.6371, 4);
    expect(s.ci).toBeCloseTo(0.009, 5);
  });

  it('brings a star with nothing known back as null, never as zero', () => {
    const s = roundTrip().stars[1]!;
    // This is the whole reason the format uses NaN on disk. `0` for a distance
    // puts a star at the observer; `0` for a Hipparcos number is HIP 0, which
    // is a real-looking identifier for a star that has none.
    expect(s.dist).toBeNull();
    expect(s.absmag).toBeNull();
    expect(s.ci).toBeNull();
    expect(s.hip).toBeNull();
    expect(s.hd).toBeNull();
    expect(s.proper).toBe('');
  });

  it('brings a deep-sky object back whole', () => {
    const d = roundTrip().dsos[0]!;
    expect(d.name).toBe('NGC 224');
    expect(d.common).toBe('Andromeda Galaxy');
    expect(d.messier).toBe(31);
    expect(d.type).toBe('G');
    expect(d.majAx).toBeCloseTo(199.53, 2);
  });

  it('keeps an unmeasured deep-sky object unmeasured', () => {
    const d = roundTrip().dsos[1]!;
    expect(d.mag).toBeNull();
    expect(d.majAx).toBeNull();
    expect(d.minAx).toBeNull();
    // Messier 0 does not exist, so 0 is the encoding of "none" and must not
    // arrive as the number zero.
    expect(d.messier).toBeNull();
    expect(d.common).toBe('Horsehead Nebula');
  });

  it('carries what was left out, and counts the stars with no distance', () => {
    const t = roundTrip().truncation;
    expect(t.magLimit).toBeCloseTo(6.5, 5);
    expect(t.starsOmitted).toBe(110705);
    expect(t.dsoOmitted).toBe(10897);
    // Counted by the encoder from the data, not passed in: a number the caller
    // supplies is a number the caller can get wrong.
    expect(t.starsNoDistance).toBe(1);
  });

  it('handles an empty catalogue without inventing one', () => {
    const c = decodeCatalog(bytes(encodeCatalog({
      stars: [], dsos: [], magLimit: 6.5, starsOmitted: 0, dsoOmitted: 0,
    })));
    expect(c.stars).toEqual([]);
    expect(c.dsos).toEqual([]);
  });

  it('deduplicates repeated strings instead of storing them per record', () => {
    const many = Array.from({ length: 200 }, () => ({ ...anonymous, con: 'And', spect: 'G2V' }));
    const one = encodeCatalog({ stars: [many[0]!], dsos: [], magLimit: 6.5, starsOmitted: 0, dsoOmitted: 0 });
    const all = encodeCatalog({ stars: many, dsos: [], magLimit: 6.5, starsOmitted: 0, dsoOmitted: 0 });
    // 199 extra records at 52 bytes each, and NOT one extra byte of strings.
    expect(all.length - one.length).toBe(199 * 52);
  });
});

describe('catalog refusals', () => {
  it('refuses a file that is not a catalogue', () => {
    expect(() => decodeCatalog(new ArrayBuffer(64))).toThrow(new RegExp(MAGIC));
  });

  it('refuses a file too short to hold a header', () => {
    expect(() => decodeCatalog(new ArrayBuffer(8))).toThrow(/header/);
  });

  it('refuses a version it does not read', () => {
    const buf = bytes(encodeCatalog({ stars: [sirius], dsos: [], magLimit: 6.5, starsOmitted: 0, dsoOmitted: 0 }));
    new DataView(buf).setUint16(4, VERSION + 1, true);
    expect(() => decodeCatalog(buf)).toThrow(/version/);
  });

  it('refuses a truncated file rather than serving the half that survived', () => {
    // The failure that matters: a cut-short download decodes cleanly for as
    // many records as it happens to contain, and the sky simply ends early
    // with nothing on screen saying so.
    const full = encodeCatalog({ stars: [sirius, anonymous], dsos: [andromeda], magLimit: 6.5, starsOmitted: 0, dsoOmitted: 0 });
    expect(() => decodeCatalog(bytes(full.slice(0, full.length - 20)))).toThrow(/truncated/);
  });

  it('refuses a string the separator would split in two', () => {
    expect(() => encodeCatalog({
      stars: [{ ...sirius, proper: 'Sirius\nA' }], dsos: [], magLimit: 6.5, starsOmitted: 0, dsoOmitted: 0,
    })).toThrow(/separator/);
  });
});

describe('constellationName', () => {
  const aries: Constellation = {
    id: 'Ari', name: 'Aries', genitive: 'Arietis', rank: 2, label: [40, 20],
    i18n: { en: 'Ram', fr: 'Bélier', zh: '白羊座' }, lines: [],
  };

  it('uses the language when it has one', () => {
    expect(constellationName(aries, 'zh')).toBe('白羊座');
    expect(constellationName(aries, 'fr')).toBe('Bélier');
  });

  it('gives an English reader the IAU name, NOT the English common name', () => {
    // The source file's `en` is 'Ram'. Every English atlas, catalogue and
    // observing log says Aries. Printing 'Ram' on a star chart is wrong for
    // exactly the people this is for.
    expect(constellationName(aries, 'en')).toBe('Aries');
  });

  it('falls back to the IAU Latin name, which is a real name and not a gap', () => {
    expect(constellationName(aries, 'pt')).toBe('Aries');
  });
});
