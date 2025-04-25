<template>
  <slot :node="node">
    <tl-icon v-if="fileIcon" :class="bem.e('file')" :icon="fileIcon" />
    {{ node.label }}
  </slot>
</template>
<script setup lang="ts">
import { createNamespace } from "@teal/utils";
import { toRef, computed } from "vue";
import { TreeNodeContentProps } from "./tree";

defineOptions({ name: "tl-tree-node-content" });

const bem = createNamespace("tree-node-label");

const props = defineProps<TreeNodeContentProps>();
const node = toRef(props.node);
const fileIcon = computed(() =>
  props.fileTree ? (node.value.isLeaf ? "fa-file-lines" : "fa-folder-closed") : false
);
</script>
