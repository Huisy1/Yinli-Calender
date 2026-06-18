import React from "react";

/**
 * Tag — pill filter/category chip with selected state.
 */
export function Tag({ children, selected = false, onClick, style = {}, ...rest }) {
  return (
    <button
      onClick={onClick}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "5px",
        padding: "7px 14px",
        fontFamily: "var(--font-sans)",
        fontSize: "var(--fs-sub)",
        fontWeight: "var(--fw-medium)",
        lineHeight: 1,
        borderRadius: "var(--r-pill)",
        cursor: "pointer",
        background: selected ? "var(--brand)" : "var(--surface-card)",
        color: selected ? "var(--text-on-brand)" : "var(--text-body)",
        border: selected ? "1.5px solid var(--brand)" : "1.5px solid var(--border-default)",
        transition: "all var(--dur-fast) var(--ease-out)",
        WebkitTapHighlightColor: "transparent",
        ...style,
      }}
      {...rest}
    >
      {children}
    </button>
  );
}
