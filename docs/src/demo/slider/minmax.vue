<template>
  <tl-slider v-model="value" :min="1" :max="11" :step="10"></tl-slider>
</template>
<script setup lang="ts">
import { ref } from "vue";
const value = ref([2, 6]);
</script>
