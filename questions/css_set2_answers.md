

**a. Difference between `id` and `class` selector (with example)**  
`id` = unique (used once) selected via `#idName`. `class` = reusable (many elements) selected via `.className`.  
Example:  
```html
<p id="main">One</p>
<p class="note">Two</p>
```
```css
#main { color: red; }
.note { color: blue; }
```

**b. Two benefits of external style sheets**  
1. Reuse/consistency: one file styles many pages.  
2. Better caching & maintenance: change once, all pages update; smaller HTML.

**c. Purpose of `float` property**  
Originally for wrapping text around images; it takes an element out of normal flow horizontally (left/right) so inline content flows around it. Example:  
```css
img.left { float: left; margin:0 1rem 1rem 0; }
```

**d. `visibility: hidden` vs `display: none`**  
`visibility:hidden` hides element but keeps its layout space.  
`display:none` removes element from layout (no space).  
Screen readers usually ignore `display:none`.

**e. What is `z-index` & how it works**  
Controls stacking order of positioned elements (those with `position` other than static). Higher `z-index` appears on top within the same stacking context. Example:  
```css
.box1 { position:absolute; z-index:1; }
.box2 { position:absolute; z-index:10; }
```

**f. Compare `inline`, `inline-block`, `block`**  
- `inline`: no line break; width/height ignored; margin/padding vertical partially respected (`<span>`).  
- `inline-block`: no line break, but width/height & full box model apply (`<img>` behaves similarly).  
- `block`: starts on new line; expands to container width (`<div>`).  

**g. Necessity of `background-repeat` & `background-position`**  
They control how background images tile and where they sit. Prevent awkward tiling (e.g., `no-repeat`) and place logo (e.g., `top right`) without extra markup. Example:  
```css
header { background:url(logo.png) no-repeat top right; }
```

**h. Different CSS link states**  
Common pseudo-classes applied to anchor (`<a>`) elements:  
`:link` – an unvisited hyperlink.  
`:visited` – a link the user has already followed.  
`:hover` – pointer is over the element (mouse / stylus).  
`:focus` – element has keyboard / programmatic focus (e.g., tabbed to).  
`:active` – the short moment while the element is being activated (mouse button down).  

Why they matter: You can give users feedback for navigation, accessibility (focus outline), and interaction (active press feel).

Required ordering (so later rules aren’t overridden unexpectedly):  
`a:link`, `a:visited`, `a:hover`, `a:focus`, `a:active`  
Easy mnemonic: LoVe HAte F(ocus) or LVHFA. (Some remember LVHFA; earlier specs promoted LVHA, but including focus after hover is common so focus styles are not overridden.)

Privacy note: Browsers restrict which CSS properties you can read / animate on `:visited` to prevent history sniffing (color can change, but you cannot detect it via scripts).

Example:
```css
a:link { color:#06c; }
a:visited { color:#551a8b; }
a:hover { text-decoration:underline; }
a:focus { outline:2px solid orange; outline-offset:2px; }
a:active { color:#c00; }
```
```html
<a href="page1.html">Home</a>
<a href="https://example.com">External</a>
```
Keyboard users see the focus ring; mouse users see hover underline; a pressed link flashes red (`:active`).

---
## Q2 (5 marks) What is CSS Flexbox? Explain characteristics.
Flexbox (Flexible Box Layout) is a 1‑dimensional layout system for arranging items in a row or column with efficient space distribution and alignment.
Key characteristics:
1. **Main vs Cross Axis**: `flex-direction` chooses row / column.
2. **Flexible sizing**: Items can grow (`flex-grow`), shrink (`flex-shrink`), or have base sizes (`flex-basis`).
3. **Alignment & Distribution**: `justify-content` (main axis), `align-items` (cross axis), `align-content` (multi-line), `gap` for spacing without margins.
4. **Reordering**: `order` can visually reorder items (use sparingly for accessibility).
5. **Auto-wrapping**: `flex-wrap` creates new lines; combined with direction becomes `flex-flow`.
Example:
```html
<ul class="menu">
  <li>Home</li><li>About</li><li>Blog</li><li>Contact</li>
</ul>
```
```css
.menu { display:flex; gap:1rem; justify-content:center; }
.menu li { list-style:none; padding:.5rem 1rem; background:#eee; }
```

