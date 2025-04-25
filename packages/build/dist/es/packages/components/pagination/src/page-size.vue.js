import { defineComponent as g, inject as v, ref as z, computed as S, resolveComponent as r, createBlock as a, openBlock as n, unref as i, normalizeClass as k, withCtx as l, createElementBlock as w, Fragment as C, renderList as x, createTextVNode as h, toDisplayString as y } from "vue";
import { createNamespace as B } from "../../../utils/create.js";
import { PaginationContextKey as b } from "./pagination.js";
const D = /* @__PURE__ */ g({
  __name: "page-size",
  props: {
    pageSizeOptions: {}
  },
  emits: ["update:pageSize"],
  setup(N, { emit: s }) {
    const c = B("pagination-pageSize"), p = s, { size: m } = v(b), e = z(10), u = S(() => e.value < 0 ? "全部" : `${e.value} 条/页`);
    function d(o) {
      e.value = o, p("update:pageSize", e.value);
    }
    return (o, O) => {
      const _ = r("tl-dropdown-item"), f = r("tl-dropdown");
      return n(), a(f, {
        class: k(i(c).b()),
        title: u.value,
        size: i(m),
        trigger: "click",
        onSelected: d
      }, {
        default: l(() => [
          (n(!0), w(C, null, x(o.pageSizeOptions, (t) => (n(), a(_, {
            key: t,
            value: t
          }, {
            default: l(() => [
              h(y(t === -1 ? "全部" : `${t} 条/页`), 1)
            ]),
            _: 2
          }, 1032, ["value"]))), 128))
        ]),
        _: 1
      }, 8, ["class", "title", "size"]);
    };
  }
});
export {
  D as default
};
