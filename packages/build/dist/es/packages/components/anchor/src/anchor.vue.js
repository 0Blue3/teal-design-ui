import { defineComponent as r, createElementBlock as n, openBlock as t, normalizeClass as a, unref as c, renderSlot as s } from "vue";
import { createNamespace as m } from "../../../utils/create.js";
const i = /* @__PURE__ */ r({
  __name: "anchor",
  setup(l) {
    const e = m("anchor");
    return (o, p) => (t(), n("div", {
      class: a(c(e).b())
    }, [
      s(o.$slots, "default")
    ], 2));
  }
});
export {
  i as default
};
