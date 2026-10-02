# Cosmos

An offline sky atlas wired to your own memory.

Every object on screen carries a catalogue identifier — `HIP 32349`, `NGC 224`,
`M31` — and one button asks what your own notes already say about it. Then a
review mode hides an object's name, asks which one it is, and remembers when to
ask again.

Built for the people who already keep an observing log, because those are the
people who have something to find.

---

## Why the identifier is the whole point

This is the third condition from the Atlas cartridge, and it is the one that is
easy to forget:

1. **A viewer under a permissive licence.** three.js, MIT.
2. **Data that fits on the disk.** 700 KB, and nothing is fetched at runtime.
3. **A stable identifier.** `HIP 71683` has meant Alpha Centauri A since 1997.
   `M31` has meant the Andromeda Galaxy since 1764.

Without the third, this would be a decoration. With it, the sky is an index into
somebody's memory, and it stays one across languages, spellings and sources.

The canonical key is chosen by a fixed order, written once in
`src/cosmos/identity.ts`:

| Object | Key | Aliases shown |
|---|---|---|
| Star with a Hipparcos number | `HIP 32349` | proper name, `9 α CMa`, `HD 48915`, `Gl 244A` |
| Star without one | `HD …`, then the Gliese id | the rest |
| Star with none of those | `HYG <index>` — **and the card says this key is local to this build** | |
| Deep sky | `NGC 224` / `IC 434` | common name, `M31` |
| Sun, Moon, planet | the IAU name | |

NGC is the key and Messier is an alias, which is the opposite of how people
speak — deliberately. All 109 Messier objects have an NGC or IC number; 3 028
other objects have no Messier one. A key that changes shape depending on how
famous an object is cannot be relied on by anything that stores it.

The question put to memory carries **the name and the key and the aliases**,
because the notes being searched were written by a person who picked one of
those spellings without knowing which one a program would use later.

---

## What is in the box, measured

Run `pnpm --filter @mnemosyne-plugins/mnemo-cosmos catalog` to rebuild it; the
script prints all of this and writes it into `public/catalog/ATTRIBUTION.md`.

| | |
|---|---|
| Stars | **8 920**, every star down to apparent magnitude **6.5** — the naked-eye sky |
| Stars left out | **110 705** fainter rows in the source |
| Stars with no measured distance | **206** — their cards show a dash, never a number |
| Deep sky | **3 137** from OpenNGC, including all **109** Messier objects it lists |
| Deep sky left out | **10 897** rows: duplicates, entries for objects that turned out not to exist, faint objects with no name |
| Constellations | **88**, all with figures, **150** line segments |
| Constellation names | en/fr/es/de/ru/zh; **pt falls back to the IAU Latin name** |
| `catalog.bin` | **668 008 bytes** |
| `constellations.json` | **33 558 bytes** |
| Sources on disk | 37 904 371 bytes → **54× smaller** |
| App bundle | 771 KB, 221 KB gzipped |

Nothing is fetched at runtime. Unplug the network and it still works, which is
the only reason a cartridge like this is worth anything.

### The truncation is on screen

"Sources & credits" states every number above, in the reader's language. A
catalogue that is cut down on purpose and does not say so reads as a catalogue
with holes in it.

---

## The three things this refuses to do

**It does not invent a distance.** HYG writes `100000` parsecs in the distance
column for a star whose parallax came back negative or zero — a measurement
nobody made, in the same column as measurements that were. The build script
converts those to "unknown", the card prints `—`, and the counter says how many
stars are in that state. Placing them at 100 000 parsecs would draw a false
spherical shell around the scene and state a distance to 206 stars that have
none.

**It does not invent a place.** Altitude, azimuth, rise and set need to know
where you are standing. With no place given they come back `null` and the screen
says so. There is no fallback to latitude 0, longitude 0 — that is a real place
in the Gulf of Guinea, and it would produce confident, wrong rise times for
everyone who never typed one in. The place is **typed in by you**: this
cartridge has no network access and would not look your location up without
saying so.

**It does not bill you for looking.** `mnemosyne.query` is a model call with RAG
attached, so it costs a cloud inference on a cloud route. It is a **button**,
never a panel that fills itself in when you click a star.

---

## What it draws, and what that is

