import { FileItemProps } from './upload';
declare const _default: import('vue').DefineComponent<FileItemProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    handleAbort: (...args: any[]) => void;
    handleRemove: (...args: any[]) => void;
    handleReUpload: (...args: any[]) => void;
    handleEdit: (...args: any[]) => void;
    handleReview: (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<FileItemProps> & Readonly<{
    onHandleAbort?: ((...args: any[]) => any) | undefined;
    onHandleRemove?: ((...args: any[]) => any) | undefined;
    onHandleReUpload?: ((...args: any[]) => any) | undefined;
    onHandleEdit?: ((...args: any[]) => any) | undefined;
    onHandleReview?: ((...args: any[]) => any) | undefined;
}>, {
    progress: number;
    fileContent: import('./upload').UploadFile;
    shape: import('./upload').Shape;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    cropRef: unknown;
}, HTMLDivElement>;
export default _default;
