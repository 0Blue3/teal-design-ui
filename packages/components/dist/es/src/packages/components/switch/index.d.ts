declare const TlSwitch: import('@teal/utils').SFCWithInstall<import('vue').DefineComponent<import('./src/switch').SwitchProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    change: (value: import('./src/switch').SwitchValue, ev: Event) => any;
    "update:modelValue": (value: import('./src/switch').SwitchValue) => any;
}, string, import('vue').PublicProps, Readonly<import('./src/switch').SwitchProps> & Readonly<{
    onChange?: ((value: import('./src/switch').SwitchValue, ev: Event) => any) | undefined;
    "onUpdate:modelValue"?: ((value: import('./src/switch').SwitchValue) => any) | undefined;
}>, {
    disabled: boolean;
    size: import('@teal/utils').Size;
    loading: boolean;
    modelValue: import('./src/switch').SwitchValue;
    checkedValue: import('./src/switch').SwitchValue;
    uncheckedValue: import('./src/switch').SwitchValue;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLButtonElement>> & Record<string, any>;
export default TlSwitch;
export * from './src/switch';
declare module "@vue/runtime-core" {
    interface GlobalComponents {
        TlSwitch: typeof TlSwitch;
    }
}
