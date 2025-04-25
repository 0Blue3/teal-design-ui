<template>
  <div
    :class="[bem.b(), bem.is('selected', isSelected), bem.is('disabled', node.disabled)]"
    :style="{ paddingLeft: `${node.level * 20}px` }"
  >
    <tl-icon
      v-if="!isLoading"
      :class="[
        bem.e('switcher'),
        { expanded: expanded && !node.isLeaf },
        bem.is('leaf', node.isLeaf),
      ]"
      icon="fa-solid fa-caret-right"
      @click="handleExpand"
    />
    <tl-icon v-else icon="spinner" spin />
    <tl-checkbox
      v-if="showCheckbox"
      :checked="checked"
      :disabled="disabled"
      :indeterminate="indeterminate"
      @change="handleCheckChange"
    ></tl-checkbox>
    <span @click="handleSelect" :class="[bem.e('label'), bem.is('selected', isSelected)]">
      <tl-tree-node-content :node="node" :file-tree="fileTree" />
    </span>
  </div>
</template>
<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { createNamespace } from "@teal/utils/create";
import { TreeNodeProps, TreeNodeEmits } from "./tree";
import TlIcon from "@teal/components/icon";
import TlTreeNodeContent from "./tree-node-content.vue";
import TlCheckbox from "@teal/components/checkbox";

const bem = createNamespace("tree-node");

const props = withDefaults(defineProps<TreeNodeProps>(), {
  expanded: false,
  loadingKeys: () => new Set([]),
  selectedKeys: () => [],
  showCheckbox: false,
  checked: false,
  disabled: false,
  indeterminate: false,
  fileTree: false,
});

const emits = defineEmits<TreeNodeEmits>();

function handleExpand() {
  emits("toggle", props.node);
}

const isLoading = computed(() => props.loadingKeys!.has(props.node.key));

const isSelected = computed(() => props.selectedKeys.includes(props.node.key));

function handleSelect() {
  if (props.node.disabled) return;
  emits("select", props.node);
}

function handleCheckChange(value: boolean) {
  if (props.disabled) return;
  emits("check", props.node, value);
}
</script>
