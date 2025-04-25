<template>
  <tl-space dir="vertical">
    <tl-space align="center">
      <span>受控：</span>
      <tl-checkbox v-model:checked="value">Option 1</tl-checkbox>
    </tl-space>
    <tl-space align="center">
      非受控：
      <tl-checkbox :checked="value" @change="handleChange"> Option 1 </tl-checkbox>
    </tl-space>
    <tl-space align="center">
      默认值：
      <tl-checkbox :default-checked="value">Option 1</tl-checkbox>
    </tl-space>
  </tl-space>
</template>
<script lang="ts" setup>
import { ref } from "vue";
const value = ref(true);
const handleChange = (e: boolean) => {
  value.value = e;
};
</script>
