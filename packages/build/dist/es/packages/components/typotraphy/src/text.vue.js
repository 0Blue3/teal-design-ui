import { defineComponent as l, createBlock as p, openBlock as i, resolveDynamicComponent as m, unref as s, normalizeClass as c, withCtx as d, renderSlot as f } from "vue";
import { createNamespace as u } from "../../../utils/create.js";
import { textProps as b } from "./typography.js";
const B = /* @__PURE__ */ l({
  name: "TlText",
  __name: "text",
  props: b,
  setup(o) {
    const t = u("text"), r = { ...o, type: !1 }, [a, ...k] = Object.entries(r).filter((e) => e[1]).map((e) => e[0]), n = a || "span";
    return (e, C) => (i(), p(m(s(n)), {
      class: c([
        s(t).b(),
        s(t).m(e.type),
        s(t).is("disabled", e.disabled),
        s(t).is("mark", e.mark),
        s(t).is("strong", e.strong),
        s(t).is("underline", e.underline),
        s(t).is("del", e.del)
      ])
    }, {
      default: d(() => [
        f(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
});
export {
  B as default
};
