import { RateProps } from './rate';
declare const _default: import('vue').DefineComponent<RateProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    change: (...args: any[]) => void;
    "update:modelValue": (...args: any[]) => void;
    "hover-change": (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<RateProps> & Readonly<{
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    "onHover-change"?: ((...args: any[]) => any) | undefined;
}>, {
    disabled: boolean;
    size: import('@teal/utils').Size;
    color: string;
    icon: string;
    modelValue: string | number;
    defaultValue: string | number;
    count: string | number;
    allowHalf: boolean;
    allowClear: boolean;
    grading: boolean;
    readonly: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
