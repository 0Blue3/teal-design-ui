<template>
  <div :class="bem.b()">
    <!-- <tl-virtual-list :items="flattenTree" :remain="8" :size="30.67">
      <template #default="{ data }"> -->
    <ExpandTransition>
      <tl-tree-node
        v-for="node in flattenTree"
        :key="node.key"
        :node="node"
        :expanded="isExpanded(node)"
        @toggle="toggleExpanded"
        @select="handleSelect"
        @check="toggleCheck"
        :selected-keys="selectedKeys"
        :loadingKeys="loadingKeysRef"
        :show-checkbox="showCheckbox"
        :checked="isChecked(node)"
        :disabled="isDisabled(node)"
        :indeterminate="isIndeterminate(node)"
        :file-tree="fileTree"
      />
    </ExpandTransition>
    <!-- </template> -->
    <!-- </tl-virtual-list> -->
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, provide, ref, useSlots, watch } from "vue";
import { createNamespace } from "@teal/utils/create";
import { TreeOption, TreeNode, TreeProps, TreeEmits, type Key, TreeInjectKey, TreeContext} from "./tree";
import TlTreeNode from "./tree-node.vue";
import ExpandTransition from "./expand-transition.vue";
import TlVirtualList from '@teal/components/virtual-list';

const bem = createNamespace("tree");

defineOptions({
  name: "tl-tree",
});

const props = withDefaults(defineProps<TreeProps>(), {
  data: () => ([]),
  defaultExpandedKeys: () => ([]),
  keyField: "key",
  labelField: "label",
  childrenField: "children",
  selectable: true,
  fileTree: false,
  multiple: false,
  selectedKeys: () => ([]),
  showCheckbox: false,
  defaultCheckedKeys: () => ([])
});

// 有了props 要对用户的数据进行格式化，格式化一个固定的结果
// label key children

// 我们将 props.data 格式化后放到tree中
const tree = ref<TreeNode[]>([]);

// 监测数据变化，调用格式化方法。一上来先格式化

// 1. 得到用户自定义的key label children 选项
function createOptions(key: string, label: string, children: string) {
  return {
    getKey(node: TreeOption) {
      return node[key] as string;
    },
    getLabel(node: TreeOption) {
      return node[label] as string;
    },
    getChildren(node: TreeOption) {
      return node[children] as TreeOption[];
    }
  };
};

const treeOptions = createOptions(props.keyField, props.labelField, props.childrenField);

// 2. 格式化操作
function createTree(data: TreeOption[], parent: TreeNode|null = null): any {
  function traversal(data: TreeOption[], parent: TreeNode | null = null) {
    return data.map((node) => {
      const children = treeOptions.getChildren(node) || [];
      const treeNode: TreeNode = {
        key: treeOptions.getKey(node),
        label: treeOptions.getLabel(node),
        children: [], // 默认为空
        rawNode: node,
        disabled: node.disabled ? node.disabled : false,
        level: parent ? parent.level + 1 : 0,
        isLeaf: node.isLeaf ?? children.length == 0,
        parentKey: parent?.key
      };
      if (children.length > 0) {
        treeNode.children = traversal(children, treeNode);
      }
      return treeNode;
    });
  }

  const result: TreeNode[] = traversal(data, parent);
  return result;
}

watch(
  () => props.data,
  (data: TreeOption[]) => {
    tree.value = createTree(data);
  },
  { immediate: true }
);

// 3. 希望将一颗树拍平化，点击实现展开操作
// 默认展开 default-expanded-keys

// 展开的key
const expandedKeySet = ref(new Set(props.defaultExpandedKeys));

const flattenTree = computed(() => {
  // 40 41
  let expandedKeys = expandedKeySet.value;
  let flattenNodes: TreeNode[] = []; // 拍平后的数组
  const nodes = tree.value || []; // 格式化后的数据

  const stack: TreeNode[] = []; // 用于遍历树的栈

  for (let i = nodes.length - 1; i >= 0; --i) {
    stack.push(nodes[i]);
  }

  while (stack.length) {
    const node = stack.pop();
    if (!node) continue;
    flattenNodes.push(node);
    if (expandedKeys.has(node.key)) {
      const children = node.children; // 30 31 32
      if (children) {
        for (let i = children.length - 1; i >= 0; --i) {
          stack.push(node.children[i]);
        }
      }
    }
  }
  return flattenNodes;
});

function isExpanded(node: TreeNode): boolean {
  return expandedKeySet.value.has(node.key);
}

