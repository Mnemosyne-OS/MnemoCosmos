/**
 * The build script's own traps (doc 114 §4.3, §4.6), which no other test fed:
 * the suite encoded stars whose distance was ALREADY NaN, so the 100 000 pc
 * bound, the Sun row and M24/M40 were held by nothing. Taken from the doc 114
 * verification pass (05/10).
 */
import { describe, it, expect } from 'vitest';
// @ts-expect-error — build script, no types
import { readStars, readDsos, hmsToDegrees, dmsToDegrees, prettyDesignation } from '../scripts/build-catalog.mjs';

const HYG_HEAD = 'id,hip,hd,hr,gl,bf,proper,ra,dec,dist,pmra,pmdec,rv,mag,absmag,spect,ci,x,y,z,vx,vy,vz,rarad,decrad,pmrarad,pmdecrad,bayer,flam,con,comp,comp_primary,base,lum,var,var_min,var_max';
const row = (o: Record<string, string>) => HYG_HEAD.split(',').map((h) => o[h] ?? '').join(',');

describe('build script: readStars', () => {
  const csv = [HYG_HEAD,
    row({ id: '0', proper: 'Sol', mag: '-26.7', dist: '0.0000048', rarad: '0', decrad: '0', con: '' }),
    row({ id: '1', hip: '32349', hd: '48915', gl: 'Gl 244A', bf: '9Alp CMa', proper: 'Sirius', mag: '-1.44', dist: '2.6371', absmag: '1.454', ci: '0.009', rarad: '1.7677943', decrad: '-0.291751', con: 'CMa', spect: 'A0m' }),
    row({ id: '2', hip: '11', mag: '6.2', dist: '100000', absmag: '-18.8', rarad: '0.2', decrad: '0.7', con: 'And' }),
    row({ id: '3', hip: '12', mag: '6.1', dist: '', rarad: '0.3', decrad: '0.7', con: 'And' }),
    row({ id: '4', hip: '13', mag: '', dist: '12', rarad: '0.3', decrad: '0.7', con: 'And' }),
    row({ id: '5', hip: '14', mag: '7.0', dist: '12', rarad: '0.3', decrad: '0.7', con: 'And' }),
    row({ id: '6', hip: '15', mag: '5.0', dist: '150000', rarad: '0.3', decrad: '0.7', con: 'And' }),
  ].join('\n');
  const out = readStars(csv);

  it('skips the Sun row', () => {
    expect(out.sunSkipped).toBe(1);
    expect(out.stars.find((s: { proper: string }) => s.proper === 'Sol')).toBeUndefined();
  });
  it('100000 and 150000 parsecs are UNKNOWN, never a number; absmag goes with them', () => {
    const s2 = out.stars.find((s: { hip: number }) => s.hip === 11);
    const s6 = out.stars.find((s: { hip: number }) => s.hip === 15);
    expect(Number.isNaN(s2.dist)).toBe(true);
    expect(Number.isNaN(s2.absmag)).toBe(true);
    expect(Number.isNaN(s6.dist)).toBe(true);
    expect(out.noDistance).toBe(3); // 100000, '', 150000
  });
  it('a star with no magnitude is dropped, not kept at 0', () => {
    expect(out.stars.find((s: { hip: number }) => s.hip === 13)).toBeUndefined();
    expect(out.omitted).toBe(2); // mag '' and mag 7.0
  });
  it('brightest first', () => {
    expect(out.stars[0].proper).toBe('Sirius');
  });
});

