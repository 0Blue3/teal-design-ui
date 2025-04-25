export declare const SPACE_SIZE: readonly ["s", "m", "l", "ss", "xl"];
export type SpaceSize = (typeof SPACE_SIZE)[number];
export declare const ALIGN: readonly ["start", "end", "center", "baseline"];
export type SpaceAlign = (typeof ALIGN)[number];
export declare const JUSTIFY: readonly ["start", "end", "center", "evenly", "around", "between"];
export type SpaceJustify = (typeof JUSTIFY)[number];
export declare const DIRECTION: readonly ["vertical", "horizontal", "reverseVertical", "reverseHorizontal"];
export type SpaceDirection = (typeof DIRECTION)[number];
export declare const OVERFLOW: readonly ["visible", "hidden", "clip", "scroll", "auto"];
export type SpaceOverflow = (typeof OVERFLOW)[number];
export type SpaceProps = {
    inline?: boolean;
    wrap?: boolean | "wrap-reverse";
    size?: SpaceSize | number | string | (number | string)[];
    align?: SpaceAlign;
    justify?: SpaceJustify;
    dir?: SpaceDirection;
    overflow?: SpaceOverflow;
};
