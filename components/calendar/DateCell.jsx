import React from "react";

/**
 * DateCell — one day in the month grid. Shows solar number (serif) + lunar label.
 * Highlights today / selected; marks rest-days and festivals.
 */
export function DateCell({
  solar,
  lunar,
  today = false,
  selected = false,
  rest = false,
  festival = false,
  otherMonth = false,
  onClick,
  style = {},
  ...rest_
}) {
  const isHot = selected || today;
  const numberColor = otherMonth
    ? "var(--text-faint)"
    : selected
    ? "var(--text-on-brand)"
    : rest
    ? "var(--brand)"
    : "var(--text-strong)";
  const lunarColor = otherMonth
    ? "var(--text-faint)"
    : selected
    ? "rgba(255,255,255,0.85)"
    : festival
    ? "var(--brand)"
    : "var(--text-muted)";

  return (
    <button
      onClick={onClick}
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 1,
        width: "100%",
        aspectRatio: "1 / 1.18",
        padding: "4px 0",
        border: "none",
        borderRadius: "var(--r-sm)",
        cursor: "pointer",
        background: selected
          ? "var(--brand)"
          : today
          ? "var(--brand-soft)"
          : "transparent",
        boxShadow: selected ? "var(--shadow-brand)" : "none",
        transition: "background var(--dur-fast) var(--ease-out)",
        WebkitTapHighlightColor: "transparent",
        ...style,
      }}
      {...rest_}
    >
      {/* festival / rest dot */}
      {(festival || rest) && !selected && (
        <span
          style={{
            position: "absolute",
            top: 5,
            right: "calc(50% - 13px)",
            width: 5,
            height: 5,
            borderRadius: "50%",
            background: festival ? "var(--accent)" : "var(--brand)",
          }}
        />
      )}
      {today && !selected && (
        <span
          style={{
            position: "absolute",
            top: 4,
            fontSize: 9,
            fontWeight: "var(--fw-bold)",
            color: "var(--brand)",
            fontFamily: "var(--font-sans)",
          }}
        >
          今
        </span>
      )}
      <span
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: 19,
          fontWeight: "var(--fw-medium)",
          lineHeight: 1.1,
          color: numberColor,
          marginTop: today && !selected ? 6 : 0,
        }}
      >
        {solar}
      </span>
      <span
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: 10,
          lineHeight: 1.1,
          color: lunarColor,
          maxWidth: "100%",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
      >
        {lunar}
      </span>
    </button>
  );
}
