import { defineComponent as l, inject as u, computed as o, createElementBlock as p, openBlock as f, normalizeClass as m, unref as n, createVNode as d } from "vue";
import { createNamespace as v } from "../../../utils/create.js";
import g from "../../icon/index.js";
import { PaginationContextKey as x } from "./pagination.js";
const k = /* @__PURE__ */ l({
  __name: "control",
  props: {
    icon: {},
    prevIcon: { default: "fa-angle-left " },
    nextIcon: { default: "fa-angle-right " }
  },
  setup(r) {
    const t = v("pagination-control"), { isFirstPage: a, isLastPage: c } = u(x), e = r, i = o(() => !!(e.icon === "prev" && a.value || e.icon === "next" && c.value)), s = o(() => e.icon === "prev" ? e.prevIcon : e.nextIcon);
    return (_, I) => (f(), p("div", {
      class: m([n(t).b(), n(t).is("disabled", i.value)])
    }, [
      d(n(g), { icon: s.value }, null, 8, ["icon"])
    ], 2));
  }
});
export {
  k as default
};
