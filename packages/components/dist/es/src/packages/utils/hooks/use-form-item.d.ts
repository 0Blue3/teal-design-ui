import { Ref, ComputedRef } from 'vue';
import { FormItemContext } from '@teal/components/form/src/form';
export declare const useFormItem: ({ disabled, status, message, size, }?: {
    disabled?: Ref<boolean>;
    status?: Ref<string>;
    message?: Ref<string>;
    size?: Ref<any>;
}) => {
    formItemCtx: FormItemContext;
    mergedDisabled: ComputedRef<FormItemContext["disabled"]>;
    mergedMessage: ComputedRef<FormItemContext["validateInstance"]["message"]>;
    isError: ComputedRef<FormItemContext["validateInstance"]["isError"]>;
    mergedStatus: ComputedRef<FormItemContext["validateInstance"]>;
    mergedSize: ComputedRef<FormItemContext["size"]>;
    layout: ComputedRef<FormItemContext["layout"]>;
    validate: FormItemContext["validate"];
};
