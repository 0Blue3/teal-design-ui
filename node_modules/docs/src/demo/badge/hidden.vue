<template>
  <tl-space dir="vertical">
    <tl-space>
      <tl-badge is-dot :hidden="hiddenFlag">
        <tl-avatar shape="square"></tl-avatar>
      </tl-badge>
      <tl-badge :count="2" :hidden="hiddenFlag">
        <tl-avatar shape="square"></tl-avatar>
      </tl-badge>
      <tl-badge :count="100" :hidden="hiddenFlag">
        <tl-avatar shape="square"></tl-avatar>
      </tl-badge>
      <tl-button style="margin-left: 20px" type="outline" @click="handleClick">
        {{ name }}
      </tl-button>
    </tl-space>
    <tl-space>
      <tl-badge :count="2" offset="left" :hidden="hiddenFlag">
        <div class="tl-badge-demo-block"></div>
      </tl-badge>
    </tl-space>
    <tl-space>
      <tl-badge :count="100" offset="right" :hidden="hiddenFlag">
        <div class="tl-badge-demo-block"></div>
      </tl-badge>
    </tl-space>
  </tl-space>
</template>

<script setup lang="ts">
import { ref } from "vue";
const hiddenFlag = ref<boolean>(false);
const name = ref("hidden");

const handleClick = () => {
  hiddenFlag.value = !hiddenFlag.value;
  if (hiddenFlag.value) {
    name.value = "appear";
  } else {
    name.value = "hidden";
  }
};
</script>

<style>
.tl-badge-demo-block {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background: #f6f6f8;
}
</style>
