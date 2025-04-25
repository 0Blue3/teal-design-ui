<template>
  <tl-space dir="vertical" size="l">
    <tl-checkbox-group
      v-model="value1"
      :options="plainOptions"
      direction="vertical"
    ></tl-checkbox-group>
    <tl-checkbox-group
      v-model="value2"
      :options="options"
      direction="vertical"
    ></tl-checkbox-group>
    <tl-checkbox-group v-model="value2" :options="options" disabled direction="vertical">
      <template #label="{ data }">
        <tl-button>{{ data.label }}</tl-button>
      </template>
    </tl-checkbox-group>
  </tl-space>
</template>
<script setup lang="ts">
import { ref } from "vue";
const value1 = ref(["Plain 1"]);
const plainOptions = ["Plain 1", "Plain 2", "Plain 3"];
const value2 = ref([1]);
const options = [
  { label: "Option 1", value: 1 },
  { label: "Option 2", value: 2 },
  { label: "Option 3", value: 3, disabled: false },
];
</script>
<style scoped>
.tl-mb {
  margin-bottom: 20px;
}
</style>
