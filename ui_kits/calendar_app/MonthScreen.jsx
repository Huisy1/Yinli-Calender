// MonthScreen — month grid view. Exposes window.MonthScreen.
(function () {
  const { IconButton, SegMenu, DateCell, Badge, SealStamp } = window.CalendarDesignSystem_398bab;
  const Icon = window.Icon;
  const D = window.WNL_DATA;

  function BrandBar() {
    return React.createElement("div", {
      style: {
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 var(--sp-5)", height: 52, flex: "none",
      },
    },
      React.createElement("div", { style: { display: "flex", alignItems: "baseline", gap: 8 } },
        React.createElement("span", {
          style: { fontFamily: "var(--font-serif)", fontSize: 22, fontWeight: 900, color: "var(--text-strong)" },
        }, D.monthLabel),
        React.createElement("span", {
          style: { fontFamily: "var(--font-sans)", fontSize: 13, color: "var(--text-muted)" },
        }, D.lunarMonthLabel),
      ),
      React.createElement("div", { style: { display: "flex", gap: 4 } },
        React.createElement(IconButton, { label: "搜索", variant: "ghost" }, React.createElement(Icon, { name: "search", size: 20, color: "var(--text-muted)" })),
        React.createElement(IconButton, { label: "提醒", variant: "ghost" }, React.createElement(Icon, { name: "bell", size: 20, color: "var(--text-muted)" })),
      ),
    );
  }

  function MonthScreen({ onPick, view, setView }) {
    return React.createElement("div", { style: { display: "flex", flexDirection: "column", height: "100%" } },
      React.createElement(BrandBar),

      // view switch + today
      React.createElement("div", {
        style: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 var(--sp-5) var(--sp-3)" },
      },
        React.createElement(SegMenu, { items: ["月", "周", "日"], value: view, onChange: setView }),
        React.createElement("button", {
          onClick: () => onPick(17),
          style: {
            display: "flex", alignItems: "center", gap: 5, padding: "7px 12px",
            background: "var(--surface-card)", border: "1.5px solid var(--border-brand)",
            borderRadius: "var(--r-pill)", color: "var(--brand)", fontFamily: "var(--font-sans)",
            fontSize: 13, fontWeight: 700, cursor: "pointer",
          },
        },
          React.createElement(Icon, { name: "calendar-days", size: 15 }), "今天"),
      ),

      // week heads
      React.createElement("div", {
        style: { display: "grid", gridTemplateColumns: "repeat(7,1fr)", padding: "0 var(--sp-4)", marginBottom: 2 },
      },
        D.weekHeads.map((w, i) => React.createElement("div", {
          key: w,
          style: {
            textAlign: "center", fontSize: 12, fontWeight: 700, padding: "6px 0",
            fontFamily: "var(--font-sans)",
            color: (i === 0 || i === 6) ? "var(--brand)" : "var(--text-faint)",
          },
        }, w)),
      ),

      // grid
      React.createElement("div", {
        style: {
          display: "grid", gridTemplateColumns: "repeat(7,1fr)", gap: 2,
          padding: "0 var(--sp-4)", flex: 1, alignContent: "start",
        },
      },
        D.grid.map((d, i) => React.createElement(DateCell, {
          key: i, solar: d.s, lunar: d.l,
          today: !!d.today, rest: !!d.rest, festival: !!d.festival, otherMonth: !!d.other,
          onClick: () => !d.other && onPick(d.s),
        })),
      ),

      // today peek strip
      React.createElement("div", { style: { padding: "var(--sp-3) var(--sp-4) var(--sp-4)" } },
        React.createElement("button", {
          onClick: () => onPick(17),
          style: {
            width: "100%", display: "flex", alignItems: "center", gap: "var(--sp-3)", textAlign: "left",
            padding: "var(--sp-4)", background: "var(--surface-brand-soft)",
            border: "1px solid var(--border-brand)", borderRadius: "var(--r-lg)", cursor: "pointer",
          },
        },
          React.createElement(SealStamp, { char: "福", size: 44 }),
          React.createElement("div", { style: { flex: 1, minWidth: 0 } },
            React.createElement("div", {
              style: { fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", color: "var(--brand)", marginBottom: 3 },
            }, "今日祝福"),
            React.createElement("div", {
              style: {
                fontFamily: "var(--font-serif)", fontSize: 15, color: "var(--text-body)",
                lineHeight: 1.45, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
              },
            }, D.widget.blessing),
          ),
          React.createElement(Icon, { name: "chevron-right", size: 20, color: "var(--brand)" }),
        ),
      ),
    );
  }

  window.MonthScreen = MonthScreen;
})();
