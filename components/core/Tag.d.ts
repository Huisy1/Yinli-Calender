import * as React from "react";

export interface TagProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Selected (red fill) state. @default false */
  selected?: boolean;
  children?: React.ReactNode;
}

/** Pill filter chip — e.g. view switch (月/周/日) or blessing categories. */
export declare function Tag(props: TagProps): JSX.Element;
