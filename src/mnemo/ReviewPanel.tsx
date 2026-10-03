/**
 * ReviewPanel — pick a family, pick a length, get asked, see how it went, and
 * file the run in your memory.
 *
 * Four screens, one panel: FAMILIES → LENGTH → RUN → RESULTS.
 *
 * This is the surface that makes the cartridge a memory tool rather than a
 * viewer. It rings an object in the sky without naming it, offers four
 * candidates from the same group, and files the answer against the object's
 * catalogue designation — stable across languages, spellings and datasets, so a
 * card written today still means the same thing next year.
 *
 * Two stores, on purpose, because they answer different questions:
 *
 *  - the SCHEDULE lives in the host-side state mirror (doc 73). Machinery:
 *    boxes and day numbers, rewritten on every answer, nobody should read it.
 *  - the RUN goes into this cartridge's own vault as one chronicle a human
 *    would want back. That is the half the chat can answer from, and it is
 *    written on a GESTURE: an ingest is permanent and shared with every future
 *    agent, so never automatically and never one row per answer.
 *
 * The panel's job is to never overstate. Progress never read shows `—`, not
 * `0`. With no host the quiz still runs and the panel SAYS answers are not
 * kept. A family too small for four honest options is offered as unavailable
 * WITH its count, instead of going grey for a reason nobody can see. Every
 * figure on the results screen — streak, accuracy, time — is a quantity that
 * was measured; there is no invented currency sitting beside them in the same
 * typeface.
 */
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { MnemoCartridgeSDK } from '@mnemosyne_os/cartridge-sdk';
import { readStore, writeKey } from '../gestures/store';
import type { Catalog } from '../cosmos/catalog';
import type { Marked } from '../cosmos/SkyCanvas';
import { dsoKey, starKey } from '../cosmos/identity';
import {
  emptyState, grade, nextQuestion, parseState, progress, sessionNote, stateSize, STUDY_SPINE,
  type Askable, type Question, type ReviewState,
} from './review';
import { canStudy, familiesOf, familyProgress, pool, type Family } from './levels';
import {
  duration, endRun, isComplete, LENGTHS, lengthLabel, rankOf, record, runStats, startRun,
  type Rank, type Run, type RunLength,
} from './session';
import { useI18n } from '../i18n/useI18n';
import type { Key } from '../i18n/strings';

const sdk = new MnemoCartridgeSDK('@mnemosyne-plugins/mnemo-cosmos');

/** Where the schedule lives inside the cartridge's host-side mirror. */
const KEY = 'review';

/** session.ts names a rank; the strings table words it. */
const RANK_KEY: Record<Rank, Key> = {
  Perfect: 'rank.perfect', Excellent: 'rank.excellent', Solid: 'rank.solid',
  'Getting there': 'rank.getting', 'Worth another pass': 'rank.again',
};

type Store =
  | { kind: 'loading' }
  | { kind: 'ready'; state: ReviewState }
  | { kind: 'unsaved'; state: ReviewState; why: string };

type Saving =
  | { kind: 'idle' }
  | { kind: 'busy' }
  | { kind: 'done'; vault: string; unlocked: boolean }
  | { kind: 'failed'; why: string };

interface Props {
  catalog: Catalog;
  /** Rings the object being asked about, and names it once it is answered. */
  onMark: (at: Marked | null) => void;
  /** Points the camera at it. */
  onLookAt: (at: { ra: number; dec: number }) => void;
  /**
   * The id whose label the sky must not print, or null.
   *
   * Set while a question is OPEN and cleared the moment it is answered, so the
   * name comes back as soon as it stops being the answer — which is when a
   * person wants to read it.
   */
  onHideLabel: (id: string | null) => void;
  onClose: () => void;
}

