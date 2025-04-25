import { Size } from '@teal/utils/index';
import { Component, VNode, Ref, InjectionKey, ComputedRef } from 'vue';
export type paginationSize = [];
export type PaginationProps = {
    total: number;
    current?: number;
    pageSize?: number;
    defaultCurrent?: number;
    defaultPageSize?: number;
    pageSizeOptions?: number[];
    pagerCount?: number;
    size?: Size;
    layouts?: ("pager" | "prev" | "next" | "total" | "jumper" | "pageSize")[];
    prevIcon?: Component;
    nextIcon?: Component;
    simple?: boolean;
    fixWidth?: boolean;
    disabled?: boolean;
    hideOnSinglePage?: boolean;
};
export type PaginationEmits = {
    (e: "change", current: number): void;
    (e: "pageSizeChange", pageSize: number): void;
    (e: "update:current", current: number): void;
    (e: "update:pageSize", pageSize: number): void;
};
export type LayoutMapType = Record<string, VNode>;
export type PgnInfo = {
    _current: Ref<number>;
    _pageSize: Ref<number>;
    lastPage: Ref<number>;
    isFirstPage: Ref<boolean>;
    isLastPage: Ref<boolean>;
    size: Ref<Size> | ComputedRef<Size>;
};
export declare const PaginationContextKey: InjectionKey<PgnInfo>;
