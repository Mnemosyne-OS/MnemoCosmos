/**
 * levels.ts — what you can choose to be asked about, and how far along you are.
 *
 * The Atlas cartridge derived one level per anatomical system from the loaded
 * body. The same idea, one layer up: a FAMILY here is a way of slicing the
 * catalogue that a person would actually study — the Messier list, the named
 * stars, the galaxies. They are DERIVED from the catalogue that is loaded, so a
 * family the shipped data cannot fill produces no tile rather than an empty one.
 *
 * Everything here is pure and takes `now` as an argument, so the same rules can
 * be tested against a date rather than against whatever the clock says.
 *
 * Three decisions, each one a way this screen could mislead:
 *
 * 1. THE TILE'S TOTAL IS WHAT THE QUIZ WILL ACTUALLY ASK. Both come from the
 *    same function. Counting catalogue rows on the tile and asking about a
 *    filtered pool in the quiz would put "3 137 objects" on a tile that runs
 *    out after 150, and the progress bar would never reach the end for a
 *    reason nobody could see.
 *
 * 2. A FAMILY TOO SMALL FOR A FAIR QUESTION SAYS SO INSTEAD OF STARTING. Four
 *    options need four candidates. With three, either the quiz shows fewer
 *    options — a question that got easier without saying so — or it borrows
 *    from another family, which is the one thing that makes a right answer
 *    meaningless.
 *
 * 3. PROGRESS IS A COUNT OF CARDS, NEVER A COUNT OF OBJECTS. A family never
 *    opened has no cards, so it reads zero-of-many. It must never read as
 *    "mastered 0%" of something measured — the panel decides how to render an
 *    unread store; this file only reports what the cards say.
 */
import type { Catalog, Dso, Star } from '../cosmos/catalog';
import { dsoKey, dsoToSkyObject, starKey, toSkyObject } from '../cosmos/identity';
import { dayOf, TOP_BOX, type Askable, type ReviewState } from './review';

/** Four options need four candidates; below that a question cannot be fair. */
export const MIN_FOR_QUIZ = 4;

export type FamilyId =
  | 'all' | 'messier' | 'namedStars' | 'brightStars'
  | 'galaxies' | 'clusters' | 'nebulae';

export interface Family {
  id: FamilyId;
  /** Objects askable in it — the same number the quiz will draw from. */
  total: number;
}

export interface FamilyProgress {
  /** Cards that exist for this family. */
  studied: number;
  /** Cards in the last box. */
  mastered: number;
  /** Cards whose due day has arrived. */
  due: number;
  /** 0..1 of the family's objects that have reached the last box. */
  ratio: number;
}

/** OpenNGC type codes, grouped the way an observer groups them. */
const GALAXY_TYPES = new Set(['G', 'GPair', 'GTrpl', 'GGroup']);
const CLUSTER_TYPES = new Set(['OCl', 'GCl', 'Cl+N']);
const NEBULA_TYPES = new Set(['PN', 'HII', 'DrkN', 'EmN', 'Neb', 'RfN', 'SNR']);

/**
 * A star bright enough to be worth naming as a quiz subject.
 *
 * 2.5 is roughly the brightness of the fainter stars in the Big Dipper: the
 * stars a person learning the sky can actually point at. Every star in the
 * catalogue would technically make a question, and a question about the
 * 6th-magnitude star four arcminutes from another 6th-magnitude star measures
 * nothing but the size of the marker ring.
 */
const BRIGHT_STAR_MAG = 2.5;

/**
 * The pool for a family, already in the shape `nextQuestion` wants.
 *
 * `group` is what the distractors are drawn from. For a star it is its
 * CONSTELLATION, because "which of these four stars in Orion is Rigel" is a
 * real question and "which of these is Rigel: Rigel, M13, Jupiter, NGC 7000"
 * is not. For a deep-sky object it is its TYPE, for the same reason: three
 * galaxies beside a galaxy.
 */
