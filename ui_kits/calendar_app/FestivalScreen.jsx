// FestivalScreen — 节气 / 节日 detail. Exposes window.FestivalScreen.
(function () {
  const { IconButton, Card, Badge, BlessingCard, SealStamp, Button } =
    window.CalendarDesignSystem_398bab;
  const Icon = window.Icon;
  const D = window.WNL_DATA;

  function Section({ title, children }) {
    return React.createElement("div", { style: { marginBottom: "var(--sp-4)" } },
      React.createElement("div", {
        style: { fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", color: "var(--text-faint)", margin: "0 0 var(--sp-2) 2px" },
      }, title),
      children,
    );
  }

  function FestivalScreen({ name, onBack }) {
    const f = D.festivals[name] || D.festivals["夏至"];
    return React.createElement("div", {
      style: { display: "flex", flexDirection: "column", height: "100%", background: "var(--surface-app)" },
    },
      // top bar (over red hero)
      React.createElement("div", {
        style: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 var(--sp-4)", height: 52, flex: "none", background: "var(--brand)" },
      },
        React.createElement(IconButton, { label: "返回", variant: "ghost", onClick: onBack },
          React.createElement(Icon, { name: "chevron-left", size: 24, color: "#fff" })),
        React.createElement("span", { style: { fontSize: 15, fontWeight: 700, fontFamily: "var(--font-sans)", color: "#fff" } }, f.kind),
        React.createElement(IconButton, { label: "分享", variant: "ghost" },
          React.createElement(Icon, { name: "share", size: 19, color: "#fff" })),
      ),

      React.createElement("div", { style: { flex: 1, overflowY: "auto" } },

        // red hero
        React.createElement("div", {
          style: { background: "var(--brand)", borderBottom: "3px solid var(--accent)", padding: "var(--sp-2) var(--sp-5) var(--sp-6)", display: "flex", alignItems: "center", gap: "var(--sp-5)" },
        },
          React.createElement(SealStamp, { char: f.seal, size: 76, style: { background: "rgba(255,255,255,0.12)" } }),
          React.createElement("div", null,
            React.createElement("div", { style: { fontFamily: "var(--font-serif)", fontSize: 44, fontWeight: 900, color: "#fff", lineHeight: 1.05 } }, name),
            React.createElement("div", { style: { color: "var(--accent-soft)", fontSize: 13, fontWeight: 700, marginTop: 6 } }, f.index),
            React.createElement("div", { style: { color: "#fff", fontSize: 14, marginTop: 4 } }, f.solar + " · " + f.weekday + " · " + f.lunar),
          ),
        ),

        React.createElement("div", { style: { padding: "var(--sp-5) var(--sp-4) var(--sp-6)" } },

          // summary
          React.createElement(Card, { style: { marginBottom: "var(--sp-4)" } },
            React.createElement("p", { style: { margin: 0, fontFamily: "var(--font-serif)", fontSize: 16, lineHeight: "var(--lh-loose)", color: "var(--text-body)" } }, f.summary),
          ),

          // 三候
          React.createElement(Section, { title: "三候" },
            React.createElement("div", { style: { display: "flex", gap: "var(--sp-2)" } },
              f.hou.map((h, i) => React.createElement(Card, {
                key: i, padding: "var(--sp-4) var(--sp-2)",
                style: { flex: 1, textAlign: "center" },
              },
                React.createElement("div", { style: { fontSize: 11, color: "var(--brand)", fontWeight: 700, marginBottom: 6 } }, h.name),
                React.createElement("div", { style: { fontFamily: "var(--font-serif)", fontSize: 17, color: "var(--text-strong)", fontWeight: 700 } }, h.text),
              )),
            ),
          ),

          // 习俗
          React.createElement(Section, { title: "节气习俗" },
            React.createElement("div", { style: { display: "flex", flexWrap: "wrap", gap: "var(--sp-2)" } },
              f.customs.map((c, i) => React.createElement(Badge, { key: i, tone: "brand" }, c)),
            ),
          ),

          // 食俗
          React.createElement(Section, { title: "时令食俗" },
            React.createElement("div", { style: { display: "flex", flexWrap: "wrap", gap: "var(--sp-2)" } },
              f.foods.map((c, i) => React.createElement(Badge, { key: i, tone: "gold" }, c)),
            ),
          ),

          // blessing
          React.createElement(Section, { title: "节气祝福" },
            React.createElement(BlessingCard, { text: f.blessing, label: name + "祝福", seal: f.seal }),
          ),

          React.createElement(Button, { variant: "primary", block: true,
            iconLeft: React.createElement(Icon, { name: "share", size: 17 }) }, "分享节气卡片"),
        ),
      ),
    );
  }

  window.FestivalScreen = FestivalScreen;
})();
