#!/usr/bin/env node
/**
 * build-catalog.mjs — turns three published catalogues into the two files this
 * cartridge ships, and MEASURES what it did.
 *
 * Inputs (downloaded into a gitignored cache, never committed — they are 38 MB
 * of CSV and the repository has no business carrying them):
 *   HYG 4.1        CC BY-SA 4.0   stars
 *   OpenNGC        CC BY-SA 4.0   clusters, nebulae, galaxies
 *   d3-celestial   BSD 3-Clause   constellation figures and names
 *
 * Outputs:
 *   public/catalog/catalog.bin          derived from the two BY-SA works
 *                                       -> itself CC BY-SA 4.0 (see NOTICE.md)
 *   public/catalog/constellations.json  derived from the BSD work -> BSD
 *   public/catalog/ATTRIBUTION.md       so the terms travel with the folder
 *
 * The one rule that shapes the whole script: a value the source does not have
 * is dropped, never defaulted. HYG's `dist` column holds 100000+ for "the
 * parallax was negative or zero", which is not a distance — it is the absence
 * of one wearing a number's clothes. Every such trap is named at the line that
 * handles it.
 *
 * Run: pnpm --filter @mnemosyne-plugins/mnemo-cosmos catalog
 */
import { createWriteStream } from 'node:fs';
import { mkdir, readFile, stat, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { Readable } from 'node:stream';
import { pipeline } from 'node:stream/promises';
import { encodeCatalog } from './catalog-format.mjs';

const HERE = dirname(fileURLToPath(import.meta.url));
const APP = join(HERE, '..');
const CACHE = join(APP, '.catalog-cache');
const OUT = join(APP, 'public', 'catalog');

/** Apparent magnitude cut for stars. 6.5 is the classic naked-eye limit. */
const STAR_MAG_LIMIT = 6.5;

/**
 * Deep-sky magnitude cut. Objects brighter than this are kept; so are ALL
 * Messier objects and all objects with a common name, whatever their
 * magnitude — a catalogue that dropped the Horsehead because OpenNGC has no
 * magnitude for it would be missing the thing people come to look up.
 */
const DSO_MAG_LIMIT = 13;

/**
 * Two different refusals, and collapsing them into one list loses objects.
 *
 * `Dup` is a row that restates another row, `NonEx` is an entry for something
 * that turned out not to exist. Neither is an object, and no rule brings them
 * back.
 */
const NOT_AN_OBJECT = new Set(['Dup', 'NonEx']);

/**
 * These ARE objects, they are simply not deep-sky ones: a single star, a double
 * star, a loose association. They are dropped from a deep-sky catalogue — unless
 * they carry a Messier number or a common name, because then they are things a
 * person looks up.
 *
 * Measured on OpenNGC 2026-09-09: dropping them unconditionally silently lost
 * M24 (the Sagittarius Star Cloud, filed as `*Ass`) and M40 (Winnecke 4, filed
 * as `**`) — 107 Messier objects instead of 109. The catalogue would have been
 * missing two entries from the one list every beginner works through, and
 * nothing on screen would have said so.
 *
 * M102 is still absent afterwards, and that is the source's position, not ours:
 * OpenNGC files it as a duplicate of M101.
 */
const NOT_DEEP_SKY = new Set(['Star', '**', '*Ass']);

/** The languages the host speaks. */
const LANGS = ['en', 'fr', 'es', 'de', 'pt', 'ru', 'zh'];

const SOURCES = [
  {
    file: 'hygdata_v41.csv',
    url: 'https://raw.githubusercontent.com/astronexus/HYG-Database/main/hyg/CURRENT/hygdata_v41.csv',
  },
  {
    file: 'NGC.csv',
    url: 'https://raw.githubusercontent.com/mattiaverga/OpenNGC/master/database_files/NGC.csv',
  },
  {
    file: 'addendum.csv',
    url: 'https://raw.githubusercontent.com/mattiaverga/OpenNGC/master/database_files/addendum.csv',
  },
  {
    file: 'constellations.lines.json',
    url: 'https://raw.githubusercontent.com/ofrohn/d3-celestial/master/data/constellations.lines.json',
  },
  {
    file: 'constellations.json',
    url: 'https://raw.githubusercontent.com/ofrohn/d3-celestial/master/data/constellations.json',
  },
];

async function ensureSources() {
  await mkdir(CACHE, { recursive: true });
  for (const s of SOURCES) {
    const path = join(CACHE, s.file);
    try {
      const info = await stat(path);
      if (info.size > 0) continue;
    } catch { /* not cached yet, fall through and fetch */ }
    process.stdout.write(`  fetching ${s.file}...`);
    const res = await fetch(s.url);
    if (!res.ok || !res.body) throw new Error(`${s.url} -> HTTP ${res.status}`);
    await pipeline(Readable.fromWeb(res.body), createWriteStream(path));
    const info = await stat(path);
    process.stdout.write(` ${info.size.toLocaleString('en-US')} bytes\n`);
  }
}

/**
 * A CSV parser that handles quoted fields, because HYG has them and a split on
 * the delimiter turns `"9Alp CMa"` into two columns and every field after it
 * into the wrong one — silently, and only for the stars that have a Bayer
 * designation, which is exactly the stars anyone would look at first.
 */
export function parseCsv(text, delimiter = ',') {
  const rows = [];
  let row = [];
  let field = '';
  let quoted = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (quoted) {
      if (c === '"') {
        if (text[i + 1] === '"') { field += '"'; i++; } else quoted = false;
      } else field += c;
      continue;
    }
    if (c === '"') { quoted = true; continue; }
    if (c === delimiter) { row.push(field); field = ''; continue; }
    if (c === '\n') { row.push(field); rows.push(row); row = []; field = ''; continue; }
    if (c === '\r') continue;
    field += c;
  }
  if (field.length || row.length) { row.push(field); rows.push(row); }
  return rows;
}

