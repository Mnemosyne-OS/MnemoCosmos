/**
 * page.tsx — the shell: load the catalogue, hold the view, show what is selected.
 *
 * Three states, never skipped: reading, failed, ready. A cartridge that renders
 * an empty sky while a 650 KB fetch is in flight is indistinguishable from one
 * whose data is missing, and the second is the case worth telling someone about.
 *
 * The two catalogue files are fetched through `assetUrl` because an installed
 * cartridge is served from `mnemo-plugin://app/<id>/`, where a root-absolute
 * path matches no plugin id and 404s.
 */
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { assetUrl } from './asset-url';
import {
  constellationName, decodeCatalog,
  type Catalog, type Constellation, type ConstellationFile,
} from './catalog';
import { dsoToSkyObject, isLocalKey, toSkyObject, type SkyObject } from './identity';
import {
  formatDec, formatDistance, formatRa, lookAt, MAX_FOV, MIN_FOV, type Look,
} from './sky';
import { bodiesAt, moonAt, readPlace, riseSetAt, type BodyPosition, type Place } from './solar';
import { SkyCanvas, type Marked, type SkyLayers } from './SkyCanvas';
import { CosmosMemory } from '../mnemo/CosmosMemory';
import { ReviewPanel } from '../mnemo/ReviewPanel';
import { useI18n } from '../i18n/useI18n';
import type { Key } from '../i18n/strings';
import { GesturePanel } from '../gestures/GesturePanel';

type Load =
  | { kind: 'reading' }
  | { kind: 'failed'; why: string }
  | { kind: 'ready'; catalog: Catalog; constellations: Constellation[] };

const DEFAULT_LOOK: Look = { ra: 90, dec: 20, fov: 65 };

const DEFAULT_LAYERS: SkyLayers = {
  figures: true,
  constellationNames: true,
  deepSky: true,
  planets: true,
  starNames: true,
  grid: false,
  magLimit: 6.5,
};

/** Where the human's declared observing place is kept between sessions. */
const PLACE_KEY = 'mnemo-cosmos.place';

