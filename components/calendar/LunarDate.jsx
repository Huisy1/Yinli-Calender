import React from "react";

/**
 * LunarDate — stacked lunar readout: big lunar day + 农历 month/day + ganzhi line.
 */
export function LunarDate({
  lunarMonth = "五月",
  lunarDay = "廿三",
  ganzhi = "乙巳年 壬午月 丁卯日",
  zodiac = "蛇",
  align = "left",
  style = {},
  ...rest
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: align === "center" ? "center" : "flex-start",
        gap: 4,
        textAlign: align,
        ...style,
      }}
      {...rest}
    >
      <div
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: "var(--fs-title)",
          fontWeight: "var(--fw-bold)",
          color: "var(--text-strong)",
          lineHeight: 1.1,
        }}
      >
        {lunarDay}
      </div>
      <div
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: "var(--fs-sub)",
          color: "var(--text-muted)",
        }}
      >
        农历{lunarMonth}
        {zodiac && (
          <span style={{ color: "var(--brand)", marginLeft: 6, fontWeight: "var(--fw-bold)" }}>
            {zodiac}年
          </span>
        )}
      </div>
      {ganzhi && (
        <div
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "var(--fs-caption)",
            color: "var(--text-faint)",
            letterSpacing: "var(--ls-wide)",
          }}
        >
          {ganzhi}
        </div>
      )}
    </div>
  );
}
