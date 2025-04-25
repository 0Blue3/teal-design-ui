<template>
  <tl-upload
    :upload-url="uploadUrl"
    :file-list="fileUrl"
    desc="上传内容要求"
    :max-size="0"
  ></tl-upload>
</template>
<script lang="ts" setup>
import { ref } from "vue";
const uploadUrl = "https://www.huohuo90.com:3005/upload";
const fileUrl = ref([
  {
    url: "https://www.huohuo90.com:3005/logo/yike.png",
    name: "默认图片",
  },
]);
</script>
