import { RadioProps } from './radio';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLLabelElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<RadioProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    change: (value: string | number | boolean | undefined) => any;
    "update:modelValue": (value: string | number | boolean | undefined) => any;
}, string, import('vue').PublicProps, Readonly<RadioProps> & Readonly<{
    onChange?: ((value: string | number | boolean | undefined) => any) | undefined;
    "onUpdate:modelValue"?: ((value: string | number | boolean | undefined) => any) | undefined;
}>, {
    size: import('@teal/utils').Size;
    type: import('./radio').radioType;
    solid: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLLabelElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
