import React from "react";
import { SealStamp } from "./SealStamp.jsx";

/**
 * BlessingCard — 每日祝福: solid red card, gold hairline frame, 福 seal + blessing text.
 */
export function BlessingCard({
  text = "愿你今日所求皆如愿，所行皆坦途。",
  label = "今日祝福",
  seal = "福",
  style = {},
  ...rest
}) {
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "var(--sp-4)",
        padding: "var(--sp-6)",
        background: "var(--brand)",
        borderRadius: "var(--r-lg)",
        border: "1.5px solid var(--accent)",
        boxShadow: "var(--shadow-brand)",
        overflow: "hidden",
        ...style,
      }}
      {...rest}
    >
      {/* faint lattice corner glow */}
      <div
        style={{
          position: "absolute",
          top: -40,
          right: -40,
          width: 140,
          height: 140,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(203,162,74,0.35), transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div style={{ display: "flex", alignItems: "center", gap: "var(--sp-3)" }}>
        <SealStamp char={seal} size={48} style={{ background: "rgba(255,255,255,0.12)", border: "1.5px solid var(--accent)" }} />
        <span
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "var(--fs-sub)",
            fontWeight: "var(--fw-bold)",
            letterSpacing: "var(--ls-wide)",
            color: "var(--accent-soft)",
          }}
        >
          {label}
        </span>
      </div>
      <p
        style={{
          margin: 0,
          fontFamily: "var(--font-serif)",
          fontSize: "var(--fs-h1)",
          fontWeight: "var(--fw-medium)",
          lineHeight: "var(--lh-loose)",
          color: "#fff",
          letterSpacing: "0.02em",
        }}
      >
        {text}
      </p>
    </div>
  );
}
