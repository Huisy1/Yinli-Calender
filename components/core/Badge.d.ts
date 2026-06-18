import * as React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Semantic tone. @default "brand" */
  tone?: "brand" | "gold" | "good" | "avoid" | "info" | "neutral";
  /** Filled vs soft-tint. @default false */
  solid?: boolean;
  children?: React.ReactNode;
}

/** Small status/count chip — used for festival names, 节气, 宜/忌 counts, holiday flags. */
export declare function Badge(props: BadgeProps): JSX.Element;
