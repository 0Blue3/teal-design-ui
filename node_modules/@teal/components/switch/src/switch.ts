import { Size } from "@teal/utils";

export type SwitchValue = boolean | string | number;
export type SwitchProps = {
  modelValue?: SwitchValue;
  size?: Size;
  checkedColor?: string;
  uncheckedColor?: string;
  checkedValue?: SwitchValue;
  uncheckedValue?: SwitchValue;
  checkedText?: string;
  uncheckedText?: string;
  disabled?: boolean;
  loading?: boolean;
};

export interface SwitchEmits {
  (e: "update:modelValue", value: SwitchValue): void;
  (e: "change", value: SwitchValue, ev: Event): void;
}
