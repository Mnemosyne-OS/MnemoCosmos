/**
 * catalog-format.mjs — the on-disk shape of the sky, written once.
 *
 * This file is the ENCODER and the layout constants. The decoder is
 * `src/cosmos/catalog.ts`, in TypeScript, because it runs in the browser. Two
 * files, one format, and `catalog.test.ts` round-trips through both: a format
 * whose writer and reader are only "obviously the same" is a format that will
 * one day disagree with itself and blame the data.
 *
 * Three decisions are baked into the layout, and each is a way a star catalogue
 * lies about itself.
 *
 * 1. AN UNKNOWN NUMBER IS NaN, NEVER A PLACEHOLDER. HYG writes 100000 parsecs
 *    for a star whose parallax came back negative or zero — a measurement
 *    nobody made, in the same column as measurements that were. Encoded as-is
 *    it draws a false spherical shell around the scene and the object card
 *    states a distance to a star whose distance is not known. So the encoder
 *    converts it to NaN, and the header carries the COUNT of stars in that
 *    state so the screen can say how many.
 *
 * 2. THE HEADER CARRIES WHAT WAS LEFT OUT. `magLimit`, `starsOmitted` and
 *    `dsoOmitted` travel with the data. A truncation that only exists in the
 *    build log is a truncation the reader cannot know about, and this catalogue
 *    is truncated on purpose — the naked-eye sky is 9 000 stars out of 120 000.
 *
 * 3. STRINGS ARE DEDUPLICATED AND INDEXED. 'CMa' appears in thousands of star
 *    records; 'A0V' in thousands more. Storing them inline would triple the
 *    file for no information. Index 0 is ALWAYS the empty string, so "absent"
 *    has one representation and it is not confusable with a real value.
 */

export const MAGIC = 'MCOS';
export const VERSION = 1;

export const HEADER_BYTES = 48;
export const STAR_BYTES = 52;
export const DSO_BYTES = 40;

/** Strings are joined with this, so no string may contain it. */
export const STRING_SEP = '\n';

const align4 = (n) => (n + 3) & ~3;

class StringTable {
  constructor() {
    // Index 0 is the empty string, permanently. "No proper name" and "the
    // proper name is an empty string" must not be two different indices.
    this.list = [''];
    this.index = new Map([['', 0]]);
  }

  add(value) {
    const s = (value ?? '').trim();
    if (!s) return 0;
    if (s.includes(STRING_SEP)) {
      throw new Error(`catalog string contains the separator: ${JSON.stringify(s)}`);
    }
    const hit = this.index.get(s);
    if (hit !== undefined) return hit;
    const at = this.list.length;
    this.list.push(s);
    this.index.set(s, at);
    return at;
  }

  bytes() {
    return new TextEncoder().encode(this.list.join(STRING_SEP));
  }
}

/**
 * Encodes one catalogue.
 *
 * `stars` and `dsos` are plain objects; every string field may be null or
 * undefined, and every numeric field may be null/undefined/NaN, which all mean
 * the same thing here: not known. They are written as NaN, never as 0.
 */
export function encodeCatalog({ stars, dsos, magLimit, starsOmitted, dsoOmitted }) {
  const strings = new StringTable();

  // Intern first: the blob's length has to be known before anything is placed.
  const starRefs = stars.map((s) => [
    strings.add(s.con), strings.add(s.spect), strings.add(s.proper),
    strings.add(s.desig), strings.add(s.gliese),
  ]);
  const dsoRefs = dsos.map((d) => [
    strings.add(d.con), strings.add(d.type), strings.add(d.name), strings.add(d.common),
  ]);

  const blob = strings.bytes();
  const blobAt = HEADER_BYTES;
  const starsAt = blobAt + align4(blob.length);
  const dsosAt = starsAt + stars.length * STAR_BYTES;
  const total = dsosAt + dsos.length * DSO_BYTES;

  const buf = new ArrayBuffer(total);
  const view = new DataView(buf);
  const u8 = new Uint8Array(buf);

  for (let i = 0; i < 4; i++) view.setUint8(i, MAGIC.charCodeAt(i));
  view.setUint16(4, VERSION, true);
  view.setUint16(6, 0, true); // flags
  view.setUint32(8, stars.length, true);
  view.setUint32(12, dsos.length, true);
  view.setFloat32(16, magLimit, true);
  view.setUint32(20, starsOmitted, true);
  view.setUint32(24, stars.filter((s) => !Number.isFinite(s.dist)).length, true);
  view.setUint32(28, dsoOmitted, true);
  view.setUint32(32, blob.length, true);
  view.setUint32(36, strings.list.length, true);
  view.setUint32(40, STAR_BYTES, true);
  view.setUint32(44, DSO_BYTES, true);

  u8.set(blob, blobAt);

  const num = (v) => (typeof v === 'number' && Number.isFinite(v) ? v : NaN);
  const int = (v) => (typeof v === 'number' && Number.isFinite(v) ? Math.trunc(v) : 0);

  stars.forEach((s, i) => {
    const at = starsAt + i * STAR_BYTES;
    const [con, spect, proper, desig, gliese] = starRefs[i];
    view.setFloat32(at + 0, num(s.ra), true);
    view.setFloat32(at + 4, num(s.dec), true);
    view.setFloat32(at + 8, num(s.mag), true);
    view.setFloat32(at + 12, num(s.absmag), true);
    view.setFloat32(at + 16, num(s.dist), true);
    view.setFloat32(at + 20, num(s.ci), true);
    view.setInt32(at + 24, int(s.hip), true);
    view.setInt32(at + 28, int(s.hd), true);
    view.setUint32(at + 32, con, true);
    view.setUint32(at + 36, spect, true);
    view.setUint32(at + 40, proper, true);
    view.setUint32(at + 44, desig, true);
    view.setUint32(at + 48, gliese, true);
  });

  dsos.forEach((d, i) => {
    const at = dsosAt + i * DSO_BYTES;
    const [con, type, name, common] = dsoRefs[i];
    view.setFloat32(at + 0, num(d.ra), true);
    view.setFloat32(at + 4, num(d.dec), true);
    view.setFloat32(at + 8, num(d.mag), true);
    view.setFloat32(at + 12, num(d.majAx), true);
    view.setFloat32(at + 16, num(d.minAx), true);
    view.setUint32(at + 20, con, true);
    view.setUint32(at + 24, type, true);
    view.setUint32(at + 28, name, true);
    view.setUint32(at + 32, common, true);
    view.setUint16(at + 36, int(d.messier), true);
    view.setUint16(at + 38, 0, true); // pad, keeps the record 4-byte aligned
  });

  return new Uint8Array(buf);
}
