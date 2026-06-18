import React from "react";

/**
 * Badge — small status / count chip. Tones map to almanac + brand semantics.
 */
export function Badge({ children, tone = "brand", solid = false, style = {}, ...rest }) {
  const tones = {
    brand: { soft: "var(--brand-soft)", fg: "var(--brand)", solidBg: "var(--brand)" },
    gold: { soft: "var(--accent-soft)", fg: "var(--gold-600)", solidBg: "var(--accent)" },
    good: { soft: "var(--good-soft)", fg: "var(--good)", solidBg: "var(--good)" },
    avoid: { soft: "var(--avoid-soft)", fg: "var(--avoid)", solidBg: "var(--avoid)" },
    info: { soft: "var(--info-soft)", fg: "var(--info)", solidBg: "var(--info)" },
    neutral: { soft: "var(--ink-100)", fg: "var(--text-muted)", solidBg: "var(--ink-600)" },
  };
  const t = tones[tone] || tones.brand;

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "4px",
        padding: "3px 9px",
        fontFamily: "var(--font-sans)",
        fontSize: "var(--fs-caption)",
        fontWeight: "var(--fw-bold)",
        lineHeight: 1.4,
        borderRadius: "var(--r-pill)",
        background: solid ? t.solidBg : t.soft,
        color: solid ? "#fff" : t.fg,
        whiteSpace: "nowrap",
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
