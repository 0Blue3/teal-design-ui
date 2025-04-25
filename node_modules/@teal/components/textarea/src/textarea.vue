<template>
  <div
    ref="contentRef"
    :class="[bem.b(), bem.is('disabled', disabled), bem.is('focus', isFocus)]"
  >
    <div
      v-if="props.autoSize"
      ref="contentRef"
      :style="mirrorStyle"
      :class="[bem.e('content')]"
    >
      {{ modelValue }}
    </div>
    <span v-if="props.showWordLimit" :class="bem.e('wordLimit')">{{ limitNum }}</span>
    <textarea
      ref="textAreaRef"
      :value="localValue"
      rows="5"
      cols=""
      :placeholder="placeholder"
      :class="[bem.e('inner')]"
      :disabled="disabled"
      :style="areaStyle"
      @focus="onFocus"
      @blur="onBlur"
      @input="onInput"
      @compositionstart="onComposition"
      @compositionupdate="onComposition"
      @compositionend="onComposition"
    />
    <button
      v-if="clearable && !disabled"
      aria-label="清空内容"
      :class="bem.e('button')"
      @click="clear"
    >
      <tl-icon icon="fa-solid fa-xmark "></tl-icon>
    </button>
  </div>
</template>
<script lang="ts" setup>
import { createNamespace } from "@teal/utils";
import { TextareaEmits, TextareaProps } from "./textarea";
import {
  computed,
  ref,
  shallowRef,
  CSSProperties,
  onMounted,
  nextTick,
  watch,
} from "vue";
import { splitUnit, getSizeStyles, getOutProp } from "./utils";
import { useResizeObserver } from "@vueuse/core";

defineOptions({ name: "tl-textarea" });

const bem = createNamespace("textarea");

const props = withDefaults(defineProps<TextareaProps>(), {
  id: "",
  modelValue: "",
  placeholder: "",
  clearable: false,
  disabled: false,
  showWordLimit: false,
  maxLength: 0,
});

const emits = defineEmits<TextareaEmits>();

const localValue = computed(() => props.modelValue);

const textAreaRef = shallowRef<HTMLInputElement>();
const contentRef = ref();

const limitNum = computed(() => {
  if (!props.showWordLimit) return "";
  return `${localValue.value ? localValue.value.toString().length : 0}/${
    props.maxLength
  }`;
});
const isFocus = ref(false);
const onFocus = (e: FocusEvent) => {
  isFocus.value = true;
  // 验证规则...
  emits("focus", e);
};
const onBlur = (e: FocusEvent) => {
  isFocus.value = false;
  emits("blur", e);
};
const onInput = (e: Event) => {
  if (props.disabled) return;
  if (isComposition.value) {
    return;
  }
  const { value } = e.target as HTMLInputElement;
  watchInput(value);
};
const onChange = (value: string) => {
  const isChange = props.modelValue !== value;
  isChange && !isFocus.value && emits("change", value);
};
const clearable = computed(() => props.clearable && localValue.value);
const clear = () => {
  emits("clear", "");
  onChange("");
  emits("update:modelValue", "");
};
// 输入法切换
const isComposition = ref(false);
const onComposition = (e: CompositionEvent) => {
  const { value } = e.target as HTMLInputElement;

  if (e.type === "compositionend") {
    isComposition.value = false;
    watchInput(value);
  } else {
    isComposition.value = true;
  }
};
const watchInput = (value: string) => {
  let nVal = value;
  if (props.maxLength && value.length > props.maxLength) {
    nVal = value.slice(0, Math.max(0, props.maxLength));
    textAreaRef.value!.value = nVal;
  }
  onChange(nVal);
  emits("input", nVal);
  emits("update:modelValue", nVal);
};
// 自适应高度计算
const areaStyle = ref<CSSProperties>();
const baseLineHeight = ref(0);
let computedStyle: CSSStyleDeclaration;
const mirrorStyle = ref<CSSProperties>();
onMounted(() => {
  // 获取textArea属性
  computedStyle = getComputedStyle(textAreaRef.value as Element, null);

  if (props.autoSize) {
    mirrorStyle.value = getSizeStyles(computedStyle);
  }

  // 行高
  baseLineHeight.value = splitUnit(computedStyle.getPropertyValue("line-height"));
  calcAreaSize();
});
watch(
  () => props.modelValue,
  () => calcAreaSize()
);
// 计算textarea真实高度
const calcAreaSize = async () => {
  if (!props.autoSize) {
    return;
  }
  await nextTick();
  let minH;
  let maxH;
  let overflow = "hidden";
  const minRow = props.autoSize?.minRows;
  const maxRow = props.autoSize?.maxRows;
  // textarea 高度
  const { pt, pb, bw } = getOutProp(computedStyle);
  const outH = pt + pb + bw;
  const realH = contentRef.value!.offsetHeight!;
  minRow && (minH = baseLineHeight.value * minRow + outH);
  maxRow && (maxH = baseLineHeight.value * maxRow + outH);

  let height = realH ?? 0;

  if (minH && realH < minH) {
    height = minH;
  }
  if (maxH && realH > maxH) {
    height = maxH;
    overflow = "auto";
  }
  areaStyle.value = {
    height: `${height}px`,
    resize: props.autoSize ? "none" : "vertical",
    overflow,
  };
};

useResizeObserver(textAreaRef, calcAreaSize);
</script>
