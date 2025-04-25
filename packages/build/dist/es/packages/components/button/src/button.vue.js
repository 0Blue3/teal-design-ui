import { defineComponent as i, createElementBlock as d, openBlock as n, normalizeClass as r, unref as o, createBlock as l, createCommentVNode as t, renderSlot as u } from "vue";
import { createNamespace as m } from "../../../utils/create.js";
import s from "../../icon/index.js";
const p = ["disabled"], B = /* @__PURE__ */ i({
  name: "tl-button",
  __name: "button",
  props: {
    type: { default: "primary" },
    status: {},
    size: { default: "m" },
    shape: { default: "default" },
    icon: { default: "" },
    disabled: { type: Boolean, default: !1 },
    loading: { type: Boolean, default: !1 },
    long: { type: Boolean, default: !1 }
  },
  setup(f) {
    const a = m("button");
    return (e, c) => (n(), d("button", {
      class: r([
        o(a).b(),
        o(a).m(e.type),
        o(a).m(e.status),
        o(a).m(e.size),
        o(a).m(e.shape),
        o(a).is("loading", e.loading),
        o(a).is("lang", e.long)
      ]),
      disabled: e.disabled || e.loading
    }, [
      e.loading ? (n(), l(o(s), {
        key: 0,
        icon: "spinner",
        spin: ""
      })) : t("", !0),
      e.icon ? (n(), l(o(s), {
        key: 1,
        icon: e.icon
      }, null, 8, ["icon"])) : t("", !0),
      u(e.$slots, "default")
    ], 10, p));
  }
});
export {
  B as default
};
