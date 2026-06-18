// App — interactive phone shell tying the screens together. Exposes window.CalApp.
(function () {
  const DS = window.CalendarDesignSystem_398bab;
  const { Card, BlessingCard, Switch, SealStamp, Badge } = DS;
  const Icon = window.Icon;
  const D = window.WNL_DATA;

  function StatusBar({ dark }) {
    const c = dark ? "#fff" : "var(--text-strong)";
    return React.createElement("div", {
      style: { height: 44, display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 22px", flex: "none", color: c, fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 700 },
    },
      React.createElement("span", null, "9:41"),
      React.createElement("span", { style: { display: "flex", gap: 5, alignItems: "center", fontSize: 12 } }, "●●● ▮"),
    );
  }

  function TabBar({ tab, setTab }) {
    const tabs = [
      { k: "month", label: "日历", icon: "calendar-days" },
      { k: "bless", label: "祝福", icon: "sparkles" },
      { k: "widget", label: "组件", icon: "home" },
      { k: "me", label: "我的", icon: "user" },
    ];
    return React.createElement("div", {
      style: { display: "flex", flex: "none", borderTop: "1px solid var(--border-subtle)",
        background: "rgba(255,251,248,0.92)", backdropFilter: "blur(12px)", paddingBottom: "var(--safe-bottom)" },
    },
      tabs.map((t) => {
        const on = tab === t.k;
        return React.createElement("button", {
          key: t.k, onClick: () => setTab(t.k),
          style: { flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 3,
            padding: "9px 0", background: "none", border: "none", cursor: "pointer",
            color: on ? "var(--brand)" : "var(--text-faint)" },
        },
          React.createElement(Icon, { name: t.icon, size: 22, color: on ? "var(--brand)" : "var(--text-faint)" }),
          React.createElement("span", { style: { fontSize: 10, fontWeight: 700, fontFamily: "var(--font-sans)" } }, t.label),
        );
      }),
    );
  }

  function BlessingsScreen() {
    return React.createElement("div", { style: { height: "100%", overflowY: "auto", padding: "var(--sp-5)" } },
      React.createElement("div", { style: { fontFamily: "var(--font-serif)", fontSize: 24, fontWeight: 900, color: "var(--text-strong)", marginBottom: 4 } }, "祝福"),
      React.createElement("div", { style: { fontSize: 13, color: "var(--text-muted)", marginBottom: 18 } }, "每日一句，宜分享亲友"),
      React.createElement(BlessingCard, { text: D.blessings[0].text, style: { marginBottom: 16 } }),
      React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 10 } },
        D.blessings.slice(1).map((b, i) =>
          React.createElement(Card, { key: i, style: { display: "flex", alignItems: "center", gap: 14 } },
            React.createElement(Badge, { tone: i === 1 ? "info" : "gold" }, b.cat),
            React.createElement("span", { style: { fontFamily: "var(--font-serif)", fontSize: 16, color: "var(--text-body)", lineHeight: 1.5, flex: 1 } }, b.text),
            React.createElement(Icon, { name: "share", size: 17, color: "var(--text-faint)" }),
          ),
        ),
      ),
    );
  }

  function SettingRow({ label, sub, checked, onChange }) {
    return React.createElement("div", {
      style: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 0" },
    },
      React.createElement("div", null,
        React.createElement("div", { style: { fontSize: 15, color: "var(--text-strong)", fontWeight: 500 } }, label),
        sub && React.createElement("div", { style: { fontSize: 12, color: "var(--text-faint)", marginTop: 2 } }, sub),
      ),
      React.createElement(Switch, { checked, onChange }),
    );
  }

  function MeScreen() {
    const [a, setA] = React.useState(true);
    const [b, setB] = React.useState(true);
    const [c, setC] = React.useState(false);
    return React.createElement("div", { style: { height: "100%", overflowY: "auto", padding: "var(--sp-5)" } },
      React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 14, marginBottom: 20 } },
        React.createElement(SealStamp, { char: "历", size: 56 }),
        React.createElement("div", null,
          React.createElement("div", { style: { fontFamily: "var(--font-serif)", fontSize: 22, fontWeight: 900, color: "var(--text-strong)" } }, "万年历"),
          React.createElement("div", { style: { fontSize: 12, color: "var(--text-muted)", marginTop: 2 } }, "乙巳蛇年 · 同步农历黄历"),
        ),
      ),
      React.createElement(Card, { padding: "var(--sp-2) var(--sp-5)" },
        React.createElement(SettingRow, { label: "显示农历", sub: "在日期格内展示农历", checked: a, onChange: setA }),
        React.createElement("div", { style: { height: 1, background: "var(--border-subtle)" } }),
        React.createElement(SettingRow, { label: "节假日提醒", sub: "法定节假日与调休", checked: b, onChange: setB }),
        React.createElement("div", { style: { height: 1, background: "var(--border-subtle)" } }),
        React.createElement(SettingRow, { label: "每日祝福推送", sub: "每天 8:00 推送", checked: c, onChange: setC }),
      ),
    );
  }

  function CalApp() {
    const [tab, setTab] = React.useState("month");
    const [view, setView] = React.useState("月");
    const [day, setDay] = React.useState(null); // selected solar -> overlay
    const [fest, setFest] = React.useState(null); // festival/term name -> overlay

    const dark = false;
    let body;
    if (tab === "month") body = React.createElement(window.MonthScreen, { onPick: setDay, view, setView });
    else if (tab === "bless") body = React.createElement(BlessingsScreen);
    else if (tab === "widget") body = React.createElement(window.WidgetsScreen);
    else body = React.createElement(MeScreen);

    return React.createElement("div", {
      style: { width: "var(--app-width)", height: 844, background: "var(--surface-app)",
        borderRadius: 44, overflow: "hidden", boxShadow: "0 30px 80px rgba(94,12,16,0.28)",
        border: "10px solid #1b1310", display: "flex", flexDirection: "column", position: "relative" },
    },
      React.createElement(StatusBar, { dark }),
      React.createElement("div", { style: { flex: 1, overflow: "hidden", position: "relative" } },
        body,
        // day detail overlay
        day !== null && React.createElement("div", {
          style: { position: "absolute", inset: 0, background: "var(--surface-app)",
            animation: "wnlSlide var(--dur-base) var(--ease-out)" },
        }, React.createElement(window.DayScreen, { solar: day, onBack: () => setDay(null), onFestival: setFest })),
        // festival detail overlay (above day detail)
        fest !== null && React.createElement("div", {
          style: { position: "absolute", inset: 0, background: "var(--surface-app)",
            animation: "wnlSlide var(--dur-base) var(--ease-out)" },
        }, React.createElement(window.FestivalScreen, { name: fest, onBack: () => setFest(null) })),
      ),
      React.createElement(TabBar, { tab, setTab }),
    );
  }

  window.CalApp = CalApp;
})();
