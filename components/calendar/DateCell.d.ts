import * as React from "react";

export interface DateCellProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> {
  /** Solar day-of-month number. */
  solar: number | string;
  /** Lunar label or festival/term name (e.g. "廿三", "端午", "夏至"). */
  lunar?: string;
  /** Today highlight (soft red bg + 今 mark). @default false */
  today?: boolean;
  /** Selected (red fill). @default false */
  selected?: boolean;
  /** Rest-day / weekend (red number + dot). @default false */
  rest?: boolean;
  /** Festival/term (gold dot, red lunar label). @default false */
  festival?: boolean;
  /** Dimmed adjacent-month day. @default false */
  otherMonth?: boolean;
  onClick?: () => void;
}

/**
 * One day cell in the month grid — solar numeral over lunar label, with today/
 * selected/rest/festival states.
 */
export declare function DateCell(props: DateCellProps): JSX.Element;
