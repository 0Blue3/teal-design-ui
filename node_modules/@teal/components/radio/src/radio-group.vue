<template>
  <tl-space
    v-if="type === 'radio'"
    :dir="direction"
    :size="mergedSize"
    :type="type"
    :class="[bem.b(), bem.is('disabled', mergedDisabled ?? false)]"
  >
    <slot />
  </tl-space>
  <!-- button -->
  <div
    v-else
    :class="[
      bem.b(),
      bem.is('solid', solid),
      bem.m(type),
      bem.m(mergedSize),
      bem.m(direction),
    ]"
  >
    <div :class="bem.e('container')">
      <slot />
    </div>
  </div>
</template>
<script setup lang="ts">
import { createNamespace, useFormItem } from "@teal/utils";
import { RadioGroupProps, RadioEmits, radioValue, RadioGroupKey } from "./radio";
import { provide, ref, watch, toRefs } from "vue";

defineOptions({ name: "tl-radio-group" });

const bem = createNamespace("radio-group");

const props = withDefaults(defineProps<RadioGroupProps>(), {
  solid: false,
  disabled: false,
  size: "m",
  type: "radio",
  direction: "horizontal",
});

const emits = defineEmits<RadioEmits>();

const localValue = ref(props.modelValue);

const { size, disabled } = toRefs(props);

const { mergedSize, mergedDisabled } = useFormItem({
  size,
  disabled,
});

watch(
  () => props.modelValue,
  (newVal) => {
    localValue.value = newVal;
  }
);

const handleChange = (val: radioValue) => {
  localValue.value = val;
  emits("update:modelValue", localValue.value);
  emits("change", localValue.value);
};

provide(RadioGroupKey, {
  localValue,
  size: mergedSize.value,
  type: props.type,
  solid: props.solid,
  disabled: mergedDisabled.value,
  handleChange,
});
</script>
