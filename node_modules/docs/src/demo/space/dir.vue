<template>
  <p>内置尺寸：</p>
  <tl-radio-group v-model="dir" type="button">
    <tl-radio value="horizontal">horizontal</tl-radio>
    <tl-radio value="vertical">vertical</tl-radio>
    <tl-radio value="horizontal-reverse">horizontal-reverse</tl-radio>
    <tl-radio value="vertical-reverse">vertical-reverse</tl-radio>
  </tl-radio-group>
  <tl-space :dir="dir" class="margin" inline>
    <tl-button>按钮1</tl-button>
    <tl-button>按钮2</tl-button>
    <tl-button>按钮3</tl-button>
  </tl-space>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const dir = ref("horizontal") as any;
</script>
