<template>
  <div>
    <tl-upload
      :upload-url="uploadUrl"
      :file-list="fileUrl"
      accept="*"
      desc="上传内容要求"
      :draggable="true"
    ></tl-upload>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
// const uploadUrl = 'http://chat.finecoder.cn:3976/upload'
const uploadUrl = "https://www.huohuo90.com:3005/upload";
const fileUrl = ref([]);
</script>
