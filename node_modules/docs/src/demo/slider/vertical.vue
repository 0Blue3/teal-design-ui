<template>
  <tl-slider v-model="value" direction="vertical"></tl-slider>
</template>
<script setup lang="ts">
import { ref } from "vue";
const value = ref(40);
</script>
