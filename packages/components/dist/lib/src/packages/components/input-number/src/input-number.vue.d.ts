import { InputNumberProps } from './input-number';
declare const _default: import('vue').DefineComponent<InputNumberProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
    increase: (...args: any[]) => void;
    decrease: (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<InputNumberProps> & Readonly<{
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onIncrease?: ((...args: any[]) => any) | undefined;
    onDecrease?: ((...args: any[]) => any) | undefined;
}>, {
    disabled: boolean;
    size: import('@teal/utils').Size;
    max: number;
    formatter: (value: string) => string;
    min: number;
    step: number;
    precision: number;
    controls: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    inputRef: ({
        $: import('vue').ComponentInternalInstance;
        $data: {};
        $props: {
            readonly id?: string | undefined;
            readonly name?: string | undefined;
            readonly size?: import('@teal/utils').Size | undefined;
            readonly type?: "text" | "password" | undefined;
            readonly placeholder?: string | undefined;
            readonly modelValue?: string | undefined;
            readonly disabled?: boolean | undefined;
            readonly readonly?: boolean | undefined;
            readonly required?: boolean | undefined;
            readonly clearable?: boolean | undefined;
            readonly visible?: boolean | undefined;
            readonly status?: import('@teal/utils').Status | undefined;
            readonly loading?: boolean | undefined;
            readonly showCounter?: boolean | undefined;
            readonly limit?: number | undefined;
            readonly style?: import('vue').CSSProperties | undefined;
            readonly message?: string | undefined;
            readonly inputStyle?: import('vue').CSSProperties | undefined;
            readonly onBlur?: ((...args: any[]) => any) | undefined;
            readonly onChange?: ((...args: any[]) => any) | undefined;
            readonly onFocus?: ((...args: any[]) => any) | undefined;
            readonly onKeydown?: ((...args: any[]) => any) | undefined;
            readonly onSubmit?: ((...args: any[]) => any) | undefined;
            readonly "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
            readonly onClear?: ((...args: any[]) => any) | undefined;
            readonly onHoverin?: ((...args: any[]) => any) | undefined;
            readonly onHoverout?: ((...args: any[]) => any) | undefined;
        } & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        } & {
            inputRef: HTMLInputElement;
        };
        $slots: Readonly<{
            [name: string]: import('vue').Slot<any> | undefined;
        }>;
        $root: import('vue').ComponentPublicInstance | null;
        $parent: import('vue').ComponentPublicInstance | null;
        $host: Element | null;
        $emit: ((event: "blur", ...args: any[]) => void) & ((event: "change", ...args: any[]) => void) & ((event: "focus", ...args: any[]) => void) & ((event: "keydown", ...args: any[]) => void) & ((event: "submit", ...args: any[]) => void) & ((event: "update:modelValue", ...args: any[]) => void) & ((event: "clear", ...args: any[]) => void) & ((event: "hoverin", ...args: any[]) => void) & ((event: "hoverout", ...args: any[]) => void);
        $el: any;
        $options: import('vue').ComponentOptionsBase<Readonly<import('../../input').InputProps> & Readonly<{
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
        }, string, {
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
        }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & {
            beforeCreate?: (() => void) | (() => void)[];
            created?: (() => void) | (() => void)[];
            beforeMount?: (() => void) | (() => void)[];
            mounted?: (() => void) | (() => void)[];
            beforeUpdate?: (() => void) | (() => void)[];
            updated?: (() => void) | (() => void)[];
            activated?: (() => void) | (() => void)[];
            deactivated?: (() => void) | (() => void)[];
            beforeDestroy?: (() => void) | (() => void)[];
            beforeUnmount?: (() => void) | (() => void)[];
            destroyed?: (() => void) | (() => void)[];
            unmounted?: (() => void) | (() => void)[];
            renderTracked?: ((e: import('vue').DebuggerEvent) => void) | ((e: import('vue').DebuggerEvent) => void)[];
            renderTriggered?: ((e: import('vue').DebuggerEvent) => void) | ((e: import('vue').DebuggerEvent) => void)[];
            errorCaptured?: ((err: unknown, instance: import('vue').ComponentPublicInstance | null, info: string) => boolean | void) | ((err: unknown, instance: import('vue').ComponentPublicInstance | null, info: string) => boolean | void)[];
        };
        $forceUpdate: () => void;
        $nextTick: typeof import('vue').nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (...args: [R, R, import('@vue/reactivity').OnCleanup]) => any : (...args: [any, any, import('@vue/reactivity').OnCleanup]) => any, options?: import('vue').WatchOptions): import('vue').WatchStopHandle;
    } & Readonly<{
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
    }> & Omit<Readonly<import('../../input').InputProps> & Readonly<{
        onBlur?: ((...args: any[]) => any) | undefined;
        onChange?: ((...args: any[]) => any) | undefined;
        onFocus?: ((...args: any[]) => any) | undefined;
        onKeydown?: ((...args: any[]) => any) | undefined;
        onSubmit?: ((...args: any[]) => any) | undefined;
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        onClear?: ((...args: any[]) => any) | undefined;
        onHoverin?: ((...args: any[]) => any) | undefined;
        onHoverout?: ((...args: any[]) => any) | undefined;
    }>, "inputRef" | "setValue" | ("disabled" | "status" | "message" | "size" | "type" | "required" | "limit" | "loading" | "visible" | "modelValue" | "readonly" | "clearable" | "showCounter")> & import('vue').ShallowUnwrapRef<{
        inputRef: import('vue').Ref<HTMLInputElement | undefined, HTMLInputElement | undefined>;
        setValue: (value: string) => void;
    }> & {} & import('vue').ComponentCustomProperties & {} & {
        $slots: {
            prepend?(_: {}): any;
            prefix?(_: {}): any;
            suffix?(_: {}): any;
            append?(_: {}): any;
        };
    }) | null;
}, any>;
export default _default;
