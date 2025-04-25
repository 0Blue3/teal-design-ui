import { TooltipProps, TriggerMode } from './tooltip';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        content?(_: {}): any;
    };
    refs: {
        popperContainerNode: HTMLDivElement;
        triggerNode: HTMLDivElement;
        popperNode: HTMLDivElement;
        arrowRef: HTMLDivElement;
    };
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<TooltipProps, {
    show: () => void;
    hide: () => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    "update:open": (value: boolean) => any;
    "open-change": (value: boolean) => any;
}, string, import('vue').PublicProps, Readonly<TooltipProps> & Readonly<{
    "onUpdate:open"?: ((value: boolean) => any) | undefined;
    "onOpen-change"?: ((value: boolean) => any) | undefined;
}>, {
    trigger: TriggerMode | TriggerMode[];
    title: string;
    animation: string;
    placement: import('@floating-ui/vue').Placement;
    arrow: boolean;
    autoAdjustOverflow: boolean;
    openDelay: number;
    closeDelay: number;
    overlayStyle: string | false | import('vue').CSSProperties | import('vue').StyleValue[] | null;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    popperContainerNode: HTMLDivElement;
    triggerNode: HTMLDivElement;
    popperNode: HTMLDivElement;
    arrowRef: HTMLDivElement;
}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
