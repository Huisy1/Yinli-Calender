// DayScreen — day detail sheet. Exposes window.DayScreen.
(function () {
  const { IconButton, Badge, Card, AlmanacItem, BlessingCard, LunarDate, Button } =
    window.CalendarDesignSystem_398bab;
  const Icon = window.Icon;
  const D = window.WNL_DATA;

  function DayScreen({ solar, onBack, onFestival }) {
    const d = D.details[solar] || D.details[17];
    const festName = d.term || d.festival;
    return React.createElement("div", {
      style: { display: "flex", flexDirection: "column", height: "100%", background: "var(--surface-app)" },
    },
      // top bar
      React.createElement("div", {
        style: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 var(--sp-4)", height: 52, flex: "none" },
      },
        React.createElement(IconButton, { label: "返回", variant: "ghost", onClick: onBack },
          React.createElement(Icon, { name: "chevron-left", size: 24, color: "var(--text-body)" })),
        React.createElement("span", { style: { fontSize: 15, fontWeight: 700, fontFamily: "var(--font-sans)", color: "var(--text-strong)" } }, "日详情"),
        React.createElement(IconButton, { label: "分享", variant: "ghost" },
          React.createElement(Icon, { name: "share", size: 19, color: "var(--text-muted)" })),
      ),

      React.createElement("div", { style: { flex: 1, overflowY: "auto", padding: "0 var(--sp-4) var(--sp-6)" } },

        // hero date
        React.createElement(Card, { style: { display: "flex", alignItems: "center", gap: "var(--sp-5)", marginBottom: "var(--sp-4)" } },
          React.createElement("div", { style: { textAlign: "center", flex: "none" } },
            React.createElement("div", {
              style: { fontFamily: "var(--font-serif)", fontSize: 64, fontWeight: 700, lineHeight: 1, color: "var(--brand)" },
            }, solar),
            React.createElement("div", { style: { fontSize: 12, color: "var(--text-muted)", marginTop: 2 } }, "6月 · " + d.weekday),
          ),
          React.createElement("div", { style: { width: 1, alignSelf: "stretch", background: "var(--border-subtle)", margin: "4px 0" } }),
          React.createElement("div", { style: { flex: 1 } },
            React.createElement(LunarDate, {
              lunarMonth: d.lunarMonth, lunarDay: d.lunarDay, zodiac: d.zodiac, ganzhi: d.ganzhi,
            }),
            d.term && React.createElement("button", {
              onClick: () => onFestival && onFestival(d.term),
              style: { marginTop: 8, display: "inline-flex", alignItems: "center", gap: 4, background: "none", border: "none", padding: 0, cursor: "pointer" },
            },
              React.createElement(Badge, { tone: "info" }, d.term),
              React.createElement("span", { style: { fontSize: 12, color: "var(--info)", fontWeight: 700 } }, "查看详情"),
              React.createElement(Icon, { name: "chevron-right", size: 14, color: "var(--info)" })),
          ),
        ),

        // almanac
        React.createElement("div", { style: { fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", color: "var(--text-faint)", margin: "var(--sp-4) 0 var(--sp-2) 2px" } }, "今日黄历"),
        React.createElement(Card, { style: { display: "flex", flexDirection: "column", gap: "var(--sp-4)", marginBottom: "var(--sp-4)" } },
          React.createElement(AlmanacItem, { kind: "good", items: d.good }),
          React.createElement("div", { style: { height: 1, background: "var(--border-subtle)" } }),
          React.createElement(AlmanacItem, { kind: "avoid", items: d.avoid }),
        ),

        // blessing
        React.createElement("div", { style: { fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", color: "var(--text-faint)", margin: "var(--sp-4) 0 var(--sp-2) 2px" } }, "每日祝福"),
        React.createElement(BlessingCard, { text: d.blessing, style: { marginBottom: "var(--sp-4)" } }),
        React.createElement("div", { style: { display: "flex", gap: "var(--sp-3)" } },
          React.createElement(Button, { variant: "primary", block: true,
            iconLeft: React.createElement(Icon, { name: "share", size: 17 }) }, "分享祝福"),
          React.createElement(Button, { variant: "secondary", block: true,
            iconLeft: React.createElement(Icon, { name: "star", size: 17 }) }, "收藏"),
        ),
      ),
    );
  }

  window.DayScreen = DayScreen;
})();
