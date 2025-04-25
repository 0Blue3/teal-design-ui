<template>
  <tl-radio-group v-model="radio" direction="vertical">
    {{ radio }}
    <tl-radio value="love">Love</tl-radio>
    <tl-radio value="and">And</tl-radio>
    <tl-radio value="peace" disabled>Peace</tl-radio>
  </tl-radio-group>
</template>
<script lang="ts" setup>
import { ref } from "vue";
const radio = ref("love");
</script>
