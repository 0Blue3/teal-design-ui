<template>
  <tl-space>
    <tl-tooltip v-for="color in customColors" :color="color">
      <tl-button type="outline">{{ color }}</tl-button>
    </tl-tooltip>
  </tl-space>
</template>
<script setup>
const customColors = ["#f50", "#2db7f5", "#87d068", "#108ee9"];
</script>
