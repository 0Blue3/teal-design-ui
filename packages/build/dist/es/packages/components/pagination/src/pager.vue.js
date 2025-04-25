import { defineComponent as W, inject as b, computed as p, createElementBlock as l, openBlock as u, normalizeClass as c, unref as n, createElementVNode as E, createCommentVNode as g, Fragment as F, renderList as L, toDisplayString as h } from "vue";
import { createNamespace as S } from "../../../utils/create.js";
import { PaginationContextKey as V } from "./pagination.js";
const j = ["onClick"], I = /* @__PURE__ */ W({
  __name: "pager",
  props: {
    pagerCount: {},
    fixWidth: { type: Boolean }
  },
  setup(P) {
    const o = S("pagination-pager"), i = P, { _current: a, lastPage: r, isFirstPage: M, isLastPage: $ } = b(V), m = Math.ceil(i.pagerCount / 2), f = Math.floor((i.pagerCount - 2) / 2), C = p(() => r.value > i.pagerCount), w = p(() => C.value && a.value > m), k = p(
      () => C.value && a.value + m <= r.value
    ), B = p(() => {
      const s = [];
      let t = a.value;
      if (a.value > m) {
        for (; t + f + 1 > r.value; )
          t--;
        const e = t - f, y = t + f, N = i.fixWidth && k.value ? e + 1 : e;
        for (let d = N; d <= y; d++)
          s.push(d);
      } else
        for (let e = 2; e < i.pagerCount; e++)
          s.push(e);
      return s.filter((e) => 1 < e && e < r.value);
    });
    function v(s) {
      a.value = s;
    }
    function x(s) {
      const t = i.pagerCount - (i.fixWidth ? 3 : 2);
      if (s === "prev") {
        const e = a.value - t;
        v(e > 1 ? e : 1);
      } else {
        const e = a.value + t;
        v(e < r.value ? e : r.value);
      }
    }
    return (s, t) => (u(), l("div", {
      class: c(n(o).b())
    }, [
      E("div", {
        class: c([n(o).e("item"), n(o).is("active", n(M))]),
        onClick: t[0] || (t[0] = (e) => v(1))
      }, " 1 ", 2),
      w.value ? (u(), l("div", {
        key: 0,
        class: c([n(o).e("more")]),
        onClick: t[1] || (t[1] = (e) => x("prev"))
      }, "...", 2)) : g("", !0),
      (u(!0), l(F, null, L(B.value, (e) => (u(), l("div", {
        key: e,
        class: c([n(o).e("item"), n(o).is("active", n(a) === e)]),
        onClick: (y) => v(e)
      }, h(e), 11, j))), 128)),
      k.value ? (u(), l("div", {
        key: 1,
        class: c([n(o).e("more")]),
        onClick: t[2] || (t[2] = (e) => x("next"))
      }, "...", 2)) : g("", !0),
      n(r) > 1 ? (u(), l("div", {
        key: 2,
        class: c([n(o).e("item"), n(o).is("active", n($))]),
        onClick: t[3] || (t[3] = (e) => v(n(r)))
      }, h(n(r)), 3)) : g("", !0)
    ], 2));
  }
});
export {
  I as default
};
