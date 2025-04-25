import { InjectionKey } from 'vue';
import { Size } from '@teal/utils/index';
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
export declare const checkboxGroupContextKey: InjectionKey<CheckboxGroupContext>;
export {};
