import { ExtractPropTypes, PropType, Ref } from 'vue';
type TitleLevel = 1 | 2 | 3 | 4 | 5 | 6;
type TitleType = "secondary" | "primary" | "success" | "warning" | "danger";
export declare const titleProps: {
    level: {
        type: PropType<TitleLevel>;
        validator: (val: number) => boolean;
        default: number;
    };
    type: PropType<TitleType>;
};
export type titleProps = Partial<ExtractPropTypes<typeof titleProps>>;
type TextType = "secondary" | "third" | "primary" | "success" | "warning" | "danger" | "disabled";
export declare const textProps: {
    type: {
        type: PropType<TextType>;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    mark: {
        type: BooleanConstructor;
        default: boolean;
    };
    strong: {
        type: BooleanConstructor;
        default: boolean;
    };
    underline: {
        type: BooleanConstructor;
        default: boolean;
    };
    del: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export type TextProps = Partial<ExtractPropTypes<typeof textProps>>;
export declare const paragraphProps: {
    rows: {
        type: NumberConstructor;
        validator: (val: number) => boolean;
        default: number;
    };
    copyable: {
        type: BooleanConstructor;
        default: boolean;
    };
    moreable: {
        type: BooleanConstructor;
        default: boolean;
    };
    open: {
        type: BooleanConstructor;
        default: boolean;
    };
    openText: {
        type: StringConstructor;
        default: string;
    };
    closeText: {
        type: StringConstructor;
        default: string;
    };
};
export type ParagraphProps = Partial<ExtractPropTypes<typeof paragraphProps>>;
export declare const paragraphEmits: {
    "update:open": (open: boolean) => boolean;
    changeOpen: (open: boolean) => boolean;
    copyBefore: (value: Ref<string>) => Ref<string, string>;
};
export type ParagraphEmits = Partial<ExtractPropTypes<typeof paragraphEmits>>;
export {};
