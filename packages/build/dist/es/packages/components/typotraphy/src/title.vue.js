import { defineComponent as r, createBlock as l, openBlock as s, resolveDynamicComponent as a, normalizeClass as n, unref as o, withCtx as m, renderSlot as p } from "vue";
import { createNamespace as i } from "../../../utils/create.js";
import { titleProps as c } from "./typography.js";
const h = /* @__PURE__ */ r({
  name: "TlTitle",
  __name: "title",
  props: c,
  setup(f) {
    const t = i("title");
    return (e, u) => (s(), l(a(`h${e.level}`), {
      class: n([o(t).b(), o(t).m(e.type)])
    }, {
      default: m(() => [
        p(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
});
export {
  h as default
};
