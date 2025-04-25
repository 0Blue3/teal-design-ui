<template>
  <tl-space dir="vertical">
    <tl-input v-model="disabled" disabled placeholder="不可用" />
    <tl-input v-model="readonly" readonly placeholder="只读" />
    <tl-input status="danger" placeholder="危险色" />
    <tl-input status="success" placeholder="成功色" />
    <tl-input status="warning" placeholder="警告色" />
  </tl-space>
</template>
<script setup lang="ts">
import { ref } from "vue";
const disabled = ref<string>("禁用输入框");
const readonly = ref<string>("只读输入框");
</script>
