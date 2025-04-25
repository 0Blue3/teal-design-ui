import { ImageProps } from './image';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        error?(_: {}): any;
        'error-icon'?(_: {}): any;
        loading?(_: {}): any;
        extra?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<ImageProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<ImageProps> & Readonly<{}>, {
    footerPosition: "inner" | "outer";
    isLazy: boolean;
    preview: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
