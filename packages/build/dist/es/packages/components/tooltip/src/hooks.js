import { useSlots as l, defineComponent as s, h as o } from "vue";
function f() {
  const e = l();
  return s(
    (n, r) => () => {
      const t = e.default ? e.default() : [o("span", {}, "tooltip")];
      return t.length > 1 && console.error(
        new Error(
          "Component can only have one root element, but you have used multiple root elements"
        )
      ), t[0] = o(t[0], { ...n, ...r.attrs }), t;
    },
    { inheritAttrs: !1 }
  );
}
export {
  f as useDefaultSlots
};
