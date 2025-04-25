<template>
  <tl-space dir="vertical">
    <tl-input-number v-model="number" style="width: 300px"></tl-input-number>
    <tl-input-number :model-value="6" style="width: 300px" disabled></tl-input-number>
  </tl-space>
</template>
<script setup lang="ts">
import { ref } from "vue";
const number = ref(6);
</script>
