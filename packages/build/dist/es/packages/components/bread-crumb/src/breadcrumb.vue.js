import { defineComponent as a, useSlots as s, provide as m, createElementBlock as c, openBlock as n, normalizeClass as p, unref as l, renderSlot as u, createCommentVNode as d } from "vue";
import { createNamespace as b } from "../../../utils/create.js";
import { breadcrumbName as f } from "./breadcrumb.js";
const v = /* @__PURE__ */ a({
  name: "tl-breadcrumb",
  __name: "breadcrumb",
  props: {
    separator: { default: "/" },
    separatorIcon: {}
  },
  setup(e) {
    const r = b("breadcrumb"), o = s();
    return m(f, { props: e, slots: o }), (t, _) => (n(), c("div", {
      class: p(l(r).b()),
      ref: "breadCrumbRef"
    }, [
      u(t.$slots, "default"),
      d("", !0)
    ], 2));
  }
});
export {
  v as default
};
