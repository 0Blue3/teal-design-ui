import { TreeOption, TreeProps, Key } from './tree';
declare const _default: import('vue').DefineComponent<TreeProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    "update:selectedKeys": (key: Key[]) => any;
}, string, import('vue').PublicProps, Readonly<TreeProps> & Readonly<{
    "onUpdate:selectedKeys"?: ((key: Key[]) => any) | undefined;
}>, {
    data: TreeOption[];
    multiple: boolean;
    fileTree: boolean;
    selectedKeys: Key[];
    showCheckbox: boolean;
    keyField: string;
    labelField: string;
    childrenField: string;
    selectable: boolean;
    defaultExpandedKeys: Key[];
    defaultCheckedKeys: Key[];
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