export function Page() {
  const { t, lang } = useI18n();
  const [load, setLoad] = useState<Load>({ kind: 'reading' });
  const [look, setLook] = useState<Look>(DEFAULT_LOOK);
  const [gestOpen, setGestOpen] = useState(false);
  const [layers, setLayers] = useState<SkyLayers>(DEFAULT_LAYERS);
  const [selected, setSelected] = useState<SkyObject | null>(null);
  const [marked, setMarked] = useState<Marked | null>(null);
  const [hiddenLabel, setHiddenLabel] = useState<string | null>(null);
  const [reviewing, setReviewing] = useState(false);
  const [panel, setPanel] = useState<'none' | 'about' | 'place' | 'search'>('none');
  // The review panel, the credits panel and the object card all live in the
  // same corner. Two of them open at once do not look like two panels — the
  // shorter one ends and the other keeps going underneath it, which reads as
  // one panel that has lost its mind. Seen on screen. So opening either one
  // closes the other, and only ever from these two helpers.
  const openReview = () => { setReviewing(true); setPanel('none'); setSelected(null); };
  const openPanel = (p: 'about' | 'search' | 'place') => {
    setPanel((was) => (was === p ? 'none' : p));
    if (p !== 'place') setReviewing(false);
  };
  const [query, setQuery] = useState('');
  const [when, setWhen] = useState<Date>(() => new Date());
  const [place, setPlace] = useState<Place | null>(null);
  const alive = useRef(true);
  // 🪤 The setup RE-ARMS the guard; it does not merely register the cleanup.
  // Written the obvious way — `useEffect(() => () => { alive.current = false }, [])` —
  // the flag is set false by the cleanup and nothing ever sets it back, so any
  // re-mount of this component (React Strict Mode, a Fast Refresh update)
  // leaves every async result silently discarded. Measured: the panel sat on
  // "Reading the catalogue…" forever after one hot update, with no error
  // anywhere, because the fetch resolved into a dead guard.
  useEffect(() => {
    alive.current = true;
    return () => { alive.current = false; };
  }, []);

  // ── the catalogue ────────────────────────────────────────────────────────
  const read = useCallback(() => {
    setLoad({ kind: 'reading' });
    Promise.all([
      fetch(assetUrl('catalog/catalog.bin')).then((r) => {
        if (!r.ok) throw new Error(`catalog.bin → HTTP ${r.status}`);
        return r.arrayBuffer();
      }),
      fetch(assetUrl('catalog/constellations.json')).then((r) => {
        if (!r.ok) throw new Error(`constellations.json → HTTP ${r.status}`);
        return r.json() as Promise<ConstellationFile>;
      }),
    ])
      .then(([bin, consts]) => {
        if (!alive.current) return;
        setLoad({ kind: 'ready', catalog: decodeCatalog(bin), constellations: consts.constellations });
      })
      .catch((err: unknown) => {
        if (!alive.current) return;
        const why = err instanceof Error ? err.message : String(err);
        // Never swallowed. An empty sky and a failed fetch look identical.
        console.warn('[cosmos] catalogue not read:', why);
        setLoad({ kind: 'failed', why });
      });
  }, []);

  useEffect(read, [read]);

  // ── the human's place, remembered ────────────────────────────────────────
  useEffect(() => {
    try {
      const raw = localStorage.getItem(PLACE_KEY);
      if (!raw) return;
      const p = JSON.parse(raw) as Partial<Place>;
      if (typeof p.latitude === 'number' && typeof p.longitude === 'number') {
        setPlace({
          latitude: p.latitude,
          longitude: p.longitude,
          elevation: typeof p.elevation === 'number' ? p.elevation : 0,
          label: typeof p.label === 'string' ? p.label : '',
        });
      }
    } catch (err) {
      // A private window, cleared site data, or storage that throws. Nothing is
      // lost that matters, and the panel simply starts with no place — which is
      // a state it already renders honestly.
      console.warn('[cosmos] stored place not read:', err);
    }
  }, []);

  const bodies: BodyPosition[] = useMemo(
    () => (layers.planets ? bodiesAt(when, place) : []),
    [when, place, layers.planets],
  );
  const moon = useMemo(() => moonAt(when), [when]);

  const constellationLabel = useCallback(
    (c: Constellation) => constellationName(c, lang),
    [lang],
  );
  const bodyLabel = useCallback((body: string) => t(`body.${body}` as Key), [t]);
  // 🚨 Hoisted out of the JSX. `<ReviewPanel>` is rendered inside `{reviewing &&
  // …}`, so a `useCallback` written at that call site would run only on the
  // renders where the panel exists — a hook whose ORDER changes, which React
  // reports as "change in the order of Hooks" and which takes the whole tree
  // down. It also has to be stable: ReviewPanel lists it in an effect's
  // dependencies, and a new identity each render would re-run that effect.
  const lookAtObject = useCallback(
    (at: Marked) => setLook((l) => lookAt(l, at.ra, at.dec)),
    [],
  );

  // ── selection ────────────────────────────────────────────────────────────
  /**
   * A body as a selectable object. One definition, used by the picker AND by
   * the search — a second one written at the other call site is how the card
   * you reach by clicking ends up saying something different from the card you
   * reach by searching for the same planet.
   */
  const bodyObject = useCallback((b: BodyPosition): SkyObject => ({
    id: b.body,
    name: t(`body.${b.body}` as Key),
    kind: 'body',
    ra: b.ra,
    dec: b.dec,
    mag: b.mag,
    con: '',
    aliases: [],
  }), [t]);

  const onPick = useCallback((hit: { kind: 'star' | 'dso' | 'body'; index: number } | null) => {
    if (load.kind !== 'ready') return;
    if (!hit) { setSelected(null); return; }
    if (hit.kind === 'star') { setSelected(toSkyObject(load.catalog.stars[hit.index]!)); return; }
    if (hit.kind === 'dso') { setSelected(dsoToSkyObject(load.catalog.dsos[hit.index]!)); return; }
    const b = bodies[hit.index];
    if (b) setSelected(bodyObject(b));
  }, [load, bodies, bodyObject]);

  // A body moves. Its card has to move with it, or the coordinates on screen
  // are from whenever it was clicked and the altitude is simply wrong.
  const selectedBody = selected?.kind === 'body'
    ? bodies.find((b) => b.body === selected.id) ?? null
    : null;
  const riseSet = selectedBody ? riseSetAt(selectedBody.body, when, place) : null;

  // ── search ───────────────────────────────────────────────────────────────
  const results = useMemo(() => {
    if (load.kind !== 'ready') return [];
    const q = query.trim().toLowerCase();
    if (q.length < 2) return [];
    const out: SkyObject[] = [];
    const matches = (o: SkyObject) =>
      o.name.toLowerCase().includes(q)
      || o.id.toLowerCase().includes(q)
      || o.aliases.some((a) => a.toLowerCase().includes(q));
    // Sun, Moon and planets FIRST, and they are in here at all because someone
    // typing "Jupiter" into a sky atlas means the planet. Left out, the search
    // answered "nothing in the catalogue matches that" for the ten objects
    // anyone would try first — which is true of the catalogue and false of the
    // screen, since they are drawn right there.
    for (const b of bodies) {
      const o = bodyObject(b);
      if (matches(o)) out.push(o);
    }
    // Stars are already brightest-first from the build script, so the first
    // twenty hits are the twenty most prominent ones, not the first twenty rows.
    for (const s of load.catalog.stars) {
      if (out.length >= 20) break;
      const o = toSkyObject(s);
      if (matches(o)) out.push(o);
    }
    for (const d of load.catalog.dsos) {
      if (out.length >= 40) break;
      const o = dsoToSkyObject(d);
      if (matches(o)) out.push(o);
    }
    return out;
  }, [load, query, bodies, bodyObject]);

  const goTo = (o: SkyObject) => {
    setSelected(o);
    setLook((l) => lookAt(l, o.ra, o.dec));
    setPanel('none');
  };

  // ── render ───────────────────────────────────────────────────────────────
  if (load.kind === 'reading') {
    return <main className="boot"><p role="status">{t('app.loading')}</p></main>;
  }
  if (load.kind === 'failed') {
    return (
      <main className="boot">
        <p role="alert">{t('app.failed', { why: load.why })}</p>
        <button type="button" className="btn btn-accent" onClick={read}>{t('app.retry')}</button>
      </main>
    );
  }

  const { catalog, constellations } = load;
  const trunc = catalog.truncation;
  const messierCount = catalog.dsos.filter((d) => d.messier).length;

  return (
    <main className="cosmos">
      <SkyCanvas
        stars={catalog.stars}
        dsos={catalog.dsos}
        constellations={constellations}
        bodies={bodies}
        layers={layers}
        look={look}
        onLook={setLook}
        onPick={onPick}
        selected={selected ? { ra: selected.ra, dec: selected.dec } : null}
        quizTarget={marked}
        hiddenLabel={hiddenLabel}
        constellationLabel={constellationLabel}
        bodyLabel={bodyLabel}
        onRecenter={() => setLook(DEFAULT_LOOK)}
      />

      <header className="topbar">
        <div className="brand">
          <span className="eyebrow">{t('app.eyebrow')}</span>
          <strong>Cosmos</strong>
        </div>
        <button type="button" className="btn btn-ghost" onClick={() => openPanel('search')}>
          {t('app.search')}
        </button>
        <span className="counts">
          {t('app.objects', { stars: catalog.stars.length, dsos: catalog.dsos.length })}
        </span>
        <button type="button" className="btn btn-ghost" onClick={() => openPanel('about')}>
          {t('credits.open')}
        </button>
        <button
          type="button"
          className="btn btn-ghost"
          onClick={() => setGestOpen(true)}
          aria-label={t('gest.open')}
          title={t('gest.open')}
        >
          ✋
        </button>
        <button type="button" className="btn btn-accent" onClick={openReview}>
          {t('review.open')}
        </button>
      </header>

      <GesturePanel
        open={gestOpen}
        onClose={() => setGestOpen(false)}
        words={{
          title: t('gest.title'), lead: t('gest.lead'), asking: t('gest.asking'), granted: t('gest.granted'),
          refused: (why) => t('gest.refused', { why }), speeds: t('gest.speeds'), reset: t('gest.reset'),
          loading: t('gest.loading'), unsaved: (why) => t('gest.unsaved', { why }),
          inApp: t('gest.inApp'), os: t('gest.os'), close: t('gest.close'),
        }}
        speedRows={[{ key: 'move', label: t('gest.speed.move') }, { key: 'zoom', label: t('gest.speed.zoom') }]}
        appRows={[
          { icon: '🤏', text: t('gest.pan') },
          { icon: '↕️', text: t('gest.depth') },
          { icon: '🤏🤏', text: t('gest.zoom') },
          { icon: '✋✋', text: t('gest.recenter') },
          { icon: '👌', text: t('gest.select') },
        ]}
        osRows={[
          { icon: '🖐️', text: t('gest.osFull') },
          { icon: '✊', text: t('gest.osClose') },
          { icon: '🤏', text: t('gest.osWindow') },
        ]}
      />

      {panel === 'search' && (
        <section className="panel search-panel">
          <input
            autoFocus
            type="search"
            value={query}
            placeholder={t('app.search')}
            onChange={(e) => setQuery(e.target.value)}
          />
          {query.trim().length >= 2 && results.length === 0 && (
            <p className="note">{t('app.noResults')}</p>
          )}
          <ul className="results">
            {results.map((o) => (
              <li key={`${o.kind}:${o.id}`}>
                <button type="button" onClick={() => goTo(o)}>
                  <span>{o.name}</span>
                  <code>{o.id}</code>
                </button>
              </li>
            ))}
          </ul>
        </section>
      )}

      <aside className="controls panel">
        <label><input type="checkbox" checked={layers.figures} onChange={(e) => setLayers({ ...layers, figures: e.target.checked })} /> {t('sky.figures')}</label>
        <label><input type="checkbox" checked={layers.constellationNames} onChange={(e) => setLayers({ ...layers, constellationNames: e.target.checked })} /> {t('sky.names')}</label>
        <label><input type="checkbox" checked={layers.starNames} onChange={(e) => setLayers({ ...layers, starNames: e.target.checked })} /> {t('sky.starNames')}</label>
        <label><input type="checkbox" checked={layers.deepSky} onChange={(e) => setLayers({ ...layers, deepSky: e.target.checked })} /> {t('sky.deepSky')}</label>
        <label><input type="checkbox" checked={layers.planets} onChange={(e) => setLayers({ ...layers, planets: e.target.checked })} /> {t('sky.planets')}</label>
        <label><input type="checkbox" checked={layers.grid} onChange={(e) => setLayers({ ...layers, grid: e.target.checked })} /> {t('sky.grid')}</label>
        <label className="slider">
          {t('sky.magFilter')} <b>{layers.magLimit.toFixed(1)}</b>
          <input
            type="range" min={1} max={trunc.magLimit} step={0.1} value={layers.magLimit}
            onChange={(e) => setLayers({ ...layers, magLimit: Number(e.target.value) })}
          />
        </label>
        <label className="slider">
          {t('sky.fov')} <b>{Math.round(look.fov)}°</b>
          <input
            type="range" min={MIN_FOV} max={MAX_FOV} step={1} value={Math.round(look.fov)}
            onChange={(e) => setLook({ ...look, fov: Number(e.target.value) })}
          />
        </label>
        <button type="button" className="btn" onClick={() => setLook(DEFAULT_LOOK)}>{t('sky.reset')}</button>
      </aside>

      <TimeAndPlace
        when={when} setWhen={setWhen}
        place={place} setPlace={setPlace}
        open={panel === 'place'}
        onToggle={() => openPanel('place')}
      />

      {selected && (
        <section className={`panel card-panel${reviewing ? ' beside-review' : ''}`}>
          <header className="panel-head">
            <div>
              <h2>{selected.name}</h2>
              <code className="key">{selected.id}</code>
            </div>
            <button type="button" className="btn btn-ghost" onClick={() => setSelected(null)} aria-label={t('app.close')}>✕</button>
          </header>

          {selected.aliases.length > 0 && (
            <p className="aliases">
              <span>{t('card.alsoKnown')}</span> {selected.aliases.join(' · ')}
            </p>
          )}
          {selected.kind === 'star' && isLocalKey(selected.id) && (
            <p className="note warn">{t('card.unstableId')}</p>
          )}

          <dl className="facts">
            <Fact label={t('card.magnitude')} hint={t('card.magnitude.hint')}
              value={(selectedBody?.mag ?? selected.mag)?.toFixed(2) ?? null} />
            {selected.star && (
              <>
                <Fact label={t('card.absmag')} hint={t('card.absmag.hint')}
                  value={selected.star.absmag?.toFixed(2) ?? null} />
                <Fact label={t('card.distance')} value={formatDistance(selected.star.dist)} />
                <Fact label={t('card.spectral')} value={selected.star.spect || null} />
              </>
            )}
            {selected.dso && (
              <>
                <Fact label={t('card.type')} value={t(`type.${selected.dso.type}` as Key) || selected.dso.type} />
                <Fact
                  label={t('card.size')}
                  value={selected.dso.majAx === null ? null
                    : `${selected.dso.majAx.toFixed(1)}′${selected.dso.minAx !== null ? ` × ${selected.dso.minAx.toFixed(1)}′` : ''}`}
                />
              </>
            )}
            {selectedBody && (
              <Fact label={t('card.au')} value={selectedBody.au === null ? null : `${selectedBody.au.toFixed(3)} AU`} />
            )}
            {selected.id === 'Moon' && (
              <>
                <Fact label={t('card.phase')} value={t(`moon.${moon.phase}` as Key)} />
                <Fact label={t('card.illuminated', { pct: Math.round(moon.illuminated * 100) })} value=" " />
              </>
            )}
            <Fact label={t('card.constellation')} value={selected.con || null} />
            <Fact
              label={selected.kind === 'body' ? t('card.positionNow') : t('card.position')}
              value={`${formatRa(selectedBody?.ra ?? selected.ra)}  ${formatDec(selectedBody?.dec ?? selected.dec)}`}
            />
            {selectedBody && (
              <>
                <Fact label={t('card.altitude')} value={selectedBody.altitude === null ? null : `${selectedBody.altitude.toFixed(1)}°`} />
                <Fact label={t('card.azimuth')} value={selectedBody.azimuth === null ? null : `${selectedBody.azimuth.toFixed(1)}°`} />
              </>
            )}
          </dl>

          {selected.star?.dist === null && <p className="note">{t('card.noDistance')}</p>}

          {selectedBody && !place && <p className="note">{t('card.noPlace')}</p>}
          {riseSet && (
            <dl className="facts">
              <Fact label={t('card.rises')} value={riseSet.rise ? riseSet.rise.toLocaleString() : t('card.neverRises')} />
              <Fact label={t('card.sets')} value={riseSet.set ? riseSet.set.toLocaleString() : t('card.neverSets')} />
            </dl>
          )}

          <button type="button" className="btn" onClick={() => setLook(lookAt(look, selected.ra, selected.dec))}>
            {t('card.centre')}
          </button>

          <CosmosMemory object={selected} />
        </section>
      )}

      {panel === 'about' && (
        <section className="panel about-panel">
          <header className="panel-head">
            <h2>{t('trunc.title')}</h2>
            <button type="button" className="btn btn-ghost" onClick={() => setPanel('none')} aria-label={t('app.close')}>✕</button>
          </header>
          <p>{t('trunc.stars', {
            limit: trunc.magLimit.toFixed(1),
            kept: catalog.stars.length,
            omitted: trunc.starsOmitted,
          })}</p>
          <p>{t('trunc.noDistance', { n: trunc.starsNoDistance })}</p>
          <p>{t('trunc.dsos', {
            kept: catalog.dsos.length,
            messier: messierCount,
            omitted: trunc.dsoOmitted,
          })}</p>
          <p>{t('trunc.sphere')}</p>
          <h3>{t('credits.title')}</h3>
          <ul className="credits">
            <li>{t('credits.stars')}</li>
            <li>{t('credits.dsos')}</li>
            <li>{t('credits.figures')}</li>
            <li>{t('credits.ephemeris')}</li>
          </ul>
          <p className="note">{t('credits.accuracy')}</p>
          <p className="note">{t('credits.derived')}</p>
        </section>
      )}

      {reviewing && (
        <ReviewPanel
          catalog={catalog}
          onMark={setMarked}
          onLookAt={lookAtObject}
          onHideLabel={setHiddenLabel}
          onClose={() => { setReviewing(false); setMarked(null); setHiddenLabel(null); }}
        />
      )}
    </main>
  );
}

