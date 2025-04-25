import { CheckboxProps } from './checkbox';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {
        checkboxRef: HTMLInputElement;
    };
    rootEl: HTMLLabelElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<CheckboxProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    change: (args_0: boolean) => any;
    "update:checked": (args_0: boolean) => any;
}, string, import('vue').PublicProps, Readonly<CheckboxProps> & Readonly<{
    onChange?: ((args_0: boolean) => any) | undefined;
    "onUpdate:checked"?: ((args_0: boolean) => any) | undefined;
}>, {
    disabled: boolean;
    size: import('@teal/utils/constant').Size;
    checked: boolean;
    defaultChecked: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    checkboxRef: HTMLInputElement;
}, HTMLLabelElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
