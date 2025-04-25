<template>
  <tl-tree :data="data" @expand="handleExpand" :on-load="handleLoad"></tl-tree>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { TreeOption } from "@teal/components/tree";

function createData() {
  return [
    {
      label: nextLabel(),
      key: 1,
      isLeaf: false, // 表示点击时动态加载
    },
    {
      label: nextLabel(),
      key: 2,
      isLeaf: false,
    },
  ];
}

function nextLabel(currentLabel?: string | undefined | number): string {
  if (!currentLabel) return "Out of Tao, One is born";
  if (currentLabel === "Out of Tao, One is born") return "Out of One, Two";
  if (currentLabel === "Out of One, Two") return "Out of Two, Three";
  if (currentLabel === "Out of Two, Three") return "Out of Three, the created universe";
  if (currentLabel === "Out of Three, the created universe")
    return "Out of Tao, One is born";
  return "";
}

const handleLoad = (node: TreeOption) => {
  return new Promise<TreeOption[]>((resolve) => {
    setTimeout(() => {
      resolve([
        {
          label: nextLabel(node.label!),
          key: node.key + nextLabel(node.label!),
          isLeaf: false,
        },
      ]);
    }, 1000);
  });
};

const data = ref(createData());
const handleExpand = (exp: any) => {
  console.log("exp: ", exp);
};
</script>
