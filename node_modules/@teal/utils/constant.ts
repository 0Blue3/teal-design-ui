// Type
export const TYPES = ["primary", "secondary", "outline"] as const;
export type Type = (typeof TYPES)[number];
// Size
export const SIZES = ["s", "m", "l"] as const;
export type Size = (typeof SIZES)[number];
export enum SIZES_MAP {
  s = "s",
  m = "m",
  l = "l",
}
// Shape
export const SHAPES = ["default", "round", "circle", "square"] as const;
export type Shape = (typeof SHAPES)[number];

// Status
export const STATUS = ["success", "warning", "danger", "primary"] as const;
export type Status = (typeof STATUS)[number];
export enum STATUS_MAP {
  success = "success",
  warning = "warning",
  danger = "danger",
  primary = "primary",
}

// Layout
export const LAYOUT = ["horizontal", "vertical", "inline"] as const;
export type Layout = (typeof LAYOUT)[number];

// Direction
export const DIRECTION = ["vertical", "horizontal"] as const;
export type Direction = (typeof DIRECTION)[number];
