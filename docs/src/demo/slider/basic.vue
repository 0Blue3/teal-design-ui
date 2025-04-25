<template>
  <tl-slider v-model="value"></tl-slider>
</template>
<script setup lang="ts">
import { ref } from "vue";
const value = ref(30);
</script>
