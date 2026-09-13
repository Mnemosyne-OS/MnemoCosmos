/**
 * review.ts — the learning memory: what you have been asked, what you got
 * right, and when the sky should ask again.
 *
 * Ported from the Atlas cartridge with the scheduling logic unchanged. Only the
 * vocabulary moved: an anatomical `system` became a `group`, which here is a
 * constellation for a star and an object type for a nebula or a galaxy. The
 * four decisions below survived the port because they are properties of asking
 * a person questions, not of the subject being asked about.
 *
 * All of it is pure. No clock, no storage, no React: `now` and the state are
 * arguments, so every rule below can be tested against a date instead of
 * against luck. The panel does the talking; this file does the deciding.
 *
 * 1. AN OBJECT NOBODY HAS BEEN ASKED HAS NO CARD. Not a card with score
 *    zero — no card. "Never asked" and "asked and failed" are different facts
 *    about a person, and a store that cannot tell them apart will one day
 *    report the first as the second.
 *
 * 2. THE DISTRACTORS COME FROM THE SAME GROUP. Ask "which of these is M31"
 *    against three planets and the answer is free, so the score measures
 *    nothing. Same-group distractors are what makes a correct answer evidence.
 *    When a group cannot supply enough of them we widen the net rather than
 *    fabricate, and the question says nothing about it — but a family too
 *    small for a real question produces NO question at all.
 *
 * 3. A WRONG ANSWER GOES BACK TO THE START, a right one moves up one box.
 *    Leitner, deliberately: it is the scheme whose behaviour a human can
 *    predict without reading the code, and predictability is worth more here
 *    than a better-tuned curve nobody can audit.
 *
 * 4. DUE DATES ARE WHOLE DAYS. Storing milliseconds would make "due" depend
 *    on the hour you happened to study, so a card reviewed at 23:50 would come
 *    back at 23:50. Days also keep the state small, which matters: the host
 *    mirror caps at 256 KB and this catalogue holds 12 057 objects.
 */

/** One box per interval. Index IS the box, value is the delay in days. */
export const BOXES = [0, 1, 3, 7, 16, 35] as const;
export const TOP_BOX = BOXES.length - 1;

/** Days between the epoch and `now`, in whole days. */
export function dayOf(now: number): number {
  return Math.floor(now / 86_400_000);
}

export interface Card {
  /** Leitner box, 0..TOP_BOX. */
  b: number;
  /** Day number this card is next due. */
  d: number;
  /** How many times it has been asked. Never inferred from anything else. */
  n: number;
}

export interface ReviewState {
  v: 1;
  cards: Record<string, Card>;
  /**
   * Longest run of consecutive right answers, ever. Optional on purpose: a
   * store written before this existed has no best streak, and `0` would be a
   * claim that someone once played and never got two in a row.
   */
  best?: number;
}

export const emptyState = (): ReviewState => ({ v: 1, cards: {} });

/**
 * Parses whatever the host mirror handed back. Anything unreadable becomes an
 * EMPTY state, never a partial one: a half-parsed progress file that silently
 * drops the cards it could not read would tell someone they have forgotten
 * material they actually know.
 */
export function parseState(raw: unknown): ReviewState {
  if (!raw || typeof raw !== 'object') return emptyState();
  const o = raw as Record<string, unknown>;
  if (o.v !== 1 || !o.cards || typeof o.cards !== 'object') return emptyState();
  const cards: Record<string, Card> = {};
  for (const [id, v] of Object.entries(o.cards as Record<string, unknown>)) {
    const c = v as Record<string, unknown>;
    if (typeof c?.b !== 'number' || typeof c?.d !== 'number' || typeof c?.n !== 'number') continue;
    if (!Number.isFinite(c.b) || !Number.isFinite(c.d) || !Number.isFinite(c.n)) continue;
    cards[id] = { b: Math.min(TOP_BOX, Math.max(0, Math.round(c.b))), d: Math.round(c.d), n: Math.round(c.n) };
  }
  const best = typeof o.best === 'number' && Number.isFinite(o.best) && o.best >= 0
    ? Math.round(o.best)
    : undefined;
  return best === undefined ? { v: 1, cards } : { v: 1, cards, best };
}

