type ImageLoadStatusType = "beforeLoad" | "loading" | "error" | "loaded";
declare const useImageLoadStatus: (defaultValue?: ImageLoadStatusType) => {
    status: import('vue').Ref<ImageLoadStatusType, ImageLoadStatusType>;
    isBeforeLoad: import('vue').ComputedRef<boolean>;
    isLoading: import('vue').ComputedRef<boolean>;
    isError: import('vue').ComputedRef<boolean>;
    isLoaded: import('vue').ComputedRef<boolean>;
    setLoadStatus: (newStatus: ImageLoadStatusType) => void;
};
export default useImageLoadStatus;