export function pool(catalog: Catalog, family: FamilyId): Askable[] {
  const starOf = (s: Star): Askable => {
    const o = toSkyObject(s);
    return { id: starKey(s), name: o.name, group: s.con || 'sky' };
  };
  const dsoOf = (d: Dso): Askable => {
    const o = dsoToSkyObject(d);
    return { id: dsoKey(d), name: o.name, group: d.type || 'sky' };
  };

  // A star with no name is not askable: the answer would have to be printed as
  // its catalogue number, and four catalogue numbers is a test of nothing.
  const named = catalog.stars.filter((s) => s.proper);
  const bright = catalog.stars.filter((s) => s.mag <= BRIGHT_STAR_MAG && (s.proper || s.desig));

  switch (family) {
    case 'messier':
      return catalog.dsos.filter((d) => d.messier).map(dsoOf);
    case 'namedStars':
      return named.map(starOf);
    case 'brightStars':
      return bright.map(starOf);
    case 'galaxies':
      return catalog.dsos.filter((d) => GALAXY_TYPES.has(d.type) && (d.common || d.messier)).map(dsoOf);
    case 'clusters':
      return catalog.dsos.filter((d) => CLUSTER_TYPES.has(d.type) && (d.common || d.messier)).map(dsoOf);
    case 'nebulae':
      return catalog.dsos.filter((d) => NEBULA_TYPES.has(d.type) && (d.common || d.messier)).map(dsoOf);
    case 'all':
    default: {
      // Union, deduplicated by key: a Messier galaxy is in `messier` and in
      // `galaxies`, and counting it twice would inflate the tile AND let the
      // same object appear twice among four options.
      const seen = new Set<string>();
      const out: Askable[] = [];
      for (const a of [...named.map(starOf), ...catalog.dsos.filter((d) => d.common || d.messier).map(dsoOf)]) {
        if (seen.has(a.id)) continue;
        seen.add(a.id);
        out.push(a);
      }
      return out;
    }
  }
}

export const FAMILIES: FamilyId[] = [
  'all', 'messier', 'namedStars', 'brightStars', 'galaxies', 'clusters', 'nebulae',
];

/**
 * Every family this catalogue can offer, with the "everything" tile in front
 * and the rest biggest first. A family the data cannot fill produces no tile.
 */
export function familiesOf(catalog: Catalog): Family[] {
  const built = FAMILIES.map((id) => ({ id, total: pool(catalog, id).length }));
  const all = built.find((f) => f.id === 'all')!;
  const rest = built.filter((f) => f.id !== 'all' && f.total > 0).sort((a, b) => b.total - a.total);
  return [all, ...rest];
}

export function familyProgress(
  family: Family, catalog: Catalog, state: ReviewState, now: number,
): FamilyProgress {
  const today = dayOf(now);
  const ids = pool(catalog, family.id).map((a) => a.id);
  let studied = 0, mastered = 0, due = 0;
  for (const id of ids) {
    const c = state.cards[id];
    if (!c) continue;
    studied++;
    if (c.b >= TOP_BOX) mastered++;
    if (c.d <= today) due++;
  }
  // A family with no objects has no ratio to report; zero would read as "none
  // of them mastered", which is a different statement from "empty".
  return { studied, mastered, due, ratio: ids.length ? mastered / ids.length : 0 };
}

/**
 * Whether a family can be studied, and why not when it cannot.
 *
 * The refusal is a CODE, not a sentence. A pure module that returned English
 * prose would have to know the reader's language, and the language is a fact
 * about the screen — the panel turns `why` into words.
 */
export type NoQuizReason = 'empty' | 'tooSmall';

export function canStudy(family: Family): { ok: boolean; why?: NoQuizReason; n: number } {
  if (family.total >= MIN_FOR_QUIZ) return { ok: true, n: family.total };
  return { ok: false, why: family.total === 0 ? 'empty' : 'tooSmall', n: family.total };
}
