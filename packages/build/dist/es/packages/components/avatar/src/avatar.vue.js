import { defineComponent as f, inject as d, computed as v, createElementBlock as s, openBlock as o, normalizeStyle as g, normalizeClass as m, unref as i, renderSlot as h, createElementVNode as y } from "vue";
import { createNamespace as z } from "../../../utils/create.js";
import { AvatarGroupContextKey as _ } from "./avatar.js";
import { getAvatarStyle as c } from "./utils.js";
const k = ["src"], C = ["src"], B = /* @__PURE__ */ f({
  name: "tl-avatar",
  __name: "avatar",
  props: {
    imgUrl: { default: "" },
    size: { default: "m" },
    shape: { default: "circle" }
  },
  setup(p) {
    const l = z("avatar"), t = p, n = d(_, null), u = v(() => {
      if (n) {
        const { size: e, shape: a, style: r } = n;
        return e && a ? r == null ? void 0 : r.value : c(e || t.size, a || t.shape);
      } else
        return c(t.size, t.shape);
    });
    return (e, a) => (o(), s("div", {
      class: m([i(l).b()]),
      style: g(u.value)
    }, [
      e.imgUrl ? (o(), s("img", {
        key: 0,
        src: e.imgUrl
      }, null, 8, k)) : (o(), s("span", {
        key: 1,
        class: m(i(l).e("text"))
      }, [
        h(e.$slots, "default", {}, () => [
          y("img", { src: e.imgUrl }, null, 8, C)
        ])
      ], 2))
    ], 6));
  }
});
export {
  B as default
};
