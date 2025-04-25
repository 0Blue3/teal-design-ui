<template>
  <label
    :class="[
      bem.b(),
      bem.is('disabled', mergedDisabled ?? false),
      bem.m(mergedType),
      bem.m(mergedSize),
    ]"
  >
    <input
      v-model="localValue"
      type="radio"
      :value="value"
      :disabled="mergedDisabled"
      @change="handleChange"
    />
    <span
      v-if="mergedType === 'radio'"
      :class="[
        bem.e('box'),
        bem.is('checked', isChecked),
        bem.is('disabled', mergedDisabled ?? false),
      ]"
    >
      <span
        :class="[
          bem.e('inner'),
          bem.is('checked', isChecked),
          bem.is('disabled', mergedDisabled ?? false),
          bem.is('solid', mergedSolid ?? false),
        ]"
      ></span>
    </span>
    <span
      :class="[
        bem.e('label'),
        bem.is('checked', isChecked),
        bem.em('label', mergedType),
        bem.is('solid', mergedSolid ?? false),
      ]"
    >
      <slot />
    </span>
  </label>
</template>
<script setup lang="ts">
import { createNamespace } from "@teal/utils";
import { RadioProps, RadioEmits, RadioGroupKey } from "./radio";
import { computed, ref, watch, inject } from "vue";

defineOptions({ name: "tl-radio" });

const bem = createNamespace("radio");

const props = withDefaults(defineProps<RadioProps>(), {
  solid: false,
  type: "radio",
  size: "m",
});

const emits = defineEmits<RadioEmits>();

const radioGroupContext = inject(RadioGroupKey);

const isGroup = computed(() => radioGroupContext ?? false);

const localValue = ref(isGroup.value ? radioGroupContext?.localValue : props.modelValue);

const isChecked = computed(() => localValue.value === props.value);

const mergedDisabled = computed(() =>
  isGroup.value ? radioGroupContext?.disabled : props.disabled
);

const mergedSize = computed(() => (isGroup.value ? radioGroupContext?.size : props.size));

const mergedType = computed(() => (isGroup.value ? radioGroupContext?.type : props.type));

const mergedSolid = computed(() =>
  isGroup.value ? radioGroupContext?.solid : props.solid
);
watch(
  () => props.modelValue,
  (newVal) => {
    localValue.value = newVal;
  }
);

const handleChange = () => {
  localValue.value = props.value;
  isGroup && radioGroupContext?.handleChange(localValue.value);
  emits("update:modelValue", localValue.value);
  emits("change", localValue.value);
};
</script>
