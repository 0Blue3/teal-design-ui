import { ExtractPropTypes } from 'vue';
export declare const linkProps: {
    newtab: {
        type: BooleanConstructor;
        default: boolean;
    };
    href: {
        type: StringConstructor;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export type LinkProps = Partial<ExtractPropTypes<typeof linkProps>>;
