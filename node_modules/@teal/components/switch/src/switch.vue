<template>
  <button
    type="button"
    role="switch"
    :class="[
      bem.b(),
      bem.is('disabled', disabled),
      bem.is('checked', isChecked),
      bem.is('loading', loading),
      bem.m(size),
    ]"
    :style="styles"
    :disabled="disabled"
    @click="handleClick"
  >
    <span :class="bem.e('dot')">
      <tl-icon v-if="loading" icon="fa-spinner" spin />
    </span>
    <span :class="bem.e('text')" v-if="checkedText || uncheckedText">{{
      isChecked ? checkedText : uncheckedText
    }}</span>
  </button>
</template>
<script lang="ts" setup>
import { createNamespace } from "@teal/utils";
import { SwitchProps, SwitchEmits } from "./switch";
import { ref, watch, computed } from "vue";

defineOptions({ name: "tl-switch" });

const bem = createNamespace("switch");
const props = withDefaults(defineProps<SwitchProps>(), {
  modelValue: false,
  size: "m",
  loading: false,
  disabled: false,
  checkedValue: true,
  uncheckedValue: false,
});

const emit = defineEmits<SwitchEmits>();

const localValue = ref(props.modelValue);

const isChecked = computed(() => localValue.value === props.checkedValue);

const isDisabled = computed(() => props.disabled || props.loading);

watch(
  () => props.modelValue,
  (newVal) => {
    localValue.value = newVal;
  }
);

const styles = computed(() => ({
  backgroundColor: isChecked.value ? props.checkedColor : props.uncheckedColor,
}));

const handleClick = (e: Event) => {
  if (isDisabled.value) return;
  localValue.value = !isChecked.value ? props.checkedValue : props.uncheckedValue;

  emit("update:modelValue", localValue.value);
  emit("change", localValue.value, e);
};
</script>
