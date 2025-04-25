<template>
  <tl-space dir="vertical">
    <tl-switch v-model="value" checked-value="on" unchecked-value="off"></tl-switch>
    <span>当前的值：{{ value }}</span>
  </tl-space>
</template>
<script setup lang="ts">
import { ref } from "vue";
const value = ref("");
</script>
