<template>
  <tl-space dir="vertical">
    <tl-radio v-model="radio" value="1">单选框</tl-radio>
    <tl-radio v-model="radio" value="1" :disabled="true">禁用</tl-radio>
  </tl-space>
</template>
<script lang="ts" setup>
import { ref } from "vue";
const radio = ref("");
</script>
