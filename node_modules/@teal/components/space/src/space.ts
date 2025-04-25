import { SIZES } from "@teal/utils";

// SpaceSize
export const SPACE_SIZE = [...SIZES, "ss", "xl"] as const;
export type SpaceSize = (typeof SPACE_SIZE)[number];

// Align
const _align = ["start", "end", "center"] as const;
export const ALIGN = [..._align, "baseline"] as const;
export type SpaceAlign = (typeof ALIGN)[number];

// Justify
export const JUSTIFY = [..._align, "evenly", "around", "between"] as const;
export type SpaceJustify = (typeof JUSTIFY)[number];

// dir
export const DIRECTION = [
  "vertical",
  "horizontal",
  "reverseVertical",
  "reverseHorizontal",
] as const;
export type SpaceDirection = (typeof DIRECTION)[number];

// Overflow
export const OVERFLOW = [
  "visible",
  "hidden",
  "clip",
  "scroll",
  "auto",
] as const;
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
