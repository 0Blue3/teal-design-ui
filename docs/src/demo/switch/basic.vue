<template>
  <tl-switch v-model="isChecked"></tl-switch>
</template>
<script setup lang="ts">
import { ref } from "vue";
const isChecked = ref(false);
</script>
