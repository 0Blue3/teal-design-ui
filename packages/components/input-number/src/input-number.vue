<template>
  <tl-input
    ref="inputRef"
    :model-value="displayValue"
    :disabled="mergedDisabled"
    :size="mergedSize"
    :class="bem.b()"
    v-bind="$attrs"
    @focus="focus"
    @change="change"
    @blur="blur"
    @hoverin="isHovering = true"
    @hoverout="isHovering = false"
    @keydown="keydown"
  >
    <template #suffix>
      <div
        v-show="controls && !mergedDisabled && isHovering"
        :class="[bem.e('buttons--number'), bem.em('buttons--number', mergedSize)]"
      >
        <tl-button
          :disabled="isMax"
          :size="mergedSize"
          type="secondary"
          @click="increase"
          @mousedown="startCombo(1)"
          icon="fa-angle-up"
        />
        <tl-button
          :disabled="isMin"
          :size="mergedSize"
          type="secondary"
          @click="decrease"
          @mousedown="startCombo(0)"
          icon="fa-angle-down"
        />
      </div>
    </template>
  </tl-input>
</template>
<script lang="ts" setup>
import { createNamespace, useFormItem } from "@teal/utils";
import { InputNumberProps } from "./input-number";
import TlInput from "../../input";
import { ref, toRefs, computed, onMounted, watch } from "vue";
import { calculate, numberMatchReg, normalizeNumber } from "./utils";

defineOptions({ name: "tl-input-number" });

const bem = createNamespace("inputNumber");
const emits = defineEmits(["update:modelValue", "increase", "decrease"]);
const props = withDefaults(defineProps<InputNumberProps>(), {
  step: 1,
  max: Infinity,
  min: -Infinity,
  precision: 0,
  size: "m",
  disabled: false,
  controls: true,
  formatter: (value: string) => {
    return value;
  },
});
const isHovering = ref<boolean>(false);
const isFocus = ref<boolean>(false);
// 触发连击所需时间
const TimeBeforeCombo = 250;
// 连击的速度
const ComboSpeed = 60;
const valueRefs = toRefs(props);
// 最新值
const lastValue = ref<number>(0);
const inputRef = ref<InstanceType<typeof TlInput>>();

const { disabled, size } = valueRefs;

const { mergedSize, mergedDisabled } = useFormItem({ disabled, size });
let nextValue;

// 计算精度
const precision = computed(() => {
  let pre = valueRefs.precision.value;
  // 整数 或 精度>20
  if (!Number.isInteger(pre) || pre > 20) {
    pre = 0;
  }
  return pre;
});

// 根据 max min 获得合适的初始值
const getInitialValue = () => {
  if (props.max === Infinity && props.min === -Infinity) {
    return 0;
  }
  return props.min;
};

// mode: 0 - / 1 +
let timeoutID: number | undefined;
let intervalID: number | undefined;
const startCombo = (mode: 0 | 1) => {
  if (props.disabled) return;
  const action = mode === 1 ? increase : decrease;
  // 考虑到鼠标左键会在按钮外弹出
  window.addEventListener("mouseup", stopCombo);

  timeoutID = window.setTimeout(() => {
    intervalID = window.setInterval(() => {
      action();
    }, ComboSpeed);
  }, TimeBeforeCombo);
};
const stopCombo = () => {
  if (timeoutID) clearTimeout(timeoutID);
  if (intervalID) clearInterval(intervalID);
  window.removeEventListener("mouseup", stopCombo);
};
// 极值约束
const isMin = computed(() => props.disabled || lastValue.value <= valueRefs.min.value);

const isMax = computed(() => props.disabled || lastValue.value >= valueRefs.max.value);

onMounted(() => {
  lastValue.value = valueRefs.modelValue?.value ?? getInitialValue();
});

const increase = () => {
  if (isMax.value) {
    stopCombo();
    return;
  }
  nextValue = calculate(lastValue.value, valueRefs.step.value, precision.value);
  lastValue.value = nextValue >= valueRefs.max.value ? valueRefs.max.value : nextValue;
  update();
  emits("increase");
};

const decrease = () => {
  if (isMin.value) {
    stopCombo();
    return;
  }
  nextValue = calculate(lastValue.value, -valueRefs.step.value, precision.value);
  lastValue.value = nextValue <= valueRefs.min.value ? valueRefs.min.value : nextValue;
  update();
  emits("decrease");
};
const keydown = (ev: KeyboardEvent) => {
  if (ev.key === "ArrowUp") {
    increase();
  }
  if (ev.key === "ArrowDown") {
    decrease();
  }
};
const change = () => {
  update();
};
const focus = () => {
  isFocus.value = true;
  return;
};
const blur = (value: string) => {
  // 使用正则匹配数字 不合法视为 ‘0’
  lastValue.value = value ? Number((value.match(numberMatchReg) ?? ["0"])[0]) : 0;
  if (precision.value === 0) {
    lastValue.value = Math.trunc(lastValue.value);
  } else {
    lastValue.value = normalizeNumber(lastValue.value, precision.value);
  }
  if (isMax.value) {
    lastValue.value = valueRefs.max.value;
  }
  if (isMin.value) {
    lastValue.value = valueRefs.min.value;
  }
  update();
  isFocus.value = false;
  inputRef.value?.setValue(displayValue.value);
};
const update = () => {
  emits("update:modelValue", lastValue.value);
};
const displayValue = computed(() => {
  const lastDisplayValue = lastValue.value.toFixed(precision.value);

  if (!isFocus.value) {
    return valueRefs.formatter.value(lastDisplayValue) ?? lastDisplayValue;
  }
  return lastDisplayValue;
});
// 模型同步
watch(
  () => props.modelValue,
  (newValue) => {
    lastValue.value = newValue ?? getInitialValue();
  }
);
</script>
