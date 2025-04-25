<template>
  <tl-image-preview-group
    :src-list="images"
    width="300"
    height="200"
    fit="cover"
  ></tl-image-preview-group>
</template>
<script lang="ts" setup>
const images = [
  "https://image.meiye.art/pic_LLeU6KQHP8uWNWnIMgdB1",
  "https://image.meiye.art/pic_MipylzO5dCBmslTT5DfWN",
  "https://image.meiye.art/pic_BTSTufdQM7TTvYop6C0e5",
];
</script>
