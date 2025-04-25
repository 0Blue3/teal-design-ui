<template>
  <tl-button @click="visible = true">
    <tl-icon icon="fa-eye" />
    <span>预览</span>
  </tl-button>
  <tl-image-preview
    v-model:visible="visible"
    src="https://image.meiye.art/pic_LLeU6KQHP8uWNWnIMgdB1"
  ></tl-image-preview>
</template>
<script setup lang="ts">
import { ref } from "vue";
const visible = ref(false);
</script>
