declare const TlCollapse: import('@teal/utils').SFCWithInstall<{
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./src/collapse').CollapseProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {
        disabled: boolean;
        size: import('@teal/utils').Size;
    }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLDivElement, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('./src/collapse').CollapseProps> & Readonly<{}>, {}, {}, {}, {}, {
        disabled: boolean;
        size: import('@teal/utils').Size;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('./src/collapse').CollapseProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
    disabled: boolean;
    size: import('@teal/utils').Size;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: {
        icon?(_: {
            isActive: boolean;
        }): any;
        title?(_: {}): any;
        extra?(_: {}): any;
        default?(_: {}): any;
    };
})> & Record<string, any>;
export default TlCollapse;
export declare const TlCollapseGroup: import('@teal/utils').SFCWithInstall<{
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./src/collapse').CollapseGroupProps> & Readonly<{
        onChange?: ((values: import('./src/collapse').strNum[]) => any) | undefined;
        "onUpdate:modelValue"?: ((values: import('./src/collapse').strNum[]) => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
        change: (values: import('./src/collapse').strNum[]) => any;
        "update:modelValue": (values: import('./src/collapse').strNum[]) => any;
    }, import('vue').PublicProps, {
        size: import('@teal/utils').Size;
        border: boolean;
        defaultActiveKey: import('./src/collapse').strNum[];
        accordion: boolean;
    }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLDivElement, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('./src/collapse').CollapseGroupProps> & Readonly<{
        onChange?: ((values: import('./src/collapse').strNum[]) => any) | undefined;
        "onUpdate:modelValue"?: ((values: import('./src/collapse').strNum[]) => any) | undefined;
    }>, {}, {}, {}, {}, {
        size: import('@teal/utils').Size;
        border: boolean;
        defaultActiveKey: import('./src/collapse').strNum[];
        accordion: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('./src/collapse').CollapseGroupProps> & Readonly<{
    onChange?: ((values: import('./src/collapse').strNum[]) => any) | undefined;
    "onUpdate:modelValue"?: ((values: import('./src/collapse').strNum[]) => any) | undefined;
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    change: (values: import('./src/collapse').strNum[]) => any;
    "update:modelValue": (values: import('./src/collapse').strNum[]) => any;
}, string, {
    size: import('@teal/utils').Size;
    border: boolean;
    defaultActiveKey: import('./src/collapse').strNum[];
    accordion: boolean;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
    };
})> & Record<string, any>;
export * from './src/collapse';
declare module "@vue/runtime-core" {
    interface GlobalComponents {
        TlCollapse: typeof TlCollapse;
        TlCollapseGroup: typeof TlCollapseGroup;
    }
}
