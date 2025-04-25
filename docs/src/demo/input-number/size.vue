<template>
  <tl-space dir="vertical">
    <tl-input-number v-model="number" size="s" style="width: 300px"></tl-input-number>
    <tl-input-number v-model="number" size="m" style="width: 300px"></tl-input-number>
    <tl-input-number v-model="number" size="l" style="width: 300px"></tl-input-number>
  </tl-space>
</template>
<script setup lang="ts">
import { ref } from "vue";
const number = ref(6);
</script>
