import { defineComponent as y, ref as p, computed as x, onMounted as S, provide as g, createElementBlock as z, openBlock as h, normalizeClass as i, unref as m, renderSlot as _, createElementVNode as c, normalizeStyle as b, toDisplayString as G } from "vue";
import { createNamespace as k } from "../../../utils/create.js";
import { AvatarGroupContextKey as A } from "./avatar.js";
import { getAvatarStyle as C, getSize as F } from "./utils.js";
const I = /* @__PURE__ */ y({
  name: "tl-avatar-group",
  __name: "avatar-group",
  props: {
    max: { default: 3 },
    size: { default: "m" },
    shape: { default: "circle" }
  },
  setup(u) {
    const o = k("avatarGroup"), e = u, l = p(), { size: d, shape: f } = e, a = p(0), s = x(() => C(e.size, e.shape));
    return S(() => {
      let t = l.value;
      Array.from(t.children).map((n, v) => {
        const r = n;
        r.style.border = "2px solid #FFF", r.style.marginRight = -F(e.size) / 3 + "px", v >= e.max && (a.value++, r.style.display = "none");
      });
    }), g(A, {
      size: d,
      shape: f,
      style: s
    }), (t, n) => (h(), z("div", {
      ref_key: "$avatarGroup",
      ref: l,
      class: i(m(o).b())
    }, [
      _(t.$slots, "default"),
      c("div", {
        class: i(m(o).e("more")),
        style: b([
          s.value,
          {
            display: a.value > 1 ? "flex" : "none"
          }
        ])
      }, [
        c("span", null, "+" + G(a.value - 1), 1)
      ], 6)
    ], 2));
  }
});
export {
  I as default
};
