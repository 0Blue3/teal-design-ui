<template>
  <tl-space>
    <tl-switch v-model="unchecked" disabled></tl-switch>
    <tl-switch v-model="checked" disabled></tl-switch>
  </tl-space>
</template>
<script setup lang="ts">
import { ref } from "vue";
const unchecked = ref(false);
const checked = ref(true);
</script>
