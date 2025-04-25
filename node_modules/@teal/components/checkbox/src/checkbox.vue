<template>
  <label :class="[bem.b(), bem.is('disabled', calcDisabled ?? ''), bem.m(calcSize)]">
    <input
      ref="checkboxRef"
      type="checkbox"
      :class="[bem.e('target')]"
      :disabled="calcDisabled"
      :checked="calcChecked"
      @change="handleChange"
      @click="handleClick"
    />
    <div
      :class="[
        bem.e('wrap'),
        bem.m('common'),
        // 选中
        calcChecked && !indeterminate && bem.m('active'),
        // 未选中
        !calcChecked && !calcDisabled && !indeterminate && bem.m('normal'),
        // 半选
        indeterminate && bem.m('indeterminate'),
        bem.is('disabled', calcDisabled ?? ''),
      ]"
    ></div>
    <div>
      <slot>
        <span>{{ value }}</span>
      </slot>
    </div>
  </label>
</template>
<script setup lang="ts">
import { createNamespace, isArray, isUndefined, toBoolean } from "@teal/utils/index";
import { CheckboxProps, checkboxGroupContextKey } from "./checkbox";
import { computed, onMounted, watch, ref, inject } from "vue";

defineOptions({
  name: "tl-checkbox",
});
const bem = createNamespace("checkbox");
const props = withDefaults(defineProps<CheckboxProps>(), {
  size: "m",
  defaultChecked: false,
  disabled: false,
  checked: undefined,
});
const emits = defineEmits<{
  change: [boolean];
  "update:checked": [boolean];
}>();
const checkboxRef = ref<HTMLInputElement>();
const checkboxGroupCtx = inject(checkboxGroupContextKey, undefined);
const isGroup = computed(() => !!checkboxGroupCtx);
const isChecked = ref(props.defaultChecked);

// 值计算
const calcVal = computed(() => {
  const curVal = props.checked ?? isChecked.value;
  return isGroup.value ? checkboxGroupCtx?.calcVal : curVal;
});
// 选中计算
const calcChecked = computed(() => {
  if (isGroup.value && isArray(calcVal.value)) {
    return calcVal.value!.includes(props.value as any);
  }
  return toBoolean(calcVal.value as string | number | boolean);
});
// 组禁用>项禁用>max(禁用未勾选)
const calcDisabled = computed(() => {
  return (
    checkboxGroupCtx?.disabled ||
    props.disabled ||
    (!isChecked.value && checkboxGroupCtx?.isMax)
  );
});
const calcSize = computed(() => checkboxGroupCtx?.size || props.size);

function handleChange(e: Event) {
  const { checked } = e.target as HTMLInputElement;
  isChecked.value = checked;

  let newVal;
  if (isGroup.value && isArray(calcVal.value)) {
    const set = new Set(calcVal.value);
    if (checked) {
      set.add(props.value ?? true);
    } else {
      set.delete(props.value ?? true);
    }
    newVal = Array.from(set);

    checkboxGroupCtx?.handleChange(newVal as [string | number]);
  } else {
    emits("update:checked", checked);
    emits("change", checked);
  }
}

watch(
  () => props.checked,
  (n) => {
    isChecked.value = isUndefined(n) ? false : toBoolean(n);
    checkboxRef.value && (checkboxRef.value.checked = isChecked.value);
  }
);

const handleClick = (e: Event) => {
  e.stopPropagation();
};
</script>
