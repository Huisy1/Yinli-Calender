import * as React from "react";

export interface SwitchProps {
  checked?: boolean;
  onChange?: (next: boolean) => void;
  disabled?: boolean;
  style?: React.CSSProperties;
}

/** On/off toggle (中国红 when on) — for settings like 显示农历 / 节假日提醒. */
export declare function Switch(props: SwitchProps): JSX.Element;
