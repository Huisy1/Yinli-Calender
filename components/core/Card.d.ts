import * as React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** CSS padding value. @default "var(--sp-5)" */
  padding?: string;
  /** Surface treatment. @default "default" */
  tone?: "default" | "sunken" | "gold" | "brand";
  children?: React.ReactNode;
}

/** Base white-paper surface with a soft warm shadow. Building block for every panel. */
export declare function Card(props: CardProps): JSX.Element;
