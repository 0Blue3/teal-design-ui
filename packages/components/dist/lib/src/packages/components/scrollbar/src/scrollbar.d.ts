import { InjectionKey } from 'vue';
export type ScrollbarProps = {
    height?: number | string;
    native?: boolean;
    always?: boolean;
    noresize?: boolean;
};
type ScrollbarContext = {
    scrollbarEl?: HTMLDivElement;
    wrapEl?: HTMLDivElement;
};
export declare const scrollbarContextKey: InjectionKey<ScrollbarContext>;
export {};
