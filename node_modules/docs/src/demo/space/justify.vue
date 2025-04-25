<template>
  <tl-radio-group v-model="justify" type="button">
    <tl-radio value="start">start</tl-radio>
    <tl-radio value="center">center</tl-radio>
    <tl-radio value="end">end</tl-radio>
    <tl-radio value="between">between</tl-radio>
    <tl-radio value="around">around</tl-radio>
    <tl-radio value="evenly">evenly</tl-radio>
  </tl-radio-group>
  <tl-space :justify="justify" style="margin-top: 12px">
    <tl-button>按钮1</tl-button>
    <tl-button>按钮2</tl-button>
    <tl-button shape="circle"><IconPlusOutline /></tl-button>
  </tl-space>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const justify = ref("start") as any;
</script>
