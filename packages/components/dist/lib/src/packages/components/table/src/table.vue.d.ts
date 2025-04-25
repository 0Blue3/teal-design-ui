import { TableProps } from './table';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        tbody?(_: {}): any;
        default?(_: {}): any;
    };
    refs: {
        hiddenColumns: HTMLDivElement;
    };
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<TableProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<TableProps> & Readonly<{}>, {
    data: Record<string, any>[];
    height: string | number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    hiddenColumns: HTMLDivElement;
}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
