declare const TlScrollbar: import('@teal/utils').SFCWithInstall<{
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./src/scrollbar').ScrollbarProps> & Readonly<{
        onScroll?: ((e: Event) => any) | undefined;
    }>, {
        scrollBy: (options?: ScrollToOptions | undefined) => void;
        scrollTo: (options?: ScrollToOptions | undefined) => void;
    }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        scroll: (e: Event) => any;
    }, import('vue').PublicProps, {
        always: boolean;
        noresize: boolean;
    }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {
        $scrollbar: HTMLDivElement;
        $wrap: HTMLDivElement;
        $content: HTMLDivElement;
    }, HTMLDivElement, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('./src/scrollbar').ScrollbarProps> & Readonly<{
        onScroll?: ((e: Event) => any) | undefined;
    }>, {
        scrollBy: (options?: ScrollToOptions | undefined) => void;
        scrollTo: (options?: ScrollToOptions | undefined) => void;
    }, {}, {}, {}, {
        always: boolean;
        noresize: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('./src/scrollbar').ScrollbarProps> & Readonly<{
    onScroll?: ((e: Event) => any) | undefined;
}>, {
    scrollBy: (options?: ScrollToOptions | undefined) => void;
    scrollTo: (options?: ScrollToOptions | undefined) => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    scroll: (e: Event) => any;
}, string, {
    always: boolean;
    noresize: boolean;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
    };
})> & Record<string, any>;
export default TlScrollbar;
export * from './src/scrollbar';
declare module "@vue/runtime-core" {
    interface GlobalComponents {
        TlScrollbar: typeof TlScrollbar;
    }
}
