import { SwitchProps } from './switch';
declare const _default: import('vue').DefineComponent<SwitchProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    change: (value: import('./switch').SwitchValue, ev: Event) => any;
    "update:modelValue": (value: import('./switch').SwitchValue) => any;
}, string, import('vue').PublicProps, Readonly<SwitchProps> & Readonly<{
    onChange?: ((value: import('./switch').SwitchValue, ev: Event) => any) | undefined;
    "onUpdate:modelValue"?: ((value: import('./switch').SwitchValue) => any) | undefined;
}>, {
    disabled: boolean;
    size: import('@teal/utils').Size;
    loading: boolean;
    modelValue: import('./switch').SwitchValue;
    checkedValue: import('./switch').SwitchValue;
    uncheckedValue: import('./switch').SwitchValue;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLButtonElement>;
export default _default;
