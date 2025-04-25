<template>
  <tl-textarea
    v-model="val"
    clearable
    placeholder="请输入..."
    :auto-size="{
      minRows: 4,
      maxRows: 10,
    }"
  ></tl-textarea>
</template>
<script lang="ts" setup>
import { ref } from "vue";
const val = ref("");
</script>
