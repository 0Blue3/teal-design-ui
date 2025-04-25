<template>
  <tl-textarea v-model="val" clearable placeholder="请输入..." disabled></tl-textarea>
</template>
<script lang="ts" setup>
import { ref } from "vue";
const val = ref("");
</script>
