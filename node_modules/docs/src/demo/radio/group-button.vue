<template>
  <tl-radio-group v-model="radio" type="button">
    <tl-radio value="before-yesterday">前天</tl-radio>
    <tl-radio value="yesterday">昨天</tl-radio>
    <tl-radio value="today">今天</tl-radio>
    <tl-radio value="tomorrow">明天</tl-radio>
  </tl-radio-group>
</template>
<script lang="ts" setup>
import { ref } from "vue";
const radio = ref("tomorrow");
</script>
