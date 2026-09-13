/**
 * solar.ts — the Sun, the Moon and the planets, where they actually are.
 *
 * Everything here comes from `astronomy-engine` (MIT, no dependencies, tables
 * compiled into the code) so it works with the network unplugged, which is the
 * only way a cartridge like this is worth anything.
 *
 * Two facts about the shape of this module.
 *
 * 1. AN INSTANT IS ALWAYS AN ARGUMENT, NEVER `Date.now()` READ INSIDE. The
 *    screen shows a specific moment and lets it be changed; a function that
 *    peeked at the clock would quietly disagree with the label above it, and
 *    could not be tested against a known date.
 *
 * 2. A PLACE IS OPTIONAL AND ITS ABSENCE IS NOT A ZERO. Where the observer
 *    stands changes altitude, azimuth and rise/set — and nothing else. With no
 *    place given, those come back `null` and the screen shows a dash. It never
 *    falls back to latitude 0, longitude 0, which is a real location in the
 *    Gulf of Guinea and would produce confident, wrong rise times.
 *    A place is TYPED IN by the human. Never geolocated: this cartridge is
 *    offline by design, and an IP lookup is a personal datum taken without
 *    asking.
 */
import {
  Body, Equator, Horizon, Illumination, MoonPhase, Observer, SearchRiseSet,
} from 'astronomy-engine';

/** The bodies drawn on the sky, in the order they appear in a list. */
export const BODIES = [
  Body.Sun, Body.Moon, Body.Mercury, Body.Venus, Body.Mars,
  Body.Jupiter, Body.Saturn, Body.Uranus, Body.Neptune, Body.Pluto,
] as const;

export type BodyName = (typeof BODIES)[number];

export interface Place {
  /** Degrees north, [-90,90]. */
  latitude: number;
  /** Degrees east, [-180,180]. */
  longitude: number;
  /** Metres above sea level. */
  elevation: number;
  /** What the human called it. Never derived, never geocoded. */
  label: string;
}

export interface BodyPosition {
  body: BodyName;
  /** Right ascension of date, degrees. */
  ra: number;
  /** Declination of date, degrees. */
  dec: number;
  /** Apparent visual magnitude. */
  mag: number | null;
  /** Distance from Earth in astronomical units. */
  au: number | null;
  /** Degrees above the horizon, or null when no place is known. */
  altitude: number | null;
  /** Degrees clockwise from north, or null when no place is known. */
  azimuth: number | null;
}

/**
 * Where the bodies are for one instant.
 *
 * `Equator(..., ofdate: true, aberration: true)` gives coordinates of DATE, not
 * J2000. That is deliberate and it is a mismatch worth naming: the star
 * catalogue is J2000, so a planet plotted against it is off by precession —
 * about 0.3° in 2026, well under the size of the dot. Using J2000 for the
 * planets instead would put them in the wrong place relative to the HORIZON,
 * which is the frame anyone standing outside is actually in. The smaller error
 * was chosen on purpose; `skyEpochNote` in the UI says so.
 */
export function bodiesAt(when: Date, place: Place | null): BodyPosition[] {
  // 🪤 There is no `MakeObserver` in astronomy-engine 2.x — the constructor is
  // the API. The (0,0,0) observer here is used ONLY for the equatorial
  // coordinates, which do not depend on where you stand; nothing horizon-based
  // is computed from it, because that would be a real place in the Gulf of
  // Guinea answering for someone who never said where they are.
  const observer = place
    ? new Observer(place.latitude, place.longitude, place.elevation)
    : new Observer(0, 0, 0);

  return BODIES.map((body): BodyPosition => {
    const eq = Equator(body, when, observer, true, true);
    let mag: number | null = null;
    let au: number | null = null;
    try {
      const illum = Illumination(body, when);
      mag = illum.mag;
      au = illum.geo_dist;
    } catch {
      // Illumination is not defined for every body at every instant. An unknown
      // magnitude is a dash on the card, never a fabricated brightness, and the
      // body is still drawn because its POSITION is known.
      mag = null;
      au = null;
    }
    const horizon = place ? Horizon(when, observer, eq.ra, eq.dec, 'normal') : null;
    return {
      body,
      ra: eq.ra * 15, // astronomy-engine reports RA in HOURS; the rest of this app is degrees.
      dec: eq.dec,
      mag,
      au,
      altitude: horizon ? horizon.altitude : null,
      azimuth: horizon ? horizon.azimuth : null,
    };
  });
}

