declare const _default: import('vue').DefineComponent<{}, {
    columnList: import('vue').Ref<import('./table').TableColumn<any>[], import('./table').TableColumn<any>[]> | undefined;
    bem: any;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {
    TlCheckbox: import('@teal/utils').SFCWithInstall<{
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('@teal/components/checkbox').CheckboxProps> & Readonly<{
            onChange?: ((args_0: boolean) => any) | undefined;
            "onUpdate:checked"?: ((args_0: boolean) => any) | undefined;
        }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
            change: (args_0: boolean) => any;
            "update:checked": (args_0: boolean) => any;
        }, import('vue').PublicProps, {
            disabled: boolean;
            size: import('@teal/utils').Size;
            checked: boolean;
            defaultChecked: boolean;
        }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {
            checkboxRef: HTMLInputElement;
        }, HTMLLabelElement, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import('@teal/components/checkbox').CheckboxProps> & Readonly<{
            onChange?: ((args_0: boolean) => any) | undefined;
            "onUpdate:checked"?: ((args_0: boolean) => any) | undefined;
        }>, {}, {}, {}, {}, {
            disabled: boolean;
            size: import('@teal/utils').Size;
            checked: boolean;
            defaultChecked: boolean;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<import('@teal/components/checkbox').CheckboxProps> & Readonly<{
        onChange?: ((args_0: boolean) => any) | undefined;
        "onUpdate:checked"?: ((args_0: boolean) => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        change: (args_0: boolean) => any;
        "update:checked": (args_0: boolean) => any;
    }, string, {
        disabled: boolean;
        size: import('@teal/utils').Size;
        checked: boolean;
        defaultChecked: boolean;
    }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: {
            default?(_: {}): any;
        };
    })> & Record<string, any>;
}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
