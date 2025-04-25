<template>
  <div style="display: flex; gap: 10px">
    <tl-input :loading="loading" :disabled="loading" placeholder="请稍等..." />
    <tl-button @click="loading = !loading">开始/停止加载状态</tl-button>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
const loading = ref(true);
</script>