/** A number, or NaN. An empty string is NOT zero. */
const numOrNaN = (s) => {
  const t = (s ?? '').trim();
  if (!t) return NaN;
  const v = Number(t);
  return Number.isFinite(v) ? v : NaN;
};

const intOrZero = (s) => {
  const v = numOrNaN(s);
  return Number.isFinite(v) ? Math.trunc(v) : 0;
};

// -- stars ------------------------------------------------------------------

export function readStars(text, magLimit = STAR_MAG_LIMIT) {
  const rows = parseCsv(text);
  const head = rows[0].map((h) => h.trim());
  const col = Object.fromEntries(head.map((h, i) => [h, i]));
  for (const needed of ['id', 'hip', 'hd', 'gl', 'bf', 'proper', 'dist', 'mag', 'absmag', 'spect', 'ci', 'rarad', 'decrad', 'con']) {
    if (col[needed] === undefined) throw new Error(`HYG is missing column '${needed}' - the format changed, stop.`);
  }

  const stars = [];
  let omitted = 0;
  let sunSkipped = 0;
  let noDistance = 0;

  for (let r = 1; r < rows.length; r++) {
    const f = rows[r];
    if (f.length < head.length) continue; // trailing blank line

    // Row id 0 is the SUN, at RA 0 / Dec 0 with magnitude -26.7. It passes
    // every brightness cut and would be drawn as the brightest star in Pisces.
    // The Sun is computed by astronomy-engine, from where it actually is.
    if (f[col.id].trim() === '0') { sunSkipped++; continue; }

    const mag = numOrNaN(f[col.mag]);
    if (!Number.isFinite(mag) || mag > magLimit) { omitted++; continue; }

    // The fabricated-value trap. HYG's README: "A value >= 100000 indicates
    // missing or dubious (e.g., negative) parallax data in Hipparcos."
    const rawDist = numOrNaN(f[col.dist]);
    const dist = Number.isFinite(rawDist) && rawDist > 0 && rawDist < 100000 ? rawDist : NaN;
    if (!Number.isFinite(dist)) noDistance++;

    // absmag is DERIVED from dist. A star with no distance has no absolute
    // magnitude either, whatever the column says, so it does not travel.
    const absmag = Number.isFinite(dist) ? numOrNaN(f[col.absmag]) : NaN;

    const ra = (numOrNaN(f[col.rarad]) * 180) / Math.PI;
    const dec = (numOrNaN(f[col.decrad]) * 180) / Math.PI;
    if (!Number.isFinite(ra) || !Number.isFinite(dec)) { omitted++; continue; }

    stars.push({
      ra: ((ra % 360) + 360) % 360,
      dec,
      mag,
      absmag,
      dist,
      ci: numOrNaN(f[col.ci]),
      hip: intOrZero(f[col.hip]),
      hd: intOrZero(f[col.hd]),
      con: f[col.con].trim(),
      spect: f[col.spect].trim(),
      proper: f[col.proper].trim(),
      desig: f[col.bf].trim(),
      gliese: f[col.gl].trim(),
    });
  }

  // Brightest first. The renderer draws in array order and the picker prefers
  // the earlier index on a tie, so this is what makes a click near Sirius pick
  // Sirius rather than the 6th-magnitude star two pixels away.
  stars.sort((a, b) => a.mag - b.mag);
  return { stars, omitted, sunSkipped, noDistance };
}

