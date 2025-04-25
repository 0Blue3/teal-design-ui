import {
  ComponentInternalInstance,
  InjectionKey,
  PropType,
  RenderFunction,
  VNode,
} from "vue";

import { Store } from "./store";

type BEMModifier = string[] | Record<string, boolean | string | undefined>;

export type Align = "left" | "center" | "right";

export interface Table<T> extends ComponentInternalInstance {
  store: Store<T>;
  tableId: string;
  bem: any;
}

export interface TableProps {
  // id?: string;
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
  formatter: (
    row: T,
    column: TableColumn<T>,
    cellValue: string,
    index: number
  ) => VNode | string;
}

export const defaultTableColumnProps = {
  type: {
    type: String,
    default: "default",
  },
  align: {
    type: String as PropType<Align>,
    default: "left",
  },
  property: String,
  label: String,
  formatter: Function as PropType<TableColumn<any>["formatter"]>,
} as const;

export const TableContextKey: InjectionKey<Table<any>> =
  Symbol("TableContextKey");
