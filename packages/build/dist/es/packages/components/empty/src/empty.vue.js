import { defineComponent as n, createElementBlock as s, openBlock as o, normalizeClass as a, unref as r, createElementVNode as i, normalizeStyle as p, renderSlot as m, createCommentVNode as l, toDisplayString as d } from "vue";
import c from "./null-primary.svg.js";
import y from "./null-secondary.svg.js";
import { createNamespace as u } from "../../../utils/create.js";
const g = ["src"], f = {
  key: 1,
  src: c,
  class: "primary"
}, _ = {
  key: 2,
  src: y,
  class: "secondary"
}, C = /* @__PURE__ */ n({
  name: "tl-empty",
  __name: "empty",
  props: {
    image: {},
    type: { default: "primary" },
    description: { default: "No Data" },
    imageStyle: { default: () => ({}) }
  },
  setup(k) {
    const t = u("empty");
    return (e, S) => (o(), s("div", {
      class: a(r(t).b())
    }, [
      i("div", {
        class: a([r(t).e("image"), r(t).m(e.type)]),
        style: p(e.imageStyle)
      }, [
        m(e.$slots, "image", {}, () => [
          e.image ? (o(), s("img", {
            key: 0,
            src: e.image,
            ondragstart: "return false"
          }, null, 8, g)) : l("", !0),
          !e.image && e.type == "primary" ? (o(), s("img", f)) : l("", !0),
          !e.image && e.type == "secondary" ? (o(), s("img", _)) : l("", !0)
        ])
      ], 6),
      i("div", {
        class: a(r(t).e("description"))
      }, [
        m(e.$slots, "description", {}, () => [
          i("p", null, d(e.description), 1)
        ])
      ], 2),
      i("div", {
        class: a(r(t).e("bottom"))
      }, [
        m(e.$slots, "default")
      ], 2)
    ], 2));
  }
});
export {
  C as default
};
