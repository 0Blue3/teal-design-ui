import { default as _Virtual } from './src/virtual.vue';
declare const Virtual: import('@teal/utils').SFCWithInstall<{
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./src/virtual').VirtualProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {
        size: number;
        remain: number;
        items: Array<any>;
    }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {
        wrapperRef: HTMLDivElement;
        barRef: HTMLDivElement;
        listRef: HTMLDivElement;
    }, HTMLDivElement, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('./src/virtual').VirtualProps> & Readonly<{}>, {}, {}, {}, {}, {
        size: number;
        remain: number;
        items: Array<any>;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('./src/virtual').VirtualProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
    size: number;
    remain: number;
    items: Array<any>;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {
            data: any[];
        }): any;
    };
})> & Record<string, any>;
export default Virtual;
export * from './src/virtual';
declare module "@vue/runtime-core" {
    interface GlobalComponents {
        TlVirtualList: typeof _Virtual;
    }
}
