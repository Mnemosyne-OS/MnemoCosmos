/**
 * The ephemerides, and the rule that a place nobody gave is not a place at 0,0.
 *
 * The positions themselves come from astronomy-engine and are its business, not
 * ours — but the reference values below were checked against JPL Horizons on
 * 2026-09-09 (see NOTICE / README), so these assertions are anchored to
 * something outside this repository rather than to whatever the library said
 * the day the test was written.
 */
import { describe, expect, it } from 'vitest';
import { Body } from 'astronomy-engine';
import { bodiesAt, moonAt, moonPhaseName, readPlace, riseSetAt, type Place } from './solar';

const PARIS: Place = { latitude: 48.85, longitude: 2.35, elevation: 35, label: 'Paris' };
const WHEN = new Date('2026-09-09T21:00:00Z');

describe('where the bodies are', () => {
  it('agrees with JPL Horizons to under a minute of arc', () => {
    // Reference: JPL Horizons, observer at 2.35E 48.85N 35m, 2026-Sep-09 21:00.
    // Measured spread across the five bodies checked: 11 arcseconds worst case.
    const reference: Record<string, [number, number]> = {
      Sun: [168.22262, 5.05444],
      Moon: [152.55322, 10.26663],
      Mars: [110.63435, 22.75887],
      Jupiter: [138.16543, 16.70010],
      Saturn: [13.12761, 2.71881],
    };
    const got = bodiesAt(WHEN, PARIS);
    for (const [name, [ra, dec]] of Object.entries(reference)) {
      const b = got.find((x) => x.body === name)!;
      const dRa = (b.ra - ra) * 3600 * Math.cos((dec * Math.PI) / 180);
      const dDec = (b.dec - dec) * 3600;
      expect(Math.abs(dRa), `${name} right ascension`).toBeLessThan(60);
      expect(Math.abs(dDec), `${name} declination`).toBeLessThan(60);
    }
  });

  it('reports right ascension in DEGREES, like everything else here', () => {
    // astronomy-engine hands back HOURS. A missing conversion is a 15x error
    // that still produces a plausible-looking sky, which is why it gets a test
    // rather than a comment.
    const sun = bodiesAt(WHEN, PARIS).find((b) => b.body === Body.Sun)!;
    expect(sun.ra).toBeGreaterThan(160);
    expect(sun.ra).toBeLessThan(175);
  });

  it('gives no altitude and no azimuth when nobody said where they are', () => {
    // The trap: falling back to (0,0) is a real place in the Gulf of Guinea and
    // would produce confident, wrong answers for everyone who never typed one.
    for (const b of bodiesAt(WHEN, null)) {
      expect(b.altitude).toBeNull();
      expect(b.azimuth).toBeNull();
    }
  });

  it('still gives the equatorial position with no place, because it does not depend on one', () => {
    const withPlace = bodiesAt(WHEN, PARIS).find((b) => b.body === Body.Jupiter)!;
    const without = bodiesAt(WHEN, null).find((b) => b.body === Body.Jupiter)!;
    // Topocentric parallax is real for the Moon and negligible for Jupiter.
    expect(without.ra).toBeCloseTo(withPlace.ra, 2);
    expect(without.dec).toBeCloseTo(withPlace.dec, 2);
  });

  it('reads the clock only from its argument', () => {
    const a = bodiesAt(new Date('2026-01-01T00:00:00Z'), PARIS)[0]!;
    const b = bodiesAt(new Date('2026-07-01T00:00:00Z'), PARIS)[0]!;
    expect(a.ra).not.toBeCloseTo(b.ra, 1);
  });
});