// -- deep sky ---------------------------------------------------------------

/** "00:42:44.35" -> degrees. */
export function hmsToDegrees(s) {
  const p = (s ?? '').trim().split(':');
  if (p.length !== 3) return NaN;
  const h = Number(p[0]), m = Number(p[1]), sec = Number(p[2]);
  if (![h, m, sec].every(Number.isFinite)) return NaN;
  return (h + m / 60 + sec / 3600) * 15;
}

/** "+41:16:08.6" -> degrees. The sign belongs to the whole value, not to the degrees. */
export function dmsToDegrees(s) {
  const t = (s ?? '').trim();
  const p = t.split(':');
  if (p.length !== 3) return NaN;
  const sign = t.startsWith('-') ? -1 : 1;
  const d = Math.abs(Number(p[0])), m = Number(p[1]), sec = Number(p[2]);
  if (![d, m, sec].every(Number.isFinite)) return NaN;
  return sign * (d + m / 60 + sec / 3600);
}

/** "NGC0224" -> "NGC 224"; "IC0001" -> "IC 1"; anything else is left alone. */
export function prettyDesignation(raw) {
  const m = /^(NGC|IC)(\d+)([A-Za-z]*)$/.exec((raw ?? '').trim());
  if (!m) return (raw ?? '').trim();
  return `${m[1]} ${Number(m[2])}${m[3]}`;
}

export function readDsos(texts, magLimit = DSO_MAG_LIMIT) {
  const out = [];
  let omitted = 0;
  const seen = new Set();

  for (const text of texts) {
    const rows = parseCsv(text, ';');
    const head = rows[0].map((h) => h.trim());
    const col = Object.fromEntries(head.map((h, i) => [h, i]));
    for (const needed of ['Name', 'Type', 'RA', 'Dec', 'Const', 'M', 'V-Mag', 'B-Mag', 'MajAx', 'MinAx', 'Common names']) {
      if (col[needed] === undefined) throw new Error(`OpenNGC is missing column '${needed}' - the format changed, stop.`);
    }

    for (let r = 1; r < rows.length; r++) {
      const f = rows[r];
      if (f.length < head.length) continue;
      const type = f[col.Type].trim();
      if (NOT_AN_OBJECT.has(type)) { omitted++; continue; }

      const ra = hmsToDegrees(f[col.RA]);
      const dec = dmsToDegrees(f[col.Dec]);
      if (!Number.isFinite(ra) || !Number.isFinite(dec)) { omitted++; continue; }

      // V-Mag is the visual magnitude and the one to rank by. B-Mag is blue and
      // is NOT the same measurement; it stands in only when V is absent, and
      // the object card says which one it is showing.
      const v = numOrNaN(f[col['V-Mag']]);
      const b = numOrNaN(f[col['B-Mag']]);
      const mag = Number.isFinite(v) ? v : b;

      const messier = intOrZero(f[col.M]);
      const common = (f[col['Common names']] ?? '').split(',')[0].trim();

      const notable = messier > 0 || !!common;
      if (NOT_DEEP_SKY.has(type) && !notable) { omitted++; continue; }

      const keep = notable || (Number.isFinite(mag) && mag <= magLimit);
      if (!keep) { omitted++; continue; }

      const name = prettyDesignation(f[col.Name]);
      if (seen.has(name)) continue; // the addendum re-states a few NGC entries
      seen.add(name);

      out.push({
        ra, dec, mag,
        majAx: numOrNaN(f[col.MajAx]),
        minAx: numOrNaN(f[col.MinAx]),
        con: f[col.Const].trim(),
        type,
        name,
        common,
        messier,
      });
    }
  }

  // Brightest first, and an object with no magnitude goes LAST rather than
  // first: sorting NaN as 0 would put every unmeasured nebula ahead of M31.
  out.sort((a, b) => {
    const av = Number.isFinite(a.mag) ? a.mag : Infinity;
    const bv = Number.isFinite(b.mag) ? b.mag : Infinity;
    return av - bv;
  });
  return { dsos: out, omitted };
}

