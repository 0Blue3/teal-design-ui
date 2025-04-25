import { strNum, CollapseGroupProps } from './collapse';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<CollapseGroupProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    change: (values: strNum[]) => any;
    "update:modelValue": (values: strNum[]) => any;
}, string, import('vue').PublicProps, Readonly<CollapseGroupProps> & Readonly<{
    onChange?: ((values: strNum[]) => any) | undefined;
    "onUpdate:modelValue"?: ((values: strNum[]) => any) | undefined;
}>, {
    size: import('@teal/utils').Size;
    border: boolean;
    defaultActiveKey: strNum[];
    accordion: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
