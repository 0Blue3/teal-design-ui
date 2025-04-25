export interface TextareaAutoSize {
    minRows?: number;
    maxRows?: number;
}
export type TextareaProps = {
    id?: string;
    modelValue?: string;
    placeholder?: string;
    clearable?: boolean;
    disabled?: boolean;
    showWordLimit?: boolean;
    maxLength?: number;
    autoSize?: TextareaAutoSize;
};
export interface TextareaEmits {
    (e: "update:modelValue", val: string): void;
    (e: "input", val: string): void;
    (e: "change", val: string): void;
    (e: "clear", val: string): void;
    (e: "focus", event: FocusEvent): void;
    (e: "blur", event: FocusEvent): void;
}