// -- constellations ---------------------------------------------------------

/** d3-celestial gives longitude in [-180,180]; right ascension runs [0,360). */
const lonToRa = (lon) => ((lon % 360) + 360) % 360;

export function readConstellations(linesText, namesText) {
  const lines = JSON.parse(linesText);
  const names = JSON.parse(namesText);

  const byId = new Map();
  for (const f of names.features) {
    const p = f.properties ?? {};
    const i18n = {};
    for (const lang of LANGS) {
      // Absent stays absent. A missing translation falls back to the IAU name
      // at render time, which is the international standard and readable
      // everywhere - inventing one here would hide which is which.
      if (typeof p[lang] === 'string' && p[lang].trim()) i18n[lang] = p[lang].trim();
    }
    byId.set(f.id, {
      id: f.id,
      name: p.name ?? f.id,
      genitive: p.gen ?? '',
      rank: Number(p.rank ?? 3),
      label: f.geometry?.coordinates
        ? [lonToRa(f.geometry.coordinates[0]), f.geometry.coordinates[1]]
        : null,
      i18n,
      lines: [],
    });
  }

  let segments = 0;
  for (const f of lines.features) {
    const c = byId.get(f.id);
    if (!c) continue; // a figure for a constellation with no name entry is dropped, not invented
    for (const seg of f.geometry?.coordinates ?? []) {
      c.lines.push(seg.map(([lon, lat]) => [lonToRa(lon), lat]));
      segments++;
    }
  }

  return { list: [...byId.values()].sort((a, b) => a.id.localeCompare(b.id)), segments };
}

// -- main -------------------------------------------------------------------

const round = (x, n = 4) => Number(x.toFixed(n));

