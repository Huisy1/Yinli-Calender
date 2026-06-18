import * as React from "react";

export interface AlmanacItemProps extends React.HTMLAttributes<HTMLDivElement> {
  /** 宜 (good) or 忌 (avoid). @default "good" */
  kind?: "good" | "avoid";
  /** Activity strings, e.g. ["祭祀","出行","嫁娶"]. */
  items?: string[];
}

/** A 黄历 宜/忌 row — colored seal character beside a wrapped list of activities. */
export declare function AlmanacItem(props: AlmanacItemProps): JSX.Element;
