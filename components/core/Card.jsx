import React from "react";

/**
 * Card — base white paper surface with warm shadow.
 */
export function Card({ children, padding = "var(--sp-5)", tone = "default", style = {}, ...rest }) {
  const tones = {
    default: { background: "var(--surface-card)", border: "1px solid var(--border-subtle)" },
    sunken: { background: "var(--surface-sunken)", border: "1px solid var(--border-subtle)" },
    gold: { background: "var(--surface-card)", border: "1.5px solid var(--accent)" },
    brand: { background: "var(--surface-brand-soft)", border: "1px solid var(--border-brand)" },
  };
  const t = tones[tone] || tones.default;

  return (
    <div
      style={{
        borderRadius: "var(--r-md)",
        padding,
        boxShadow: "var(--shadow-sm)",
        ...t,
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
