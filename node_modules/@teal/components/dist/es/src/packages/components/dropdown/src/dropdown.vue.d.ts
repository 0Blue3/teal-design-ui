import { DropdownProps } from './dropdown';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        title?(_: {}): any;
        default?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<DropdownProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    selected: (value: string | number | object) => any;
    visibleChange: (value: boolean) => any;
}, string, import('vue').PublicProps, Readonly<DropdownProps> & Readonly<{
    onSelected?: ((value: string | number | object) => any) | undefined;
    onVisibleChange?: ((value: boolean) => any) | undefined;
}>, {
    trigger: import('./dropdown').DropdownTrigger | import('./dropdown').DropdownTrigger[];
    disabled: boolean;
    type: import('@teal/utils').Type;
    title: string;
    open: boolean;
    animation: string;
    placement: import('@teal/components/tooltip').Placement;
    arrow: boolean;
    openDelay: number;
    closeDelay: number;
    overlayStyle: string | false | import('vue').CSSProperties | import('vue').StyleValue[] | null;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