async function main() {
  console.log('== sources ====================================================');
  await ensureSources();

  console.log('== stars (HYG 4.1) ============================================');
  const hygText = await readFile(join(CACHE, 'hygdata_v41.csv'), 'utf8');
  const { stars, omitted: starsOmitted, sunSkipped, noDistance } = readStars(hygText);
  console.log(`   kept ${stars.length.toLocaleString('en-US')} stars at magnitude <= ${STAR_MAG_LIMIT}`);
  console.log(`   dropped ${starsOmitted.toLocaleString('en-US')} fainter or unusable rows, plus the Sun (${sunSkipped} row)`);
  console.log(`   ${noDistance.toLocaleString('en-US')} of the kept stars have NO usable distance (parallax <= 0 in Hipparcos)`);

  console.log('== deep sky (OpenNGC) =========================================');
  const ngcText = await readFile(join(CACHE, 'NGC.csv'), 'utf8');
  const addText = await readFile(join(CACHE, 'addendum.csv'), 'utf8');
  const { dsos, omitted: dsoOmitted } = readDsos([ngcText, addText]);
  const messier = dsos.filter((d) => d.messier > 0).length;
  const named = dsos.filter((d) => d.common).length;
  console.log(`   kept ${dsos.length.toLocaleString('en-US')} objects (${messier} Messier, ${named} with a common name)`);
  console.log(`   dropped ${dsoOmitted.toLocaleString('en-US')} rows (duplicates, non-existent, stars, or not deep-sky and unnamed, or fainter than ${DSO_MAG_LIMIT} with no name)`);

  console.log('== constellations (d3-celestial) ==============================');
  const consts = readConstellations(
    await readFile(join(CACHE, 'constellations.lines.json'), 'utf8'),
    await readFile(join(CACHE, 'constellations.json'), 'utf8'),
  );
  const withLines = consts.list.filter((c) => c.lines.length).length;
  console.log(`   ${consts.list.length} constellations, ${withLines} with figures, ${consts.segments} line segments`);
  for (const lang of LANGS) {
    const n = consts.list.filter((c) => c.i18n[lang]).length;
    console.log(`   names in ${lang}: ${n}/${consts.list.length}${n === 0 ? '  (falls back to the IAU name)' : ''}`);
  }

  console.log('== writing ====================================================');
  await mkdir(OUT, { recursive: true });

  const bin = encodeCatalog({ stars, dsos, magLimit: STAR_MAG_LIMIT, starsOmitted, dsoOmitted });
  await writeFile(join(OUT, 'catalog.bin'), bin);

  const constJson = JSON.stringify({
    source: 'd3-celestial, Copyright (c) 2015 Olaf Frohn, BSD 3-Clause',
    constellations: consts.list.map((c) => ({
      ...c,
      label: c.label ? [round(c.label[0], 3), round(c.label[1], 3)] : null,
      lines: c.lines.map((seg) => seg.map(([ra, dec]) => [round(ra, 3), round(dec, 3)])),
    })),
  });
  await writeFile(join(OUT, 'constellations.json'), constJson);

  const attribution = [
    '# Where this folder comes from',
    '',
    'These files are DERIVED works. They do NOT carry the cartridge MIT licence.',
    '',
    '## catalog.bin - CC BY-SA 4.0',
    '',
    'Built from the HYG database v4.1 (astronexus) and OpenNGC (Mattia Verga),',
    'both CC BY-SA 4.0. https://creativecommons.org/licenses/by-sa/4.0/',
    '',
    '- https://github.com/astronexus/HYG-Database',
    '- https://github.com/mattiaverga/OpenNGC',
    '',
    '## constellations.json - BSD 3-Clause',
    '',
    'Built from d3-celestial, Copyright (c) 2015 Olaf Frohn. All rights reserved.',
    'The full licence text is in ../../LICENSE.d3-celestial.',
    '',
    '- https://github.com/ofrohn/d3-celestial',
    '',
    '## What was left out, and it is on purpose',
    '',
    `- Stars fainter than magnitude ${STAR_MAG_LIMIT} (the naked-eye limit).`,
    `  Kept ${stars.length}, dropped ${starsOmitted}.`,
    `- ${noDistance} of the kept stars have no usable distance. They are stored as`,
    '  "unknown", never as the 100000-parsec placeholder the source uses.',
    '- Deep-sky rows that are duplicates, non-existent, or fainter than magnitude',
    `  ${DSO_MAG_LIMIT} with no Messier number and no common name. Kept ${dsos.length}, dropped ${dsoOmitted}.`,
    '',
    'Regenerate with `pnpm --filter @mnemosyne-plugins/mnemo-cosmos catalog`.',
    '',
  ].join('\n');
  await writeFile(join(OUT, 'ATTRIBUTION.md'), attribution);

  const srcBytes = (await Promise.all(
    ['hygdata_v41.csv', 'NGC.csv', 'addendum.csv', 'constellations.lines.json', 'constellations.json']
      .map((f) => stat(join(CACHE, f)).then((s) => s.size)),
  )).reduce((a, b) => a + b, 0);

  // 🪤 `constJson.length` counts CHARACTERS, and the constellation names are
  // Chinese and Russian. Reported as bytes it understated the file by 1 439 —
  // a number that is wrong in the direction that flatters us, which is the
  // direction nobody checks. Measure what is on disk.
  const constBytes = new TextEncoder().encode(constJson).length;

  const kb = (n) => `${(n / 1024).toFixed(1)} KB`;
  console.log('== measured ===================================================');
  console.log(`   sources in            ${srcBytes.toLocaleString('en-US')} bytes  (${kb(srcBytes)})`);
  console.log(`   catalog.bin           ${bin.length.toLocaleString('en-US')} bytes  (${kb(bin.length)})`);
  console.log(`   constellations.json   ${constBytes.toLocaleString('en-US')} bytes  (${kb(constBytes)})`);
  console.log(`   ratio                 ${(srcBytes / (bin.length + constBytes)).toFixed(1)}x smaller`);
  console.log(`   objects               ${stars.length + dsos.length} clickable (${stars.length} stars + ${dsos.length} deep sky)`);
  console.log(`   without distance      ${noDistance} stars`);
}

// Importable for tests without running the build. `pathToFileURL` and not a
// hand-built `file://` + argv[1]: on Windows that produces `file://C:/…`, which
// parses with `C:` as the HOST, never equals `import.meta.url`, and the build
// would silently do nothing when run directly.
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main().catch((err) => {
    console.error(err);
    process.exitCode = 1;
  });
}
