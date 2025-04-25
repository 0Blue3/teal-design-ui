<template>
  <tl-space dir="vertical">
    <tl-checkbox
      :checked="checkedAll"
      :indeterminate="indeterminate"
      @change="handleChangeAll"
    >
      Check All
    </tl-checkbox>
    <tl-checkbox-group v-model="data" @change="handleChange">
      <tl-checkbox value="1">Option 1</tl-checkbox>
      <tl-checkbox value="2">Option 2</tl-checkbox>
      <tl-checkbox value="3">Option 3</tl-checkbox>
    </tl-checkbox-group>
  </tl-space>
</template>
<script setup lang="ts">
import { ref } from "vue";
const indeterminate = ref(false);
const checkedAll = ref(false);
const data = ref<string[]>([]);
const handleChangeAll = (value: boolean) => {
  indeterminate.value = false;
  if (value) {
    checkedAll.value = true;
    data.value = ["1", "2", "3"];
  } else {
    checkedAll.value = false;
    data.value = [];
  }
};
const handleChange = (values: string[]) => {
  if (values.length === 3) {
    checkedAll.value = true;
    indeterminate.value = false;
  } else if (values.length === 0) {
    checkedAll.value = false;
    indeterminate.value = false;
  } else {
    checkedAll.value = false;
    indeterminate.value = true;
  }
};
</script>
