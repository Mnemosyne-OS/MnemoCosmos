/**
 * The Mnemosyne seam: what this cartridge adds to a sky viewer.
 *
 * Every object on screen carries a catalogue identifier — `HIP 32349`,
 * `NGC 224`, `M31` — that is stable across languages, spellings and sources,
 * and has been since 1997, 1888 and 1764 respectively. That is what turns the
 * sky into an INDEX into the human's own memory: select an object, and ask what
 * you already know about it — your observing log, the notes from a session, the
 * paper you read last winter.
 *
 * Three rules shape this panel, and each one was a decision, not a default.
 * They are the same three as the Atlas cartridge's, deliberately: the failure
 * modes are a property of the seam, not of the subject matter.
 *
 * 1. IT IS A BUTTON, NOT A SUBSCRIPTION. `mnemosyne.query` is an LLM call with
 *    RAG attached (pluginCartridgeActions.ts → model.infer), so it costs a
 *    cloud inference on a cloud route. Firing one every time a star is clicked
 *    would bill someone for looking at the sky — and looking at the sky is
 *    what people do with this, hundreds of clicks at a time.
 *
 * 2. THE ANSWER IS BOUND TO THE OBJECT IT WAS ASKED ABOUT. Every state resets
 *    when `object.id` changes. Showing the Andromeda Galaxy's answer under
 *    Sirius's title is not a stale render; it is a fabricated fact, attributed
 *    to the reader's own notes, which is the worst thing this surface could do.
 *
 * 3. THE THREE SILENCES ARE THREE DIFFERENT SENTENCES. "Opened outside the
 *    shell", "memory refused the request" and "your memory holds nothing about
 *    this object" send a reader to three different next steps. Merged into one
 *    grey line, two of the three people are sent to fix the wrong thing — and
 *    the third, who simply has no notes yet, is told the feature is broken.
 */
import { useEffect, useRef, useState } from 'react';
import { MnemoCartridgeSDK } from '@mnemosyne_os/cartridge-sdk';
import { memoryQuestion, type SkyObject } from '../cosmos/identity';
import { useI18n } from '../i18n/useI18n';

// Must match "name" in mnemo-plugin.json — the host keys permissions on it.
const sdk = new MnemoCartridgeSDK('@mnemosyne-plugins/mnemo-cosmos');

type Phase =
  | { kind: 'idle' }
  | { kind: 'asking' }
  | { kind: 'answered'; text: string }
  | { kind: 'empty' }
  | { kind: 'no-host' }
  | { kind: 'failed'; message: string };

/** The host's own words for "you are not embedded" (cartridge-sdk index.ts). */
const NO_HOST = 'No Mnemosyne host';

export function CosmosMemory({ object }: { object: SkyObject | null }) {
  const { t } = useI18n();
  const [phase, setPhase] = useState<Phase>({ kind: 'idle' });
  // Guards a reply that lands after the human has already moved to another
  // object: the promise cannot be cancelled, so the ANSWER is dropped.
  const asked = useRef<string | null>(null);

  useEffect(() => {
    setPhase({ kind: 'idle' });
    asked.current = null;
  }, [object?.id]);

  // The panel is unmounted with a request in flight every time the card closes.
  // Nothing to abort over postMessage, so mark the token dead.
  useEffect(() => () => { asked.current = null; }, []);

  if (!object) return null;

  const ask = async () => {
    const token = object.id;
    asked.current = token;
    setPhase({ kind: 'asking' });
    try {
      const result = await sdk.query(memoryQuestion(object));
      if (asked.current !== token) return;
      const text = (result?.text ?? result?.response ?? result?.content ?? result?.answer ?? '').trim();
      if (result?.success === false) {
        setPhase({ kind: 'failed', message: result.error || 'Memory did not answer.' });
        return;
      }
      // An empty reply and a "nothing found" reply are the same fact for the
      // reader, and neither is an error. Naming it is the whole point: silence
      // here means "no notes yet", never "this does not work".
      if (!text || /NOTHING IN MEMORY/i.test(text)) {
        setPhase({ kind: 'empty' });
        return;
      }
      setPhase({ kind: 'answered', text });
    } catch (err) {
      if (asked.current !== token) return;
      const message = err instanceof Error ? err.message : String(err);
      // Never swallowed: a cartridge that fails quietly is indistinguishable
      // from one that is thinking.
      console.warn('[cosmos] memory query failed:', message);
      setPhase(message.includes(NO_HOST) ? { kind: 'no-host' } : { kind: 'failed', message });
    }
  };

  return (
    <div className="memory-panel">
      <h3>{t('memory.title')}</h3>

      {phase.kind === 'idle' && (
        <>
          <button type="button" className="btn btn-accent" onClick={ask}>
            {t('memory.ask')}
          </button>
          <p className="note">{t('memory.note')}</p>
        </>
      )}

      {phase.kind === 'asking' && (
        <p className="note busy" role="status">{t('memory.reading')}</p>
      )}

      {phase.kind === 'answered' && (
        <>
          <p className="memory-answer">{phase.text}</p>
          <button type="button" className="btn" onClick={ask}>{t('memory.askAgain')}</button>
        </>
      )}

      {phase.kind === 'empty' && (
        <>
          <p className="note">{t('memory.nothing', { name: object.name })}</p>
          <button type="button" className="btn" onClick={ask}>{t('memory.askAgain')}</button>
        </>
      )}

      {phase.kind === 'no-host' && <p className="note">{t('memory.outside')}</p>}

      {phase.kind === 'failed' && (
        <>
          <p className="note error" role="alert">{t('memory.failed', { why: phase.message })}</p>
          <button type="button" className="btn" onClick={ask}>{t('memory.tryAgain')}</button>
        </>
      )}
    </div>
  );
}

export default CosmosMemory;
