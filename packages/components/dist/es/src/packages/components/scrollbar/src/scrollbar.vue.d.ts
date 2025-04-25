import { ScrollbarProps } from './scrollbar';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {
        $scrollbar: HTMLDivElement;
        $wrap: HTMLDivElement;
        $content: HTMLDivElement;
    };
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<ScrollbarProps, {
    scrollBy: (options?: ScrollToOptions | undefined) => void;
    scrollTo: (options?: ScrollToOptions | undefined) => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    scroll: (e: Event) => any;
}, string, import('vue').PublicProps, Readonly<ScrollbarProps> & Readonly<{
    onScroll?: ((e: Event) => any) | undefined;
}>, {
    always: boolean;
    noresize: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    $scrollbar: HTMLDivElement;
    $wrap: HTMLDivElement;
    $content: HTMLDivElement;
}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
