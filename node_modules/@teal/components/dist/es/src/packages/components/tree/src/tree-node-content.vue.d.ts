import { TreeNodeContentProps } from './tree';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {
            node: {
                [x: string]: unknown;
                level: number;
                rawNode: {
                    [x: string]: unknown;
                    label?: import('./tree').Key | undefined;
                    key?: import('./tree').Key | undefined;
                    children?: any[] | undefined;
                    isLeaf?: boolean | undefined;
                    disabled?: boolean | undefined;
                };
                children: any[];
                disabled: boolean;
                isLeaf: boolean;
                parentKey: import('./tree').Key | undefined;
                label: import('./tree').Key;
                key: import('./tree').Key;
            };
        }): any;
    };
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<TreeNodeContentProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<TreeNodeContentProps> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
