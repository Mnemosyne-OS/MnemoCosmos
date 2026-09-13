/**
 * The families a person can choose to be asked about.
 *
 * The failure this file guards is the one nobody reports: a tile that says 150
 * and a quiz that runs out after 12, or a family that is offered and cannot
 * produce a fair question.
 */
import { describe, expect, it } from 'vitest';
import type { Catalog, Dso, Star } from '../cosmos/catalog';
import { canStudy, familiesOf, familyProgress, MIN_FOR_QUIZ, pool } from './levels';
import { emptyState, type ReviewState } from './review';

const star = (over: Partial<Star> & { i: number }): Star => ({
  ra: 0, dec: 0, mag: 2, absmag: null, dist: null, ci: null,
  hip: 1000 + over.i, hd: null, con: 'Ori', spect: '', proper: `Star ${over.i}`,
  desig: '', gliese: '', ...over,
});

const dso = (over: Partial<Dso> & { i: number }): Dso => ({
  ra: 0, dec: 0, mag: 8, majAx: null, minAx: null,
  con: 'And', type: 'G', name: `NGC ${over.i}`, common: `Thing ${over.i}`, messier: null,
  ...over,
});

const catalog = (stars: Star[], dsos: Dso[]): Catalog => ({
  stars, dsos,
  truncation: { magLimit: 6.5, starsOmitted: 0, starsNoDistance: 0, dsoOmitted: 0 },
});

const c = catalog(
  [
    star({ i: 0, mag: 0.1, proper: 'Rigel', con: 'Ori' }),
    star({ i: 1, mag: 0.4, proper: 'Betelgeuse', con: 'Ori' }),
    star({ i: 2, mag: 1.6, proper: 'Bellatrix', con: 'Ori' }),
    star({ i: 3, mag: 1.7, proper: 'Alnilam', con: 'Ori' }),
    star({ i: 4, mag: 4.9, proper: 'Faint Named', con: 'And' }),
    star({ i: 5, mag: 5.2, proper: '', desig: 'Kap1Scl', con: 'Scl' }),
  ],
  [
    dso({ i: 224, name: 'NGC 224', common: 'Andromeda Galaxy', messier: 31, type: 'G' }),
    dso({ i: 6205, name: 'NGC 6205', common: '', messier: 13, type: 'GCl' }),
    dso({ i: 1976, name: 'NGC 1976', common: 'Orion Nebula', messier: 42, type: 'HII' }),
    dso({ i: 7000, name: 'NGC 7000', common: 'North America Nebula', messier: null, type: 'EmN' }),
    dso({ i: 40, name: 'NGC 40', common: '', messier: null, type: 'PN' }),
  ],
);

describe('the pool a family draws from', () => {
  it('never offers a star with no name, because four catalogue numbers is not a question', () => {
    // Star 5 has a Bayer designation but no proper name: it belongs in the
    // bright family (which accepts a designation) and not in the named one.
    //
    // Asserted by ID and by COUNT, not by the name that would be printed. The
    // first version checked that 'HIP 1005' was not among the names, which is
    // true even when the filter is removed — the fallback name for that star is
    // 'κ1 Scl', so the assertion passed with the guard deleted. Found by
    // mutation, not by reading.
    const named = pool(c, 'namedStars');
    expect(named.map((a) => a.name)).toContain('Rigel');
    expect(named.map((a) => a.id)).not.toContain('HIP 1005');
    expect(named).toHaveLength(5);
  });

  it('draws distractors for a star from its CONSTELLATION', () => {
    // "Which of these four stars in Orion is Rigel" is a question. "Which of
    // these is Rigel: Rigel, M13, Jupiter, NGC 7000" is not.
    const rigel = pool(c, 'namedStars').find((a) => a.name === 'Rigel')!;
    expect(rigel.group).toBe('Ori');
  });

  it('draws distractors for a deep-sky object from its TYPE', () => {
    const andromeda = pool(c, 'messier').find((a) => a.id === 'NGC 224')!;
    expect(andromeda.group).toBe('G');
    const cluster = pool(c, 'messier').find((a) => a.id === 'NGC 6205')!;
    expect(cluster.group).toBe('GCl');
  });

  it('files every object under the key the rest of the app uses', () => {
    // A pool keyed differently from the catalogue means the quiz marks nothing,
    // because the panel looks the subject's position up by this id.
    expect(pool(c, 'messier').map((a) => a.id).sort())
      .toEqual(['NGC 1976', 'NGC 224', 'NGC 6205']);
  });

  it('sorts a bright-star family by brightness, not by name', () => {
    const bright = pool(c, 'brightStars').map((a) => a.name);
    expect(bright).toContain('Rigel');
    // 4.9 is not a bright star; it is a star you need a chart to find.
    expect(bright).not.toContain('Faint Named');
  });

  it('counts an object once when two rows resolve to the same key', () => {
    // The case this actually guards: HYG carries one ROW per component of a
    // double star, and components share a Henry Draper number. Two rows with no
    // Hipparcos number and the same HD both key on `HD 48915`, and counted
    // twice the tile overstates AND the same object can appear twice among four
    // options — which makes the question unanswerable rather than merely easy.
    //
    // ⚠️ Measured on the shipped catalogue 2026-09-09: ZERO duplicate keys,
    // among stars, among deep-sky objects, and between the two. So this guard
    // does not fire today; it fires the first time the magnitude cut moves or
    // the source adds a component row. The first version of this test used the
    // ordinary fixture, where star and deep-sky keys cannot collide by
    // construction, and stayed green with the guard deleted.
    const twins = catalog(
      [
        star({ i: 0, hip: null, hd: 48915, proper: 'Sirius' }),
        star({ i: 1, hip: null, hd: 48915, proper: 'Sirius B' }),
        star({ i: 2, hip: null, hd: 48915, proper: 'Sirius C' }),
      ],
      [],
    );
    const ids = pool(twins, 'all').map((a) => a.id);
    expect(ids).toEqual(['HD 48915']);
  });

  it('splits the deep sky by what an observer would call it', () => {
    expect(pool(c, 'galaxies').map((a) => a.id)).toEqual(['NGC 224']);
    expect(pool(c, 'clusters').map((a) => a.id)).toEqual(['NGC 6205']);
    expect(pool(c, 'nebulae').map((a) => a.id).sort()).toEqual(['NGC 1976', 'NGC 7000']);
  });
});

