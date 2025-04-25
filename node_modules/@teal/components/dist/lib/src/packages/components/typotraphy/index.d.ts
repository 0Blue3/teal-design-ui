export declare const TlTitle: import('@teal/utils').SFCWithInstall<{
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('vue').ExtractPropTypes<{
        level: {
            type: import('vue').PropType<3 | 1 | 2 | 4 | 5 | 6>;
            validator: (val: number) => boolean;
            default: number;
        };
        type: import('vue').PropType<"success" | "primary" | "secondary" | "warning" | "danger">;
    }>> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {
        level: 3 | 1 | 2 | 4 | 5 | 6;
    }, true, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('vue').ExtractPropTypes<{
        level: {
            type: import('vue').PropType<3 | 1 | 2 | 4 | 5 | 6>;
            validator: (val: number) => boolean;
            default: number;
        };
        type: import('vue').PropType<"success" | "primary" | "secondary" | "warning" | "danger">;
    }>> & Readonly<{}>, {}, {}, {}, {}, {
        level: 3 | 1 | 2 | 4 | 5 | 6;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
    level: {
        type: import('vue').PropType<3 | 1 | 2 | 4 | 5 | 6>;
        validator: (val: number) => boolean;
        default: number;
    };
    type: import('vue').PropType<"success" | "primary" | "secondary" | "warning" | "danger">;
}>> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
    level: 3 | 1 | 2 | 4 | 5 | 6;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
    };
})> & Record<string, any>;
export declare const TlText: import('@teal/utils').SFCWithInstall<{
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('vue').ExtractPropTypes<{
        type: {
            type: import('vue').PropType<"success" | "primary" | "disabled" | "secondary" | "warning" | "danger" | "third">;
            default: string;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        mark: {
            type: BooleanConstructor;
            default: boolean;
        };
        strong: {
            type: BooleanConstructor;
            default: boolean;
        };
        underline: {
            type: BooleanConstructor;
            default: boolean;
        };
        del: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {
        disabled: boolean;
        type: "success" | "primary" | "disabled" | "secondary" | "warning" | "danger" | "third";
        del: boolean;
        mark: boolean;
        strong: boolean;
        underline: boolean;
    }, true, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('vue').ExtractPropTypes<{
        type: {
            type: import('vue').PropType<"success" | "primary" | "disabled" | "secondary" | "warning" | "danger" | "third">;
            default: string;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        mark: {
            type: BooleanConstructor;
            default: boolean;
        };
        strong: {
            type: BooleanConstructor;
            default: boolean;
        };
        underline: {
            type: BooleanConstructor;
            default: boolean;
        };
        del: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{}>, {}, {}, {}, {}, {
        disabled: boolean;
        type: "success" | "primary" | "disabled" | "secondary" | "warning" | "danger" | "third";
        del: boolean;
        mark: boolean;
        strong: boolean;
        underline: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
    type: {
        type: import('vue').PropType<"success" | "primary" | "disabled" | "secondary" | "warning" | "danger" | "third">;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    mark: {
        type: BooleanConstructor;
        default: boolean;
    };
    strong: {
        type: BooleanConstructor;
        default: boolean;
    };
    underline: {
        type: BooleanConstructor;
        default: boolean;
    };
    del: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
    disabled: boolean;
    type: "success" | "primary" | "disabled" | "secondary" | "warning" | "danger" | "third";
    del: boolean;
    mark: boolean;
    strong: boolean;
    underline: boolean;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
    };
})> & Record<string, any>;
export declare const TlParagraph: import('@teal/utils').SFCWithInstall<{
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('vue').ExtractPropTypes<{
        rows: {
            type: NumberConstructor;
            validator: (val: number) => boolean;
            default: number;
        };
        copyable: {
            type: BooleanConstructor;
            default: boolean;
        };
        moreable: {
            type: BooleanConstructor;
            default: boolean;
        };
        open: {
            type: BooleanConstructor;
            default: boolean;
        };
        openText: {
            type: StringConstructor;
            default: string;
        };
        closeText: {
            type: StringConstructor;
            default: string;
        };
    }>> & Readonly<{
        "onUpdate:open"?: ((open: boolean) => any) | undefined;
        onChangeOpen?: ((open: boolean) => any) | undefined;
        onCopyBefore?: ((value: import('vue').Ref<string, string>) => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        "update:open": (open: boolean) => void;
        changeOpen: (open: boolean) => void;
        copyBefore: (value: import('vue').Ref<string, string>) => void;
    }, import('vue').PublicProps, {
        open: boolean;
        rows: number;
        copyable: boolean;
        moreable: boolean;
        openText: string;
        closeText: string;
    }, true, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {
        containerRef: HTMLParagraphElement;
        textRef: HTMLSpanElement;
    }, HTMLParagraphElement, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('vue').ExtractPropTypes<{
        rows: {
            type: NumberConstructor;
            validator: (val: number) => boolean;
            default: number;
        };
        copyable: {
            type: BooleanConstructor;
            default: boolean;
        };
        moreable: {
            type: BooleanConstructor;
            default: boolean;
        };
        open: {
            type: BooleanConstructor;
            default: boolean;
        };
        openText: {
            type: StringConstructor;
            default: string;
        };
        closeText: {
            type: StringConstructor;
            default: string;
        };
    }>> & Readonly<{
        "onUpdate:open"?: ((open: boolean) => any) | undefined;
        onChangeOpen?: ((open: boolean) => any) | undefined;
        onCopyBefore?: ((value: import('vue').Ref<string, string>) => any) | undefined;
    }>, {}, {}, {}, {}, {
        open: boolean;
        rows: number;
        copyable: boolean;
        moreable: boolean;
        openText: string;
        closeText: string;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
    rows: {
        type: NumberConstructor;
        validator: (val: number) => boolean;
        default: number;
    };
    copyable: {
        type: BooleanConstructor;
        default: boolean;
    };
    moreable: {
        type: BooleanConstructor;
        default: boolean;
    };
    open: {
        type: BooleanConstructor;
        default: boolean;
    };
    openText: {
        type: StringConstructor;
        default: string;
    };
    closeText: {
        type: StringConstructor;
        default: string;
    };
}>> & Readonly<{
    "onUpdate:open"?: ((open: boolean) => any) | undefined;
    onChangeOpen?: ((open: boolean) => any) | undefined;
    onCopyBefore?: ((value: import('vue').Ref<string, string>) => any) | undefined;
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:open": (open: boolean) => void;
    changeOpen: (open: boolean) => void;
    copyBefore: (value: import('vue').Ref<string, string>) => void;
}, string, {
    open: boolean;
    rows: number;
    copyable: boolean;
    moreable: boolean;
    openText: string;
    closeText: string;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
    };
})> & Record<string, any>;
export * from './src/title.vue';
declare module "@vue/runtime-core" {
    interface GlobalComponents {
        TlTitle: typeof TlTitle;
        TlText: typeof TlText;
        TlParagraph: typeof TlParagraph;
    }
}
