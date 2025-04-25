import { ImagePreviewProps } from './preview';
declare const _default: import('vue').DefineComponent<ImagePreviewProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    onPrev: () => any;
    onNext: () => any;
    "update:visible": (value: boolean) => any;
}, string, import('vue').PublicProps, Readonly<ImagePreviewProps> & Readonly<{
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
}, any>;
export default _default;
