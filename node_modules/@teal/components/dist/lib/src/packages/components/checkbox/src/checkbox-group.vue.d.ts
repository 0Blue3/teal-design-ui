import { CheckboxGroupProps, CheckboxGroupValue, CheckboxOption } from './checkbox';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        label?(_: {
            data: CheckboxOption;
        }): any;
        default?(_: {}): any;
    };
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<CheckboxGroupProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    change: (args_0: CheckboxGroupValue[]) => any;
    "update:modelValue": (args_0: CheckboxGroupValue[]) => any;
}, string, import('vue').PublicProps, Readonly<CheckboxGroupProps> & Readonly<{
    onChange?: ((args_0: CheckboxGroupValue[]) => any) | undefined;
    "onUpdate:modelValue"?: ((args_0: CheckboxGroupValue[]) => any) | undefined;
}>, {
    disabled: boolean;
    size: import('@teal/utils').Size;
    tag: string;
    direction: "horizontal" | "vertical";
    defaultValue: Array<CheckboxGroupValue>;
    options: Array<CheckboxOption | CheckboxGroupValue>;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
