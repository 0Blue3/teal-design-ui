<template>
  <tl-space dir="vertical">
    <tl-radio v-model="radioValue" :value="active">选框</tl-radio>
    <tl-button @click="handleChange">切换状态</tl-button>
  </tl-space>
</template>
<script setup lang="ts">
import { ref } from "vue";
const active = ref(true);
const radioValue = ref(false);
const handleChange = () => {
  radioValue.value = !radioValue.value;
};
</script>
