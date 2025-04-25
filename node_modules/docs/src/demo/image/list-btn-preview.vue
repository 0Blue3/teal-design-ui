<template>
  <tl-button @click="visible = true">
    <tl-icon icon="fa-eye" />
    <span>预览</span>
  </tl-button>
  <tl-image-preview-group
    v-model:visible="visible"
    :src-list="images"
    :is-render="false"
    width="200"
  ></tl-image-preview-group>
</template>
<script lang="ts" setup>
import { ref } from "vue";
const visible = ref(false);
const images = [
  "https://image.meiye.art/pic_LLeU6KQHP8uWNWnIMgdB1",
  "https://image.meiye.art/pic_MipylzO5dCBmslTT5DfWN",
  "https://image.meiye.art/pic_BTSTufdQM7TTvYop6C0e5",
];
</script>
7