/**
 * One line of the object card.
 *
 * `null` renders an em dash. That is the whole point of this component existing
 * rather than being inlined nine times: an unmeasured quantity has exactly one
 * rendering, and it is not `0`, not blank, and not omitted — an omitted row
 * reads as a field the app forgot, which sends people looking for a bug.
 */
function Fact({ label, value, hint }: { label: string; value: string | null; hint?: string }) {
  return (
    <>
      <dt title={hint}>{label}</dt>
      <dd className={value === null ? 'unknown' : ''}>{value === null ? '—' : value}</dd>
    </>
  );
}

/** The instant on screen, and the place it is seen from. */
function TimeAndPlace({
  when, setWhen, place, setPlace, open, onToggle,
}: {
  when: Date;
  setWhen: (d: Date) => void;
  place: Place | null;
  setPlace: (p: Place | null) => void;
  open: boolean;
  onToggle: () => void;
}) {
  const { t } = useI18n();
  const [lat, setLat] = useState(() => (place ? String(place.latitude) : ''));
  const [lon, setLon] = useState(() => (place ? String(place.longitude) : ''));
  const [elev, setElev] = useState(() => (place ? String(place.elevation) : ''));
  const [label, setLabel] = useState(() => place?.label ?? '');
  const [problem, setProblem] = useState<string | null>(null);

  const shift = (ms: number) => setWhen(new Date(when.getTime() + ms));

  const save = () => {
    const read = readPlace(lat, lon, elev, label);
    if (!read.ok) {
      // The refusal names the FIELD. "Invalid input" on a form with four fields
      // is a puzzle, not a message.
      setProblem(t(`place.bad.${read.why}` as Key));
      return;
    }
    setProblem(null);
    setPlace(read.place);
    try {
      localStorage.setItem(PLACE_KEY, JSON.stringify(read.place));
    } catch (err) {
      // The place still works for this session; only its persistence failed.
      console.warn('[cosmos] place not stored:', err);
    }
  };

  const clear = () => {
    setPlace(null);
    setLat(''); setLon(''); setElev(''); setLabel(''); setProblem(null);
    try { localStorage.removeItem(PLACE_KEY); } catch { /* nothing was stored */ }
  };

  return (
    <section className={`panel time-panel${open ? ' open' : ''}`}>
      <header className="panel-head">
        <div>
          <h3>{t('time.title')}</h3>
          {/* The instant is ALWAYS on screen. A sky with no date on it is a sky
              nobody can check against anything. */}
          <p className="instant">{when.toISOString().replace('T', ' ').slice(0, 19)} {t('time.utc')}</p>
          <p className="instant local">{when.toLocaleString()} {t('time.local')}</p>
        </div>
        <button type="button" className="btn btn-ghost" onClick={onToggle}>{open ? '▾' : '▸'}</button>
      </header>
      <div className="btn-row">
        <button type="button" className="btn" onClick={() => shift(-86400000)}>{t('time.minus1d')}</button>
        <button type="button" className="btn" onClick={() => shift(-3600000)}>{t('time.minus1h')}</button>
        <button type="button" className="btn btn-accent" onClick={() => setWhen(new Date())}>{t('time.now')}</button>
        <button type="button" className="btn" onClick={() => shift(3600000)}>{t('time.plus1h')}</button>
        <button type="button" className="btn" onClick={() => shift(86400000)}>{t('time.plus1d')}</button>
      </div>

      {open && (
        <>
          <h3>{t('place.title')}</h3>
          <p className="instant">{place ? (place.label || `${place.latitude}, ${place.longitude}`) : t('place.none')}</p>
          <div className="place-form">
            <label>{t('place.label')}<input value={label} onChange={(e) => setLabel(e.target.value)} /></label>
            <label>{t('place.latitude')}<input value={lat} onChange={(e) => setLat(e.target.value)} inputMode="decimal" /></label>
            <label>{t('place.longitude')}<input value={lon} onChange={(e) => setLon(e.target.value)} inputMode="decimal" /></label>
            <label>{t('place.elevation')}<input value={elev} onChange={(e) => setElev(e.target.value)} inputMode="decimal" /></label>
          </div>
          {problem && <p className="note error" role="alert">{problem}</p>}
          <div className="btn-row">
            <button type="button" className="btn btn-accent" onClick={save}>{t('place.save')}</button>
            {place && <button type="button" className="btn" onClick={clear}>{t('place.clear')}</button>}
          </div>
          <p className="note">{t('place.hint')}</p>
        </>
      )}
    </section>
  );
}

export default Page;
