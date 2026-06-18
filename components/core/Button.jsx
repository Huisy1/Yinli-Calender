import React from "react";

/**
 * Button — primary action control for 万年历.
 * Variants: primary (中国红 fill), secondary (paper + border), ghost, gold.
 */
export function Button({
  children,
  variant = "primary",
  size = "md",
  block = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: { padding: "8px 14px", fontSize: "var(--fs-sub)", radius: "var(--r-sm)", gap: "6px" },
    md: { padding: "12px 20px", fontSize: "var(--fs-body)", radius: "var(--r-md)", gap: "8px" },
    lg: { padding: "15px 26px", fontSize: "var(--fs-h2)", radius: "var(--r-md)", gap: "10px" },
  };
  const s = sizes[size] || sizes.md;

  const variants = {
    primary: {
      background: "var(--brand)",
      color: "var(--text-on-brand)",
      border: "1.5px solid var(--brand)",
      boxShadow: "var(--shadow-brand)",
    },
    secondary: {
      background: "var(--surface-card)",
      color: "var(--brand)",
      border: "1.5px solid var(--border-brand)",
      boxShadow: "var(--shadow-xs)",
    },
    ghost: {
      background: "transparent",
      color: "var(--brand)",
      border: "1.5px solid transparent",
      boxShadow: "none",
    },
    gold: {
      background: "var(--accent)",
      color: "var(--text-on-accent)",
      border: "1.5px solid var(--accent)",
      boxShadow: "var(--shadow-sm)",
    },
  };
  const v = variants[variant] || variants.primary;

  return (
    <button
      disabled={disabled}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: s.gap,
        padding: s.padding,
        fontSize: s.fontSize,
        fontFamily: "var(--font-sans)",
        fontWeight: "var(--fw-bold)",
        lineHeight: 1,
        borderRadius: s.radius,
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.45 : 1,
        width: block ? "100%" : "auto",
        transition: "transform var(--dur-fast) var(--ease-out), filter var(--dur-fast) var(--ease-out)",
        WebkitTapHighlightColor: "transparent",
        ...v,
        ...style,
      }}
      onMouseDown={(e) => { if (!disabled) e.currentTarget.style.transform = "scale(0.97)"; }}
      onMouseUp={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
      {...rest}
    >
      {iconLeft}
      {children}
      {iconRight}
    </button>
  );
}
