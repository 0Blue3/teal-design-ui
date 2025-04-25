<template>
  <component
    :is="tag"
    :class="[bem.b(), bem.m(direction), bem.m(mergedSize)]"
    :style="calcGapStyle"
  >
    <template v-if="curOptions.length">
      <tl-checkbox
        v-for="c in curOptions"
        :key="c.value"
        :checked="curVal.includes(c.value)"
        :value="c.value"
        :disabled="c.disabled"
        :indeterminate="c.indeterminate"
      >
        <slot v-if="$slots.label" name="label" :data="c" />
        <template v-else> {{ c?.label ?? c?.value }}</template>
      </tl-checkbox>
    </template>
    <slot></slot>
  </component>
</template>
<script lang="ts" setup>
import { createNamespace, isArray, useFormItem, toBoolean } from "@teal/utils";
import {
  CheckboxGroupProps,
  CheckboxGroupValue,
  CheckboxOption,
  checkboxGroupContextKey,
} from "./checkbox";
import { computed, CSSProperties, reactive, toRefs, useSlots, ref, provide } from "vue";

defineOptions({
  name: "tl-checkbox-group",
});

const bem = createNamespace("checkboxGroup");
const props = withDefaults(defineProps<CheckboxGroupProps>(), {
  defaultValue: () => [],
  disabled: false,
  tag: "div",
  direction: "horizontal",
  options: () => [],
  size: "m",
});
const { size, disabled } = toRefs(props);
const { mergedSize, mergedDisabled } = useFormItem({
  size,
  disabled,
});

const emits = defineEmits<{
  change: [CheckboxGroupValue[]];
  "update:modelValue": [CheckboxGroupValue[]];
}>();
const slots = useSlots();
const curVal = ref(props.defaultValue);
const calcVal = computed(() =>
  isArray(props.modelValue) ? props.modelValue : curVal.value
);
const handleChange = (val: Array<string | number>) => {
  curVal.value = val;
  emits("update:modelValue", val);
  emits("change", val);
};
const curOptions = computed<CheckboxOption[]>(() => {
  return props.options.map((i) => {
    if (typeof i === "number" || typeof i === "string") {
      return {
        value: i,
        label: i,
      } as CheckboxOption;
    }
    return i;
  });
});
// 计算限制可勾选
const isMax = computed(() => {
  return props.max === undefined ? false : calcVal.value.length >= props.max;
});

const resolveGap = computed(
  (): CSSProperties => {
    if (isArray(props.size)) {
      return {
        rowGap: `${props.size[1]}px`,
        columnGap: `${props.size[0]}px`,
      };
    } else {
      return {
        gap: `${getMargin(props.size)}px`,
      };
    }
  }
);
const calcGapStyle = computed<CSSProperties>(() => {
  return {
    flexDirection: flexDirection(props.direction),
    ...resolveGap.value,
  };
});
provide(
  checkboxGroupContextKey,
  reactive({
    size: mergedSize,
    name: "tlCheckboxGroup",
    calcVal: calcVal,
    disabled: mergedDisabled,
    handleChange,
    isMax,
  })
);
const getMargin = (size: CheckboxGroupProps["size"]) => {
  if (typeof size === "number") {
    return size;
  }
  switch (size) {
    case "s":
      return 8;
    case "m":
      return 16;
    case "l":
      return 24;
    default:
      return 16;
  }
};

//排列方式
const flexDirection = (
  dir: CheckboxGroupProps["direction"]
): CSSProperties["flexDirection"] => {
  if (dir == "vertical") {
    return "column";
  } else {
    return "row";
  }
};
</script>
