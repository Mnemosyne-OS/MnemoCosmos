# Where this folder comes from

These files are DERIVED works. They do NOT carry the cartridge MIT licence.

## catalog.bin - CC BY-SA 4.0

Built from the HYG database v4.1 (astronexus) and OpenNGC (Mattia Verga),
both CC BY-SA 4.0. https://creativecommons.org/licenses/by-sa/4.0/

- https://github.com/astronexus/HYG-Database
- https://github.com/mattiaverga/OpenNGC

## constellations.json - BSD 3-Clause

Built from d3-celestial, Copyright (c) 2015 Olaf Frohn. All rights reserved.
The full licence text is in ../../LICENSE.d3-celestial.

- https://github.com/ofrohn/d3-celestial

## What was left out, and it is on purpose

- Stars fainter than magnitude 6.5 (the naked-eye limit).
  Kept 8920, dropped 110705.
- 206 of the kept stars have no usable distance. They are stored as
  "unknown", never as the 100000-parsec placeholder the source uses.
- Deep-sky rows that are duplicates, non-existent, or fainter than magnitude
  13 with no Messier number and no common name. Kept 3137, dropped 10897.

Regenerate with `pnpm --filter @mnemosyne-plugins/mnemo-cosmos catalog`.
