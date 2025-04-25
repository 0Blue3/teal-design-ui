declare const TlRadio: import('@teal/utils').SFCWithInstall<{
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./src/radio').RadioProps> & Readonly<{
        onChange?: ((value: string | number | boolean | undefined) => any) | undefined;
        "onUpdate:modelValue"?: ((value: string | number | boolean | undefined) => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
        change: (value: string | number | boolean | undefined) => any;
        "update:modelValue": (value: string | number | boolean | undefined) => any;
    }, import('vue').PublicProps, {
        size: import('@teal/utils').Size;
        type: import('./src/radio').radioType;
        solid: boolean;
    }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLLabelElement, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('./src/radio').RadioProps> & Readonly<{
        onChange?: ((value: string | number | boolean | undefined) => any) | undefined;
        "onUpdate:modelValue"?: ((value: string | number | boolean | undefined) => any) | undefined;
    }>, {}, {}, {}, {}, {
        size: import('@teal/utils').Size;
        type: import('./src/radio').radioType;
        solid: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('./src/radio').RadioProps> & Readonly<{
    onChange?: ((value: string | number | boolean | undefined) => any) | undefined;
    "onUpdate:modelValue"?: ((value: string | number | boolean | undefined) => any) | undefined;
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    change: (value: string | number | boolean | undefined) => any;
    "update:modelValue": (value: string | number | boolean | undefined) => any;
}, string, {
    size: import('@teal/utils').Size;
    type: import('./src/radio').radioType;
    solid: boolean;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
    };
})> & Record<string, any>;
export default TlRadio;
export declare const TlRadioGroup: import('@teal/utils').SFCWithInstall<{
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./src/radio').RadioGroupProps> & Readonly<{
        onChange?: ((value: string | number | boolean | undefined) => any) | undefined;
        "onUpdate:modelValue"?: ((value: string | number | boolean | undefined) => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
        change: (value: string | number | boolean | undefined) => any;
        "update:modelValue": (value: string | number | boolean | undefined) => any;
    }, import('vue').PublicProps, {
        disabled: boolean;
        size: import('@teal/utils').Size;
        type: import('./src/radio').radioType;
        solid: boolean;
        direction: import('@teal/utils').Direction;
    }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('./src/radio').RadioGroupProps> & Readonly<{
        onChange?: ((value: string | number | boolean | undefined) => any) | undefined;
        "onUpdate:modelValue"?: ((value: string | number | boolean | undefined) => any) | undefined;
    }>, {}, {}, {}, {}, {
        disabled: boolean;
        size: import('@teal/utils').Size;
        type: import('./src/radio').radioType;
        solid: boolean;
        direction: import('@teal/utils').Direction;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('./src/radio').RadioGroupProps> & Readonly<{
    onChange?: ((value: string | number | boolean | undefined) => any) | undefined;
    "onUpdate:modelValue"?: ((value: string | number | boolean | undefined) => any) | undefined;
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    change: (value: string | number | boolean | undefined) => any;
    "update:modelValue": (value: string | number | boolean | undefined) => any;
}, string, {
    disabled: boolean;
    size: import('@teal/utils').Size;
    type: import('./src/radio').radioType;
    solid: boolean;
    direction: import('@teal/utils').Direction;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
        default?(_: {}): any;
    };
})> & Record<string, any>;
export * from './src/radio';
declare module "@vue/runtime-core" {
    interface GlobalComponents {
        TlRadio: typeof TlRadio;
        TlRadioGroup: typeof TlRadioGroup;
    }
}
