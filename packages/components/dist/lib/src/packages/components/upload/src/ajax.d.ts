import { RequestOptions } from './upload';
export declare const UploadRequest: ({ uid, uploadUrl, selectedFile, onSuccess, onError, onProgress, }: RequestOptions) => {
    abort(): void;
};
