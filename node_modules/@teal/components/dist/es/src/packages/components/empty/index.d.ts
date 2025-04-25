declare const TlEmpty: import('@teal/utils').SFCWithInstall<{
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./src/empty').EmptyProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {
        type: "primary" | "secondary";
        description: string;
        imageStyle: import('vue').CSSProperties;
    }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLDivElement, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('./src/empty').EmptyProps> & Readonly<{}>, {}, {}, {}, {}, {
        type: "primary" | "secondary";
        description: string;
        imageStyle: import('vue').CSSProperties;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('./src/empty').EmptyProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
    type: "primary" | "secondary";
    description: string;
    imageStyle: import('vue').CSSProperties;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: {
        image?(_: {}): any;
        description?(_: {}): any;
        default?(_: {}): any;
    };
})> & Record<string, any>;
export default TlEmpty;
export * from './src/empty';
declare module "@vue/runtime-core" {
    interface GlobalComponents {
        TlEmpty: typeof TlEmpty;
    }
}
