export declare const TYPES: readonly ["primary", "secondary", "outline"];
export type Type = (typeof TYPES)[number];
export declare const SIZES: readonly ["s", "m", "l"];
export type Size = (typeof SIZES)[number];
export declare enum SIZES_MAP {
    s = "s",
    m = "m",
    l = "l"
}
export declare const SHAPES: readonly ["default", "round", "circle", "square"];
export type Shape = (typeof SHAPES)[number];
export declare const STATUS: readonly ["success", "warning", "danger", "primary"];
export type Status = (typeof STATUS)[number];
export declare enum STATUS_MAP {
    success = "success",
    warning = "warning",
    danger = "danger",
    primary = "primary"
}
export declare const LAYOUT: readonly ["horizontal", "vertical", "inline"];
export type Layout = (typeof LAYOUT)[number];
export declare const DIRECTION: readonly ["vertical", "horizontal"];
export type Direction = (typeof DIRECTION)[number];
