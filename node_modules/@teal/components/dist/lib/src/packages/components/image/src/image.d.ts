export type FitType = "contain" | "cover" | "fill" | "none" | "scale-down";
export type ImageProps = {
    src?: string;
    width?: string | number;
    height?: string | number;
    title?: string;
    alt?: string;
    description?: string;
    footerPosition?: "inner" | "outer";
    isLazy?: boolean;
    fit?: FitType;
    preview?: boolean;
    popupContainer?: string | HTMLElement;
    onCancel?: () => void;
};
export type DirectiveHTMLDivElement = HTMLDivElement & {
    _observer?: IntersectionObserver;
};
