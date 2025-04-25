declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {
        containerRef: HTMLParagraphElement;
        textRef: HTMLSpanElement;
    };
    rootEl: HTMLParagraphElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    rows: {
        type: NumberConstructor;
        validator: (val: number) => boolean;
        default: number;
    };
    copyable: {
        type: BooleanConstructor;
        default: boolean;
    };
    moreable: {
        type: BooleanConstructor;
        default: boolean;
    };
    open: {
        type: BooleanConstructor;
        default: boolean;
    };
    openText: {
        type: StringConstructor;
        default: string;
    };
    closeText: {
        type: StringConstructor;
        default: string;
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:open": (open: boolean) => void;
    changeOpen: (open: boolean) => void;
    copyBefore: (value: import('vue').Ref<string, string>) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    rows: {
        type: NumberConstructor;
        validator: (val: number) => boolean;
        default: number;
    };
    copyable: {
        type: BooleanConstructor;
        default: boolean;
    };
    moreable: {
        type: BooleanConstructor;
        default: boolean;
    };
    open: {
        type: BooleanConstructor;
        default: boolean;
    };
    openText: {
        type: StringConstructor;
        default: string;
    };
    closeText: {
        type: StringConstructor;
        default: string;
    };
}>> & Readonly<{
    "onUpdate:open"?: ((open: boolean) => any) | undefined;
    onChangeOpen?: ((open: boolean) => any) | undefined;
    onCopyBefore?: ((value: import('vue').Ref<string, string>) => any) | undefined;
}>, {
    open: boolean;
    rows: number;
    copyable: boolean;
    moreable: boolean;
    openText: string;
    closeText: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {
    containerRef: HTMLParagraphElement;
    textRef: HTMLSpanElement;
}, HTMLParagraphElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
