declare const TlPagination: import('@teal/utils').SFCWithInstall<import('vue').DefineComponent<import('./src/pagination').PaginationProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    change: (current: number) => any;
    pageSizeChange: (pageSize: number) => any;
    "update:current": (current: number) => any;
    "update:pageSize": (pageSize: number) => any;
}, string, import('vue').PublicProps, Readonly<import('./src/pagination').PaginationProps> & Readonly<{
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
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>> & Record<string, any>;
export default TlPagination;
export * from './src/pagination';
declare module "@vue/runtime-core" {
    interface GlobalComponents {
        TlPagination: typeof TlPagination;
    }
}
