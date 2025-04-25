declare const TlTextarea: import('@teal/utils').SFCWithInstall<import('vue').DefineComponent<import('./src/textarea').TextareaProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    blur: (event: FocusEvent) => any;
    change: (val: string) => any;
    focus: (event: FocusEvent) => any;
    input: (val: string) => any;
    "update:modelValue": (val: string) => any;
    clear: (val: string) => any;
}, string, import('vue').PublicProps, Readonly<import('./src/textarea').TextareaProps> & Readonly<{
    onBlur?: ((event: FocusEvent) => any) | undefined;
    onChange?: ((val: string) => any) | undefined;
    onFocus?: ((event: FocusEvent) => any) | undefined;
    onInput?: ((val: string) => any) | undefined;
    "onUpdate:modelValue"?: ((val: string) => any) | undefined;
    onClear?: ((val: string) => any) | undefined;
}>, {
    disabled: boolean;
    modelValue: string;
    id: string;
    placeholder: string;
    clearable: boolean;
    showWordLimit: boolean;
    maxLength: number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    contentRef: HTMLDivElement;
    textAreaRef: HTMLTextAreaElement;
}, HTMLDivElement>> & Record<string, any>;
export default TlTextarea;
export * from './src/textarea';
declare module "@vue/runtime-core" {
    interface GlobalComponents {
        TlTextarea: typeof TlTextarea;
    }
}
