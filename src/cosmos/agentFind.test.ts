import { describe, expect, it } from 'vitest';
import { findNamed, nameWords, type Named } from './agentFind';

const named = (id: string, ...names: string[]): Named<string> => ({ item: id, id, names, label: names[0]! });
const CONSTS = [
  named('UMa', 'Ursa Major', 'Grande Ourse', 'Osa Mayor'),
  named('UMi', 'Ursa Minor', 'Petite Ourse', 'Osa Menor'),
  named('Ori', 'Orion', 'Orión'),
  named('Cir', 'Circinus', 'Compass'),
  named('Pyx', 'Pyxis', 'Compass'),
];
const kind = { code: 'NO_CONSTELLATION', noun: 'constellation' };

describe('a constellation named the way a person says it', () => {
  it('folds case, accents, fillers and a plural', () => {
    expect(nameWords("la constellation d'Orión")).toEqual(['orion']);
    expect(nameWords('les Pléiades')).toEqual(['pleiade']);
    expect(nameWords('la planète Mars')).toEqual(['mar']);
  });

  it('an id, the whole name in any language, or every word of it', () => {
    expect(findNamed(CONSTS, 'uma', kind)).toBe('UMa');
    expect(findNamed(CONSTS, 'la Grande Ourse', kind)).toBe('UMa');
    expect(findNamed(CONSTS, 'osa menor', kind)).toBe('UMi');
    expect(findNamed(CONSTS, "la constellation d'Orion", kind)).toBe('Ori');
    expect(findNamed(CONSTS, 'major', kind)).toBe('UMa');
  });

  it('several matches are refused with their names, never the first taken', () => {
    expect(() => findNamed(CONSTS, 'ourse', kind)).toThrow('AMBIGUOUS: "ourse" names several constellations: Ursa Major, Ursa Minor; say which');
    // Two constellations share the same English common name: still refused.
    expect(() => findNamed(CONSTS, 'compass', kind)).toThrow(/^AMBIGUOUS: .*Circinus, Pyxis/);
  });

  it('no match is refused with the names that exist', () => {
    expect(() => findNamed(CONSTS, 'Dragon', kind)).toThrow('NO_CONSTELLATION: no constellation named "Dragon"; constellations: Ursa Major, Ursa Minor, Orion, Circinus, Pyxis');
    expect(() => findNamed(CONSTS, ' ', kind)).toThrow(/^BAD_ARG/);
    expect(() => findNamed([], 'orion', kind)).toThrow('constellations: none');
  });
});