describe('rise and set', () => {
  it('is the whole object that is null when there is no place', () => {
    // Not `{rise: null, set: null}` — that would say the search ran and found
    // nothing, which is a different sentence on screen.
    expect(riseSetAt(Body.Jupiter, WHEN, null)).toBeNull();
  });

  it('finds a rise within the next day from a real place', () => {
    const rs = riseSetAt(Body.Jupiter, WHEN, PARIS)!;
    expect(rs.searched).toBe(true);
    expect(rs.rise).toBeInstanceOf(Date);
    expect(rs.rise!.getTime()).toBeGreaterThan(WHEN.getTime());
    expect(rs.rise!.getTime() - WHEN.getTime()).toBeLessThanOrEqual(86_400_000);
  });

  it('says "searched, found nothing" for a body that does not rise where you are', () => {
    // Midsummer at the North Pole: the Sun is up the whole day, so there is no
    // rise event. That is not a failure and must not read as one.
    const pole: Place = { latitude: 89.9, longitude: 0, elevation: 0, label: 'North Pole' };
    const rs = riseSetAt(Body.Sun, new Date('2026-06-21T12:00:00Z'), pole)!;
    expect(rs.searched).toBe(true);
    expect(rs.rise).toBeNull();
  });
});

describe('the Moon', () => {
  it('names the four exact phases only when they are exact', () => {
    expect(moonPhaseName(0)).toBe('new');
    expect(moonPhaseName(359.5)).toBe('new');
    expect(moonPhaseName(90)).toBe('firstQuarter');
    expect(moonPhaseName(180)).toBe('full');
    expect(moonPhaseName(270)).toBe('lastQuarter');
    // A scheme with a wide window would call a visibly gibbous Moon "full" for
    // three days.
    expect(moonPhaseName(170)).toBe('waxingGibbous');
    expect(moonPhaseName(190)).toBe('waningGibbous');
  });

  it('covers the whole circle, in the right order', () => {
    expect(moonPhaseName(45)).toBe('waxingCrescent');
    expect(moonPhaseName(135)).toBe('waxingGibbous');
    expect(moonPhaseName(225)).toBe('waningGibbous');
    expect(moonPhaseName(315)).toBe('waningCrescent');
  });

  it('normalises an angle from outside the circle rather than falling off the end', () => {
    expect(moonPhaseName(-90)).toBe('lastQuarter');
    expect(moonPhaseName(450)).toBe('firstQuarter');
  });

  it('reports a lit fraction between none and all of it', () => {
    const m = moonAt(WHEN);
    expect(m.illuminated).toBeGreaterThanOrEqual(0);
    expect(m.illuminated).toBeLessThanOrEqual(1);
    expect(m.phase).toBe(moonPhaseName(m.phaseAngle));
  });
});

describe('reading a place someone typed', () => {
  it('accepts a plain one', () => {
    const r = readPlace('48.85', '2.35', '35', 'Paris');
    expect(r.ok).toBe(true);
    if (r.ok) expect(r.place).toEqual({ latitude: 48.85, longitude: 2.35, elevation: 35, label: 'Paris' });
  });

  it('accepts a comma as a decimal separator, because half of Europe types one', () => {
    const r = readPlace('48,85', '2,35', '', '');
    expect(r.ok).toBe(true);
    if (r.ok) expect(r.place.latitude).toBeCloseTo(48.85, 6);
  });

  it('treats an empty elevation as sea level and an unreadable one as a typo', () => {
    // "How high are you" has a sensible default. "qq" does not — silently
    // reading it as 0 hides a mistake the person can still fix.
    expect(readPlace('0', '0', '', '').ok).toBe(true);
    expect(readPlace('0', '0', 'qq', '')).toEqual({ ok: false, why: 'elevation' });
  });

  it('names the field that is wrong, not "invalid input"', () => {
    expect(readPlace('91', '0', '0', '')).toEqual({ ok: false, why: 'latitude' });
    expect(readPlace('0', '181', '0', '')).toEqual({ ok: false, why: 'longitude' });
    expect(readPlace('nope', '0', '0', '')).toEqual({ ok: false, why: 'latitude' });
  });

  it('accepts the extremes, which are real places', () => {
    expect(readPlace('-90', '-180', '-400', '').ok).toBe(true);
    expect(readPlace('90', '180', '8848', 'Everest').ok).toBe(true);
  });
});
