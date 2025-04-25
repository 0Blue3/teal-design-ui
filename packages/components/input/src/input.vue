<template>
  <div
    :class="[
      bem.b(),
      bem.is('prepend', $slots.prepend ? true : false),
      bem.is('append', $slots.append ? true : false),
      bem.m(mergedSize),
    ]"
    :style="style"
    v-bind="$attrs"
    @mouseenter="mouseenter"
    @mouseleave="mouseleave"
  >
    <span v-if="$slots.prepend" :class="bem.e('prepend')">
      <slot name="prepend" />
    </span>
    <div
      :class="[
            bem.e('wrapper'),
            !mergedDisabled && bem.em('wrapper', `${status}`),
            bem.is('focus', isFocus && !mergedDisabled && !isError),
            bem.is('loading', loading),
            bem.is('readonly', readonly!),
            bem.is('disabled', mergedDisabled!),
            isError && bem.em('wrapper', 'danger'),
        ]"
    >
      <span v-if="$slots.prefix" :class="bem.e('prefix')">
        <slot name="prefix" />
      </span>

      <input
        ref="inputRef"
        :id="id"
        :name="name"
        :placeholder="placeholder"
        :disabled="mergedDisabled"
        :readonly="readonly"
        :required="required"
        :class="bem.e('inner')"
        :type="inputType"
        :value="lastValue"
        :aria-disabled="mergedDisabled"
        :style="inputStyle"
        @focus="focus"
        @input="update"
        @blur="blur"
        @compositionstart="compositionstart"
        @compositionend="compositionend"
        @keydown="keydown"
      />
      <div
        :class="[bem.e('buttons')]"
        v-if="shouldShowVisiblePasswordButton || (clearable && !disabled)"
      >
        <!-- password -->
        <tl-icon
          v-if="shouldShowVisiblePasswordButton"
          @click="switchType"
          :class="bem.is('show', shouldShowIcon)"
          :icon="passwordIcon"
        />
        <!-- clearable -->
        <tl-icon
          v-if="clearable && !disabled"
          :class="bem.is('show', shouldShowIcon)"
          icon="close"
          @click="clear"
        />
      </div>
      <div v-if="showCounter" :class="bem.e('counter')">
        <span>{{ valueCounter }}</span>
        <span v-if="shouldShowLimit">&nbsp;/&nbsp;{{ limit }}</span>
      </div>
      <!-- <div v-if="loading" :class="bem.e('spinner')">
        <YkSpinner />
      </div> -->
      <span v-if="$slots.suffix" :class="bem.e('suffix')">
        <slot name="suffix" />
      </span>
    </div>
    <span v-if="$slots.append" :class="bem.e('append')">
      <slot name="append" />
    </span>
  </div>

  <Transition name="fade">
    <div v-if="message" :class="bem.em('message', mergedStatus)">
      {{ message }}
    </div>
  </Transition>
</template>
<script setup lang="ts">
import { createNamespace, useFormItem } from "@teal/utils";
import { InputProps } from "./input";
import { computed, ref, toRefs, unref, watch } from "vue";
import TlIcon from "../../icon";

defineOptions({ name: "tl-input" });

const bem = createNamespace("input");

const props = withDefaults(defineProps<InputProps>(), {
  size: "m",
  type: "text",
  modelValue: "",
  disabled: false,
  readonly: false,
  required: false,
  visible: true,
  clearable: false,
  status: "primary",
  loading: false,
  message: "",
  showCounter: false,
  limit: -1, // 不限制输入字数
});

const { disabled, status, message, size, inputStyle } = toRefs(props);

const { mergedDisabled, isError, mergedStatus, mergedSize, validate } = useFormItem({
  disabled,
  status,
  message,
  size,
});

const isTyping = ref(false);
// 是否有字符限制
const shouldLimitInput = props.limit > 0;
// 显示字符限制
const shouldShowLimit = props.showCounter && shouldLimitInput;
// 显示隐藏密码图标
const shouldShowVisiblePasswordButton =
  props.type === "password" && !props.disabled && props.visible;
// inputValue
let lastValue = unref(props.modelValue);
// 字符统计
const valueCounter = ref<number>(lastValue.length);
const emits = defineEmits([
  "focus",
  "blur",
  "clear",
  "change",
  "submit",
  "keydown",
  "update:modelValue",
  "hoverin",
  "hoverout",
]);
const inputRef = ref<HTMLInputElement>();

// input的不同状态
const isFocus = ref(false);
const isHovering = ref(false);
// 密码/清除 按钮...
const shouldShowButton = ref(lastValue.length > 0);
const inputType = ref(props.type);

const passwordIcon = computed(() => {
  return inputType.value === "password" ? "eye-slash" : "eye";
});
const shouldShowIcon = computed(() => {
  return (
    shouldShowButton.value &&
    (props.clearable || props.visible) &&
    (isFocus.value || isHovering.value)
  );
});

const switchType = () => {
  inputType.value = inputRef.value?.type === "text" ? "password" : "text";
};

const clear = () => {
  inputRef!.value!.value = "";
  inputRef!.value!.focus();
  update();
  emits("clear", "");
};
const focus = () => {
  // 禁用与只读状态不可被聚焦
  if (props.disabled || props.readonly) return;
  isFocus.value = true;
  validate("focus");
  emits("focus", lastValue);
};
const update = () => {
  if (props.disabled || props.readonly) return;

  lastValue = inputRef.value?.value ?? "";
  // 超出限制剪切
  if (shouldLimitInput && !isTyping.value && lastValue.length > props.limit) {
    lastValue = lastValue.slice(0, props.limit);
    inputRef.value!.value = lastValue;
  }
  shouldShowButton.value = lastValue.length > 0 ? true : false;
  valueCounter.value = lastValue.length;

  validate("change");
  emits("update:modelValue", lastValue);
  emits("change", lastValue);
};

const blur = () => {
  isFocus.value = false;
  validate("blur");
  emits("blur", lastValue);
};

const mouseenter = () => {
  isHovering.value = true;
  emits("hoverin");
};

const mouseleave = () => {
  isHovering.value = false;
  emits("hoverout");
};

// 开始使用中文输入法,暂停字数限制
const compositionstart = () => {
  isTyping.value = true;
};

// 结束使用中文输入法
const compositionend = () => {
  isTyping.value = false;
  update();
};

const keydown = (event: KeyboardEvent) => {
  if (event.key === "Enter" && !isTyping.value) {
    emits("submit");
  }
  emits("keydown", event);
};

const setValue = (value: string) => {
  lastValue = value;
  emits("update:modelValue", lastValue);
  emits("change", lastValue);
};

// 实现双向绑定
watch(
  () => props.modelValue,
  (newValue) => {
    lastValue = newValue;
    emits("update:modelValue", lastValue);
  }
);

defineExpose({
  inputRef,
  setValue,
});
</script>
