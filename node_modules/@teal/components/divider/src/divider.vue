<template>
  <div :class="bem.b()">
    <!-- 水平方向 -->
    <div
      v-if="direction === 'horizontal'"
      :class="bem.e('horizontal')"
      :style="{
        borderWidth: `${width}px`,
        borderStyle: borderStyle,
      }"
    >
      <!-- 分割线上设置文本 -->
      <div :class="[bem.e('title'), bem.m(contentPosition)]"><slot /></div>
    </div>
    <!-- 垂直方向 -->
    <div
      v-else
      :class="bem.e('vertical')"
      :style="{
        borderWidth: `${width}px`,
        borderStyle: borderStyle,
      }"
    ></div>
  </div>
</template>
<script setup lang="ts">
import { createNamespace } from "@teal/utils/create";
import { DividerProps } from "./divider";

defineOptions({
  name: "tl-divider",
});

const props = withDefaults(defineProps<DividerProps>(), {
  id: "",
  contentPosition: "left",
  width: "1",
  height: "1",
  borderStyle: "solid",
  color: "#00aaee",
  direction: "horizontal",
});

const bem = createNamespace("divider");
</script>
