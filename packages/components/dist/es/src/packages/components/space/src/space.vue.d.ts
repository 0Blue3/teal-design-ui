import { SpaceSize, SpaceProps } from './space';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<SpaceProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<SpaceProps> & Readonly<{}>, {
    inline: boolean;
    size: SpaceSize | number | string | (number | string)[];
    wrap: boolean | "wrap-reverse";
    align: import('./space').SpaceAlign;
    justify: import('./space').SpaceJustify;
    dir: import('./space').SpaceDirection;
    overflow: import('./space').SpaceOverflow;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
