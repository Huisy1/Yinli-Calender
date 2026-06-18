import React from "react";

/**
 * SealStamp — 印章: a red rounded-square with a reversed-out character, gold hairline.
 */
export function SealStamp({ char = "福", size = 56, style = {}, ...rest }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: size,
        height: size,
        background: "var(--brand)",
        color: "#fff",
        borderRadius: "var(--r-seal)",
        border: "1.5px solid var(--accent)",
        boxShadow: "inset 0 0 0 2px rgba(255,255,255,0.14)",
        fontFamily: "var(--font-brush)",
        fontSize: size * 0.62,
        lineHeight: 1,
        userSelect: "none",
        ...style,
      }}
      {...rest}
    >
      {char}
    </span>
  );
}
