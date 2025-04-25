<template>
  <p>内置尺寸：</p>
  <tl-radio-group v-model="size" type="button">
    <tl-radio value="ss">ss</tl-radio>
    <tl-radio value="s">s</tl-radio>
    <tl-radio value="m">m</tl-radio>
    <tl-radio value="l">l</tl-radio>
    <tl-radio value="xl">xl</tl-radio>
  </tl-radio-group>
  <tl-space :size="size" class="margin">
    <tl-button>按钮1</tl-button>
    <tl-button>按钮2</tl-button>
    <tl-button>按钮3</tl-button>
  </tl-space>

  <p>
    自定义间距：
    <tl-input v-model="inputSize" style="width: 80px" />
  </p>
  <tl-space :size="`${inputSize}px`" class="margin">
    <tl-button>按钮1</tl-button>
    <tl-button>按钮2</tl-button>
    <tl-button>按钮3</tl-button>
  </tl-space>

  <p>自定义水平和竖直间距：[10, 30]</p>
  <tl-space wrap :size="[10, 20]" class="margin" style="width: 300px">
    <tl-button v-for="item in 10" :key="item">按钮</tl-button>
  </tl-space>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const size = ref("m") as any;
const inputSize = ref("10") as any;
</script>

<style>
.margin {
  margin: 12px 0 24px;
}
</style>