export function ReviewPanel({ catalog, onMark, onLookAt, onHideLabel, onClose }: Props) {
  const { t } = useI18n();
  const [store, setStore] = useState<Store>({ kind: 'loading' });
  const [family, setFamily] = useState<Family | null>(null);
  const [run, setRun] = useState<Run | null>(null);
  const [question, setQuestion] = useState<Question | null>(null);
  const [answered, setAnswered] = useState<{ picked: string; correct: boolean } | null>(null);
  const [saving, setSaving] = useState<Saving>({ kind: 'idle' });
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

  const storeState = (s: Store): ReviewState => (s.kind === 'loading' ? emptyState() : s.state);
  const held = storeState(store);
  const families = familiesOf(catalog);
  const finished = !!run && isComplete(run);

  /**
   * Where an object id is on the sky, so the ring can be placed.
   *
   * Built through the SAME `starKey`/`dsoKey` the pool uses. A second, "obvious"
   * implementation here — checking HIP then HD by hand — would silently fail to
   * place the ring for every star whose key came from the Gliese or the local
   * fallback branch, and a quiz that asks about an object it did not mark is
   * not a quiz.
   */
  const positions = useMemo(() => {
    const map = new Map<string, { ra: number; dec: number }>();
    for (const s of catalog.stars) map.set(starKey(s), { ra: s.ra, dec: s.dec });
    for (const d of catalog.dsos) map.set(dsoKey(d), { ra: d.ra, dec: d.dec });
    return map;
  }, [catalog]);
  const positionOf = useCallback(
    (id: string) => positions.get(id) ?? null,
    [positions],
  );

  const familyName = (f: Family) => t(`family.${f.id}` as Key);
  const refusal = (f: Family) => {
    const v = canStudy(f);
    return v.ok ? '' : t(v.why === 'empty' ? 'review.empty' : 'review.tooSmall', { n: v.n });
  };

  // ── the schedule ─────────────────────────────────────────────────────────
  useEffect(() => {
    let cancelled = false;
    // Through the store, never `state.get` directly: the host answers an
    // envelope, and only the store takes the blob out of it.
    readStore()
      .then((data) => {
        if (cancelled || !alive.current) return;
        setStore({ kind: 'ready', state: parseState(data[KEY]) });
      })
      .catch((err: unknown) => {
        if (cancelled || !alive.current) return;
        const msg = err instanceof Error ? err.message : String(err);
        // Never swallowed: a cartridge that fails quietly is indistinguishable
        // from one that is working.
        console.warn('[cosmos] review state unavailable:', msg);
        setStore({
          kind: 'unsaved',
          state: emptyState(),
          why: msg.includes('No Mnemosyne host') ? t('review.noHost') : t('review.noLoad'),
        });
      });
    return () => { cancelled = true; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // The ring and the hidden label belong to this panel: neither may outlive it,
  // or the sky keeps a red circle around an object nobody is being asked about
  // and one object stays permanently nameless.
  useEffect(() => () => { onMark(null); onHideLabel(null); }, [onMark, onHideLabel]);

  const write = (next: ReviewState) => {
    if (store.kind === 'unsaved') { setStore({ ...store, state: next }); return; }
    setStore({ kind: 'ready', state: next });
    // Merged, never sent alone: the host replaces the whole blob, and the
    // gesture speeds live in it too (gestures/store).
    writeKey(KEY, next).catch((err: unknown) => {
      const msg = err instanceof Error ? err.message : String(err);
      console.warn('[cosmos] review state not saved:', msg);
      if (alive.current) setStore({ kind: 'unsaved', state: next, why: t('review.noLoad') });
    });
  };

  // ── asking ───────────────────────────────────────────────────────────────
  const ask = useCallback((f: Family, state: ReviewState, asked: ReadonlySet<string>) => {
    const q = nextQuestion(pool(catalog, f.id), state, Date.now(), (Math.random() * 2 ** 31) | 0, 4, asked);
    setAnswered(null);
    setQuestion(q);
    const at = q ? positionOf(q.subject.id) : null;
    onMark(at);
    // 🚨 The camera GOES there. Without this the panel asks "which object is
    // marked?" about a ring somewhere else on the celestial sphere — measured
    // on screen: a Messier run opened on Orion and marked M14, which is a
    // summer object a hundred degrees away. Nothing is given away by moving,
    // because the ring carries no name and the subject's own label is hidden.
    if (at) onLookAt(at);
    onHideLabel(q ? q.subject.id : null);
  }, [catalog, onMark, onLookAt, onHideLabel, positionOf]);

  const begin = (len: RunLength) => {
    if (!family) return;
    setSaving({ kind: 'idle' });
    setRun(startRun(len, Date.now()));
    ask(family, held, new Set());
  };

  const backToFamilies = () => {
    setFamily(null); setRun(null); setQuestion(null); setAnswered(null);
    onMark(null);
    onHideLabel(null);
  };

  const answer = (picked: Askable) => {
    if (!question || answered || !run) return;
    const correct = picked.id === question.subject.id;
    setAnswered({ picked: picked.id, correct });
    // Answered: the name stops being the answer, so it goes back on the sky —
    // and it goes back with priority, beside its own ring, rather than
    // competing for a budget slot it will usually lose.
    onHideLabel(null);
    const at = positionOf(question.subject.id);
    if (at) onMark({ ...at, label: question.subject.name });

    const card = grade(held.cards[question.subject.id], correct, Date.now());
    const nextRun = record(run, { ...question.subject, correct, n: card.n });
    setRun(nextRun);
    // A new answer invalidates the receipt from the last save: the note on disk
    // no longer describes this run.
    setSaving({ kind: 'idle' });

    const best = Math.max(held.best ?? 0, nextRun.bestStreak);
    write({ v: 1, cards: { ...held.cards, [question.subject.id]: card }, best });
  };

  // ── filing the run as a memory ───────────────────────────────────────────
  const saveRun = async () => {
    if (!run || !family) return;
    const note = sessionNote(run.answers, {
      family: familyName(family),
      source: 'HYG 4.1 and OpenNGC, in the Mnemosyne Cosmos cartridge',
      now: Date.now(),
    });
    if (!note) return; // nothing happened, so there is nothing to record
    setSaving({ kind: 'busy' });
    try {
      // Permissions are read when the app boots. A cartridge that gained
      // `vault:write` after that is refused everything, and the refusal comes
      // from a layer BELOW the consent dialog: the host checks the manifest it
      // holds in memory, which is the old one, and never gets as far as asking
      // the human. `permissions.refresh` makes it re-read the manifests from
      // disk and then ask — so the dialog appears on this gesture, which is
      // where it belongs.
      const refreshed = await sdk.invoke<{ granted?: Record<string, boolean> }>(
        'permissions.refresh', { permissions: ['vault:write'] },
      );
      if (refreshed?.granted?.['vault:write'] === false) {
        if (alive.current) setSaving({ kind: 'failed', why: t('review.why.declined') });
        return;
      }
      const { vault, unlocked } = await sdk.ensureSandbox();
      await sdk.socialIngest(vault, note, STUDY_SPINE);
      if (alive.current) setSaving({ kind: 'done', vault, unlocked });
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      console.warn('[cosmos] run not written to memory:', msg);
      if (!alive.current) return;
      // Three refusals, three sentences. Merged into one they send people to
      // fix the wrong thing, and two of the three are not their fault at all.
      setSaving({
        kind: 'failed',
        why: msg.includes('No Mnemosyne host')
          ? t('review.why.noHost')
          : /permission/i.test(msg)
            ? t('review.why.noPermission')
            : msg,
      });
    }
  };

  // ── what the numbers are allowed to say ──────────────────────────────────
  // `—` while nothing has been READ, not merely while loading. When the store
  // could not be reached, "Studied 0" is a claim about someone's history that
  // nobody measured.
  const known = store.kind === 'ready' || Object.keys(held.cards).length > 0;
  const p = store.kind !== 'loading' && known ? progress(held, Date.now()) : null;
  const size = store.kind !== 'loading' ? stateSize(held) : null;
  const stats = run ? runStats(run, Date.now()) : null;
  const dash = t('review.unknown');

  const screen: 'families' | 'length' | 'run' | 'results' =
    !family ? 'families' : !run ? 'length' : finished ? 'results' : 'run';

  return (
    <section className="review-panel panel" aria-label={t('review.title')}>
      <header className="panel-head">
        {family ? (
          <button type="button" className="btn btn-ghost" onClick={backToFamilies}>
            ← {familyName(family)}
          </button>
        ) : (
          <h2>{t('review.title')}</h2>
        )}
        <button type="button" className="btn btn-ghost" onClick={onClose} aria-label={t('review.close')}>✕</button>
      </header>

      {store.kind === 'unsaved' && (
        <p className="note warn" role="status">{t('review.unsaved', { why: store.why })}</p>
      )}
      {size?.tight && (
        <p className="note warn">{t('review.tight', { pct: Math.round(size.ratio * 100) })}</p>
      )}

      {screen === 'families' && (
        <>
          <div className="review-totals">
            <span><b>{p ? p.seen : dash}</b> {t('review.studied')}</span>
            <span><b>{p ? p.due : dash}</b> {t('review.due')}</span>
            <span><b>{p ? p.mastered : dash}</b> {t('review.mastered')}</span>
            <span><b>{held.best ?? dash}</b> {t('review.best')}</span>
          </div>
          <p className="note">{t('review.pick')}</p>
          <ul className="family-list">
            {families.map((f) => {
              const ok = canStudy(f).ok;
              const fp = familyProgress(f, catalog, held, Date.now());
              return (
                <li key={f.id}>
                  <button
                    type="button"
                    className="family-tile"
                    disabled={!ok}
                    onClick={() => setFamily(f)}
                  >
                    <span className="family-name">{familyName(f)}</span>
                    <span className="family-count">{f.total}</span>
                    {ok ? (
                      <span className="family-progress">
                        {p ? `${fp.mastered} / ${f.total}` : dash}
                      </span>
                    ) : (
                      <span className="family-refusal">{refusal(f)}</span>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </>
      )}

      {screen === 'length' && family && (
        <>
          <p className="note">{t('review.scope', { n: family.total, level: familyName(family) })}</p>
          <h3>{t('review.howMany')}</h3>
          <div className="length-row">
            {LENGTHS.map((len) => (
              <button key={String(len)} type="button" className="btn" onClick={() => begin(len)}>
                {lengthLabel(len) ?? t('review.endless')}
              </button>
            ))}
          </div>
        </>
      )}

      {screen === 'run' && question && run && (
        <>
          <p className="run-count">
            {run.answers.length + 1}{run.length === null ? '' : ` / ${run.length}`}
          </p>
          <h3>{t('review.question')}</h3>
          <ul className="option-list">
            {question.options.map((o) => {
              const state = !answered ? ''
                : o.id === question.subject.id ? ' right'
                  : o.id === answered.picked ? ' wrong' : '';
              return (
                <li key={o.id}>
                  <button
                    type="button"
                    className={`option${state}`}
                    onClick={() => answer(o)}
                    disabled={!!answered}
                  >
                    <span className="option-name">{o.name}</span>
                    <span className="option-id">{o.id}</span>
                  </button>
                </li>
              );
            })}
          </ul>
          {answered && (
            <div className="answer-row">
              <p>{t('review.answerIs')} <b>{question.subject.name}</b> · <code>{question.subject.id}</code></p>
              <div className="btn-row">
                <button
                  type="button"
                  className="btn"
                  onClick={() => {
                    const at = positionOf(question.subject.id);
                    if (at) onLookAt(at);
                  }}
                >
                  {t('card.centre')}
                </button>
                <button
                  type="button"
                  className="btn btn-accent"
                  onClick={() => ask(family!, held, new Set(run.answers.map((a) => a.id)))}
                >
                  {t('review.next')}
                </button>
                {run.length === null && (
                  <button type="button" className="btn" onClick={() => setRun(endRun(run))}>
                    {t('review.finishHere')}
                  </button>
                )}
              </div>
            </div>
          )}
        </>
      )}

      {screen === 'run' && !question && (
        <p className="note">{t('review.empty')}</p>
      )}

      {screen === 'results' && stats && run && (
        <>
          <div className="results">
            <span>
              <b>{stats.accuracy === null ? dash : `${Math.round(stats.accuracy * 100)}%`}</b>
              {t('review.accuracy')}
            </span>
            <span><b>{stats.bestStreak}</b>{t('review.best')}</span>
            <span><b>{duration(stats.elapsedMs)}</b>{t('review.time')}</span>
          </div>
          {rankOf(stats.accuracy) && <p className="rank">{t(RANK_KEY[rankOf(stats.accuracy)!])}</p>}
          {stats.bestStreak > 0 && stats.bestStreak >= (held.best ?? 0) && (
            <p className="note">{t('review.record')}</p>
          )}
          {stats.missed.length > 0 && (
            <>
              <h3>{t('review.comeBack')}</h3>
              <ul className="missed">
                {stats.missed.slice(0, 12).map((m) => (
                  <li key={m.id}>{m.name} <code>{m.id}</code></li>
                ))}
                {stats.missed.length > 12 && <li>{t('review.andMore', { n: stats.missed.length - 12 })}</li>}
              </ul>
            </>
          )}
          <div className="btn-row">
            <button type="button" className="btn" onClick={() => { setRun(null); setQuestion(null); onMark(null); onHideLabel(null); }}>
              {t('review.again')}
            </button>
            <button type="button" className="btn" onClick={backToFamilies}>{t('review.another')}</button>
            {saving.kind !== 'done' && (
              <button
                type="button"
                className="btn btn-accent"
                onClick={saveRun}
                disabled={saving.kind === 'busy' || run.answers.length === 0}
              >
                {saving.kind === 'busy' ? t('review.saving') : t('review.save')}
              </button>
            )}
          </div>
          {saving.kind === 'done' && (
            <p className="note ok" role="status">
              {t(saving.unlocked ? 'review.saved' : 'review.savedLocked', { vault: saving.vault })}
            </p>
          )}
          {saving.kind === 'failed' && (
            <p className="note error" role="alert">{saving.why}</p>
          )}
        </>
      )}
    </section>
  );
}

export default ReviewPanel;
