import * as React from "react";

/**
 * Props for the primary 万年历 action button.
 *
 * @startingPoint section="Core" subtitle="Primary / secondary / ghost / gold buttons" viewport="700x180"
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. @default "primary" */
  variant?: "primary" | "secondary" | "ghost" | "gold";
  /** @default "md" */
  size?: "sm" | "md" | "lg";
  /** Stretch to container width. @default false */
  block?: boolean;
  disabled?: boolean;
  /** Element rendered before the label. */
  iconLeft?: React.ReactNode;
  /** Element rendered after the label. */
  iconRight?: React.ReactNode;
  children?: React.ReactNode;
}

/**
 * Primary action control for 万年历. 中国红 fill by default; use `gold` only for
 * celebratory CTAs and `ghost`/`secondary` for lower emphasis.
 */
export declare function Button(props: ButtonProps): JSX.Element;
