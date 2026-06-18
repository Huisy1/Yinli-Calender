import * as React from "react";

export interface SegItem {
  value: string;
  label: React.ReactNode;
}

export interface SegMenuProps {
  /** Segments — strings or {value,label}. */
  items?: (string | SegItem)[];
  value?: string;
  onChange?: (value: string) => void;
  style?: React.CSSProperties;
}

/** Segmented control for 2–4 short options — the 月/周/日 view switch. */
export declare function SegMenu(props: SegMenuProps): JSX.Element;
