<template>
  <form :class="[bem.b(), bem.m(layout), bem.m(size)]" @submit.prevent="handleSubmit">
    <slot />
  </form>
</template>
<script lang="ts" setup>
import { provide, reactive, toRef, toRefs } from "vue";
import { createNamespace, isFunction } from "@teal/utils";
import {
  formContextKey,
  FormItemInstance,
  FormProps,
  ValidateStatusMap,
  FormValidateFailure,
  ValidateFieldsError,
} from "./form";

defineOptions({ name: "tl-form" });

const bem = createNamespace("form");
const validateMap: Record<string, FormItemInstance> = {};
const props = withDefaults(defineProps<FormProps>(), {
  labelWidth: 116,
  disabled: false,
  size: "m",
  layout: "horizontal",
});
const { model, disabled, rules, labelWidth, size, layout } = toRefs(props);

const validate = async (
  callback?: (errors: undefined | Record<string, any>) => void
): Promise<any> => {
  const validateList: Promise<any>[] = [];
  let validationErrors: ValidateFieldsError = {};
  let hasError = false;
  Object.keys(validateMap).forEach((field) => {
    validateList.push(validateMap[field].validate());
  });
  return Promise.all(validateList).then((result) => {
    result.forEach((item) => {
      if (item) {
        const error = item as FormValidateFailure;
        hasError = true;
        validationErrors = {
          ...validationErrors,
          ...error.fields,
        };
      }
    });

    if (isFunction(callback)) {
      callback();
    }

    if (Object.keys(validationErrors).length == 0) return true;

    return validationErrors;
  });
};

const addField = (formItemInstance: FormItemInstance) => {
  const _field = formItemInstance.field!;
  validateMap[_field] = formItemInstance;
};

const removeField = (field: string) => {
  delete validateMap[field];
};

const resetFields = () => {
  Object.keys(validateMap).forEach((field) => {
    validateMap[field].resetField();
  });
};

const handleSubmit = (e: Event) => {
  return;
};

provide(
  formContextKey,
  reactive({
    model,
    labelWidth,
    disabled,
    size,
    layout,
    rules,
    addField,
    removeField,
  })
);

defineExpose({
  validate,
  resetFields,
});
</script>
