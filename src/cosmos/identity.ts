/**
 * identity.ts — the reason this cartridge is an index and not a decoration.
 *
 * `HIP 32349` has meant Sirius since 1997. `M31` has meant the Andromeda
 * Galaxy since 1764. Those strings survive language, spelling, and whichever
 * catalogue someone happened to copy a name out of — which is exactly what a
 * key into somebody's own notes has to do.
 *
 * Three decisions, each written down once here rather than argued at every
 * call site.
 *
 * 1. ONE CANONICAL KEY PER OBJECT, CHOSEN BY A FIXED ORDER. An object usually
 *    carries several — M31 is also NGC 224, Sirius is also HD 48915. A card
 *    filed under whichever key happened to be handy is a card that will not be
 *    found again when the same object is reached from a different direction,
 *    and the review schedule would quietly ask about one object twice.
 *
 * 2. THE ALIASES ARE SHOWN, NOT DISCARDED. The whole point of a stable id is
 *    that the human's notes might use a different one. Seeing "also HD 48915,
 *    also 9 Alp CMa" is how they learn which string their own notes are keyed
 *    on.
 *
 * 3. THE QUESTION ASKED OF MEMORY CARRIES BOTH THE NAME AND THE KEY. Ask about
 *    "Andromeda Galaxy" alone and notes that say only "M31" are missed; ask
 *    about "M31" alone and notes that say only "Andromeda" are missed. The
 *    retrieval behind it is lexical as well as semantic, so both spellings in
 *    the query is not redundancy — it is the two halves of the search.
 */
import type { Dso, Star } from './catalog';

export type SkyKind = 'star' | 'dso' | 'body';

export interface SkyObject {
  /** The canonical catalogue key. Stable across builds and languages. */
  id: string;
  /** What to call it on screen, in the reader's language where one exists. */
  name: string;
  kind: SkyKind;
  /** Right ascension in degrees, J2000 for catalogue objects. */
  ra: number;
  /** Declination in degrees. */
  dec: number;
  /** Apparent visual magnitude, or null when the source has none. */
  mag: number | null;
  /** Three-letter constellation abbreviation, or ''. */
  con: string;
  /** Other designations for the same object, in display order. */
  aliases: string[];
  /** The star or deep-sky record behind it, for the detail card. */
  star?: Star;
  dso?: Dso;
}

/**
 * HYG writes Bayer/Flamsteed as one packed field: `9Alp CMa`, `Kap1Scl`,
 * `21Alp And`. Unpacked it reads as it does in a book.
 *
 * Left alone if it does not match the shape. A designation this cannot parse is
 * still a designation, and showing it verbatim is right; guessing at it is not.
 */
const GREEK: Record<string, string> = {
  Alp: 'α', Bet: 'β', Gam: 'γ', Del: 'δ', Eps: 'ε', Zet: 'ζ', Eta: 'η', The: 'θ',
  Iot: 'ι', Kap: 'κ', Lam: 'λ', Mu: 'μ', Nu: 'ν', Xi: 'ξ', Omi: 'ο', Pi: 'π',
  Rho: 'ρ', Sig: 'σ', Tau: 'τ', Ups: 'υ', Phi: 'φ', Chi: 'χ', Psi: 'ψ', Ome: 'ω',
};

export function readableDesignation(bf: string): string {
  const raw = (bf ?? '').trim();
  if (!raw) return '';
  // `[flamsteed][greek][superscript][ ][constellation]`
  //
  // 🪤 The space is OPTIONAL. HYG writes `9Alp CMa` when there is a Flamsteed
  // number and `Kap1Scl` when there is not — and the second is the more common
  // shape, so requiring the space left the raw packed string on screen for most
  // Bayer stars. Caught by a test, not by looking: `Kap1Scl` is unreadable
  // enough to pass for a designation.
  const m = /^(\d*)([A-Za-z]{2,3})(\d?)\s*(\w{3})$/.exec(raw);
  if (!m) return raw;
  const [, flam, letter, sup, con] = m;
  const greek = GREEK[letter!];
  if (!greek) return raw;
  const parts = [flam || '', `${greek}${sup ?? ''}`, con].filter(Boolean);
  return parts.join(' ');
}

/**
 * The canonical key for a star, and the fixed order that picks it.
 *
 * Hipparcos first because it is the catalogue every modern tool and every
 * modern note speaks; Henry Draper next because it is the one older material
 * uses; Gliese last, and only when nothing else exists.
 *
 * A star with none of the three gets a key built from its position in this
 * build, prefixed `HYG` so nobody mistakes it for a published designation. That
 * key is NOT stable across catalogue versions, and the object card says so.
 */
