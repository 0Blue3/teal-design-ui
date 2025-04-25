import { FormItemStatus, FormItemProps } from './form';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<FormItemProps, {
    field?: string;
    disabled?: boolean | undefined;
    validateInstance?: FormItemStatus | undefined;
    rules?: import('./form').FormItemRule[];
    initValue?: any;
    validate?: ((trigger?: string) => Promise<any>) | undefined;
    resetValidate?: (() => void) | undefined;
    resetField?: (() => void) | undefined;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<FormItemProps> & Readonly<{}>, {
    labelWidth: number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
