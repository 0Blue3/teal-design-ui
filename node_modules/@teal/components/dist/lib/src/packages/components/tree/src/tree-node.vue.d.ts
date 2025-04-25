import { TreeNodeProps } from './tree';
declare const _default: import('vue').DefineComponent<TreeNodeProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    select: (node: import('./tree').TreeNode) => any;
    toggle: (node: import('./tree').TreeNode) => any;
    check: (node: import('./tree').TreeNode, value: boolean) => any;
}, string, import('vue').PublicProps, Readonly<TreeNodeProps> & Readonly<{
    onSelect?: ((node: import('./tree').TreeNode) => any) | undefined;
    onToggle?: ((node: import('./tree').TreeNode) => any) | undefined;
    onCheck?: ((node: import('./tree').TreeNode, value: boolean) => any) | undefined;
}>, {
    disabled: boolean;
    checked: boolean;
    indeterminate: boolean;
    expanded: boolean;
    fileTree: boolean;
    loadingKeys: Set<import('./tree').Key>;
    selectedKeys: import('./tree').Key[];
    showCheckbox: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