**A celestial sphere.** Directions, not distances. Every object sits on one
sphere of one radius, and the screen says so. That is not a simplification of a
better thing that was too hard — it is what the data supports: 206 of 8 920
stars have no distance at all, and among those that do the range is four orders
of magnitude. A "3D" star field would have to put those 206 somewhere, and
wherever it put them would be a claim nobody measured.

**Sun, Moon and planets at their computed positions**, for the instant on
screen, from `astronomy-engine`. The instant is always displayed: a sky with no
date on it is a sky nobody can check.

⚠️ The star catalogue is J2000 and the bodies are coordinates *of date* — about
0.3° apart in 2026, under the size of the marker. Using J2000 for the planets
instead would put them in the wrong place relative to the **horizon**, which is
the frame anyone standing outside is actually in. The smaller error is the
deliberate one.

### Accuracy, checked against something outside this repository

Positions were compared with **JPL Horizons** for 2026-09-09 21:00 UT, observer
at 2.35°E 48.85°N 35 m:

| Body | ΔRA | ΔDec | Δmag |
|---|---|---|---|
| Sun | −1.1″ | +0.6″ | 0.000 |
| Moon | +3.9″ | −2.8″ | −0.016 |
| Mars | −0.6″ | −1.9″ | +0.032 |
| Jupiter | −2.3″ | −0.8″ | +0.006 |
| Saturn | −10.5″ | −1.5″ | −0.140 |

Worst case **11 arcseconds**, inside the library's claimed one arcminute. The
magnitude spread on Saturn is the ring-tilt model, and is why the card prints
what the library says rather than a rounded "brightness".

`src/cosmos/solar.test.ts` asserts against those Horizons figures, so the test
is anchored outside this repository rather than to whatever the library happened
to say the day it was written.

---

## Licences — read `NOTICE.md` before touching the data

| Work | Licence | What it is |
|---|---|---|
| HYG 4.1, astronexus | **CC BY-SA 4.0** | stars |
| OpenNGC, Mattia Verga | **CC BY-SA 4.0** | clusters, nebulae, galaxies |
| d3-celestial, Olaf Frohn | **BSD 3-Clause** | constellation figures and names |
| astronomy-engine, Don Cross | **MIT** | ephemerides (npm dependency) |
| this cartridge's code | **MIT** | |

🚨 **`public/catalog/catalog.bin` is CC BY-SA 4.0, not MIT.** It is *adapted
material* derived from two ShareAlike databases. The code stays MIT; a
collection that includes a BY-SA work alongside separately-licensed code is not
itself forced to BY-SA, but a file *derived* from one is. That is why
`NOTICE.md` names individual files rather than directories.

⛔ **Stellarium is GPL-2.0 and stellarium-web-engine is AGPL-3.0.** Neither can
go anywhere near a cartridge the Hub distributes commercially.

The constellation figures were the one open question in the build brief. They
are not in any star catalogue — they come from a "skyculture" file, and
Stellarium's are GPL. d3-celestial ships its own under BSD, credits only D3.js,
and attributes the figures to no upstream project. `NOTICE.md` says exactly what
that establishes and what it does not.

---

## Layout

```
scripts/catalog-format.mjs   the binary layout + the encoder   (Node)
scripts/build-catalog.mjs    CSV in, catalog.bin out, measured  (Node)
src/cosmos/catalog.ts        the decoder                        (browser)
src/cosmos/identity.ts       canonical keys, aliases, the memory question
src/cosmos/sky.ts            coordinates, projection, picking, formatting — all pure
src/cosmos/solar.ts          astronomy-engine, wrapped
src/cosmos/SkyCanvas.tsx     three.js: one Points, DOM labels, screen-space picking
src/cosmos/page.tsx          the shell
src/mnemo/CosmosMemory.tsx   ask your own notes about the selected object
src/mnemo/review.ts          Leitner, pure — ported from the Atlas cartridge
src/mnemo/levels.ts          the families you can be asked about
src/mnemo/session.ts         a run: length, streak, accuracy — ported
src/mnemo/ReviewPanel.tsx    families → length → run → results
src/gestures/                the hand: speeds, the gesture panel, the merging writer
```

Picking is **not** a raycaster. A raycaster's threshold is in world units, so
the click target grows and shrinks with the zoom and has to be re-tuned forever.
`pick()` projects every candidate to the screen and takes the nearest within a
pixel budget, which is the question actually being asked — what did they click
on the screen. 12 000 projections is under a millisecond, and the function is
pure, so it has tests.

