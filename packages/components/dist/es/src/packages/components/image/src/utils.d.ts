import { ObjectDirective } from 'vue';
export declare const formatePercentage: (scale: number) => string;
export declare const getPopupContainer: (popupContainer?: string | HTMLElement) => HTMLElement;
export declare const pick: <T extends Record<any, any>, K extends keyof T>(object: T, path: Array<K>) => Pick<T, K>;
export declare const normalizeImageSizeProp: (size?: string | number) => string | undefined;
export declare const vObserveVisibility: ObjectDirective;
