import { defineComponent as s, inject as i, createElementBlock as p, openBlock as u, normalizeClass as n, unref as e, createElementVNode as c, createVNode as d, isRef as f } from "vue";
import { createNamespace as _ } from "../../../utils/create.js";
import { PaginationContextKey as x } from "./pagination.js";
import V from "../../input-number/index.js";
const C = /* @__PURE__ */ s({
  __name: "jumper",
  setup(b) {
    const t = _("pagination-jumper"), { _current: o, lastPage: l, size: r } = i(x);
    return (z, a) => (u(), p("div", {
      class: n(e(t).b())
    }, [
      c("div", {
        class: n(e(t).e("label"))
      }, "前往", 2),
      d(e(V), {
        modelValue: e(o),
        "onUpdate:modelValue": a[0] || (a[0] = (m) => f(o) ? o.value = m : null),
        min: 1,
        max: e(l),
        controls: !1,
        size: e(r)
      }, null, 8, ["modelValue", "max", "size"])
    ], 2));
  }
});
export {
  C as default
};