/**
 * The card after an answer. `undefined` in means a structure never asked before.
 *
 * Box 0 means "come back today", and it belongs to a MISS. A structure you got
 * right on the first try must not land there: it would be due the moment you
 * answered it, and the panel would report six structures due immediately after
 * you studied six — which is both wrong and the classic reason people abandon
 * a review tool. So a correct answer starts at box 1 and never returns below it.
 */
export function grade(card: Card | undefined, correct: boolean, now: number): Card {
  const seen = (card?.n ?? 0) + 1;
  const box = correct ? Math.min(TOP_BOX, Math.max(1, (card?.b ?? 0) + 1)) : 0;
  return { b: box, d: dayOf(now) + BOXES[box]!, n: seen };
}

export interface Progress {
  /** Structures with a card at all. Never the size of the atlas. */
  seen: number;
  /** Cards whose due day has arrived. */
  due: number;
  /** Cards that reached the last box. */
  mastered: number;
}

export function progress(state: ReviewState, now: number): Progress {
  const today = dayOf(now);
  const cards = Object.values(state.cards);
  return {
    seen: cards.length,
    due: cards.filter((c) => c.d <= today).length,
    mastered: cards.filter((c) => c.b >= TOP_BOX).length,
  };
}

export interface Askable {
  id: string;
  name: string;
  group: string;
}

export interface Question {
  subject: Askable;
  /** The subject plus its distractors, already shuffled. */
  options: Askable[];
}

/** Deterministic 0..1 from a seed, so a question can be replayed in a test. */
function rand(seed: number): () => number {
  let s = seed >>> 0 || 1;
  return () => {
    s ^= s << 13; s >>>= 0;
    s ^= s >> 17;
    s ^= s << 5; s >>>= 0;
    return s / 4_294_967_296;
  };
}

function pick<T>(xs: T[], n: number, r: () => number): T[] {
  const pool = xs.slice();
  const out: T[] = [];
  while (out.length < n && pool.length) out.push(pool.splice(Math.floor(r() * pool.length), 1)[0]!);
  return out;
}

/**
 * Builds the next question, or `null` when one cannot be asked honestly.
 *
 * Order of preference: a card that is due, then a structure never asked, then
 * the card closest to being due. Studying should surface what is fading before
 * it surfaces something new.
 */
export function nextQuestion(
  pool: Askable[],
  state: ReviewState,
  now: number,
  seed: number,
  optionCount = 4,
  /** Already asked in this sitting — moved to the back, never hard-banned. */
  askedThisSession: ReadonlySet<string> = new Set(),
): Question | null {
  // Fewer than two candidates is not a hard question, it is not a question.
  if (pool.length < 2) return null;
  const today = dayOf(now);
  const r = rand(seed);

  // A wrong answer files the card as due TODAY, which is right for tomorrow and
  // wrong for the next ten seconds: the same structure would come back
  // immediately and the sitting would never move past it. Measured — six
  // answers in a row landed on one structure. So what has already been asked
  // in this sitting steps aside for anything that has not.
  const unasked = pool.filter((a) => !askedThisSession.has(a.id));
  const scope = unasked.length ? unasked : pool;

  const due = scope.filter((a) => { const c = state.cards[a.id]; return c && c.d <= today; });
  const fresh = scope.filter((a) => !state.cards[a.id]);
  const rest = scope
    .filter((a) => state.cards[a.id] && state.cards[a.id]!.d > today)
    .sort((a, b) => state.cards[a.id]!.d - state.cards[b.id]!.d);

  const from = due.length ? due : fresh.length ? fresh : rest;
  const subject = from[Math.floor(r() * from.length)]!;

  // Same group first — that is what makes a right answer mean something.
  const sameGroup = pool.filter((a) => a.id !== subject.id && a.group === subject.group);
  const others = pool.filter((a) => a.id !== subject.id && a.group !== subject.group);
  const want = Math.min(optionCount - 1, pool.length - 1);
  const distractors = pick(sameGroup, want, r);
  if (distractors.length < want) distractors.push(...pick(others, want - distractors.length, r));

  const options = [subject, ...distractors];
  // Shuffle so the answer is not always first.
  for (let i = options.length - 1; i > 0; i--) {
    const j = Math.floor(r() * (i + 1));
    [options[i], options[j]] = [options[j]!, options[i]!];
  }
  return { subject, options };
}

