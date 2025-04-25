import { BadgeProps } from './badge';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {
        badgeRef: HTMLDivElement;
        supRef: HTMLDivElement;
    };
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<BadgeProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    "update:count": (count: number) => any;
    "update:hidden": (hidden: boolean) => any;
}, string, import('vue').PublicProps, Readonly<BadgeProps> & Readonly<{
    "onUpdate:count"?: ((count: number) => any) | undefined;
    "onUpdate:hidden"?: ((hidden: boolean) => any) | undefined;
}>, {
    status: import('@teal/utils').Status;
    border: number;
    hidden: boolean;
    count: number;
    overflowCount: number;
    showZero: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    badgeRef: HTMLDivElement;
    supRef: HTMLDivElement;
}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
