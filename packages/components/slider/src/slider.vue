<template>
  <div :class="[bem.b(), bem.is('disabled', disabled)]">
    <div
      ref="runwayRef"
      :class="bem.e('runway')"
      :style="RunwayStyle"
      @click="handleBarClick"
    >
      <div :class="[bem.e('bar'), bem.m(direction)]" :style="barStyle">
        <tl-tooltip
          v-if="isRange"
          :class="[bem.e('bar-button-start')]"
          :placement="toolTipPlacement"
          :open="moving && !isEndBtn"
          trigger="hover"
          :content="toolTipTitleStart"
          @mousedown="handleStartMouseDown"
        >
          <div :class="bem.e('bar-tooltipSpan')"></div>
        </tl-tooltip>
        <tl-tooltip
          :class="bem.e('bar-button-end')"
          :placement="toolTipPlacement"
          :open="moving && isEndBtn"
          trigger="hover"
          :content="toolTipTitleEnd"
          @mousedown="handleEndMouseDown"
        >
          <div :class="bem.e('bar-tooltipSpan')"></div>
        </tl-tooltip>
      </div>
    </div>
    <slider-marks
      v-model="marks"
      :direction="direction"
      :disabled="disabled"
      :height="height"
      :range-min="min"
      :range-max="max"
      :percent-start="percentBarStart"
      :percent-end="percentBarEnd"
      @position="handlePosition"
    />
  </div>
</template>
<script lang="ts" setup>
import { createNamespace } from "@teal/utils";
import { SliderProps, SliderEmits } from "./slider";
import { useSlider } from "./useSlider";
import { computed, onMounted, ref, toRefs, watch } from "vue";
import sliderMarks from "./slider-marks.vue";

defineOptions({ name: "tl-slider" });
const bem = createNamespace("slider");
const props = withDefaults(defineProps<SliderProps>(), {
  modelValue: 0,
  min: 0,
  max: 100,
  step: 1,
  direction: "horizontal",
  height: 200,
  disabled: false,
  marks: () => [],
  showInput: false,
});

const { modelValue, marks, min, max } = toRefs(props);
// 条dom
const runwayRef = ref();
const emits = defineEmits<SliderEmits>();
// 一个点 还是 两个点
const isRange = computed(() => Array.isArray(modelValue.value));
// 条长度值
const runwayLen = computed(() => props.max - props.min);
// 条dom实际长度
const runwayWidth = ref(0);
// 获取条实际长度
const setRunwayWidth = () => {
  if (props.direction === "horizontal") {
    runwayWidth.value = runwayRef.value ? runwayRef.value.offsetWidth : 0;
  } else if (props.direction === "vertical") {
    runwayWidth.value = runwayRef.value ? runwayRef.value.offsetHeight : 0;
  }
};
onMounted(() => {
  setRunwayWidth();
  window.addEventListener("resize", setRunwayWidth);
});

// 文本提示 - 开始值
const toolTipTitleStart = computed(() => {
  if (isRange.value) {
    const modelVal = modelValue.value as number[];
    return (modelVal[0] || 0).toString();
  } else {
    return "0";
  }
});
// 文本提示 - 结束值
const toolTipTitleEnd = computed(() => {
  if (isRange.value) {
    const modelVal = modelValue.value as number[];
    return (modelVal[1] || 0).toString();
  } else {
    return modelValue.value.toString();
  }
});

// 文本提示 - 位置
const toolTipPlacement = computed(() => {
  return props.direction === "horizontal" ? "top" : "right";
});

// 实际位移
const barStartPoint = ref(0);
const barEndPoint = ref(0);

// 小按钮位移百分比
const percentBarStart = computed(() => {
  if (isRange.value) {
    const modelVal = modelValue.value as number[];
    const value = (modelVal[0] || 0) - props.min;
    return Math.round((value / runwayLen.value) * 100) / 100;
  } else {
    return 0;
  }
});
// 大按钮位移百分比
const percentBarEnd = computed(() => {
  if (isRange.value) {
    const modelVal = modelValue.value as number[];
    const value = (modelVal[1] || 0) - props.min;
    return Math.round((value / runwayLen.value) * 100) / 100;
  } else {
    const modelVal = modelValue.value as number;
    return Math.round((modelVal / runwayLen.value) * 100) / 100;
  }
});
// 条样式
const RunwayStyle = computed(() => {
  if (props.direction === "horizontal") {
    return {
      height: "2px",
    };
  } else if (props.direction === "vertical") {
    return {
      height: props.height + "px",
      width: "2px",
    };
  } else {
    return {};
  }
});
// 选中条 样式
const barStyle = computed(() => {
  if (props.direction === "horizontal") {
    return {
      top: 0,
      height: "2px",
      left: barStartPoint.value + "px",
      width: barEndPoint.value - barStartPoint.value + "px",
    };
  } else if (props.direction === "vertical") {
    return {
      left: 0,
      width: "2px",
      bottom: barStartPoint.value + "px",
      height: barEndPoint.value - barStartPoint.value + "px",
    };
  } else {
    return {};
  }
});
/**
 * moving 是否处于拖拽状态
 * isEndBtn true: 较大按钮 false: 小按钮
 * handleStartMouseDown 小按钮拖拽
 * handleEndMouseDown 大按钮拖拽
 */
const {
  moving,
  isEndBtn,
  handleStartMouseDown,
  handleEndMouseDown,
  emitValue,
} = useSlider(props, runwayRef, runwayWidth, barStartPoint, barEndPoint, isRange, emits);

// modelValue 变化, 改变point
watch(
  percentBarStart,
  () => {
    if (!moving.value) {
      barStartPoint.value = percentBarStart.value * runwayWidth.value;
    }
  },
  { immediate: true }
);
watch(
  percentBarEnd,
  () => {
    if (!moving.value) {
      barEndPoint.value = percentBarEnd.value * runwayWidth.value;
    }
  },
  { immediate: true }
);
// dom 发生变化, 改变 point
watch(
  runwayWidth,
  () => {
    barStartPoint.value = percentBarStart.value * runwayWidth.value;
    barEndPoint.value = percentBarEnd.value * runwayWidth.value;
  },
  { immediate: true }
);

// 根据percent得出point
function handlePosition(percent: number) {
  if (props.disabled) return;
  let _percent = percent / 100;
  if (isRange.value) {
    let startDistance = Math.abs(percentBarStart.value - _percent);
    let endDistance = Math.abs(percentBarEnd.value - _percent);

    if (startDistance >= endDistance) {
      barEndPoint.value = _percent * runwayWidth.value;
    } else {
      barStartPoint.value = _percent * runwayWidth.value;
    }
  } else {
    barEndPoint.value = _percent * runwayWidth.value;
  }

  emitValue("update:modelValue");
}
// 条点击事件: 计算当前percent => 修改point => 修改值
function handleBarClick(e: MouseEvent) {
  if (props.disabled) return;
  const dom = runwayRef.value as HTMLBaseElement;
  const rect = dom.getBoundingClientRect();
  if (props.direction === "horizontal") {
    // 在条上的位移
    const position = e.clientX - rect.left;
    // 再条上位移的百分比
    let percent = Math.round((position / runwayWidth.value) * 100);
    percent = Math.round(percent / props.step) * props.step;
    handlePosition(percent);
  } else if (props.direction === "vertical") {
    // 在条上的位移
    const position = runwayWidth.value - (e.clientY - rect.top);
    // 再条上位移的百分比
    let percent = Math.round((position / runwayWidth.value) * 100);
    percent = Math.round(percent / props.step) * props.step;
    handlePosition(percent);
  }
}
</script>
