---
name: wannianli-design
description: Use this skill to generate well-branded interfaces and assets for the 万年历 (Wannianli) perpetual-calendar app — a red-and-white Chinese calendar showing solar/lunar dates, 黄历 宜忌, 节气/节日, daily blessings (每日祝福), and home-screen widgets — for production or throwaway prototypes/mocks. Contains design guidelines, colors, type, fonts, assets, and UI-kit components for prototyping.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files
(`tokens/`, `components/`, `ui_kits/calendar_app/`, `guidelines/`).

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out
and create static HTML files for the user to view. If working on production code, you can
copy assets and read the rules here to become an expert in designing with this brand.

Key facts:
- **Two-color brand:** 中国红 (`--brand` #C8161E) + warm white paper. Gold (`--accent`) is a
  sparing accent. Almanac semantics: jade = 宜, rust = 忌.
- **Type:** Noto Serif SC for dates/lunar/almanac, Noto Sans SC for UI, Ma Shan Zheng for
  the 福 seal and festive headers (all Google Fonts substitutions — swap if licensed faces
  are available).
- **Signature marks:** the 印章 `SealStamp` (福/春/历) and the red `BlessingCard`.
- **Components** live under `components/` and are exported on the compiled bundle namespace
  (`window.CalendarDesignSystem_398bab`).

If the user invokes this skill without other guidance, ask what they want to build, ask a
few questions, and act as an expert designer who outputs HTML artifacts _or_ production
code, depending on the need.