/**
 * The host mirror caps a cartridge's state at 256 KB. A full male atlas is
 * 3,432 concepts, so a completionist can reach that ceiling — and a silent
 * truncation there would erase months of study without a word.
 *
 * So the store reports its own pressure and the panel says it out loud. This
 * returns the serialized size and whether we are close enough to warn.
 */
export const STATE_LIMIT_BYTES = 256 * 1024;
export const STATE_WARN_AT = 0.8;

export function stateSize(state: ReviewState): { bytes: number; ratio: number; tight: boolean } {
  const bytes = new TextEncoder().encode(JSON.stringify(state)).length;
  return { bytes, ratio: bytes / STATE_LIMIT_BYTES, tight: bytes >= STATE_LIMIT_BYTES * STATE_WARN_AT };
}

/* ──────────────────────────────────────────────────────────────────────────
 * Turning a study session into a memory.
 *
 * The Leitner state above is machinery: boxes and day numbers, useful to the
 * scheduler and to nobody else. This part writes the other half — a chronicle
 * a HUMAN would want back, and that the chat can answer from months later.
 *
 * Three rules, and the first is the one that keeps this from becoming noise.
 *
 * 1. ONE CHRONICLE PER SESSION, NEVER ONE PER ANSWER. An ingest is permanent
 *    and shared with every future agent. Two hundred rows of "got NGC 6543
 *    right" is a log, and a log dropped into a memory vault makes every other
 *    recall worse — you would be paying for it on every unrelated question.
 *
 * 2. IT NAMES THE CATALOGUE IDS. The prose is for the human; the ids are what
 *    let a later agent tie "you keep missing the globular clusters" to these
 *    exact objects, whatever language the question is asked in and whichever
 *    star atlas is open at the time.
 *
 * 3. A SESSION WITH NOTHING IN IT PRODUCES NO NOTE. Writing "reviewed 0
 *    objects" is a record of an event that did not happen, and it cannot be
 *    corrected later — the chronicle has no file behind it.
 */

export interface Answered {
  id: string;
  name: string;
  group: string;
  correct: boolean;
  /** Times this object has been asked in total, after this answer. */
  n: number;
}

/** How many objects to name before switching to a count. */
const NAMED_MAX = 12;

function list(items: Answered[]): string {
  const shown = items.slice(0, NAMED_MAX)
    .map((a) => `- ${a.name} (${a.group}, ${a.id})${a.n > 1 ? ` — asked ${a.n} times` : ''}`);
  if (items.length > NAMED_MAX) shown.push(`- and ${items.length - NAMED_MAX} more`);
  return shown.join('\n');
}

/**
 * The chronicle for one session, or `null` when there is nothing to record.
 *
 * `family` and `source` describe what was being studied, so the note stands on
 * its own: read back in a year it still says which family and which catalogue,
 * without depending on the cartridge being installed.
 */
export function sessionNote(
  answers: Answered[],
  opts: { family: string; source: string; now: number },
): string | null {
  if (!answers.length) return null;
  const right = answers.filter((a) => a.correct);
  const missed = answers.filter((a) => !a.correct);
  const date = new Date(opts.now).toISOString().slice(0, 10);

  const parts = [
    `Sky review session — ${date}`,
    '',
    `Reviewed ${answers.length} object${answers.length === 1 ? '' : 's'} from ${opts.family} `
      + `(${opts.source}). ${right.length} recalled, ${missed.length} missed.`,
  ];
  if (missed.length) parts.push('', 'Missed:', list(missed));
  if (right.length) parts.push('', 'Recalled:', list(right));
  parts.push(
    '',
    'Missed objects are scheduled to come back tomorrow; recalled ones move to a longer '
      + 'interval. Objects are identified by their catalogue designation — Hipparcos, Henry '
      + 'Draper, NGC or IC — which is stable across languages, spellings and sources.',
  );
  return parts.join('\n');
}

/** Spine type for everything this cartridge writes. Host rule: ^[A-Z0-9_]{1,32}$ */
export const STUDY_SPINE = 'SKY_STUDY';
