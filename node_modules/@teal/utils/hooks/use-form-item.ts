import { computed, inject, Ref, ComputedRef } from "vue";
import {
  FormItemContext,
  formItemContextKey,
} from "@teal/components/form/src/form";
export const useFormItem = ({
  disabled,
  status,
  message,
  size,
}: {
  disabled?: Ref<boolean>;
  status?: Ref<string>;
  message?: Ref<string>;
  size?: Ref<any>;
} = {}): {
  formItemCtx: FormItemContext;
  mergedDisabled: ComputedRef<FormItemContext["disabled"]>;
  mergedMessage: ComputedRef<FormItemContext["validateInstance"]["message"]>;
  isError: ComputedRef<FormItemContext["validateInstance"]["isError"]>;
  mergedStatus: ComputedRef<FormItemContext["validateInstance"]>;
  mergedSize: ComputedRef<FormItemContext["size"]>;
  layout: ComputedRef<FormItemContext["layout"]>;
  validate: FormItemContext["validate"];
} => {
  const formItemCtx = inject(formItemContextKey, {} as FormItemContext);

  const validateInstance = computed(() => formItemCtx.validateInstance);

  const mergedDisabled = computed(
    () => disabled?.value || formItemCtx.disabled
  );

  const layout = computed(() => formItemCtx.layout);

  const mergedSize = computed(() => formItemCtx?.size || size?.value);

  const isError = computed(() => {
    return validateInstance.value?.isError ?? false;
  });

  const mergedMessage = computed(
    () => validateInstance.value?.message ?? message?.value
  );

  const mergedStatus = computed(
    () => validateInstance.value?.status ?? status?.value
  );

  const validate = (event?: string) => {
    if (formItemCtx?.validate) {
      formItemCtx.validate(event);
    }
  };

  return {
    formItemCtx,
    mergedDisabled,
    mergedMessage,
    isError,
    mergedStatus,
    mergedSize,
    layout,
    validate,
  };
};
