import { UploadProps } from './upload';
declare const _default: import('vue').DefineComponent<UploadProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    handleSuccess: (...args: any[]) => void;
    handleDelete: (...args: any[]) => void;
    handleError: (...args: any[]) => void;
    handleBeforeUpload: (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<UploadProps> & Readonly<{
    onHandleSuccess?: ((...args: any[]) => any) | undefined;
    onHandleDelete?: ((...args: any[]) => any) | undefined;
    onHandleError?: ((...args: any[]) => any) | undefined;
    onHandleBeforeUpload?: ((...args: any[]) => any) | undefined;
}>, {
    uploadUrl: string;
    shape: import('./upload').Shape;
    avatar: boolean;
    desc: string;
    accept: string;
    maxSize: number;
    multiple: boolean;
    limit: number;
    fileList: Array<import('./upload').UserFile>;
    draggable: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    inputRef: HTMLInputElement;
}, any>;
export default _default;
