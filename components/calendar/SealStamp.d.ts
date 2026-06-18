import * as React from "react";

export interface SealStampProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Character to stamp. @default "福" */
  char?: string;
  /** Pixel size of the square. @default 56 */
  size?: number;
}

/** 印章 seal — red rounded square, gold hairline, brush character reversed out in white. */
export declare function SealStamp(props: SealStampProps): JSX.Element;
