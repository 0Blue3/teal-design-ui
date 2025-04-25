import { defineComponent as V, ref as h, computed as d, provide as $, h as u, watch as m, createElementBlock as v, createCommentVNode as I, openBlock as c, normalizeClass as b, unref as l, createVNode as z, createTextVNode as W, createElementVNode as j, toDisplayString as D, Fragment as E, renderList as F, createBlock as L, resolveDynamicComponent as M } from "vue";
import { createNamespace as T } from "../../../utils/create.js";
import { PaginationContextKey as U } from "./pagination.js";
import K from "./pager.vue.js";
import f from "./control.vue.js";
import q from "./jumper.vue.js";
import A from "./page-size.vue.js";
import G from "../../input-number/index.js";
const ee = /* @__PURE__ */ V({
  __name: "pagination",
  props: {
    total: {},
    current: { default: 1 },
    pageSize: { default: 10 },
    defaultCurrent: { default: 1 },
    defaultPageSize: { default: 10 },
    pageSizeOptions: { default: () => [10, 20, 30, 40, 50] },
    pagerCount: { default: 7 },
    size: {},
    layouts: { default: () => ["prev", "pager", "next"] },
    prevIcon: {},
    nextIcon: {},
    simple: { type: Boolean, default: !1 },
    fixWidth: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    hideOnSinglePage: { type: Boolean, default: !1 }
  },
  emits: ["change", "pageSizeChange", "update:current", "update:pageSize"],
  setup(k, { emit: P }) {
    const i = T("pagination"), a = k, r = P, t = h(a.defaultCurrent), s = h(a.defaultPageSize), o = d(() => Math.ceil(a.total / s.value)), _ = d(() => a.hideOnSinglePage && o.value === 1), S = d(() => t.value === 1), C = d(() => t.value === o.value), p = d(() => a.size ?? "m");
    $(U, {
      _current: t,
      _pageSize: s,
      lastPage: o,
      isFirstPage: S,
      isLastPage: C,
      size: p
    });
    const B = {
      pager: u(K, {
        pagerCount: a.pagerCount,
        fixWidth: a.fixWidth
      }),
      prev: u(f, {
        icon: "prev",
        onClick: y
      }),
      next: u(f, {
        icon: "next",
        onClick: x
      }),
      total: u("div", null, `共${a.total}条`),
      jumper: u(q),
      pageSize: u(A, {
        pageSizeOptions: a.pageSizeOptions,
        "onUpdate:pageSize": (e) => {
          a.disabled || (s.value = e);
        }
      })
    }, N = a.layouts.reduce((e, n) => (e[n] = B[n], e), {});
    m(
      () => a.current,
      (e) => {
        t.value = e;
      }
    ), m(t, (e) => {
      r("update:current", e), r("change", e);
    }), m(
      () => a.pageSize,
      (e) => s.value = e
    ), m(s, (e) => {
      r("update:pageSize", e), r("pageSizeChange", e);
    });
    function y() {
      !a.disabled && t.value > 1 && t.value--;
    }
    function x() {
      !a.disabled && t.value < o.value && t.value++;
    }
    return (e, n) => e.simple ? (c(), v("div", {
      key: 0,
      class: b([l(i).b(), l(i).m(p.value), l(i).is("disabled", e.disabled)])
    }, [
      z(f, {
        icon: "prev",
        disabled: S.value,
        onClick: y
      }, null, 8, ["disabled"]),
      z(l(G), {
        modelValue: t.value,
        "onUpdate:modelValue": n[0] || (n[0] = (g) => t.value = g),
        min: 1,
        max: o.value,
        controls: !1,
        size: p.value
      }, null, 8, ["modelValue", "max", "size"]),
      n[1] || (n[1] = W(" / ")),
      j("div", {
        class: b(l(i).e("total"))
      }, D(o.value), 3),
      z(f, {
        icon: "next",
        disabled: C.value,
        onClick: x
      }, null, 8, ["disabled"])
    ], 2)) : _.value ? I("", !0) : (c(), v("div", {
      key: 1,
      class: b([l(i).b(), l(i).m(p.value), l(i).is("disabled", e.disabled)])
    }, [
      (c(!0), v(E, null, F(Object.entries(l(N)), ([g, O]) => (c(), L(M(O), {
        key: g,
        disabled: e.disabled
      }, null, 8, ["disabled"]))), 128))
    ], 2));
  }
});
export {
  ee as default
};
