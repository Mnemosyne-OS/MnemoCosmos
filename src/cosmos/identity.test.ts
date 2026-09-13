/**
 * The identifier rules are the cartridge's reason to exist: get them wrong and
 * this is a decoration with a search box. Every test here is a way a card could
 * be filed under a key that a later session cannot find again.
 */
import { describe, expect, it } from 'vitest';
import type { Dso, Star } from './catalog';
import {
  dsoAliases, dsoKey, dsoToSkyObject, isLocalKey, memoryQuestion,
  readableDesignation, starAliases, starKey, toSkyObject,
} from './identity';

const star = (over: Partial<Star> = {}): Star => ({
  i: 0, ra: 101.287, dec: -16.716, mag: -1.44, absmag: 1.454, dist: 2.637, ci: 0.009,
  hip: 32349, hd: 48915, con: 'CMa', spect: 'A0m...', proper: 'Sirius',
  desig: '9Alp CMa', gliese: 'Gl 244A', ...over,
});

const dso = (over: Partial<Dso> = {}): Dso => ({
  i: 0, ra: 10.68, dec: 41.27, mag: 3.44, majAx: 199.5, minAx: 70.8,
  con: 'And', type: 'G', name: 'NGC 224', common: 'Andromeda Galaxy', messier: 31, ...over,
});

describe('starKey', () => {
  it('is the Hipparcos number when there is one', () => {
    expect(starKey(star())).toBe('HIP 32349');
  });

  it('falls through Hipparcos, then Henry Draper, then Gliese, in that order', () => {
    expect(starKey(star({ hip: null }))).toBe('HD 48915');
    expect(starKey(star({ hip: null, hd: null }))).toBe('Gl 244A');
  });

  it('marks a key it invented, so nothing downstream mistakes it for published', () => {
    const s = star({ hip: null, hd: null, gliese: '', i: 7331 });
    expect(starKey(s)).toBe('HYG 7331');
    // The card shows a warning off this. Without the marker, a card filed under
    // an index that shifts when the catalogue is rebuilt looks exactly like a
    // card filed under Hipparcos.
    expect(isLocalKey(starKey(s))).toBe(true);
    expect(isLocalKey('HIP 32349')).toBe(false);
    expect(isLocalKey('HD 48915')).toBe(false);
  });
});

describe('readableDesignation', () => {
  it('unpacks the HYG packing into what a chart prints', () => {
    expect(readableDesignation('9Alp CMa')).toBe('9 α CMa');
    expect(readableDesignation('21Alp And')).toBe('21 α And');
  });

  it('keeps a Bayer superscript, which is part of the name', () => {
    // Kappa-1 Sculptoris and Kappa-2 Sculptoris are different stars.
    expect(readableDesignation('Kap1Scl')).toBe('κ1 Scl');
  });

  it('hands back anything it cannot parse, verbatim', () => {
    // A designation this does not recognise is still a designation. Dropping it
    // would remove a name; guessing at it would invent one.
    expect(readableDesignation('V* something odd')).toBe('V* something odd');
    expect(readableDesignation('')).toBe('');
    expect(readableDesignation('12Zzz Xyz')).toBe('12Zzz Xyz');
  });
});

describe('aliases', () => {
  it('lists every other designation an object carries', () => {
    expect(starAliases(star())).toEqual(['Sirius', '9 α CMa', 'HD 48915', 'Gl 244A']);
  });

  it('never repeats the canonical key back as an alias', () => {
    // The key is the card's title; repeating it under "also known as" reads as
    // a bug and takes a line from a real alias.
    expect(starAliases(star())).not.toContain('HIP 32349');
    expect(dsoAliases(dso())).not.toContain('NGC 224');
  });

  it('puts the Messier number in the aliases and the NGC number in the key', () => {
    // Every one of the 109 Messier objects has an NGC or IC number, and 3 028
    // other objects do not have a Messier one. The key that exists for all of
    // them is the one that gets stored.
    expect(dsoKey(dso())).toBe('NGC 224');
    expect(dsoAliases(dso())).toEqual(['Andromeda Galaxy', 'M31']);
  });
});

describe('display names', () => {
  it('shows a star by its proper name when it has one', () => {
    expect(toSkyObject(star()).name).toBe('Sirius');
  });

  it('falls back to the designation, then to the key', () => {
    expect(toSkyObject(star({ proper: '' })).name).toBe('9 α CMa');
    expect(toSkyObject(star({ proper: '', desig: '' })).name).toBe('HIP 32349');
  });

  it('shows a deep-sky object the way people speak about it', () => {
    expect(dsoToSkyObject(dso()).name).toBe('Andromeda Galaxy');
    expect(dsoToSkyObject(dso({ common: '' })).name).toBe('M31');
    expect(dsoToSkyObject(dso({ common: '', messier: null })).name).toBe('NGC 224');
  });

  it('never lists the object it is showing as one of its own other names', () => {
    // Seen on screen: the card titles the object "Andromeda Galaxy", keys it on
    // NGC 224, and listed "Andromeda Galaxy" under "also". The alias function
    // was right; what the card asked it for was not.
    const o = dsoToSkyObject(dso());
    expect(o.aliases).not.toContain(o.name);
    expect(o.aliases).not.toContain(o.id);
    expect(o.aliases).toEqual(['M31']);

    const s = toSkyObject(star());
    expect(s.aliases).not.toContain(s.name);
    expect(s.aliases).not.toContain(s.id);
  });
});

describe('memoryQuestion', () => {
  it('carries the name AND the key AND the aliases', () => {
    // The notes being searched were written by a person who picked one of these
    // spellings without knowing which one a program would use later. Dropping
    // any of them silently narrows the search.
    const q = memoryQuestion(dsoToSkyObject(dso()));
    expect(q).toContain('Andromeda Galaxy');
    expect(q).toContain('NGC 224');
    expect(q).toContain('M31');
  });

  it('asks for the exact phrase the panel keys "nothing found" on', () => {
    // The panel distinguishes "you have no notes" from "the request failed".
    // It can only do that if the model was told what to say for the first.
    expect(memoryQuestion(toSkyObject(star()))).toContain('NOTHING IN MEMORY');
  });

  it('names each spelling once', () => {
    // A DSO whose common name IS its designation would otherwise be listed
    // twice, which reads as the app not knowing what it is looking at.
    const q = memoryQuestion(dsoToSkyObject(dso({ common: 'NGC 224', messier: null })));
    expect(q.match(/NGC 224/g)).toHaveLength(1);
    expect(q).not.toContain('also known as');
  });
});
