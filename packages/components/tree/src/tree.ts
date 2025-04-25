import { type InjectionKey, type SetupContext } from "vue";

export type Key = string | number;

export interface TreeOption {
  label?: Key;
  key?: Key;
  children?: TreeOption[];
  isLeaf?: boolean;
  disabled?: boolean;
  [key: string]: unknown; // 任意接口
}

export interface TreeNode extends Required<TreeOption> {
  level: number;
  rawNode: TreeOption;
  children: TreeNode[];
  disabled: boolean;
  isLeaf: boolean;
  parentKey: Key | undefined;
}

export type TreeProps = {
  data?: TreeOption[];
  type?: Key[];
  keyField?: string;
  labelField?: string;
  childrenField?: string;
  onLoad?: (node: TreeOption) => Promise<TreeOption[]>;
  fileTree?: boolean;
  selectable?: boolean;
  multiple?: boolean;
  showCheckbox?: boolean;
  selectedKeys?: Key[];
  defaultExpandedKeys?: Key[];
  defaultCheckedKeys?: Key[];
};

export type TreeNodeProps = {
  node: TreeNode;
  expanded?: boolean;
  loadingKeys?: Set<Key>;
  selectedKeys?: Key[];
  showCheckbox?: boolean;
  checked?: boolean;
  disabled?: boolean;
  indeterminate?: boolean;
  fileTree?: boolean;
};

export interface TreeEmits {
  // 内部发射的事件，用来同步响应式数据
  (e: "update:selectedKeys", key: Key[]): void;
}

export interface TreeNodeEmits {
  (e: "toggle", node: TreeNode): void;
  (e: "select", node: TreeNode): void;
  (e: "check", node: TreeNode, value: boolean): void;
}

export interface TreeContext {
  slots: SetupContext["slots"];
}

export const TreeInjectKey: InjectionKey<TreeContext> = Symbol("TreeInjectKey");

export type TreeNodeContentProps = {
  node: TreeNode;
  fileTree: boolean;
};
