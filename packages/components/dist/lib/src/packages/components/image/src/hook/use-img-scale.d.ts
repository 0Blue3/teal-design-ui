type ZoomType = "zoomIn" | "zoomOut";
interface ImageScaleProps {
    wrapperEl: HTMLElement;
}
declare const useImageScale: (props: ImageScaleProps) => {
    scale: import('vue').Ref<number, number>;
    adjustZoom: (type?: ZoomType, inc?: number) => void;
    resetScale: () => void;
};
export default useImageScale;
