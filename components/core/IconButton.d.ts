import * as React from "react";

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** @default "ghost" */
  variant?: "ghost" | "soft" | "brand" | "outline";
  /** @default "md" */
  size?: "sm" | "md" | "lg";
  /** Accessible label (icon-only control). */
  label?: string;
  disabled?: boolean;
  children?: React.ReactNode;
}

/** Square tappable control wrapping a single icon/glyph (e.g. a Lucide SVG). */
export declare function IconButton(props: IconButtonProps): JSX.Element;
