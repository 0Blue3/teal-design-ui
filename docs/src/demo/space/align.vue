<template>
  <tl-radio-group v-model="align" type="button">
    <tl-radio value="start">start</tl-radio>
    <tl-radio value="center">center</tl-radio>
    <tl-radio value="end">end</tl-radio>
    <tl-radio value="baseline">baseline</tl-radio>
    <tl-radio value="stretch">stretch</tl-radio>
  </tl-radio-group>
  <tl-space :align="align" style="margin-top: 12px">
    <tl-button size="s">按钮1</tl-button>
    <tl-button size="m">按钮2</tl-button>
    <tl-button>按钮3</tl-button>
  </tl-space>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const align = ref("start") as any;
</script>
