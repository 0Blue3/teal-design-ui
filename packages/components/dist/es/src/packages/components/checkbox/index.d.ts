import { default as _TlCheckbox } from './src/checkbox.vue';
import { default as _TlCheckboxGroup } from './src/checkbox-group.vue';
declare const TlCheckbox: import('@teal/utils').SFCWithInstall<{
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./src/checkbox').CheckboxProps> & Readonly<{
        onChange?: ((args_0: boolean) => any) | undefined;
        "onUpdate:checked"?: ((args_0: boolean) => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        change: (args_0: boolean) => any;
        "update:checked": (args_0: boolean) => any;
    }, import('vue').PublicProps, {
        disabled: boolean;
        size: import('@teal/utils').Size;
        checked: boolean;
        defaultChecked: boolean;
    }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {
        checkboxRef: HTMLInputElement;
    }, HTMLLabelElement, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('./src/checkbox').CheckboxProps> & Readonly<{
        onChange?: ((args_0: boolean) => any) | undefined;
        "onUpdate:checked"?: ((args_0: boolean) => any) | undefined;
    }>, {}, {}, {}, {}, {
        disabled: boolean;
        size: import('@teal/utils').Size;
        checked: boolean;
        defaultChecked: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('./src/checkbox').CheckboxProps> & Readonly<{
    onChange?: ((args_0: boolean) => any) | undefined;
    "onUpdate:checked"?: ((args_0: boolean) => any) | undefined;
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    change: (args_0: boolean) => any;
    "update:checked": (args_0: boolean) => any;
}, string, {
    disabled: boolean;
    size: import('@teal/utils').Size;
    checked: boolean;
    defaultChecked: boolean;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
    };
})> & Record<string, any>;
export default TlCheckbox;
export declare const TlCheckboxGroup: import('@teal/utils').SFCWithInstall<{
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./src/checkbox').CheckboxGroupProps> & Readonly<{
        onChange?: ((args_0: import('./src/checkbox').CheckboxGroupValue[]) => any) | undefined;
        "onUpdate:modelValue"?: ((args_0: import('./src/checkbox').CheckboxGroupValue[]) => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        change: (args_0: import('./src/checkbox').CheckboxGroupValue[]) => any;
        "update:modelValue": (args_0: import('./src/checkbox').CheckboxGroupValue[]) => any;
    }, import('vue').PublicProps, {
        disabled: boolean;
        size: import('@teal/utils').Size;
        tag: string;
        direction: "horizontal" | "vertical";
        defaultValue: Array<import('./src/checkbox').CheckboxGroupValue>;
        options: Array<import('./src/checkbox').CheckboxOption | import('./src/checkbox').CheckboxGroupValue>;
    }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('./src/checkbox').CheckboxGroupProps> & Readonly<{
        onChange?: ((args_0: import('./src/checkbox').CheckboxGroupValue[]) => any) | undefined;
        "onUpdate:modelValue"?: ((args_0: import('./src/checkbox').CheckboxGroupValue[]) => any) | undefined;
    }>, {}, {}, {}, {}, {
        disabled: boolean;
        size: import('@teal/utils').Size;
        tag: string;
        direction: "horizontal" | "vertical";
        defaultValue: Array<import('./src/checkbox').CheckboxGroupValue>;
        options: Array<import('./src/checkbox').CheckboxOption | import('./src/checkbox').CheckboxGroupValue>;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('./src/checkbox').CheckboxGroupProps> & Readonly<{
    onChange?: ((args_0: import('./src/checkbox').CheckboxGroupValue[]) => any) | undefined;
    "onUpdate:modelValue"?: ((args_0: import('./src/checkbox').CheckboxGroupValue[]) => any) | undefined;
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    change: (args_0: import('./src/checkbox').CheckboxGroupValue[]) => any;
    "update:modelValue": (args_0: import('./src/checkbox').CheckboxGroupValue[]) => any;
}, string, {
    disabled: boolean;
    size: import('@teal/utils').Size;
    tag: string;
    direction: "horizontal" | "vertical";
    defaultValue: Array<import('./src/checkbox').CheckboxGroupValue>;
    options: Array<import('./src/checkbox').CheckboxOption | import('./src/checkbox').CheckboxGroupValue>;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: {
        label?(_: {
            data: import('./src/checkbox').CheckboxOption;
        }): any;
        default?(_: {}): any;
    };
})> & Record<string, any>;
export * from './src/checkbox';
declare module "@vue/runtime-core" {
    interface GlobalComponents {
        TlCheckbox: typeof _TlCheckbox;
        TlCheckboxGroup: typeof _TlCheckboxGroup;
    }
}
