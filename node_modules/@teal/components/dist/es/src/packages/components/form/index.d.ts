declare const TlForm: import('@teal/utils').SFCWithInstall<{
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./src/form').FormProps> & Readonly<{}>, {
        validate: (callback?: (errors: undefined | Record<string, any>) => void) => Promise<any>;
        resetFields: () => void;
    }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {
        disabled: boolean;
        size: import('@teal/utils').Size;
        layout: import('@teal/utils').Layout;
        labelWidth: number;
    }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLFormElement, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('./src/form').FormProps> & Readonly<{}>, {
        validate: (callback?: (errors: undefined | Record<string, any>) => void) => Promise<any>;
        resetFields: () => void;
    }, {}, {}, {}, {
        disabled: boolean;
        size: import('@teal/utils').Size;
        layout: import('@teal/utils').Layout;
        labelWidth: number;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('./src/form').FormProps> & Readonly<{}>, {
    validate: (callback?: (errors: undefined | Record<string, any>) => void) => Promise<any>;
    resetFields: () => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
    disabled: boolean;
    size: import('@teal/utils').Size;
    layout: import('@teal/utils').Layout;
    labelWidth: number;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
    };
})> & Record<string, any>;
export default TlForm;
export declare const TlFormItem: import('@teal/utils').SFCWithInstall<{
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./src/form').FormItemProps> & Readonly<{}>, {
        field?: string;
        disabled?: boolean | undefined;
        validateInstance?: import('./src/form').FormItemStatus | undefined;
        rules?: import('./src/form').FormItemRule[];
        initValue?: any;
        validate?: ((trigger?: string) => Promise<any>) | undefined;
        resetValidate?: (() => void) | undefined;
        resetField?: (() => void) | undefined;
    }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {
        labelWidth: number;
    }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLDivElement, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('./src/form').FormItemProps> & Readonly<{}>, {
        field?: string;
        disabled?: boolean | undefined;
        validateInstance?: import('./src/form').FormItemStatus | undefined;
        rules?: import('./src/form').FormItemRule[];
        initValue?: any;
        validate?: ((trigger?: string) => Promise<any>) | undefined;
        resetValidate?: (() => void) | undefined;
        resetField?: (() => void) | undefined;
    }, {}, {}, {}, {
        labelWidth: number;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('./src/form').FormItemProps> & Readonly<{}>, {
    field?: string;
    disabled?: boolean | undefined;
    validateInstance?: import('./src/form').FormItemStatus | undefined;
    rules?: import('./src/form').FormItemRule[];
    initValue?: any;
    validate?: ((trigger?: string) => Promise<any>) | undefined;
    resetValidate?: (() => void) | undefined;
    resetField?: (() => void) | undefined;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
    labelWidth: number;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
    };
})> & Record<string, any>;
export * from './src/form';
declare module "@vue/runtime-core" {
    interface GlobalComponents {
        TlForm: typeof TlForm;
        TlFormItem: typeof TlFormItem;
    }
}
