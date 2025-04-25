declare const TlImage: import('@teal/utils').SFCWithInstall<{
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./src/image').ImageProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {
        footerPosition: "inner" | "outer";
        isLazy: boolean;
        preview: boolean;
    }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLDivElement, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('./src/image').ImageProps> & Readonly<{}>, {}, {}, {}, {}, {
        footerPosition: "inner" | "outer";
        isLazy: boolean;
        preview: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('./src/image').ImageProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
    footerPosition: "inner" | "outer";
    isLazy: boolean;
    preview: boolean;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: {
        error?(_: {}): any;
        'error-icon'?(_: {}): any;
        loading?(_: {}): any;
        extra?(_: {}): any;
    };
})> & Record<string, any>;
export default TlImage;
export declare const TlImagePreview: import('@teal/utils').SFCWithInstall<import('vue').DefineComponent<import('./src/preview').ImagePreviewProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    onPrev: () => any;
    onNext: () => any;
    "update:visible": (value: boolean) => any;
}, string, import('vue').PublicProps, Readonly<import('./src/preview').ImagePreviewProps> & Readonly<{
    onOnPrev?: (() => any) | undefined;
    onOnNext?: (() => any) | undefined;
    "onUpdate:visible"?: ((value: boolean) => any) | undefined;
}>, {
    closable: boolean;
    maskClosable: boolean;
    previewGroup: boolean;
    unmountOnClose: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    wrapperRef: HTMLDivElement;
    imageRef: HTMLImageElement;
}, any>> & Record<string, any>;
export declare const TlImagePreviewGroup: import('@teal/utils').SFCWithInstall<import('vue').DefineComponent<import('./src/preview').ImagePreviewGroupProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    "update:current": (value: number) => any;
    "update:visible": (value: boolean) => any;
}, string, import('vue').PublicProps, Readonly<import('./src/preview').ImagePreviewGroupProps> & Readonly<{
    "onUpdate:current"?: ((value: number) => any) | undefined;
    "onUpdate:visible"?: ((value: boolean) => any) | undefined;
}>, {
    current: number;
    defaultCurrent: number;
    closable: boolean;
    maskClosable: boolean;
    isRender: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>> & Record<string, any>;
export * from './src/image';
declare module "@vue/runtime-core" {
    interface GlobalComponents {
        TlImage: typeof TlImage;
        TlImagePreview: typeof TlImagePreview;
        TlImagePreviewGroup: typeof TlImagePreviewGroup;
    }
}
