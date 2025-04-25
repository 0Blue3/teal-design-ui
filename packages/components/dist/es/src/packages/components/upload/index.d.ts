declare const Upload: import('@teal/utils').SFCWithInstall<import('vue').DefineComponent<import('./src/upload').UploadProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    handleSuccess: (...args: any[]) => void;
    handleDelete: (...args: any[]) => void;
    handleError: (...args: any[]) => void;
    handleBeforeUpload: (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<import('./src/upload').UploadProps> & Readonly<{
    onHandleSuccess?: ((...args: any[]) => any) | undefined;
    onHandleDelete?: ((...args: any[]) => any) | undefined;
    onHandleError?: ((...args: any[]) => any) | undefined;
    onHandleBeforeUpload?: ((...args: any[]) => any) | undefined;
}>, {
    uploadUrl: string;
    shape: import('./src/upload').Shape;
    avatar: boolean;
    desc: string;
    accept: string;
    maxSize: number;
    multiple: boolean;
    limit: number;
    fileList: Array<import('./src/upload').UserFile>;
    draggable: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    inputRef: HTMLInputElement;
}, any>> & Record<string, any>;
export default Upload;
export * from './src/upload';
declare module "@vue/runtime-core" {
    interface GlobalComponents {
        TlUpload: typeof Upload;
    }
}