export interface RiseSet {
  rise: Date | null;
  set: Date | null;
  /**
   * True when the search ran and simply found no event in the window — a
   * circumpolar object in summer, say. Distinct from "we never looked", which
   * is what a null RiseSet means.
   */
  searched: boolean;
}

/**
 * The next rise and the next set within 24 hours of `when`.
 *
 * Returns `null` — the whole object — when there is no place, because rise and
 * set are meaningless without one. Inside it, a `null` rise with `searched:true`
 * means the search ran and the body never crosses the horizon in that window,
 * which the screen words as "does not rise" rather than as a missing value.
 */
export function riseSetAt(body: BodyName, when: Date, place: Place | null): RiseSet | null {
  if (!place) return null;
  const observer = new Observer(place.latitude, place.longitude, place.elevation);
  try {
    const rise = SearchRiseSet(body, observer, +1, when, 1);
    const set = SearchRiseSet(body, observer, -1, when, 1);
    return { rise: rise ? rise.date : null, set: set ? set.date : null, searched: true };
  } catch {
    // A failed search is not "it never rises". Reporting it as such would put a
    // confident astronomical claim on screen off the back of a thrown error.
    return null;
  }
}

export interface MoonState {
  /** 0 = new, 90 = first quarter, 180 = full, 270 = last quarter. */
  phaseAngle: number;
  /** Lit fraction of the disc, 0..1. */
  illuminated: number;
  /** Which of the eight named phases the angle falls in. */
  phase: MoonPhaseName;
}

export type MoonPhaseName =
  | 'new' | 'waxingCrescent' | 'firstQuarter' | 'waxingGibbous'
  | 'full' | 'waningGibbous' | 'lastQuarter' | 'waningCrescent';

/**
 * The eight phase names, from the phase angle.
 *
 * The four "exact" phases are given a window of 1 degree either side, roughly
 * two hours. A scheme that reported "full moon" for the whole 45 degrees around
 * 180 would call a visibly gibbous Moon full for three days.
 */
export function moonPhaseName(angle: number): MoonPhaseName {
  const a = ((angle % 360) + 360) % 360;
  if (a < 1 || a >= 359) return 'new';
  if (Math.abs(a - 90) < 1) return 'firstQuarter';
  if (Math.abs(a - 180) < 1) return 'full';
  if (Math.abs(a - 270) < 1) return 'lastQuarter';
  if (a < 90) return 'waxingCrescent';
  if (a < 180) return 'waxingGibbous';
  if (a < 270) return 'waningGibbous';
  return 'waningCrescent';
}

export function moonAt(when: Date): MoonState {
  const phaseAngle = MoonPhase(when);
  const illum = Illumination(Body.Moon, when);
  return {
    phaseAngle,
    illuminated: illum.phase_fraction,
    phase: moonPhaseName(phaseAngle),
  };
}

/**
 * Reads a place typed by a human, or explains what is wrong with it.
 *
 * Returns a code and not a sentence: this module has no idea what language the
 * screen is in, and an English string returned from here would be one word of
 * English inside a translated panel.
 */
export type PlaceProblem = 'latitude' | 'longitude' | 'elevation';

export function readPlace(
  latitude: string, longitude: string, elevation: string, label: string,
): { ok: true; place: Place } | { ok: false; why: PlaceProblem } {
  const lat = Number(latitude.trim().replace(',', '.'));
  if (!Number.isFinite(lat) || lat < -90 || lat > 90) return { ok: false, why: 'latitude' };
  const lon = Number(longitude.trim().replace(',', '.'));
  if (!Number.isFinite(lon) || lon < -180 || lon > 180) return { ok: false, why: 'longitude' };
  // An empty elevation is 0 metres, which is a real answer to "how high are
  // you" and the right default. An unreadable one is not — that is a typo, and
  // silently treating it as sea level hides it.
  const raw = elevation.trim();
  const elev = raw === '' ? 0 : Number(raw.replace(',', '.'));
  if (!Number.isFinite(elev) || elev < -500 || elev > 9000) return { ok: false, why: 'elevation' };
  return { ok: true, place: { latitude: lat, longitude: lon, elevation: elev, label: label.trim() } };
}
