# 万年历 Calendar — UI Kit

High-fidelity recreation of the mobile perpetual-calendar app. Composes the design
system's primitives (`Button`, `Card`, `Badge`, `Switch`, `SegMenu`, `DateCell`,
`LunarDate`, `AlmanacItem`, `BlessingCard`, `SealStamp`).

## Run
Open `index.html`. It needs the compiled `_ds_bundle.js` at the project root (generated
automatically) and loads React + Babel from CDN.

## Surfaces
- **MonthScreen** (`MonthScreen.jsx`) — brand bar, 月/周/日 switch, week heads, the month
  grid of `DateCell`s, and a 今日祝福 peek strip. Tap any in-month date → day detail.
- **DayScreen** (`DayScreen.jsx`) — hero solar numeral + `LunarDate`, 今日黄历 宜/忌
  (`AlmanacItem`), and the `BlessingCard` with share/收藏 actions. A 节气 badge links to
  the festival screen.
- **FestivalScreen** (`FestivalScreen.jsx`) — 节气/节日 detail: red hero with seal,
  summary, 三候, 习俗 + 食俗 chips, and a themed `BlessingCard`.
- **BlessingsScreen** / **MeScreen** (`App.jsx`) — blessing list + settings toggles.
- **Widgets** (`Widgets.jsx`) — home-screen 2×2 / 4×2 / 4×4 widget designs (also shown as
  the "Widgets" foundation cards).

## Interaction
`App.jsx` is the phone shell: bottom tab bar (日历 / 祝福 / 组件 / 我的) and a day-detail
overlay. State is local React — no backend.

## Data
`data.js` (`window.WNL_DATA`) holds the sample month (June 2026 / 农历乙巳年), per-day
almanac + blessings, and the widget readout. Lunar/almanac values are illustrative
samples, not computed.

## Files
`index.html` · `App.jsx` · `MonthScreen.jsx` · `DayScreen.jsx` · `FestivalScreen.jsx` ·
`Widgets.jsx` · `Icons.jsx` (Lucide subset) · `data.js`
