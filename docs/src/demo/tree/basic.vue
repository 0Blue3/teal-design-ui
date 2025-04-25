<template>
  <tl-tree
    :data="data"
    :default-expanded-keys="expandedKey"
    @expand="handleExpand"
  ></tl-tree>
</template>
<script setup lang="ts">
import { shallowRef, ref } from "vue";

function createData(level = 4, parentKey = ""): any {
  if (!level) return [];
  const arr = new Array(8 - level).fill(0);
  return arr.map((_, idx: number) => {
    const key = parentKey + level + idx;
    return {
      label: createLabel(level),
      key,
      children: createData(level - 1, key),
    };
  });
}

function createLabel(level: number): string {
  if (level === 4) return "道生一";
  if (level === 3) return "一生二";
  if (level === 2) return "二生三";
  if (level === 1) return "三生万物";
  return "";
}

const data = shallowRef(createData());
const expandedKey = ref(["41", "403122"]);
const handleExpand = (exp: any) => {
  console.log("exp: ", exp);
};
</script>
