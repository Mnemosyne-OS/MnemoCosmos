/**
 * catalog.ts — reading the sky off disk.
 *
 * The writer is `scripts/catalog-format.mjs`; this is the reader. Two files
 * because one runs in Node at build time and the other in a browser at boot,
 * and `catalog.test.ts` round-trips through both so they cannot drift apart in
 * silence.
 *
 * Everything the reader hands out obeys one rule: a number the catalogue does
 * not have arrives as `null`, never as 0 and never as a plausible-looking
 * placeholder. HYG ships 100000 parsecs for "the parallax was negative", and a
 * viewer that renders that number puts a star at a distance nobody measured,
 * on a screen where every other distance was.
 */

export const MAGIC = 'MCOS';
export const VERSION = 1;
const HEADER_BYTES = 48;
const STRING_SEP = '\n';

export interface Star {
  /** Index in the shipped array. Stable within one build, and only within one. */
  i: number;
  /** Right ascension, degrees, J2000, [0,360). */
  ra: number;
  /** Declination, degrees, J2000, [-90,90]. */
  dec: number;
  /** Apparent visual magnitude — how bright it LOOKS. Always present. */
  mag: number;
  /** Absolute visual magnitude, or null. Not the same quantity as `mag`. */
  absmag: number | null;
  /** Distance in parsecs, or null when the parallax gives none. */
  dist: number | null;
  /** B-V colour index, or null. Null renders white, never a made-up colour. */
  ci: number | null;
  /** Hipparcos number, or null. */
  hip: number | null;
  /** Henry Draper number, or null. */
  hd: number | null;
  /** Three-letter constellation abbreviation, or ''. */
  con: string;
  /** Spectral type as the catalogue spells it, or ''. */
  spect: string;
  /** IAU proper name, or ''. */
  proper: string;
  /** Bayer/Flamsteed designation as HYG spells it ('9Alp CMa'), or ''. */
  desig: string;
  /** Gliese designation as HYG spells it ('Gl 244A'), or ''. */
  gliese: string;
}

export interface Dso {
  i: number;
  ra: number;
  dec: number;
  /** V magnitude where the source has one, else B. Null when it has neither. */
  mag: number | null;
  /** Major axis in arcminutes, or null. */
  majAx: number | null;
  /** Minor axis in arcminutes, or null. */
  minAx: number | null;
  con: string;
  /** OpenNGC type code: 'G', 'PN', 'OCl', 'GCl', 'HII'… */
  type: string;
  /** Catalogue designation, spaced: 'NGC 224', 'IC 434'. */
  name: string;
  /** Common name, or ''. */
  common: string;
  /** Messier number, or null. */
  messier: number | null;
}

export interface Catalog {
  stars: Star[];
  dsos: Dso[];
  /**
   * What was left out, carried in the file itself rather than in a build log.
   * The screen states this; a truncation nobody can see is a truncation that
   * reads as a missing feature.
   */
  truncation: {
    /** Apparent-magnitude cut applied to stars. */
    magLimit: number;
    /** Source star rows dropped by that cut. */
    starsOmitted: number;
    /** Shipped stars whose distance is not known. */
    starsNoDistance: number;
    /** Source deep-sky rows dropped. */
    dsoOmitted: number;
  };
}

/** A float that is NaN in the file means "not known" everywhere above. */
const orNull = (v: number): number | null => (Number.isFinite(v) ? v : null);