---

## Installing

This cartridge is not in MnemoHub yet. Install it by pointing Mnemosyne OS at
this repository, from MnemoHub's dev cartridges section.

⚠️ Only the **first** cartridge installed that way is free. From the second one
on, an active Engramm licence is required (`DEV_LINK_LICENSE_REQUIRED`).
Cartridges installed from MnemoHub itself do not count against that slot.

Nothing is built, downloaded or compiled on your machine: `dist/` is committed
to this repository and is read straight off your disk.

## Your hands

Needs Mnemosyne OS 1.7.0 or later, with hand tracking on. Put Cosmos in full
screen. Pinch and move to slide the sky. Pinch and bring your hand toward the
camera to come closer, or pinch with both hands to zoom. Hold your open hands
still to go back to the starting view, and pinch and hold on a point to open
that object. A hand select goes through the same picking as a click.

The ✋ button in the top bar lists these gestures, says whether Mnemosyne
granted them, and sets two speeds: move and zoom. The speeds are saved with the
rest of the cartridge's state.

## What it asks for, and why

- **It reads your memory, and it writes only its own.** The cartridge asks for
  `vault:read` and `vault:write`. The write permission exists for one thing:
  saving a revision run into the cartridge's own sandbox vault, on your gesture.
  It never writes to your other vaults. A sandbox vault is a store the cartridge
  owns, and making anything in it permanent is a decision you make in the shell,
  not one the cartridge can take.
- **It receives intentions from your hands, never the camera.** `gesture:receive`
  lets Mnemosyne send moves such as « turn by 12 px » while this window is full
  screen. The cartridge never sees the camera image or your hand.
- **Asking your memory costs an inference.** The memory panel runs a model over
  your own vaults, so on a cloud route it is billed. It is a button you press,
  never a panel that fills itself.

## Running it

```bash
pnpm --filter @mnemosyne-plugins/mnemo-cosmos test
pnpm --filter @mnemosyne-plugins/mnemo-cosmos typecheck
pnpm --filter @mnemosyne-plugins/mnemo-cosmos build
pnpm --filter @mnemosyne-plugins/mnemo-cosmos catalog   # rebuild the data
```

🚨 **Close Mnemosyne before any `pnpm install`.** Installing while Electron
holds file locks writes an incomplete pnpm store, and the damage does not show
up here — it shows up later as `pnpm build:core` failing on `Cannot find type
definition file for 'node'` *after* it has already deleted `dist/`, at which
point the app will not boot.

Dev server: port **5219** (`apps/dev-ports.json` is the single source of truth).

## Seeing it in the app

In an UNPACKAGED build the host scans `<repo>/apps/` and every folder holding a
`mnemo-plugin.json` becomes a dev cartridge (`main/index.ts`: `devPluginsPath`).
So the folder has to live in the checkout the app runs from, and that folder
needs its own `node_modules` — the host spawns `pnpm run dev:cartridge` in it.

A folder anywhere else can be side-loaded instead, from MnemoHub's dev
cartridges section. ⚠️ Only the FIRST side-loaded cartridge is free; a second
needs the `dev.linkExtra` capability (`mayAddExternalCartridge`).

🚨 **In a workspace checkout, `entrypoints.renderer` must be the localhost
URL**, not `index.html`.
`cartridgeUrl.ts` sends anything that is not `http(s)://` to
`mnemo-plugin://app/<id>/…`, i.e. the PACKAGED copy — and for a workspace
cartridge that resolves to the Vite *source* `index.html`, which references
`/src/main.tsx` and cannot boot. The manifest shipped with `"index.html"` at
first and `pnpm check:ports` passed it, because its validator returns early
when a manifest declares no `localhost:NNNN` port: green there means "nothing
was checked", not "correct".

⚖️ **The published repository carries the opposite value, and that is correct.**
`scripts/stage-cartridge.mjs` rewrites the entrypoint to `index.html` when it
derives the public tree, because an installed cartridge has no dev server to
point at. The protocol handler tries `<plugin>/dist/<path>` before the plugin
root (`main/index.ts`), so there `index.html` resolves to the built file that
ships in `dist/`, never to the Vite source sitting beside it.
