declare const TlRate: import('@teal/utils').SFCWithInstall<import('vue').DefineComponent<import('./src/rate').RateProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    change: (...args: any[]) => void;
    "update:modelValue": (...args: any[]) => void;
    "hover-change": (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<import('./src/rate').RateProps> & Readonly<{
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
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>> & Record<string, any>;
export default TlRate;
export * from './src/rate';
declare module "@vue/runtime-core" {
    interface GlobalComponents {
        TlRate: typeof TlRate;
    }
}
