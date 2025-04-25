<template>
  <tl-space dir="vertical">
    <tl-input v-model="words" size="s" style="width: 360px" clearable />
    <tl-input v-model="words" size="m" style="width: 360px" />
    <tl-input v-model="words" size="l" style="width: 360px" />
  </tl-space>
</template>

<script setup lang="ts">
import { ref } from "vue";
const words = ref<string>("你好，Teal Element UI");
</script>
