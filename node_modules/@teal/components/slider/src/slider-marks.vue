<template>
  <div :class="[bem.b(), bem.m(direction), bem.is('disabled', disabled)]">
    <div
      v-for="item in renderMarks"
      :key="item.key"
      :class="[
        bem.e('item'),
        bem.is('over', item.isOver),
        bem.is('overed', item.isOvered),
      ]"
      :style="markStyle(item.percent)"
    >
      <div :class="bem.e('item-pointer')" @click="emits('position', item.percent)"></div>
      <div :class="bem.e('item-box')" @click="emits('position', item.percent)">
        <component :is="item.markInfo" />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { createNamespace } from "@teal/utils";
import { SliderMarksProps, SliderMarkRenderItem } from "./slider";
import { computed, createVNode } from "vue";

defineOptions({ inheritAttrs: false });

const bem = createNamespace("sliderMarks");

const props = withDefaults(defineProps<SliderMarksProps>(), {
  modelValue: () => [],
  percentStart: 0,
  percentEnd: 0,
  rangeMin: 0,
  rangeMax: 100,
});
const emits = defineEmits(["position"]);
const markStyle = computed(() => {
  return (percent: number) => {
    if (props.direction === "horizontal") {
      return {
        left: percent + "%",
      };
    } else if (props.direction === "vertical") {
      return {
        // bottom: percent + "%",
        bottom: (percent / 100) * props.height + "px",
      };
    } else {
      return {};
    }
  };
});
const renderMarks = computed<SliderMarkRenderItem[]>(() => {
  const runwayLen = props.rangeMax - props.rangeMin;
  return props.modelValue.map((item) => {
    const value = item.key - props.rangeMin;
    const percent = Math.round((value / runwayLen) * 100) || 0;
    const percentRatio = percent / 100;
    return {
      ...item,
      percent,
      isOver: percentRatio === props.percentStart || percentRatio === props.percentEnd,
      isOvered: percentRatio > props.percentStart && percentRatio < props.percentEnd,
      markInfo: item.labelNode || createVNode("span", { style: item.style }, item.label),
    };
  });
});
</script>
