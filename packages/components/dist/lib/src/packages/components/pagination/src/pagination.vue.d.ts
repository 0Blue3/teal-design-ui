import { PaginationProps } from './pagination';
declare const _default: import('vue').DefineComponent<PaginationProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    change: (current: number) => any;
    pageSizeChange: (pageSize: number) => any;
    "update:current": (current: number) => any;
    "update:pageSize": (pageSize: number) => any;
}, string, import('vue').PublicProps, Readonly<PaginationProps> & Readonly<{
    onChange?: ((current: number) => any) | undefined;
    onPageSizeChange?: ((pageSize: number) => any) | undefined;
    "onUpdate:current"?: ((current: number) => any) | undefined;
    "onUpdate:pageSize"?: ((pageSize: number) => any) | undefined;
}>, {
    disabled: boolean;
    pageSize: number;
    pagerCount: number;
    fixWidth: boolean;
    pageSizeOptions: number[];
    current: number;
    defaultCurrent: number;
    defaultPageSize: number;
    layouts: ("pager" | "prev" | "next" | "total" | "jumper" | "pageSize")[];
    simple: boolean;
    hideOnSinglePage: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
