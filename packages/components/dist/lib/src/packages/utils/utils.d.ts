export declare const popupManager: {
    nextIndex(): number;
};
export declare function debounce<T extends (...args: any[]) => void>(func: T, delay: number, immediate?: boolean): {
    execute: T;
    cancel: () => void;
};
export declare const toPx: (px?: string | number) => string | undefined;
export declare const toBoolean: (v: number | string | boolean) => boolean;
export declare const getSize: (size: number | string) => number;
export declare const getShape: (shape: number | string) => number;
export declare function deepClone(target: unknown, caches?: WeakMap<WeakKey, any>): any;
export declare function parsePath(path: string): (string | number)[];
export declare function generateUid(): number;
export declare function setObjByPath(obj: object, path: string | string[], value?: undefined): object;
export declare function getObjByPath(obj: Record<string, any>, path: string | string[], value?: undefined): any;
export declare function getObjVal(obj: object, path: string | string[], defaultVal?: any): {
    value: any;
};
