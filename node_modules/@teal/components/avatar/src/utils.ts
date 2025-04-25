//头像大小
export const getSize = (size: number | string): number => {
  if (typeof size === "number") {
    return size;
  }
  switch (size) {
    case "s":
      return 20;
    case "m":
      return 40;
    case "l":
      return 60;
    default:
      return 40;
  }
};
export const getAvatarStyle = (
  size: number | string,
  shape: number | string
) => {
  let width, height, borderRadius;
  width = height = getSize(size);
  if (typeof shape === "number") {
    borderRadius = shape;
  } else if (shape === "circle") {
    borderRadius = width * 5;
  } else if (shape === "square") {
    borderRadius = width / 10 + 2;
  }
  return {
    width: width + "px",
    height: height + "px",
    borderRadius: borderRadius + "px",
  };
};
