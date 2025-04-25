const n = (t) => Number(t.replace("px", "")), p = (t) => {
  const e = n(t.getPropertyValue("padding-top")), r = n(t.getPropertyValue("padding-bottom")), o = n(t.getPropertyValue("border-width"));
  return { pt: e, pb: r, bw: o };
}, i = [
  "border-width",
  "box-sizing",
  "font-family",
  "font-weight",
  "font-size",
  "font-variant",
  "letter-spacing",
  "line-height",
  "padding-top",
  "padding-bottom",
  "padding-left",
  "padding-right",
  "text-indent",
  "text-rendering",
  "text-transform",
  "white-space",
  "overflow-wrap",
  "width"
], a = (t) => {
  const e = {};
  return i.forEach((r) => {
    e[r] = t.getPropertyValue(r);
  }), e;
};
export {
  p as getOutProp,
  a as getSizeStyles,
  n as splitUnit
};
