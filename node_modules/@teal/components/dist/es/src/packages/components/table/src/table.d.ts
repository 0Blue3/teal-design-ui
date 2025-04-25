import { ComponentInternalInstance, InjectionKey, PropType, RenderFunction, VNode } from 'vue';
import { Store } from './store';
export type Align = "left" | "center" | "right";
export interface Table<T> extends ComponentInternalInstance {
    store: Store<T>;
    tableId: string;
    bem: any;
}
export interface TableProps {
    data: Record<string, any>[];
    height?: string | number;
}
export interface TableColumn<T> {
    id: string;
    type: string;
    label: string;
    property: string;
    title?: string | RenderFunction;
    width?: number;
    align?: Align;
    fixed?: Exclude<Align, "center">;
    ellipsis?: boolean;
    tooltip?: boolean | Record<string, any>;
    sortable?: boolean;
    getColumnIndex: () => number;
    index: number;
    renderCell: (data: any) => any;
    renderHeader: (data: any) => VNode;
    formatter: (row: T, column: TableColumn<T>, cellValue: string, index: number) => VNode | string;
}
export declare const defaultTableColumnProps: {
    readonly type: {
        readonly type: StringConstructor;
        readonly default: "default";
    };
    readonly align: {
        readonly type: PropType<Align>;
        readonly default: "left";
    };
    readonly property: StringConstructor;
    readonly label: StringConstructor;
    readonly formatter: PropType<TableColumn<any>["formatter"]>;
};
export declare const TableContextKey: InjectionKey<Table<any>>;
