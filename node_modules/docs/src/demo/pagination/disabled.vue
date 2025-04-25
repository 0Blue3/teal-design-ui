<template>
  <tl-space dir="vertical">
    <tl-switch v-model="disabled"></tl-switch>
    <tl-pagination
      :total="100"
      :layouts="['total', 'prev', 'pager', 'next', 'pageSize', 'jumper']"
      :disabled="disabled"
    />
  </tl-space>
</template>

<script setup lang="ts">
import { ref } from "vue";

const disabled = ref(true);
</script>
