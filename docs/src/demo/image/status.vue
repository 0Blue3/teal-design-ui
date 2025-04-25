<template>
  <div style="margin-bottom: 16px">
    <tl-button @click="timestamp = Date.now().toString()">reload</tl-button>
  </div>
  <tl-space size="xl">
    <tl-image
      :src="`/src/assets/images/teal.png?timestamp=${timestamp}`"
      width="300"
      height="200"
      fit="cover"
      :is-lazy="true"
    ></tl-image>
  </tl-space>
</template>
<script setup lang="ts">
import { ref } from "vue";
const timestamp = ref("");
</script>
