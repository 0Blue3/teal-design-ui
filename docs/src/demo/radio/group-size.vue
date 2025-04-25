<template>
  <tl-space dir="vertical">
    <tl-radio-group v-model="radio" type="button" size="l">
      <tl-radio value="before-yesterday">前天</tl-radio>
      <tl-radio value="yesterday">昨天</tl-radio>
      <tl-radio value="today">今天</tl-radio>
      <tl-radio value="tomorrow">明天</tl-radio>
      <tl-radio value="after-tomorrow" :disabled="true">后天</tl-radio>
    </tl-radio-group>
    <tl-radio-group v-model="radio" type="button" size="m">
      <tl-radio value="before-yesterday">前天</tl-radio>
      <tl-radio value="yesterday">昨天</tl-radio>
      <tl-radio value="today">今天</tl-radio>
      <tl-radio value="tomorrow">明天</tl-radio>
      <tl-radio value="after-tomorrow" :disabled="true">后天</tl-radio>
    </tl-radio-group>
    <tl-radio-group v-model="radio" type="button" size="s">
      <tl-radio value="before-yesterday">前天</tl-radio>
      <tl-radio value="yesterday">昨天</tl-radio>
      <tl-radio value="today">今天</tl-radio>
      <tl-radio value="tomorrow">明天</tl-radio>
      <tl-radio value="after-tomorrow" :disabled="true">后天</tl-radio>
    </tl-radio-group>
  </tl-space>
</template>
<script lang="ts" setup>
import { ref } from "vue";
const radio = ref("you");
</script>
