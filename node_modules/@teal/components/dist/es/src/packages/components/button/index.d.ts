declare const TlButton: import('@teal/utils').SFCWithInstall<{
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./src/button').ButtonProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {
        disabled: boolean;
        size: import('@teal/utils').Size;
        type: import('@teal/utils').Type;
        shape: import('@teal/utils').Shape;
        icon: string;
        loading: boolean;
        long: boolean;
    }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLButtonElement, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('./src/button').ButtonProps> & Readonly<{}>, {}, {}, {}, {}, {
        disabled: boolean;
        size: import('@teal/utils').Size;
        type: import('@teal/utils').Type;
        shape: import('@teal/utils').Shape;
        icon: string;
        loading: boolean;
        long: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('./src/button').ButtonProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
    disabled: boolean;
    size: import('@teal/utils').Size;
    type: import('@teal/utils').Type;
    shape: import('@teal/utils').Shape;
    icon: string;
    loading: boolean;
    long: boolean;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
    };
})> & Record<string, any>;
export default TlButton;
export * from './src/button';
declare module "@vue/runtime-core" {
    interface GlobalComponents {
        TlButton: typeof TlButton;
    }
}