describe('build script: readDsos', () => {
  const head = 'Name;Type;RA;Dec;Const;MajAx;MinAx;PosAng;B-Mag;V-Mag;J-Mag;H-Mag;K-Mag;SurfBr;Hubble;Pax;Pm-RA;Pm-Dec;RadVel;Redshift;Cstar U-Mag;Cstar B-Mag;Cstar V-Mag;M;NGC;IC;Cstar Names;Identifiers;Common names;NED notes;OpenNGC notes;Sources';
  const r = (o: Record<string, string>) => head.split(';').map((h) => o[h] ?? '').join(';');
  const csv = [head,
    r({ Name: 'NGC0224', Type: 'G', RA: '00:42:44.35', Dec: '+41:16:08.6', Const: 'And', 'V-Mag': '3.44', 'B-Mag': '4.36', M: '031', 'Common names': 'Andromeda Galaxy,Andromeda Nebula' }),
    r({ Name: 'NGC6603', Type: '*Ass', RA: '18:18:26.0', Dec: '-18:24:00', Const: 'Sgr', M: '024', 'Common names': 'Sagittarius Star Cloud' }),
    r({ Name: 'NGC4438', Type: '**', RA: '12:22:12.0', Dec: '+58:04:59', Const: 'UMa', M: '040', 'Common names': 'Winnecke 4' }),
    r({ Name: 'NGC0001', Type: '**', RA: '12:22:12.0', Dec: '+58:04:59', Const: 'UMa' }),
    r({ Name: 'NGC0002', Type: 'Dup', RA: '12:22:12.0', Dec: '+58:04:59', Const: 'UMa', M: '102' }),
    r({ Name: 'NGC0003', Type: 'G', RA: '12:22:12.0', Dec: '-00:30:00', Const: 'Vir', 'V-Mag': '14.5' }),
    r({ Name: 'NGC0004', Type: 'G', RA: '12:22:12.0', Dec: '-00:30:00', Const: 'Vir', 'B-Mag': '12.5' }),
    r({ Name: 'IC0434', Type: 'HII', RA: '05:41:00.0', Dec: '-02:27:00', Const: 'Ori', 'Common names': 'Horsehead Nebula' }),
    r({ Name: 'NGC0771', Type: '*', RA: '02:03:26.0', Dec: '+72:25:16', Const: 'Cas', 'V-Mag': '4.6' }),
  ].join('\n');
  const out = readDsos([csv]);
  const names = out.dsos.map((d: { name: string }) => d.name);
  it('keeps M24 (*Ass) and M40 (**) but drops an unnamed double star', () => {
    expect(names).toContain('NGC 6603');
    expect(names).toContain('NGC 4438');
    expect(names).not.toContain('NGC 1');
  });
  it('OpenNGC spells a single star `*`: an unnamed one is not deep sky', () => {
    expect(names).not.toContain('NGC 771');
  });
  it('drops a Dup even when it carries a Messier number (M102)', () => {
    expect(names).not.toContain('NGC 2');
  });
  it('faint and unnamed is dropped; B stands in for V (and nothing says so)', () => {
    expect(names).not.toContain('NGC 3');
    const n4 = out.dsos.find((d: { name: string }) => d.name === 'NGC 4');
    expect(n4.mag).toBe(12.5);
    expect(Object.keys(n4)).not.toContain('magBand');
  });
  it('no-magnitude named object kept, mag NaN, sorted last', () => {
    const hh = out.dsos.find((d: { name: string }) => d.name === 'IC 434');
    expect(Number.isNaN(hh.mag)).toBe(true);
    expect(out.dsos[out.dsos.length - 1].name).toBe('IC 434');
  });
  it('sexagesimal parsing: the sign belongs to the whole value', () => {
    expect(dmsToDegrees('-00:30:00')).toBeCloseTo(-0.5, 6);
    expect(dmsToDegrees('+41:16:08.6')).toBeCloseTo(41.269056, 5);
    expect(hmsToDegrees('00:42:44.35')).toBeCloseTo(10.68479, 4);
    expect(hmsToDegrees('24:00:00')).toBe(360); // not wrapped by the parser
    expect(prettyDesignation('NGC0224')).toBe('NGC 224');
    expect(prettyDesignation('IC0001')).toBe('IC 1');
    expect(prettyDesignation('NGC2000A')).toBe('NGC 2000A');
  });
});
