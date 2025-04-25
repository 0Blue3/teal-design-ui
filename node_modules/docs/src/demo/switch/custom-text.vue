<template>
  <tl-space dir="vertical">
    <tl-switch v-model="value" checked-text="on" unchecked-text="off"></tl-switch>
  </tl-space>
</template>
<script setup lang="ts">
import { ref } from "vue";
const value = ref("");
</script>
