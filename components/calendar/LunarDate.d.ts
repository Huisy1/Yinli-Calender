import * as React from "react";

export interface LunarDateProps extends React.HTMLAttributes<HTMLDivElement> {
  /** e.g. "五月" */
  lunarMonth?: string;
  /** e.g. "廿三" */
  lunarDay?: string;
  /** Heavenly-stem/earthly-branch line, e.g. "乙巳年 壬午月 丁卯日". */
  ganzhi?: string;
  /** Zodiac animal, e.g. "蛇". */
  zodiac?: string;
  /** @default "left" */
  align?: "left" | "center";
}

/** Stacked 农历 readout — big lunar day, month + zodiac, and the ganzhi line. */
export declare function LunarDate(props: LunarDateProps): JSX.Element;
