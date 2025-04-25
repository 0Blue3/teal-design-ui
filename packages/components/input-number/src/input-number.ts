import { Size } from "@teal/utils";

export type InputNumberProps = {
  modelValue?: number;
  max?: number;
  min?: number;
  step?: number;
  // 精度
  precision?: number;
  size?: Size;
  disabled?: boolean;
  message?: string;
  controls?: boolean;
  formatter?: (value: string) => string;
};
