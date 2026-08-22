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

## To replace a placeholder product photo
Each product card currently uses a colored gradient block (`.card-swatch`)
instead of a real photo. To use a real photo, replace this:
```html
<div class="card-swatch sw-1"></div>
```
with:
```html
<img class="card-swatch" src="images/your-photo.jpg" alt="Saree name">
```
and drop your photo file into the `images/` folder.

## To go live for free (GitHub Pages)
1. Create a free GitHub account and a new repository (e.g. `om-textiles`).
2. Upload all these files/folders into that repository.
3. In the repository, go to Settings → Pages → set Source to the main branch.
4. GitHub gives you a live URL like `https://yourusername.github.io/om-textiles/`.