describe('the tiles', () => {
  it('shows the number the quiz will actually draw from', () => {
    // Both come from `pool`. A tile counting catalogue rows instead would put a
    // total on screen that the progress bar can never reach.
    for (const f of familiesOf(c)) {
      expect(f.total).toBe(pool(c, f.id).length);
    }
  });

  it('puts "everything" first and the rest biggest first', () => {
    const fams = familiesOf(c);
    expect(fams[0]!.id).toBe('all');
    for (let i = 2; i < fams.length; i++) {
      expect(fams[i - 1]!.total).toBeGreaterThanOrEqual(fams[i]!.total);
    }
  });

  it('offers no tile at all for a family this catalogue cannot fill', () => {
    const bare = catalog([star({ i: 0, proper: 'Only One' })], []);
    expect(familiesOf(bare).map((f) => f.id)).not.toContain('galaxies');
  });

  it('refuses a family too small for four honest options, and says how small', () => {
    const small = { id: 'clusters' as const, total: 3 };
    const verdict = canStudy(small);
    expect(verdict.ok).toBe(false);
    expect(verdict.why).toBe('tooSmall');
    // The count travels with the refusal: a tile that goes grey for a reason
    // nobody can see reads as a broken feature.
    expect(verdict.n).toBe(3);
    expect(canStudy({ id: 'clusters', total: 0 }).why).toBe('empty');
    expect(canStudy({ id: 'clusters', total: MIN_FOR_QUIZ }).ok).toBe(true);
  });
});

describe('progress inside a family', () => {
  it('counts cards, never objects', () => {
    const state: ReviewState = { v: 1, cards: { 'NGC 224': { b: 5, d: 0, n: 3 } } };
    const messier = familiesOf(c).find((f) => f.id === 'messier')!;
    const p = familyProgress(messier, c, state, Date.UTC(2026, 8, 9));
    expect(p.studied).toBe(1);
    expect(p.mastered).toBe(1);
    expect(p.due).toBe(1);
    expect(p.ratio).toBeCloseTo(1 / 3, 6);
  });

  it('reports a never-opened family as zero cards, not zero mastery of nothing', () => {
    const messier = familiesOf(c).find((f) => f.id === 'messier')!;
    const p = familyProgress(messier, c, emptyState(), Date.UTC(2026, 8, 9));
    expect(p.studied).toBe(0);
    expect(p.mastered).toBe(0);
  });

  it('ignores a card for an object that is not in this family', () => {
    const state: ReviewState = { v: 1, cards: { 'HIP 1000': { b: 5, d: 0, n: 1 } } };
    const messier = familiesOf(c).find((f) => f.id === 'messier')!;
    expect(familyProgress(messier, c, state, Date.UTC(2026, 8, 9)).studied).toBe(0);
  });
});
