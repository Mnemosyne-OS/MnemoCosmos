# NOTICE

This cartridge redistributes four works that are not ours. Every line below is a
licence condition, not a courtesy, and every licence was **read at the URL given**
on 2026-09-09 — not inferred from a badge, a package page or a summary.

---

## Star catalogue — CC BY-SA 4.0

> **HYG database, version 4.1** — David Nash / astronexus.
> https://github.com/astronexus/HYG-Database

- Licence text read at: https://raw.githubusercontent.com/astronexus/HYG-Database/main/LICENSE
- Licence: https://creativecommons.org/licenses/by-sa/4.0/
- Project page: https://astronexus.com/projects/hyg
- Source file used: `hyg/CURRENT/hygdata_v41.csv` (33 932 548 bytes)

⚠️ The build brief called this "HYG 4.2". **There is no 4.2.** The repository's
current release is **4.1**, and `hyg/README.md` says so in its first line. The
version written here is the one that was downloaded and parsed.

HYG is itself a compilation of Hipparcos, the Yale Bright Star Catalogue and the
Gliese Catalogue of Nearby Stars. Proper names come from the IAU list by way of
https://github.com/mirandadam/iau-starnames.

## Deep-sky catalogue — CC BY-SA 4.0

> **OpenNGC** — Mattia Verga. https://github.com/mattiaverga/OpenNGC

- Licence text present in the repository at `LICENSES/CC-BY-SA-4.0.txt`, and
  stated in the README: "OpenNGC is released under CC-BY-SA-4.0 license".
- Read at: https://raw.githubusercontent.com/mattiaverga/OpenNGC/master/README.md
- Source files used: `database_files/NGC.csv`, `database_files/addendum.csv`
- DOI: 10.21938/y.1ejWUD_MQ6b_eDFoVbbw

## Constellation figures and names — BSD 3-Clause

> **d3-celestial** — Copyright (c) 2015, Olaf Frohn. All rights reserved.
> https://github.com/ofrohn/d3-celestial

- Licence text read at: https://raw.githubusercontent.com/ofrohn/d3-celestial/master/LICENSE
- Source files used: `data/constellations.lines.json`, `data/constellations.json`
- The BSD 3-Clause text is preserved verbatim in `LICENSE.d3-celestial`, as
  clauses 1 and 2 require.
- Clause 3 forbids using the author's name to endorse or promote this cartridge.
  Nothing here does; this is attribution, which clause 3 does not restrict.

🚨 **Why this file and not Stellarium's.** The constellation stick figures
everyone recognises are not in any star catalogue — they come from a
"skyculture" file, and Stellarium's are GPL-2.0, which a commercially
distributed cartridge cannot carry. d3-celestial ships its own line file under
BSD. Its README credits only D3.js and d3.geo.zoom, and neither the repository
nor the `data/` folder attributes the figures to any upstream project.

⚠️ **What that establishes, and what it does not.** It establishes that the
author released this data under BSD 3-Clause. It does **not** establish that he
drew every line himself — nobody outside the project can prove that, and this
note refuses to claim it. If that provenance is ever contested, the fallback is
the one the brief names: ship the sky without the figures. A sky with no lines
is still a sky.

## Ephemerides — MIT

> **astronomy-engine** 2.1.19 — Don Cross. https://github.com/cosinekitty/astronomy

- Licence: MIT, declared in the package metadata
  (`https://registry.npmjs.org/astronomy-engine/latest`) and in the repository.
- A runtime dependency, not redistributed data: it is installed from npm and
  carries its own LICENSE file inside the package.

---

## The file this cartridge produces, and its licence

`public/catalog/catalog.bin` is built by `scripts/build-catalog.mjs` from the HYG
and OpenNGC CSVs. Under CC BY-SA 4.0 that file is **adapted material**, so:

> 🚨 **`public/catalog/catalog.bin` is licensed CC BY-SA 4.0**, not MIT.

`public/catalog/constellations.json` is derived from d3-celestial's BSD data, so
it stays under **BSD 3-Clause** with the copyright notice above.

The cartridge's own **code** is MIT (see `LICENSE`). A collection that merely
includes a BY-SA work alongside separately-licensed code is not itself forced to
BY-SA; a file *derived* from a BY-SA work is. That distinction is the whole
reason this section names the individual files rather than the directory.

`public/catalog/ATTRIBUTION.md` carries the same statement next to the data, so
anyone who copies the folder out of this repository takes the terms with them.