---
## Q3 (5 marks) CSS Box Model Components
Every element box has (inside→out): **content**, **padding**, **border**, **margin**. Total rendered width = content width + padding left/right + border left/right + margin left/right (unless `box-sizing:border-box`). Margins are transparent & may collapse vertically between block elements; padding & border push background. Example:
```css
.card { width:200px; padding:10px; border:2px solid #333; margin:20px; }
```
If `box-sizing:border-box`, the assigned width includes padding & border.

---
## Q4 (5 marks) Meaning of Selectors
Each selector expresses a structural relationship. (If your paper’s exact (e) differs, tell me.)

| Label | Selector | Name | Matches |
|-------|----------|------|---------|
| a | `div p` | Descendant combinator | Any `<p>` inside a `<div>` at any depth. |
| b | `div > p` | Child combinator | `<p>` whose direct parent is a `<div>`. |
| c | `div ~ p` | General sibling combinator | `<p>` sharing the same parent as a `<div>` and appearing after that `<div>`. All later siblings, not just first. |
| d | `div + p` | Adjacent sibling combinator | The first `<p>` immediately after a `<div>` (same parent). |
| e | `div, p` | Grouping selector | All `<div>` elements and all `<p>` elements (union). |

Illustration:
```html
<div id="outer">
  <p id="p1">Inside div (child)</p>
  <section>
    <p id="p2">Nested deeper (descendant only)</p>
  </section>
</div>
<p id="p3">Paragraph after div (adjacent)</p>
<p id="p4">Another paragraph after div (general sibling)</p>
```
Which selectors hit which paragraphs:
* `div p` -> p1, p2
* `div > p` -> p1 only
* `div + p` -> p3 only
* `div ~ p` -> p3 and p4
* `div, p` -> the div (`outer`) plus all four paragraphs

Specificity (all these are element selectors, combinators don’t add specificity): each simple element adds (0,0,0,1). Grouped selectors are evaluated separately. Child vs descendant vs sibling does NOT change numeric specificity; they differ only in structural filtering.

Common mistake: expecting `div + p` to match multiple paragraphs; it matches only the very first one immediately following the `div`.

---
## Q5 (5 marks) Methods for Implementing Color Schemes
1. **Hex / Named / RGB / HSL**: Basic color notations. HSL is intuitive for tweaking hue, saturation, lightness.
2. **CSS Variables**: Define palette once: `:root { --primary:#0a74da; --accent:#ff9800; }` then reuse.
3. **Utility Classes / Design Tokens**: Centralize scheme (`.bg-primary { background:var(--primary); }`).
4. **Theming (Light/Dark)**: Use media query `@media (prefers-color-scheme: dark)` or toggle a `.dark` class to switch variable values.
5. **Alpha & Overlays**: RGBA / HSLA for layered transparency (`rgba(0,0,0,.6)` for readable text over images).
Example variables:
```css
:root { --bg:#ffffff; --text:#111; }
.dark { --bg:#121212; --text:#eee; }
body { background:var(--bg); color:var(--text); }
```

---
## Q6 (5 marks) Card with Image & Text Overlay on Hover
```html
<div class="card">
  <img src="photo.jpg" alt="Sample">
  <div class="overlay">Hello World</div>
</div>
```
```css
.card { position:relative; width:260px; overflow:hidden; border-radius:12px; }
.card img { width:100%; display:block; transition:transform .5s; }
.overlay {
  position:absolute; inset:0; display:flex; align-items:center; justify-content:center;
  background:rgba(0,0,0,0.55); color:#fff; font:600 1.2rem/1 sans-serif;
  opacity:0; transform:translateY(10%); transition:.4s;
}
.card:hover img { transform:scale(1.08); filter:brightness(.8); }
.card:hover .overlay { opacity:1; transform:translateY(0); }
```
This creates a smooth zoom with text appearing over the image.

---

