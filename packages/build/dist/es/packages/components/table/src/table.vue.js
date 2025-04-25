import { defineComponent as u, getCurrentInstance as b, computed as f, provide as h, createElementBlock as v, openBlock as l, normalizeClass as _, unref as a, createElementVNode as s, withDirectives as C, createVNode as y, createBlock as T, createCommentVNode as k, renderSlot as n, vShow as B } from "vue";
import { TableContextKey as I } from "./table.js";
import { createNamespace as N } from "../../../utils/create.js";
import { useStore as S } from "./store.js";
import g from "./header.js";
import E from "./body.js";
const V = { ref: "hiddenColumns" }, j = /* @__PURE__ */ u({
  name: "TlTable",
  __name: "table",
  props: {
    data: { default: () => [] },
    height: { default: 56 }
  },
  setup(d) {
    let m = 1;
    const o = N("table"), c = d, e = b();
    e.bem = o;
    const t = S();
    t.state.data.value = c.data, e.store = t;
    const i = `tl-table_${m++}`;
    e.tableId = i;
    const p = f(() => (t.state.data.value || []).length === 0);
    return h(I, e), (r, $) => (l(), v("div", {
      class: _(a(o).b())
    }, [
      s("table", null, [
        y(a(g)),
        p.value ? k("", !0) : (l(), T(a(E), { key: 0 })),
        n(r.$slots, "tbody")
      ]),
      C(s("div", V, [
        n(r.$slots, "default")
      ], 512), [
        [B, !1]
      ])
    ], 2));
  }
});
export {
  j as default
};
