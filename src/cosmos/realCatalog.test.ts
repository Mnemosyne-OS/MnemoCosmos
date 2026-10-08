/**
 * The defects the doc 114 verification pass (05/10) found on the REAL shipped
 * catalogue, each held against the very file the cartridge loads.
 */
import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { decodeCatalog } from './catalog';
import { formatDec, formatRa } from './sky';
import { readableDesignation } from './identity';
import { readPlace } from './solar';
import { pool } from '../mnemo/levels';
import { nextQuestion, emptyState } from '../mnemo/review';

const bin = readFileSync(join(__dirname, '..', '..', 'public', 'catalog', 'catalog.bin'));
const cat = decodeCatalog(bin.buffer.slice(bin.byteOffset, bin.byteOffset + bin.byteLength));

describe('coordinates carry their rounding', () => {
  it('no real object prints 60 seconds or 60 arcseconds', () => {
    const bad: string[] = [];
    for (const o of [...cat.stars, ...cat.dsos]) {
      const text = `${formatRa(o.ra)} ${formatDec(o.dec)}`;
      if (/ 60\.0s| 60″| 60′/.test(text)) bad.push(text);
    }
    expect(bad).toEqual([]);
  });

  it('the carry is right at the edges', () => {
    expect(formatDec(-(15 + 37 / 60 + 59.6 / 3600))).toBe('-15° 38′ 00″');
    expect(formatRa(359.99999)).toBe('0h 00m 00.0s');
    expect(formatRa(15 * (22 + 16 / 60 + 49.97 / 3600))).toBe('22h 16m 50.0s');
  });
});

describe('HYG designations read', () => {
  it.each([
    ['23    UMa', '23 UMa'],
    ['37Xi 2Sgr', '37 ξ2 Sgr'],
    ['Mu 1Sco', 'μ1 Sco'],
    ['Kap1Scl', 'κ1 Scl'],
    ['9Alp CMa', '9 α CMa'],
  ])('%s → %s', (raw, want) => {
    expect(readableDesignation(raw)).toBe(want);
  });

  it('a designation it cannot read still loses its padding', () => {
    expect(readableDesignation('Gl  123   A')).toBe('Gl 123 A');
  });

  it('no star of the real catalogue keeps a run of spaces in its designation', () => {
    expect(cat.stars.filter((s) => s.desig && /\s{2,}/.test(readableDesignation(s.desig)))).toEqual([]);
  });
});

describe('the place is typed, never 0, 0', () => {
  it('empty latitude or longitude is refused, not read as 0', () => {
    expect(readPlace('', '', '', '')).toEqual({ ok: false, why: 'latitude' });
    expect(readPlace('48.85', '', '', '')).toEqual({ ok: false, why: 'longitude' });
    expect(readPlace('0', '0', '', 'Null Island')).toMatchObject({ ok: true });
  });
});

describe('quiz options', () => {
  it('in « All », a galaxy is never offered among stars (and the reverse) while the same kind can fill the options', () => {
    const p = pool(cat, 'all');
    const kindOf = new Map(p.map((a) => [a.id, a.kind]));
    for (let seed = 1; seed <= 300; seed++) {
      const q = nextQuestion(p, emptyState(), Date.UTC(2026, 9, 5), seed);
      if (!q) continue;
      const kinds = new Set(q.options.map((o) => kindOf.get(o.id)));
      expect(kinds.size, q.options.map((o) => o.name).join(' / ')).toBe(1);
    }
  });

  it('never two options of the same name (Antennae Galaxies, Alnilam…)', () => {
    for (const fam of ['all', 'galaxies', 'nebulae', 'namedStars'] as const) {
      const p = pool(cat, fam);
      for (let seed = 1; seed <= 300; seed++) {
        const q = nextQuestion(p, emptyState(), Date.UTC(2026, 9, 5), seed);
        if (!q) continue;
        const names = q.options.map((o) => o.name.toLowerCase());
        expect(new Set(names).size, `${fam}: ${names.join(' / ')}`).toBe(names.length);
      }
    }
  });
});
