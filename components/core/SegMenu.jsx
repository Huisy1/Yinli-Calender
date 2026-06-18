import React from "react";

/**
 * SegMenu — segmented control. Selected segment fills 中国红.
 */
export function SegMenu({ items = [], value, onChange, style = {}, ...rest }) {
  return (
    <div
      style={{
        display: "inline-flex",
        padding: 3,
        gap: 2,
        background: "var(--surface-sunken)",
        borderRadius: "var(--r-pill)",
        border: "1px solid var(--border-subtle)",
        ...style,
      }}
      {...rest}
    >
      {items.map((it) => {
        const key = typeof it === "string" ? it : it.value;
        const label = typeof it === "string" ? it : it.label;
        const active = key === value;
        return (
          <button
            key={key}
            onClick={() => onChange && onChange(key)}
            style={{
              padding: "7px 18px",
              fontFamily: "var(--font-sans)",
              fontSize: "var(--fs-sub)",
              fontWeight: "var(--fw-bold)",
              lineHeight: 1,
              border: "none",
              borderRadius: "var(--r-pill)",
              cursor: "pointer",
              background: active ? "var(--brand)" : "transparent",
              color: active ? "var(--text-on-brand)" : "var(--text-muted)",
              boxShadow: active ? "var(--shadow-xs)" : "none",
              transition: "all var(--dur-fast) var(--ease-out)",
              WebkitTapHighlightColor: "transparent",
            }}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
