# 万年历 Calendar · Design System

A mobile **perpetual calendar (万年历)** for the Chinese market. The product shows each
day's **solar date (新历/公历)** and **lunar date (农历)** side by side, the **almanac
(黄历 宜/忌)**, **solar terms (节气)** and **festivals (节日)**, and a **daily blessing
(每日祝福)** — short auspicious well-wishes the user can read and share. Home-screen
**widgets** surface the day's date + blessing at a glance.

The mood is **festive, warm, and auspicious** — drawn from Chinese New Year red-paper
(红纸), gold foil (金箔), and seal-stamp (印章) traditions — but kept clean and modern
for a phone. Two colors carry the brand: **中国红 red** and **warm white paper**, with
**gold** as a sparing celebratory accent.

> **Sources:** This system was authored from a brief (no external codebase or Figma).
> Brief: *"万年历日历手机版本，widget 显示每天日期、农历新历及当日祝福；主题红色和白色。"*
> There is no upstream repo or Figma link to preserve.

---

## Font substitution ⚠️

No licensed brand fonts were supplied. The system substitutes **Google Fonts**:

| Role | Substitute | Intended production face |
|------|------------|--------------------------|
| Display / dates / lunar (宋) | **Noto Serif SC** | a refined Songti (e.g. 思源宋体 / Source Han Serif) |
| UI / body (黑) | **Noto Sans SC** | a Heiti (e.g. 思源黑体 / PingFang) |
| Brush / blessings (书法) | **Ma Shan Zheng** | a calligraphic brush face for 福 / festive headers |

**Please provide licensed webfont binaries** if this is headed to production, and I'll
swap the `@font-face` / `@import` in `tokens/typography.css`.

---

## CONTENT FUNDAMENTALS

**Voice.** Warm, respectful, lightly traditional — like a wall calendar that greets you.
Chinese-first. Copy speaks *to* the reader (你/您 implied, rarely stated) and never about
itself. Avoid corporate or techy phrasing.

**Casing & script.** Simplified Chinese throughout. Numerals: lunar dates use Chinese
numerals (廿三, 初一, 正月), solar dates use Arabic (6月17日). Solar terms and festivals
are named, never abbreviated (清明, 端午, 春节).

**Tone examples**
- Blessing (每日祝福): short, rhythmic, 4–12 字, often paired couplets —
  "愿你今日所求皆如愿，所行皆坦途。" / "晨起一杯茶，顺心又顺意。"
- Almanac labels: single characters — **宜** (good to do) / **忌** (avoid).
- Section headers: 2–4 字 — "今日" "黄历" "节气" "祝福".
- Empty/secondary: plain and kind — "今天没有特别的节日，平安即是福。"

**Emoji.** Not used. Festive feeling comes from color, the 福 character, seal stamps, and
lattice motifs — never emoji. Western icons are minimal and lined.

**Numbers / data.** Restrained. Show the date, lunar date, week-of-year and term — not a
wall of stats. One blessing per day, never a feed of them.

---

## VISUAL FOUNDATIONS

**Color.** Two-color brand: **中国红 (`--brand` #C8161E)** + **warm white paper
(`--surface-app` #FFFBF8)**. Red is for the brand bar, today's highlight, rest-days,
primary buttons, and the blessing card. **Gold (`--accent` #CBA24A)** appears sparingly —
hairline frames, the 福 seal, festival markers — never as a fill background. Ink neutrals
(`--ink-*`) are warm-gray, never pure black. Almanac semantics: **jade green = 宜**,
**rust = 忌**.

**Typography.** Songti serif (Noto Serif SC) for anything calendrical — the big
day-of-month numeral, lunar dates, dates of detail screens — giving an almanac feel. Heiti
sans (Noto Sans SC) for all UI chrome and body. Brush face reserved for the 福 glyph and
festive banners. Generous line-height (`--lh-normal` 1.55) for blessings.

**Spacing & layout.** 8px grid. Mobile frame `--app-width` 390px with safe-area insets.
Comfortable, airy — calendar grids breathe; cards use 16–24px padding. Fixed elements: a
top **brand bar** and a bottom **tab bar**; content scrolls between.

**Backgrounds.** Mostly flat warm-white paper. Festive surfaces use a **very faint
lattice / 回纹 texture** or a subtle red-tint (`--paper-3`), never loud gradients. The
blessing card is solid red with a gold hairline frame. **No photographic backgrounds**,
no bluish-purple gradients.

**Corners & cards.** Cards: `--r-md` 12px (widgets/sheets `--r-lg` 18px), `--surface-card`
white, hairline `--border-subtle`, soft warm shadow `--shadow-sm`. The 印章 seal uses the
square-ish `--r-seal` 6px. Pills (`--r-pill`) for tags/filters.

**Shadows.** Warm-tinted, low and soft (shadows carry a faint red `rgba(94,12,16,…)`),
never neutral-gray or harsh. Brand buttons get a colored `--shadow-brand` glow.

**Borders.** Hairline `1px` default; gold `1.5px` for celebratory framing; red `--border-brand`
around today/selected.

**Motion.** Quiet and gentle. `--ease-out` for entrances, `--dur-base` 220ms default.
Fades and small rises; **no bounces**, no parallax. Date selection is a soft cross-fade +
red-fill grow on the chosen cell.

**Hover / press.** (Touch-first.) Press = scale to 0.97 + slightly darker (`--brand-strong`).
Ghost/tertiary press = `--brand-soft` tint fill. Hover (where pointer exists) = subtle
darken, no large shadow jumps.

**Transparency / blur.** Used only for the top brand bar on scroll (translucent paper +
backdrop blur) and modal scrims (`rgba(33,26,24,0.5)`). Elsewhere surfaces are opaque.

---

## ICONOGRAPHY

- **Western UI icons:** **Lucide** (CDN), 1.75px stroke, lined (not filled) — chevrons,
  bell, share, settings, calendar-glyph. Matches the clean modern half of the brand.
  *Substitution flagged:* no bespoke icon set was supplied; Lucide is the closest neutral
  lined set. Swap if a house set exists.
- **Cultural marks** are typographic, not icons: the **福** glyph (brush face), **宜/忌**
  characters, **印章 seal** stamp (red square with reversed-out char). These are drawn with
  type + CSS, never as emoji.
- **Emoji / unicode pictographs:** not used.
- Assets live in `assets/` (see `assets/README.md`).

---

## INDEX / MANIFEST

**Root**
- `styles.css` — global entry (`@import` only)
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`
- `readme.md` — this guide
- `SKILL.md` — Agent-Skill manifest

**Foundations cards** — `guidelines/*.card.html` (Design System tab: Type / Colors / Spacing / Brand)

**Components** — `components/`
- `core/` — Button, IconButton, Badge, Tag, Card, Switch, SegMenu
- `calendar/` — DateCell, LunarDate, AlmanacItem, BlessingCard, SealStamp

**UI kit** — `ui_kits/calendar_app/` — month view, day detail, widget gallery (`index.html`)

**Assets** — `assets/` — logo, seal, lattice texture
