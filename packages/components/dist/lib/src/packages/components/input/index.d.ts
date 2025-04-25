declare const TlInput: import('@teal/utils').SFCWithInstall<{
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./src/input').InputProps> & Readonly<{
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
    }, import('vue').PublicProps, {
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
    }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {
        inputRef: HTMLInputElement;
    }, any, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('./src/input').InputProps> & Readonly<{
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
    }, {}, {}, {}, {
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
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('./src/input').InputProps> & Readonly<{
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
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: {
        prepend?(_: {}): any;
        prefix?(_: {}): any;
        suffix?(_: {}): any;
        append?(_: {}): any;
    };
})> & Record<string, any>;
export default TlInput;
export * from './src/input';
declare module "@vue/runtime-core" {
    interface GlobalComponents {
        TlInput: typeof TlInput;
    }
}