export function starKey(s: Star): string {
  if (s.hip) return `HIP ${s.hip}`;
  if (s.hd) return `HD ${s.hd}`;
  if (s.gliese) return s.gliese;
  return `HYG ${s.i}`;
}

/** True when the key is the unstable fallback above. */
export const isLocalKey = (id: string): boolean => id.startsWith('HYG ');

export function starAliases(s: Star): string[] {
  const out: string[] = [];
  const key = starKey(s);
  if (s.proper) out.push(s.proper);
  const desig = readableDesignation(s.desig);
  if (desig) out.push(desig);
  if (s.hip) out.push(`HIP ${s.hip}`);
  if (s.hd) out.push(`HD ${s.hd}`);
  if (s.gliese) out.push(s.gliese);
  // The canonical key is the card's title; it does not need repeating in the
  // list of other names for the same thing.
  return out.filter((a, i) => a !== key && out.indexOf(a) === i);
}

/**
 * The names for an object that are not already on screen as its title or key.
 *
 * 🚨 The alias list has to drop the DISPLAY NAME too, not only the canonical
 * key. The card titles a deep-sky object with its common name and keys it on
 * NGC, so filtering the key alone left "Andromeda Galaxy" listed under "also"
 * on the Andromeda Galaxy's own card. Seen on screen; the unit test for
 * `dsoAliases` stayed green throughout, because that function is right about
 * its own contract — the defect was in what the card asked it for.
 */
const otherNames = (aliases: string[], id: string, name: string): string[] =>
  aliases.filter((a) => a !== id && a !== name);

export function toSkyObject(s: Star): SkyObject {
  const id = starKey(s);
  const name = s.proper || readableDesignation(s.desig) || id;
  return {
    id,
    name,
    kind: 'star',
    ra: s.ra,
    dec: s.dec,
    mag: s.mag,
    con: s.con,
    aliases: otherNames(starAliases(s), id, name),
    star: s,
  };
}

/**
 * The canonical key for a deep-sky object is its NGC/IC designation, with the
 * Messier number as an alias.
 *
 * That is the opposite of how people speak — everyone says M31 — and it is
 * deliberate: only 109 objects have a Messier number and every one of them has
 * an NGC or IC designation too, so NGC/IC is the key that exists for all 3 137.
 * A key scheme that changes shape depending on how famous an object is cannot
 * be relied on by anything that stores it.
 */
export function dsoKey(d: Dso): string {
  return d.name || (d.messier ? `M${d.messier}` : `OpenNGC ${d.i}`);
}

export function dsoAliases(d: Dso): string[] {
  const out: string[] = [];
  if (d.common) out.push(d.common);
  if (d.messier) out.push(`M${d.messier}`);
  const key = dsoKey(d);
  return out.filter((a, i) => a !== key && out.indexOf(a) === i);
}

export function dsoToSkyObject(d: Dso): SkyObject {
  const id = dsoKey(d);
  // Messier before the raw NGC number: someone looking at M31 wants to read
  // "Andromeda Galaxy", and failing that "M31", before "NGC 224".
  const name = d.common || (d.messier ? `M${d.messier}` : d.name);
  return {
    id,
    name,
    kind: 'dso',
    ra: d.ra,
    dec: d.dec,
    mag: d.mag,
    con: d.con,
    aliases: otherNames(dsoAliases(d), id, name),
    dso: d,
  };
}

/**
 * The sentence put to the human's own memory.
 *
 * Both the name and the key travel, and so do the aliases — the notes being
 * searched were written by a person who picked one of these spellings without
 * knowing which one a program would use later. The instruction to answer only
 * from memory and to say so plainly when there is nothing is what lets the
 * panel tell "you have no notes about this" apart from "the request failed",
 * which are two different pieces of news.
 */
export function memoryQuestion(o: SkyObject): string {
  const names = [o.name, o.id, ...o.aliases]
    .map((s) => s.trim())
    .filter((s, i, all) => s && all.indexOf(s) === i);
  const also = names.slice(1).join(', ');
  return (
    `What do my own notes say about ${names[0]}`
    + (also ? ` (also known as ${also})` : '')
    + `? Answer only from my memory. If my memory holds nothing about it, say `
    + `exactly: NOTHING IN MEMORY.`
  );
}