export function decodeCatalog(buffer: ArrayBuffer): Catalog {
  if (buffer.byteLength < HEADER_BYTES) {
    throw new Error(`catalog.bin is ${buffer.byteLength} bytes; a header alone is ${HEADER_BYTES}`);
  }
  const view = new DataView(buffer);
  const magic = String.fromCharCode(view.getUint8(0), view.getUint8(1), view.getUint8(2), view.getUint8(3));
  if (magic !== MAGIC) throw new Error(`catalog.bin does not start with ${MAGIC} (got ${JSON.stringify(magic)})`);
  const version = view.getUint16(4, true);
  if (version !== VERSION) throw new Error(`catalog.bin is version ${version}, this build reads ${VERSION}`);

  const starCount = view.getUint32(8, true);
  const dsoCount = view.getUint32(12, true);
  const magLimit = view.getFloat32(16, true);
  const starsOmitted = view.getUint32(20, true);
  const starsNoDistance = view.getUint32(24, true);
  const dsoOmitted = view.getUint32(28, true);
  const stringBytes = view.getUint32(32, true);
  const stringCount = view.getUint32(36, true);
  const starBytes = view.getUint32(40, true);
  const dsoBytes = view.getUint32(44, true);

  const blobAt = HEADER_BYTES;
  const starsAt = blobAt + ((stringBytes + 3) & ~3);
  const dsosAt = starsAt + starCount * starBytes;
  const need = dsosAt + dsoCount * dsoBytes;
  // A file cut short is the one failure mode that produces plausible garbage:
  // the header parses, the first records decode, and the sky quietly ends
  // early. Refuse the whole file instead of serving part of one.
  if (buffer.byteLength < need) {
    throw new Error(`catalog.bin is truncated: header describes ${need} bytes, file is ${buffer.byteLength}`);
  }

  const strings = new TextDecoder()
    .decode(new Uint8Array(buffer, blobAt, stringBytes))
    .split(STRING_SEP);
  if (strings.length !== stringCount) {
    throw new Error(`catalog.bin string table says ${stringCount} entries, blob holds ${strings.length}`);
  }
  const str = (idx: number) => strings[idx] ?? '';

  const stars: Star[] = new Array(starCount);
  for (let i = 0; i < starCount; i++) {
    const at = starsAt + i * starBytes;
    stars[i] = {
      i,
      ra: view.getFloat32(at + 0, true),
      dec: view.getFloat32(at + 4, true),
      mag: view.getFloat32(at + 8, true),
      absmag: orNull(view.getFloat32(at + 12, true)),
      dist: orNull(view.getFloat32(at + 16, true)),
      ci: orNull(view.getFloat32(at + 20, true)),
      hip: view.getInt32(at + 24, true) || null,
      hd: view.getInt32(at + 28, true) || null,
      con: str(view.getUint32(at + 32, true)),
      spect: str(view.getUint32(at + 36, true)),
      proper: str(view.getUint32(at + 40, true)),
      desig: str(view.getUint32(at + 44, true)),
      gliese: str(view.getUint32(at + 48, true)),
    };
  }

  const dsos: Dso[] = new Array(dsoCount);
  for (let i = 0; i < dsoCount; i++) {
    const at = dsosAt + i * dsoBytes;
    dsos[i] = {
      i,
      ra: view.getFloat32(at + 0, true),
      dec: view.getFloat32(at + 4, true),
      mag: orNull(view.getFloat32(at + 8, true)),
      majAx: orNull(view.getFloat32(at + 12, true)),
      minAx: orNull(view.getFloat32(at + 16, true)),
      con: str(view.getUint32(at + 20, true)),
      type: str(view.getUint32(at + 24, true)),
      name: str(view.getUint32(at + 28, true)),
      common: str(view.getUint32(at + 32, true)),
      messier: view.getUint16(at + 36, true) || null,
    };
  }

  return { stars, dsos, truncation: { magLimit, starsOmitted, starsNoDistance, dsoOmitted } };
}

// -- constellations ---------------------------------------------------------

export interface Constellation {
  /** IAU three-letter abbreviation: 'And', 'Ori'. */
  id: string;
  /** IAU Latin name. */
  name: string;
  /** Genitive, used when naming stars: 'Andromedae'. */
  genitive: string;
  rank: number;
  /** [ra, dec] of the label, or null. */
  label: [number, number] | null;
  /** Name per language. A language absent here has NO entry, not an empty one. */
  i18n: Record<string, string>;
  /** Figure segments, each a polyline of [ra, dec] in degrees. */
  lines: [number, number][][];
}

export interface ConstellationFile {
  source: string;
  constellations: Constellation[];
}

/**
 * The constellation's name in a language, or its IAU Latin name.
 *
 * 🚨 ENGLISH IS THE LATIN NAME, not the `en` entry. The source file's `en`
 * field holds the English COMMON name — 'Ram', 'Charioteer', 'Little Dog' —
 * and putting those on a star chart is wrong for the people this is for: every
 * English-language atlas, catalogue and observing log says Aries, Auriga,
 * Canis Minor. Seen on screen before it was noticed in the data.
 *
 * For every other language the localised name IS the standard one — a French
 * chart says Andromède, not Andromeda — so those are used.
 *
 * The fallback to Latin is deliberate and is not a gap being papered over: the
 * Latin name is the international designation, and it is what a Portuguese
 * reader finds in a Portuguese star chart too. Writing 'Andromeda' where a
 * translation is missing is correct; inventing one would not be.
 */
export function constellationName(c: Constellation, lang: string): string {
  if (lang === 'en') return c.name;
  return c.i18n[lang] || c.name;
}
