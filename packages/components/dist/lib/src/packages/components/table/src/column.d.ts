import { VNode } from 'vue';
import { TableColumn } from './table';
declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    readonly type: {
        readonly type: StringConstructor;
        readonly default: "default";
    };
    readonly align: {
        readonly type: import('vue').PropType<import('./table').Align>;
        readonly default: "left";
    };
    readonly property: StringConstructor;
    readonly label: StringConstructor;
    readonly formatter: import('vue').PropType<TableColumn<any>["formatter"]>;
}>, {
    columnId: string;
    columnConfig: import('vue').Ref<{
        id?: string | undefined;
        type?: string | undefined;
        label?: string | undefined;
        property?: string | undefined;
        title?: (string | import('vue').RenderFunction) | undefined;
        width?: number | undefined;
        align?: import('./table').Align | undefined;
        fixed?: Exclude<import('./table').Align, "center"> | undefined;
        ellipsis?: boolean | undefined;
        tooltip?: (boolean | Record<string, any>) | undefined;
        sortable?: boolean | undefined;
        getColumnIndex?: (() => number) | undefined;
        index?: number | undefined;
        renderCell?: ((data: any) => any) | undefined;
        renderHeader?: ((data: any) => VNode) | undefined;
        formatter?: ((row: any, column: TableColumn<any>, cellValue: string, index: number) => VNode | string) | undefined;
    }, Partial<TableColumn<any>> | {
        id?: string | undefined;
        type?: string | undefined;
        label?: string | undefined;
        property?: string | undefined;
        title?: (string | import('vue').RenderFunction) | undefined;
        width?: number | undefined;
        align?: import('./table').Align | undefined;
        fixed?: Exclude<import('./table').Align, "center"> | undefined;
        ellipsis?: boolean | undefined;
        tooltip?: (boolean | Record<string, any>) | undefined;
        sortable?: boolean | undefined;
        getColumnIndex?: (() => number) | undefined;
        index?: number | undefined;
        renderCell?: ((data: any) => any) | undefined;
        renderHeader?: ((data: any) => VNode) | undefined;
        formatter?: ((row: any, column: TableColumn<any>, cellValue: string, index: number) => VNode | string) | undefined;
    }>;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    readonly type: {
        readonly type: StringConstructor;
        readonly default: "default";
    };
    readonly align: {
        readonly type: import('vue').PropType<import('./table').Align>;
        readonly default: "left";
    };
    readonly property: StringConstructor;
    readonly label: StringConstructor;
    readonly formatter: import('vue').PropType<TableColumn<any>["formatter"]>;
}>> & Readonly<{}>, {
    readonly type: string;
    readonly align: import('./table').Align;
}, {}, {
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
