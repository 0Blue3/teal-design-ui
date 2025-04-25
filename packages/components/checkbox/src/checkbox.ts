import { InjectionKey } from "vue";
import { Size } from "@teal/utils/index";

export type CheckboxProps = {
  size?: Size;
  defaultChecked?: boolean;
  checked?: boolean;
  disabled?: boolean;
  indeterminate?: boolean;
  value?: string | number;
};

export type CheckboxGroupProps = {
  modelValue?: Array<CheckboxGroupValue>;
  defaultValue?: Array<CheckboxGroupValue>;
  disabled?: boolean;
  max?: number;
  tag?: string;
  direction?: "horizontal" | "vertical";
  options?: Array<CheckboxOption | CheckboxGroupValue>;
  gap?: Size | number | number[];
  size?: Size;
};

export type CheckboxOption = {
  label: string;
  value: CheckboxGroupValue;
  disabled?: boolean;
  indeterminate?: boolean;
};

export type CheckboxGroupValue = string | number;

type CheckboxGroupContext = {
  size: Size;
  name: string;
  calcVal: Array<string | number | boolean>;
  disabled?: boolean;
  handleChange: (val: Array<string | number>) => void;
  isMax: boolean;
};
export const checkboxGroupContextKey: InjectionKey<CheckboxGroupContext> =
  Symbol("checkboxGroupContextKey");

// export const checkboxProps = {
//   modelValue: {
//     type: [Boolean, String, Number] as PropType<Values>,
//   },
//   indeterminate: {
//     type: Boolean,
//     default: false,
//   },
//   disabled: {
//     type: Boolean,
//     default: false,
//   },
//   label: {
//     type: String as PropType<string>,
//   },
// } as const;

// export type CheckboxProps = Partial<ExtractPropTypes<typeof checkboxProps>>;

// export const checkboxEmits = {
//   "update:modelValue": (value: Values) => true,
//   change: (value: boolean) => value,
// };

// export type CheckboxEmits = Partial<ExtractPropTypes<typeof checkboxEmits>>;
