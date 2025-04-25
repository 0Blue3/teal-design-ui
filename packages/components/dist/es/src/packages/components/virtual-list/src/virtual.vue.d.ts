import { VirtualProps } from './virtual';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {
            data: any[];
        }): any;
    };
    refs: {
        wrapperRef: HTMLDivElement;
        barRef: HTMLDivElement;
        listRef: HTMLDivElement;
    };
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<VirtualProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<VirtualProps> & Readonly<{}>, {
    size: number;
    remain: number;
    items: Array<any>;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    wrapperRef: HTMLDivElement;
    barRef: HTMLDivElement;
    listRef: HTMLDivElement;
}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
