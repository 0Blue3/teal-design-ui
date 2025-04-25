import { CSSProperties } from "vue";
import { CheckboxGroupProps } from "./checkbox";

export const getMargin = (size: CheckboxGroupProps["gap"]) => {
  if (typeof size === "number") {
    return size;
  }
  switch (size) {
    case "s":
      return 4;
    case "m":
      return 8;
    case "l":
      return 16;
    default:
      return 8;
  }
};

//排列方式
export const flexDirection = (
  dir: CheckboxGroupProps["direction"]
): CSSProperties["flexDirection"] => {
  if (dir == "vertical") {
    return "column";
  } else {
    return "row";
  }
};
