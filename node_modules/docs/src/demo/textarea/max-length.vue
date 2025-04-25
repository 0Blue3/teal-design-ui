<template>
  <tl-textarea
    v-model="val"
    clearable
    placeholder="请输入..."
    show-word-limit
    :max-length="10"
  ></tl-textarea>
</template>
<script lang="ts" setup>
import { ref } from "vue";
const val = ref("");
</script>
