<template>
  <tl-space>
    <tl-switch v-model="isChecked" size="s"></tl-switch>
    <tl-switch v-model="isChecked"></tl-switch>
    <tl-switch v-model="isChecked" size="l"></tl-switch>
  </tl-space>
</template>
<script setup lang="ts">
import { ref } from "vue";
const isChecked = ref(false);
</script>
