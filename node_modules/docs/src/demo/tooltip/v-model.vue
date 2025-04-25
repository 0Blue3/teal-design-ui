<template>
  <tl-space dir="vertical">
    <tl-checkbox v-model:checked="open">切换气泡状态</tl-checkbox>
    <tl-tooltip v-model:open="open" placement="right" trigger="none">
      <tl-button type="outline">tooltip</tl-button>
    </tl-tooltip>
  </tl-space>
</template>
<script setup>
import { ref } from "vue";
const open = ref(false);
</script>
