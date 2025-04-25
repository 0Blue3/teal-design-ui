import { defineComponent as _, getCurrentInstance as y, inject as h, reactive as g, createElementBlock as r, openBlock as t, Fragment as I, createElementVNode as a, normalizeClass as n, unref as e, withModifiers as N, renderSlot as i, createBlock as v, resolveDynamicComponent as B, createVNode as $, toDisplayString as D } from "vue";
import E from "../../icon/index.js";
import { createNamespace as P } from "../../../utils/create.js";
import { breadcrumbName as S } from "./breadcrumb.js";
const V = { key: 1 }, j = { key: 2 }, q = /* @__PURE__ */ _({
  name: "tl-breadcrumb-item",
  __name: "breadcrumb-item",
  props: {
    to: {}
  },
  setup(u) {
    const o = P("breadcrumbItem"), s = u, d = y(), f = h(S), {
      props: { separator: b, separatorIcon: c },
      slots: k
    } = g(f), p = k.separator, l = d.appContext.config.globalProperties.$router, C = () => {
      !s.to || !l || l.push(s.to);
    };
    return (m, w) => (t(), r(I, null, [
      a("span", {
        class: n(e(o).b())
      }, [
        a("span", {
          class: n(e(o).e("inner")),
          onClick: N(C, ["prevent", "stop"])
        }, [
          s.to ? (t(), r("a", {
            key: 0,
            href: "/",
            class: n(e(o).e("link"))
          }, [
            i(m.$slots, "default")
          ], 2)) : i(m.$slots, "default", { key: 1 })
        ], 2)
      ], 2),
      a("span", {
        class: n(e(o).e("separator"))
      }, [
        e(p) ? (t(), v(B(e(p)), { key: 0 })) : e(c) ? (t(), r("span", V, [
          $(e(E), { icon: e(c) }, null, 8, ["icon"])
        ])) : (t(), r("span", j, D(e(b)), 1))
      ], 2)
    ], 64));
  }
});
export {
  q as default
};
