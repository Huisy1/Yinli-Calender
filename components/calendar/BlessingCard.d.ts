import * as React from "react";

/**
 * Props for the 每日祝福 hero card.
 *
 * @startingPoint section="Calendar" subtitle="Daily blessing red card" viewport="700x260"
 */
export interface BlessingCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The blessing line(s). */
  text?: string;
  /** Eyebrow label. @default "今日祝福" */
  label?: string;
  /** Seal character. @default "福" */
  seal?: string;
}

/**
 * 每日祝福 card — solid 中国红 surface with gold hairline frame and a 福 seal.
 * The product's hero emotional moment.
 */
export declare function BlessingCard(props: BlessingCardProps): JSX.Element;
