import { Ref } from 'vue';
import { TableColumn } from './table';
export declare const useStore: <T>(dataList?: never[]) => {
    state: {
        data: Ref<T[], T[]>;
        columns: Ref<TableColumn<T>[], TableColumn<T>[]>;
        selection: Ref<T[], T[]>;
        isAllSelected: Ref<boolean, boolean>;
    };
    action: {
        insertColumn(state: {
            data: Ref<T[], T[]>;
            columns: Ref<TableColumn<T>[], TableColumn<T>[]>;
            selection: Ref<T[], T[]>;
            isAllSelected: Ref<boolean, boolean>;
        }, column: TableColumn<T>): void;
        removeColumn(state: {
            data: Ref<T[], T[]>;
            columns: Ref<TableColumn<T>[], TableColumn<T>[]>;
            selection: Ref<T[], T[]>;
            isAllSelected: Ref<boolean, boolean>;
        }, column: TableColumn<T>): void;
        toggleRowSelection(state: {
            data: Ref<T[], T[]>;
            columns: Ref<TableColumn<T>[], TableColumn<T>[]>;
            selection: Ref<T[], T[]>;
            isAllSelected: Ref<boolean, boolean>;
        }, row: T, selected: boolean): void;
        toggleAllSelection(state: {
            data: Ref<T[], T[]>;
            columns: Ref<TableColumn<T>[], TableColumn<T>[]>;
            selection: Ref<T[], T[]>;
            isAllSelected: Ref<boolean, boolean>;
        }, selected: boolean): void;
    };
    dispatch: (name: "insertColumn" | "removeColumn" | "toggleRowSelection" | "toggleAllSelection", ...args: any[]) => void;
    isSelected: (row: T) => boolean;
};
declare class HelperStore<T> {
    Return: {
        state: {
            data: Ref<T[], T[]>;
            columns: Ref<TableColumn<T>[], TableColumn<T>[]>;
            selection: Ref<T[], T[]>;
            isAllSelected: Ref<boolean, boolean>;
        };
        action: {
            insertColumn(state: {
                data: Ref<T[], T[]>;
                columns: Ref<TableColumn<T>[], TableColumn<T>[]>;
                selection: Ref<T[], T[]>;
                isAllSelected: Ref<boolean, boolean>;
            }, column: TableColumn<T>): void;
            removeColumn(state: {
                data: Ref<T[], T[]>;
                columns: Ref<TableColumn<T>[], TableColumn<T>[]>;
                selection: Ref<T[], T[]>;
                isAllSelected: Ref<boolean, boolean>;
            }, column: TableColumn<T>): void;
            toggleRowSelection(state: {
                data: Ref<T[], T[]>;
                columns: Ref<TableColumn<T>[], TableColumn<T>[]>;
                selection: Ref<T[], T[]>;
                isAllSelected: Ref<boolean, boolean>;
            }, row: T, selected: boolean): void;
            toggleAllSelection(state: {
                data: Ref<T[], T[]>;
                columns: Ref<TableColumn<T>[], TableColumn<T>[]>;
                selection: Ref<T[], T[]>;
                isAllSelected: Ref<boolean, boolean>;
            }, selected: boolean): void;
        };
        dispatch: (name: "insertColumn" | "removeColumn" | "toggleRowSelection" | "toggleAllSelection", ...args: any[]) => void;
        isSelected: (row: T) => boolean;
    };
}
type Store<T> = HelperStore<T>["Return"];
export type { Store };
