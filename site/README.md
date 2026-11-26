# Vincent Tan — Hardware Portfolio

Static site (plain HTML/CSS/JS, no build step) hosted free on GitHub Pages at
**https://vin1623.github.io**.

## Editing content
- **Projects:** `js/projects.js` (text, role, highlights, and which media files exist)
- **About / contact / skills / resume link:** `js/site.js`
- **Media:** `assets/<project-id>/`

After any edit: commit + push → the live site updates in ~1 minute.

## Adding a schematic (Altium)
1. Open the schematic → **File → Smart PDF** → current document/project → *Color* output.
2. Save as `assets/<project-id>/schematic.pdf` (or export a PNG/SVG for best mobile display).
3. In `js/projects.js` set `schematic: "schematic.pdf"`.

## Adding the 3D board view (Altium → GLB)
1. In the PCB: **File → Export → STEP 3D** → save `board.step`.
2. Convert STEP → GLB (free, pick one):
   - **CAD Assistant** (Open Cascade, free): open `board.step` → *Save as* → glTF binary (`.glb`).
   - **FreeCAD**: File → Import `board.step` → select all → File → Export → `*.glb`.
3. Keep it under ~20 MB (GitHub limit is 100 MB per file; smaller loads faster).
   If it's huge, hide 3D bodies of tiny passives before exporting, or simplify the mesh.
4. Save as `assets/<project-id>/board.glb` and set `model: "board.glb"`.

## Cover images & photos
- `cover: "cover.png"` — a 16:9 screenshot of the 3D view or layout for the home-page card.
- `photos: ["front.jpg", "rework.jpg"]` — real board photos (bring-up/rework shots are great).

## Before publishing team boards
Confirm with the team lead that sharing URC / MATE / Micromouse design files is OK,
and only show the portions you designed.
