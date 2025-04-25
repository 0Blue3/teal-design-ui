<template>
  <tl-space dir="vertical" size="l">
    <tl-checkbox-group v-model="value1" :max="2" :options="plainOptions" />
    <tl-checkbox-group :max="2" :default-value="['1']">
      <tl-checkbox value="1" disabled>Option 1</tl-checkbox>
      <tl-checkbox value="2">Option 2</tl-checkbox>
      <tl-checkbox value="3">Option 3</tl-checkbox>
      <tl-checkbox value="4">Option 4</tl-checkbox>
    </tl-checkbox-group>
  </tl-space>
</template>
<script setup lang="ts">
import { ref } from "vue";
const value1 = ref(["Plain 1"]);
const plainOptions = ["Plain 1", "Plain 2", "Plain 3", "Plain 4"];
</script>
<style scoped></style>
