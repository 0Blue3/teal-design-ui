<template>
  <div :class="[bem.b(), bem.m(layout)]">
    <div
      :class="[bem.e('label'), bem.is('required', required ?? false)]"
      :style="{ width: `${mergedLabelWidth}px` }"
    >
      {{ label }}
    </div>
    <div :class="bem.e('field')">
      <slot />
      <Transition name="fade">
        <div v-if="validateStatus.isError" :class="bem.e('field__extra')">
          {{ validateStatus.message }}
        </div>
      </Transition>
    </div>
  </div>
</template>
<script setup lang="ts">
import { createNamespace, deepClone, isArray, getObjVal } from "@teal/utils";
import {
  FormContext,
  formContextKey,
  formItemContextKey,
  FormItemInstance,
  FormItemStatus,
  FormItemProps,
  FormValidateFailure,
} from "./form";
import { isNil } from "lodash-es";
import Schema from "async-validator";
import { computed, inject, onBeforeMount, onMounted, reactive, provide, ref } from "vue";

defineOptions({ name: "tl-form-item" });

const bem = createNamespace("formItem");

const formContext = inject<Partial<FormContext>>(formContextKey, {});
const props = withDefaults(defineProps<FormItemProps>(), {
  labelWidth: 116,
});
const validateStatus = reactive<FormItemStatus>({
  status: "primary",
  loading: false,
  isError: false,
  message: "",
});
// field-value
const propVal = computed(() => {
  const model = formContext?.model;
  let value = eval(`model.${props.field}`);
  if (model && props.field && !isNil(value)) {
    return value;
  } else {
    return null;
  }
});
const computedDisabled = computed(() => props.disabled || formContext.disabled);
const mergedLabelWidth = computed(() => formContext?.labelWidth ?? props.labelWidth);
// rules
const mergedRules = computed(() => {
  const rules = [];
  if (props.rules) {
    rules.push(...props.rules);
  }
  if (props.field) {
    if (formContext.rules) {
      const formFieldRules = formContext.rules?.[props.field] ?? [];
      rules.push(...formFieldRules);
    }
  }
  if (props.required) {
    rules.push({ required: true });
  }
  return rules;
});
const mergedSize = computed(() => formContext.size || "m");
const layout = computed(() => formContext.layout || "horizontal");

const getTriggeredRules = (trigger?: string) => {
  let rules = mergedRules.value;
  if (!trigger) return rules;
  if (!rules) return [];
  return rules.filter((rule) => {
    if (isArray(rule.trigger)) {
      return rule.trigger.includes(trigger);
    }
    return rule.trigger === trigger;
  });
};

const validateField = (trigger?: string): Promise<any> => {
  const rules = getTriggeredRules(trigger);

  if (!props.field || rules.length === 0) return Promise.resolve();

  const _field = props.field;
  const _value = propVal.value;

  const validator = new Schema({
    [_field]: rules,
  });

  validateStatus.loading = true;
  return validator
    .validate({
      [_field]: _value,
    })
    .then(() => {
      validateStatus.isError = false;
      validateStatus.status = "success";
      validateStatus.message = "";
      return Promise.resolve();
    })
    .catch((e: FormValidateFailure) => {
      const { errors } = e;
      validateStatus.isError = true;
      validateStatus.status = "error";
      validateStatus.message = errors && errors.length > 0 ? errors[0].message || "" : "";

      return Promise.resolve(e);
    })
    .finally(() => {
      validateStatus.loading = false;
    });
};
const resetValidate = () => {
  if (!props.field) return;
  validateStatus.isError = false;
  validateStatus.loading = false;
  validateStatus.status = "primary";
  validateStatus.message = "";
};
const resetField = () => {
  resetValidate();
  const model = formContext?.model;
  if (model && props.field && !isNil(model[props.field])) {
    model[props.field] = formItemInfo.value?.initValue;
  }
};

let formItemInfo = ref<FormItemInstance>();

onMounted(() => {
  if (props.field) {
    // 注册
    formItemInfo.value = reactive({
      field: props.field,
      disabled: computedDisabled,
      validateInstance: validateStatus,
      rules: mergedRules,
      initValue: deepClone(propVal.value),
      validate: validateField,
      resetValidate,
      resetField,
    });
    formContext.addField?.(formItemInfo.value!);
  }
});
onBeforeMount(() => {
  formContext.removeField?.(props.field!);
});

defineExpose(formItemInfo.value);

provide(
  formItemContextKey,
  reactive({
    size: mergedSize,
    layout,
    validateInstance: validateStatus,
    disabled: computedDisabled.value,
    validate: validateField,
  })
);
</script>
