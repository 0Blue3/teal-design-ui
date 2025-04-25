<template>
  <tl-switch
    v-model="isChecked"
    checked-color="#1fb4a2"
    unchecked-color="#fa5247"
  ></tl-switch>
</template>
<script setup lang="ts">
import { ref } from "vue";
const isChecked = ref(false);
</script>
