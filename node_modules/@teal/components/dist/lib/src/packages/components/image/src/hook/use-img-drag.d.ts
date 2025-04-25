interface ImageDragProps {
    imageEl: HTMLElement;
    scale: number;
}
declare const useImageDrag: (props: ImageDragProps) => {
    translate: import('vue').Ref<number[], number[]>;
    resetTranslate: () => void;
};
export default useImageDrag;
