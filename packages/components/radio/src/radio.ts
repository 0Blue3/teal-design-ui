import { Size, Direction } from "@teal/utils";
import { InjectionKey, Ref } from "vue";

export type radioValue = number | string | boolean;

export type radioType = "radio" | "button";

// export type GapSize = Size | number | [number, number];

export type RadioBaseProps = {
  size?: Size;
  value: radioValue;
  disabled?: boolean;
};

export type RadioProps = RadioBaseProps & {
  modelValue?: number | string | boolean;
  name?: string;
  border?: boolean;
  type?: radioType;
  solid?: boolean;
};

export interface RadioEmits {
  (e: "update:modelValue", value: RadioProps["modelValue"]): void;
  (e: "change", value: RadioProps["modelValue"]): void;
}

export type RadioGroupProps = {
  type?: radioType;
  modelValue: radioValue;
  direction?: Direction;
  size?: Size;
  solid?: boolean;
  disabled?: boolean;
};

export interface RadioGroupEmits extends RadioEmits {}

export type RadioGroupContext = {
  localValue: Ref<radioValue>;
  size: Size;
  type: radioType;
  solid: boolean;
  disabled: boolean | undefined;
  handleChange: (str: radioValue) => void;
};

export const RadioGroupKey: InjectionKey<RadioGroupContext> =
  Symbol("radioGroupKey");
