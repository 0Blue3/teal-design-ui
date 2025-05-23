declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    level: {
        type: import('vue').PropType<3 | 1 | 2 | 4 | 5 | 6>;
        validator: (val: number) => boolean;
        default: number;
    };
    type: import('vue').PropType<"success" | "primary" | "secondary" | "warning" | "danger">;
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    level: {
        type: import('vue').PropType<3 | 1 | 2 | 4 | 5 | 6>;
        validator: (val: number) => boolean;
        default: number;
    };
    type: import('vue').PropType<"success" | "primary" | "secondary" | "warning" | "danger">;
}>> & Readonly<{}>, {
    level: 3 | 1 | 2 | 4 | 5 | 6;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
