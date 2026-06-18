// Widgets — home-screen widget designs + gallery screen.
// Exposes window.WidgetSmall, WidgetMedium, WidgetLarge, WidgetsScreen.
(function () {
  const { SealStamp, Badge } = window.CalendarDesignSystem_398bab;
  const W = window.WNL_DATA.widget;

  const shell = (extra) => ({
    borderRadius: 22, overflow: "hidden", boxShadow: "var(--shadow-md)",
    fontFamily: "var(--font-sans)", ...extra,
  });

  // 2x2 — solid red, big serif numeral
  function WidgetSmall() {
    return React.createElement("div", {
      style: shell({ width: 158, height: 158, background: "var(--brand)", border: "1.5px solid var(--accent)",
        display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 16, boxSizing: "border-box" }),
    },
      React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "flex-start" } },
        React.createElement("span", { style: { color: "var(--accent-soft)", fontSize: 12, fontWeight: 700 } }, W.month + " · " + W.weekday),
        React.createElement("span", { style: { fontFamily: "var(--font-brush)", color: "#fff", fontSize: 22, lineHeight: 1 } }, "福"),
      ),
      React.createElement("div", null,
        React.createElement("div", { style: { fontFamily: "var(--font-serif)", color: "#fff", fontSize: 62, fontWeight: 700, lineHeight: 0.95 } }, W.solar),
        React.createElement("div", { style: { color: "#fff", fontSize: 13, marginTop: 2 } }, "农历" + W.lunarMonth + W.lunarDay),
      ),
    );
  }

  // 4x2 — white paper, date + blessing
  function WidgetMedium() {
    return React.createElement("div", {
      style: shell({ width: 332, height: 158, background: "var(--surface-card)", border: "1px solid var(--border-subtle)",
        display: "flex", padding: 18, boxSizing: "border-box", gap: 16, alignItems: "center" }),
    },
      React.createElement("div", { style: { textAlign: "center", flex: "none" } },
        React.createElement("div", { style: { fontFamily: "var(--font-serif)", color: "var(--brand)", fontSize: 56, fontWeight: 700, lineHeight: 1 } }, W.solar),
        React.createElement("div", { style: { fontSize: 12, color: "var(--text-muted)", marginTop: 2 } }, W.month + " · " + W.weekday),
      ),
      React.createElement("div", { style: { width: 1, alignSelf: "stretch", background: "var(--border-subtle)" } }),
      React.createElement("div", { style: { flex: 1, minWidth: 0 } },
        React.createElement("div", { style: { fontFamily: "var(--font-serif)", fontSize: 18, fontWeight: 700, color: "var(--text-strong)" } }, "农历" + W.lunarMonth + W.lunarDay),
        React.createElement("div", { style: { marginTop: 6, marginBottom: 8 } }, React.createElement(Badge, { tone: "info" }, W.term)),
        React.createElement("div", { style: { fontFamily: "var(--font-serif)", fontSize: 14, color: "var(--text-body)", lineHeight: 1.5 } }, W.blessing),
      ),
    );
  }

  // 4x4 — full red, hero blessing
  function WidgetLarge() {
    return React.createElement("div", {
      style: shell({ width: 332, height: 332, background: "var(--brand)", border: "1.5px solid var(--accent)",
        display: "flex", flexDirection: "column", padding: 24, boxSizing: "border-box" }),
    },
      React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "flex-start" } },
        React.createElement("div", null,
          React.createElement("div", { style: { fontFamily: "var(--font-serif)", color: "#fff", fontSize: 80, fontWeight: 700, lineHeight: 0.9 } }, W.solar),
          React.createElement("div", { style: { color: "var(--accent-soft)", fontSize: 14, fontWeight: 700, marginTop: 4 } }, W.month + " · " + W.weekday),
        ),
        React.createElement(SealStamp, { char: "福", size: 56, style: { background: "rgba(255,255,255,0.12)" } }),
      ),
      React.createElement("div", { style: { color: "#fff", fontSize: 15, marginTop: 10 } }, "农历" + W.lunarMonth + W.lunarDay + " · " + W.zodiac + "年　" + W.term),
      React.createElement("div", { style: { height: 1, background: "rgba(255,255,255,0.22)", margin: "16px 0" } }),
      React.createElement("div", { style: { flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" } },
        React.createElement("div", { style: { color: "var(--accent-soft)", fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", marginBottom: 8 } }, "今日祝福"),
        React.createElement("div", { style: { fontFamily: "var(--font-serif)", color: "#fff", fontSize: 22, lineHeight: 1.7 } }, W.blessing),
      ),
    );
  }

  // gallery screen (faux home wallpaper)
  function WidgetsScreen() {
    return React.createElement("div", {
      style: {
        height: "100%", overflowY: "auto",
        background: "linear-gradient(160deg, #F6ECE4 0%, #EFD9CE 100%)",
        padding: "var(--sp-5)",
      },
    },
      React.createElement("div", { style: { fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 700, color: "var(--ink-700)", letterSpacing: "0.06em", marginBottom: 16, textAlign: "center" } }, "桌面小组件"),
      React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 18, alignItems: "center" } },
        React.createElement("div", { style: { display: "flex", gap: 16 } },
          React.createElement(WidgetSmall),
          React.createElement("div", { style: { width: 158, height: 158, borderRadius: 22, border: "2px dashed rgba(120,70,50,0.3)", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(120,70,50,0.5)", fontSize: 13 } }, "添加组件"),
        ),
        React.createElement(WidgetMedium),
        React.createElement(WidgetLarge),
      ),
    );
  }

  Object.assign(window, { WidgetSmall, WidgetMedium, WidgetLarge, WidgetsScreen });
})();
