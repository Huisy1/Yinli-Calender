import React from "react";

/**
 * AlmanacItem — a 黄历 宜 (good) or 忌 (avoid) row: big seal char + activity list.
 */
export function AlmanacItem({ kind = "good", items = [], style = {}, ...rest }) {
  const isGood = kind === "good";
  const char = isGood ? "宜" : "忌";
  const color = isGood ? "var(--good)" : "var(--avoid)";
  const softBg = isGood ? "var(--good-soft)" : "var(--avoid-soft)";

  return (
    <div style={{ display: "flex", gap: "var(--sp-3)", alignItems: "flex-start", ...style }} {...rest}>
      <span
        style={{
          flex: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 38,
          height: 38,
          borderRadius: "var(--r-seal)",
          background: color,
          color: "#fff",
          fontFamily: "var(--font-serif)",
          fontSize: 22,
          fontWeight: "var(--fw-black)",
        }}
      >
        {char}
      </span>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, paddingTop: 3 }}>
        {items.length === 0 ? (
          <span style={{ fontFamily: "var(--font-serif)", fontSize: "var(--fs-body)", color: "var(--text-faint)" }}>
            诸事不宜
          </span>
        ) : (
          items.map((it, i) => (
            <span
              key={i}
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "var(--fs-body)",
                color: "var(--text-body)",
                background: softBg,
                padding: "3px 9px",
                borderRadius: "var(--r-xs)",
              }}
            >
              {it}
            </span>
          ))
        )}
      </div>
    </div>
  );
}
