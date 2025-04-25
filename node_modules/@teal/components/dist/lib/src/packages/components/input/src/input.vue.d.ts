import { InputProps } from './input';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        prepend?(_: {}): any;
        prefix?(_: {}): any;
        suffix?(_: {}): any;
        append?(_: {}): any;
    };
    refs: {
        inputRef: HTMLInputElement;
    };
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<InputProps, {
    inputRef: import('vue').Ref<HTMLInputElement | undefined, HTMLInputElement | undefined>;
    setValue: (value: string) => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    blur: (...args: any[]) => void;
    change: (...args: any[]) => void;
    focus: (...args: any[]) => void;
    keydown: (...args: any[]) => void;
    submit: (...args: any[]) => void;
    "update:modelValue": (...args: any[]) => void;
    clear: (...args: any[]) => void;
    hoverin: (...args: any[]) => void;
    hoverout: (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<InputProps> & Readonly<{
    onBlur?: ((...args: any[]) => any) | undefined;
    onChange?: ((...args: any[]) => any) | undefined;
    onFocus?: ((...args: any[]) => any) | undefined;
    onKeydown?: ((...args: any[]) => any) | undefined;
    onSubmit?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onClear?: ((...args: any[]) => any) | undefined;
    onHoverin?: ((...args: any[]) => any) | undefined;
    onHoverout?: ((...args: any[]) => any) | undefined;
}>, {
    disabled: boolean;
    status: import('@teal/utils').Status;
    message: string;
    size: import('@teal/utils').Size;
    type: "text" | "password";
    required: boolean;
    limit: number;
    loading: boolean;
    visible: boolean;
    modelValue: string;
    readonly: boolean;
    clearable: boolean;
    showCounter: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    inputRef: HTMLInputElement;
}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
