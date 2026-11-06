/**
 * agentFind — a sky object or a constellation named the way a person says it (doc 149 §19).
 * The orb plans a spoken sentence in ONE model call and never reads Cosmos first, so
 * « montre la planète Mars » reaches an action with the words « la planète Mars », never a key.
 * A key still works (other agents read `search` first).
 *
 * 🚨 Several matches are REFUSED with their names (AMBIGUOUS), never the first one taken: the
 *    refusal is what the orb's repair call reads to pick the right one. No match is refused
 *    with the names that exist.
 *
 * Copied from Vitrine Studio's `data/agentFind.ts` (cartridges never import each other), with
 * the fillers of a sky atlas.
 *
 * @module cosmos/agentFind
 */

/** Lower case, accents off, œ/æ spelled out. */
export function fold(s: string): string {
  return s.normalize('NFD').replace(/\p{M}/gu, '').toLowerCase().replace(/œ/g, 'oe').replace(/æ/g, 'ae');
}

/**
 * Words that carry no name: articles and the words a sentence wraps a name in (« l'étoile
 * Sirius », « la planète Mars », « la constellation d'Orion »).
 * 🪤 Matched BEFORE the accents come off, as in the studio's copy.
 */
const FILLER = new Set([
  'le', 'la', 'les', 'l', 'un', 'une', 'des', 'de', 'du', 'd', 'mon', 'ma', 'mes', 'ce', 'cette', 'ces', 'et', 'en', 'au', 'aux', 'à',
  'the', 'a', 'an', 'of', 'my', 'and', 'el', 'los', 'las', 'del', 'mi', 'y',
  'étoile', 'étoiles', 'star', 'stars', 'estrella', 'estrellas',
  'planète', 'planètes', 'planet', 'planets', 'planeta', 'planetas',
  'constellation', 'constellations', 'constelación', 'constelaciones',
  'objet', 'object', 'objeto',
]);

/** The words of a name, folded, fillers out, a plural « s »/« x » off so « Pléiades » finds « Pleiade ». */
export function nameWords(s: string): string[] {
  return s.normalize('NFC').toLowerCase().split(/[^\p{L}\p{N}]+/u)
    .filter((w) => w && !FILLER.has(w))
    .map((w) => fold(w))
    .map((w) => (w.length > 3 ? w.replace(/[sx]$/, '') : w));
}

export interface Named<T> { item: T; id: string; names: string[]; label: string }

const LIST_MAX = 12;
export const listed = (labels: string[]): string => {
  const unique = [...new Set(labels)];
  return unique.length > LIST_MAX ? `${unique.slice(0, LIST_MAX).join(', ')} (+${unique.length - LIST_MAX})` : unique.join(', ');
};

/**
 * The one item `ref` names: its id (case aside); else the item one of whose names is the whole
 * name said; else the item whose words hold every word of `ref`. `kind` names the error
 * (NO_CONSTELLATION…) and the noun said.
 */
export function findNamed<T>(entries: ReadonlyArray<Named<T>>, ref: string, kind: { code: string; noun: string }): T {
  const raw = ref.trim();
  if (!raw) throw new Error(`BAD_ARG: name the ${kind.noun}`);
  const byId = entries.filter((e) => e.id.toLowerCase() === raw.toLowerCase());
  if (byId.length === 1) return byId[0]!.item;
  const asked = nameWords(raw);
  const all = entries.map((e) => e.label);
  if (!asked.length) throw new Error(`${kind.code}: "${raw}" names no ${kind.noun}; ${kind.noun}s: ${listed(all) || 'none'}`);
  // The whole name said wins over a partial match (« Ourse » is no constellation, « Grande Ourse » is one).
  const said = asked.join(' ');
  const whole = entries.filter((e) => e.names.some((n) => nameWords(n).join(' ') === said));
  if (whole.length === 1) return whole[0]!.item;
  const hits = whole.length > 1 ? whole : entries.filter((e) => {
    const have = new Set(e.names.flatMap(nameWords));
    return asked.every((w) => have.has(w));
  });
  if (hits.length === 1) return hits[0]!.item;
  if (hits.length > 1) throw new Error(`AMBIGUOUS: "${raw}" names several ${kind.noun}s: ${listed(hits.map((e) => e.label))}; say which`);
  throw new Error(`${kind.code}: no ${kind.noun} named "${raw}"; ${kind.noun}s: ${listed(all) || 'none'}`);
}
