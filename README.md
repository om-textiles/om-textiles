# OM Textiles website

Plain HTML + CSS, no build tools, no server needed. Free to host on GitHub Pages.

## Files
- `index.html` — home page
- `sarees.html` — saree catalog
- `lehengas.html` — lehenga catalog
- `about.html` — visit/contact info
- `css/style.css` — all styling and colors in one place

## To rename the brand later
Every page has the brand name in two spots: the `<title>` tag near the top,
and the `<div class="brand">OM <span>Textiles</span></div>` in the header.
Find-and-replace "OM Textiles" (and "OM"/"Textiles" separately in that div)
across all four `.html` files — nothing else needs to change.

## To replace placeholder photos with a real multi-image slideshow
Each product card on the Sarees/Lehengas pages now has a `.slideshow` block
with 2 placeholder color slides and dots underneath — visitors can click a
dot, and it also auto-advances every 4 seconds. This is exactly where your
brother's mannequin photos will go.

Currently one card looks like this (placeholder colors):
```html
<div class="slideshow">
  <div class="slide sw-1 active"></div>
  <div class="slide sw-3"></div>
  <div class="dots"><button class="dot active"></button><button class="dot"></button></div>
</div>
```
Replace each `<div class="slide ...">` with an image slide, keeping the
`active` class only on the first one:
```html
<div class="slideshow">
  <div class="slide active"><img src="images/saree1-front.jpg" alt="Saree name — front"></div>
  <div class="slide"><img src="images/saree1-back.jpg" alt="Saree name — back"></div>
  <div class="dots"><button class="dot active"></button><button class="dot"></button></div>
</div>
```
Add one more `<div class="slide">...</div>` and one more `<button class="dot">`
for each extra photo of that saree — the script automatically detects however
many slides/dots are in a card, no need to edit the script itself.

## Important: uploading folders to GitHub
This project now has 3 folders: `css`, `js`, and `images`. When uploading via
GitHub's "Add file → Upload files" screen, drag each **folder** in as a whole
(not just the files inside it) — dragging loose files in without their folder
causes broken links (this happened once already with `css/style.css`). If a
page ever looks unstyled or a slideshow doesn't move, check the browser's
address bar path first, then confirm the matching folder exists in the repo.

## To go live for free (GitHub Pages)
1. Create a free GitHub account and a new repository (e.g. `om-textiles`).
2. Upload all these files/folders into that repository.
3. In the repository, go to Settings → Pages → set Source to the main branch.
4. GitHub gives you a live URL like `https://yourusername.github.io/om-textiles/`.
