<template>
  <div
    :class="[bem.b(), bem.is('disabled', disabled), bem.m(size)]"
    @mouseleave="handleLeave()"
  >
    <div
      v-for="i in numberCount"
      :key="i"
      :class="[
        bem.e('item'),
        bem.is('readonly', readonly),
        bem.is('disabled', disabled),
        animation && numberShowValue >= i && bem.em('item', 'animation'),
      ]"
      :style="animationStyle(i)"
      @animationend="handleAnimationEnd(i)"
    >
      <tl-icon
        v-show="allowHalf"
        :icon="icon"
        :class="[bem.em('item', 'half'), bem.is('select', numberShowValue + 0.5 == i)]"
        :style="{
          color: numberShowValue + 0.5 == i ? color : '',
        }"
        @mouseenter="handleEnter(i - 0.5)"
        @click="handleClick(i - 0.5)"
      />
      <tl-icon
        :icon="icon"
        :class="[bem.is('select', numberShowValue >= i)]"
        :style="{ color: numberShowValue >= i ? color : '' }"
        @mouseenter="handleEnter(i)"
        @click="handleClick(i)"
      />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { createNamespace } from "@teal/utils";
import type { RateProps } from "./rate";
import TlIcon from "../../icon";
import { ref, watch, computed } from "vue";

defineOptions({ name: "tl-rate" });

const bem = createNamespace("rate");

const props = withDefaults(defineProps<RateProps>(), {
  count: 5,
  modelValue: 0,
  defaultValue: 0,
  allowHalf: false,
  allowClear: false,
  grading: false,
  readonly: false,
  disabled: false,
  color: "",
  /**
   * 半选
   *
   */
  icon: "fa-star",
  size: "m",
});
const emits = defineEmits(["update:modelValue", "change", "hover-change"]);
const showValue = ref(props.defaultValue ?? props.modelValue);
const localValue = ref(props.defaultValue ?? props.modelValue);
const animation = ref(false);

const numberCount = computed(() => Number(props.count));
const numberShowValue = computed(() => Number(showValue.value));
const numberLocalValue = computed(() => Number(localValue.value));
const writeabled = computed(() => props.disabled || props.readonly);
const animationStyle = computed(() => {
  return (n: number) => (animation.value ? { animationDelay: `${50 * n}ms` } : undefined);
});

watch(
  () => props.modelValue,
  (newVal) => {
    localValue.value = newVal;
  }
);
function updateModelValue(n: number) {
  if (props.modelValue) {
    emits("update:modelValue", n);
    emits("change", n);
  }
}
function handleLeave() {
  if (writeabled.value) return;
  showValue.value = localValue.value;
}
function handleEnter(n: number) {
  if (writeabled.value) return;
  showValue.value = n;
  emits("hover-change", n);
}
function handleClick(n: number) {
  if (writeabled.value) return;
  animation.value = true;

  if (props.allowClear && numberLocalValue.value == n) {
    animation.value = false;
    localValue.value = 0;
    return;
  }

  localValue.value = n;
  updateModelValue(n);
}
function handleAnimationEnd(n: number) {
  if (animation.value && n == Math.ceil(numberLocalValue.value) - 1) {
    animation.value = false;
  }
}
</script>
