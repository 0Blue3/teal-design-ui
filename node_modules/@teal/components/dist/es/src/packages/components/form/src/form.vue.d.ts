import { FormProps } from './form';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLFormElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<FormProps, {
    validate: (callback?: (errors: undefined | Record<string, any>) => void) => Promise<any>;
    resetFields: () => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<FormProps> & Readonly<{}>, {
    disabled: boolean;
    size: import('@teal/utils').Size;
    layout: import('@teal/utils').Layout;
    labelWidth: number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLFormElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
