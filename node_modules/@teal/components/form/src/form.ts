import { InjectionKey } from "vue";
import { Size, Layout } from "@teal/utils";
import type {
  RuleItem,
  ValidateError,
  ValidateFieldsError,
} from "async-validator";
export type { ValidateFieldsError } from "async-validator";
export type { RuleType } from "async-validator";

type Arrayable<T> = T | T[];
export interface FormItemRule extends RuleItem {
  trigger?: Arrayable<string>;
}
export type FormRules = Record<string, FormItemRule[]>;

export type Field = string;

export type ValidateStatus = "success" | "error" | "primary";

export type FormProps = {
  model?: any;
  id?: string;
  rules?: FormRules;
  labelWidth?: number;
  layout?: Layout;
  size?: Size;
  disabled?: boolean;
};

export type FormItemProps = {
  field?: string;
  labelWidth?: number;
  label?: string;
  required?: boolean;
  rules?: FormItemRule[];
  disabled?: boolean;
};

export interface FormContext {
  model: any;
  labelWidth: number;
  layout: Layout;
  size: Size;
  disabled: boolean;
  rules: FormRules | undefined;
  addField: (formItemInstance: FormItemInstance) => void;
  removeField: (field: Field) => void;
}

export const formContextKey: InjectionKey<FormContext> =
  Symbol("formContextKey");

export interface FormItemContext {
  validateInstance: any;
  size: Size;
  disabled: boolean | undefined;
  layout: Layout;
  validate: (trigger?: string) => void;
}

export const formItemContextKey: InjectionKey<FormItemContext> =
  Symbol("formItemContextKey");

export interface FormItemStatus {
  status: ValidateStatus;
  loading: boolean;
  isError: boolean;
  message: string;
}

export interface FormItemInstance {
  field?: string;
  disabled: boolean | undefined;
  validateInstance: FormItemStatus;
  rules?: FormItemRule[];
  initValue: any;
  validate: (trigger?: string) => Promise<any>;
  resetValidate: () => void;
  resetField: () => void;
}

export type ValidateStatusMap = {
  [key: string]: FormItemInstance;
};

export interface FormValidateFailure {
  errors: ValidateError[] | null;
  fields: ValidateFieldsError;
}
