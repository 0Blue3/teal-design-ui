declare const TlTree: import('@teal/utils').SFCWithInstall<import('vue').DefineComponent<import('./src/tree').TreeProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    "update:selectedKeys": (key: import('./src/tree').Key[]) => any;
}, string, import('vue').PublicProps, Readonly<import('./src/tree').TreeProps> & Readonly<{
    "onUpdate:selectedKeys"?: ((key: import('./src/tree').Key[]) => any) | undefined;
}>, {
    data: import('./src/tree').TreeOption[];
    multiple: boolean;
    fileTree: boolean;
    selectedKeys: import('./src/tree').Key[];
    showCheckbox: boolean;
    keyField: string;
    labelField: string;
    childrenField: string;
    selectable: boolean;
    defaultExpandedKeys: import('./src/tree').Key[];
    defaultCheckedKeys: import('./src/tree').Key[];
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>> & Record<string, any>;
export default TlTree;
export * from './src/tree';
declare module "@vue/runtime-core" {
    interface GlobalComponents {
        TlTree: typeof TlTree;
    }
}
