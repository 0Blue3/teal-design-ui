<template>
  <tl-space dir="vertical">
    <tl-radio-group v-model="size" type="button">
      <tl-radio value="s">s</tl-radio>
      <tl-radio value="m">m</tl-radio>
      <tl-radio value="l">l</tl-radio>
    </tl-radio-group>

    <tl-pagination
      :total="2345"
      :size="size"
      :layouts="['total', 'prev', 'pager', 'next', 'pageSize', 'jumper']"
    />
    <tl-pagination :total="2345" :size="size" simple />
  </tl-space>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const size = ref<"s" | "m" | "l">("m");
</script>
