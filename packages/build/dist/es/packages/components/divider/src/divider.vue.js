import { defineComponent as a, createElementBlock as l, openBlock as d, normalizeClass as r, unref as o, normalizeStyle as i, createElementVNode as n, renderSlot as s } from "vue";
import { createNamespace as c } from "../../../utils/create.js";
const h = /* @__PURE__ */ a({
  name: "tl-divider",
  __name: "divider",
  props: {
    id: { default: "" },
    contentPosition: { default: "left" },
    color: { default: "#00aaee" },
    width: { default: "1" },
    height: { default: "1" },
    borderStyle: { default: "solid" },
    direction: { default: "horizontal" }
  },
  setup(f) {
    const t = c("divider");
    return (e, m) => (d(), l("div", {
      class: r(o(t).b())
    }, [
      e.direction === "horizontal" ? (d(), l("div", {
        key: 0,
        class: r(o(t).e("horizontal")),
        style: i({
          borderWidth: `${e.width}px`,
          borderStyle: e.borderStyle
        })
      }, [
        n("div", {
          class: r([o(t).e("title"), o(t).m(e.contentPosition)])
        }, [
          s(e.$slots, "default")
        ], 2)
      ], 6)) : (d(), l("div", {
        key: 1,
        class: r(o(t).e("vertical")),
        style: i({
          borderWidth: `${e.width}px`,
          borderStyle: e.borderStyle
        })
      }, null, 6))
    ], 2));
  }
});
export {
  h as default
};
