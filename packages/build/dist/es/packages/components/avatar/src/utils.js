const n = (e) => {
  if (typeof e == "number")
    return e;
  switch (e) {
    case "s":
      return 20;
    case "m":
      return 40;
    case "l":
      return 60;
    default:
      return 40;
  }
}, c = (e, r) => {
  let t, i, u;
  return t = i = n(e), typeof r == "number" ? u = r : r === "circle" ? u = t * 5 : r === "square" && (u = t / 10 + 2), {
    width: t + "px",
    height: i + "px",
    borderRadius: u + "px"
  };
};
export {
  c as getAvatarStyle,
  n as getSize
};