const loadingKeysRef = ref(new Set<Key>())

function triggerLoading(node: TreeNode){

  if(!node.children.length && !node.isLeaf) {

    const loadingKeys = loadingKeysRef.value;
    if(!loadingKeys.has(node.key)) {
      loadingKeys.add(node.key);
      const onLoad = props.onLoad;

      if(onLoad) {

       onLoad(node.rawNode).then( (children: TreeOption[]) => {

          // 修改原来的节点
          node.rawNode.children = children;
          node.children = createTree(children, node);
          loadingKeys.delete(node.key)
        })
      }
    }
  }else {

  }
}

// 实现对应的异步加载

// 折叠功能
function collapse(node: TreeNode) {
  expandedKeySet.value.delete(node.key);
}

// 展开功能
function expand(node: TreeNode) {
  expandedKeySet.value.add(node.key);
  triggerLoading(node);
}

// 4. 切换
function toggleExpanded(node: TreeNode) {
  const expandKeys = expandedKeySet.value;
  // 正在加载中，不可收起
  if (expandKeys.has(node.key) && !loadingKeysRef.value.has(node.key)) {
    collapse(node);
  } else {
    expand(node);
  }
}

// 实现选中节点
const emits = defineEmits<TreeEmits>();
const selectedKeys = ref<Key[]>([])

watch(
  () => props.selectedKeys,
  newValue => {
    if(newValue) {
      selectedKeys.value = newValue;
    }
  },
  {
    immediate: true
  }
)

function handleSelect(node: TreeNode) {
  let keys = Array.from(selectedKeys.value);

  if(!props.selectable) return;

  if(props.multiple) {
    let index = keys.findIndex(key => key === node.key);
    if(index > -1) {
      keys.splice(index, 1);
    }else {
      keys.push(node.key);
    }
  }else {
    if(keys.includes(node.key)) {
      keys = [];
    }else {
      keys = [node.key];
    }

  }
  selectedKeys.value = keys;
  emits('update:selectedKeys', keys)
};

provide(TreeInjectKey, {
  slots: useSlots()
})

const checkedKeysRefs = ref(new Set(props.defaultCheckedKeys));

function isChecked(node: TreeNode) {
  return checkedKeysRefs.value.has(node.key);
}

function isDisabled(node: TreeNode) {
  return !!node.disabled
}

const indeterminateKeysRefs = ref<Set<Key>>(new Set());

function isIndeterminate(node: TreeNode) {
  return indeterminateKeysRefs.value.has(node.key)
}

function toggle(node: TreeNode, checked: boolean) {
  console.log("toggle", node, checked)
  let checkedKeys = checkedKeysRefs.value;

  if(checked) {
    indeterminateKeysRefs.value.delete(node.key)
  }

  // 维护当前的key列表
  checkedKeys[checked ? 'add' : 'delete'](node.key);


  let children = node.children;

  if(children) {

    children.forEach(childNode => {

      if(!childNode.disabled) {

        toggle(childNode, checked)
      }
    })
  }
}

function findNode(key: Key) {
  return flattenTree.value.find(node => node.key === key)
}

function updateCheckedKeys(node: TreeNode) {
  console.log("updateCheckKey", node, node.parentKey)
  if(node.parentKey) {
    const parentNode = findNode(node.parentKey);

    if(parentNode) {
      let allChecked = true, hasChecked = false;

      const nodes = parentNode.children;
      for(const node of nodes) {
        if(checkedKeysRefs.value.has(node.key)) {
          hasChecked = true;
          // if(allChecked === false) break;
        }else if(indeterminateKeysRefs.value.has(node.key)){
          allChecked = false;
          hasChecked = true;
          break;
        }else {
          allChecked = false;
          if(hasChecked == true) break;
        }
      }

      if(allChecked) {
        checkedKeysRefs.value.add(parentNode.key);
        indeterminateKeysRefs.value.delete(parentNode.key);
      }else if(hasChecked) {
        indeterminateKeysRefs.value.add(parentNode.key);
        checkedKeysRefs.value.delete(parentNode.key);
      }

      updateCheckedKeys(parentNode);
    }
  }
}

function toggleCheck(node: TreeNode, checked: boolean) {
  toggle(node, checked);
  updateCheckedKeys(node);
}

onMounted(() => {
  props.defaultCheckedKeys.forEach( (key: any) => {
    const node = findNode(key);
    node && toggleCheck(node, true)
  })
})
</script>
