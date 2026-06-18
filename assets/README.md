# Assets

This brand's marks are **typographic**, not image files — so there are few binaries here:

- **Logo / app mark** — the 历 character in a 印章 seal (red rounded square, gold hairline).
  Rendered with CSS + the brush/serif fonts; see `guidelines/brand-logo.card.html`. Use the
  `SealStamp` component (`char="历"`) for the app mark and `char="福"` for the blessing seal.
- **福 / 春 / 喜 seals** — `SealStamp` component, never an image.
- **UI icons** — **Lucide** (lined, 1.75px stroke). The UI kit ships a copied subset in
  `ui_kits/calendar_app/Icons.jsx` (real Lucide path data). Pull more from
  https://lucide.dev as needed. *Substitution flagged: no house icon set was supplied.*
- **Lattice / 回纹 texture & wallpaper** — done with CSS gradients (see the widgets card and
  app index), not raster assets.

If you have real logo art, festival illustrations, or a licensed icon set, drop them here
and I'll wire them in.
