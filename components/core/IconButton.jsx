import React from "react";

/**
 * IconButton — square tappable control wrapping a single icon/glyph.
 */
export function IconButton({
  children,
  variant = "ghost",
  size = "md",
  label,
  disabled = false,
  style = {},
  ...rest
}) {
  const sizes = { sm: 32, md: 40, lg: 48 };
  const dim = sizes[size] || sizes.md;

  const variants = {
    ghost: { background: "transparent", color: "var(--text-body)", border: "1.5px solid transparent" },
    soft: { background: "var(--surface-sunken)", color: "var(--text-body)", border: "1.5px solid transparent" },
    brand: { background: "var(--brand)", color: "var(--text-on-brand)", border: "1.5px solid var(--brand)" },
    outline: { background: "var(--surface-card)", color: "var(--brand)", border: "1.5px solid var(--border-brand)" },
  };
  const v = variants[variant] || variants.ghost;

  return (
    <button
      aria-label={label}
      disabled={disabled}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: dim,
        height: dim,
        borderRadius: "var(--r-pill)",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.45 : 1,
        transition: "transform var(--dur-fast) var(--ease-out), background var(--dur-fast) var(--ease-out)",
        WebkitTapHighlightColor: "transparent",
        ...v,
        ...style,
      }}
      onMouseDown={(e) => { if (!disabled) e.currentTarget.style.transform = "scale(0.92)"; }}
      onMouseUp={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
      {...rest}
    >
      {children}
    </button>
  );
}
