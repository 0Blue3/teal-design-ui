declare const TlDivider: import('@teal/utils').SFCWithInstall<{
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./src/divider').DividerProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {
        color: string;
        width: number | string;
        height: number | string;
        direction: string;
        borderStyle: string;
        id: string;
        contentPosition: string;
    }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLDivElement, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('./src/divider').DividerProps> & Readonly<{}>, {}, {}, {}, {}, {
        color: string;
        width: number | string;
        height: number | string;
        direction: string;
        borderStyle: string;
        id: string;
        contentPosition: string;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('./src/divider').DividerProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
    color: string;
    width: number | string;
    height: number | string;
    direction: string;
    borderStyle: string;
    id: string;
    contentPosition: string;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
    };
})> & Record<string, any>;
export default TlDivider;
export * from './src/divider';
declare module "@vue/runtime-core" {
    interface GlobalComponents {
        TlDivider: typeof TlDivider;
    }
}
