import { defineComponent as m, inject as u, computed as d, createElementBlock as y, openBlock as g, normalizeClass as l, unref as t, createElementVNode as i, createVNode as c, renderSlot as n, createTextVNode as b, toDisplayString as C, Transition as w, mergeProps as $, toHandlers as k, withCtx as x, withDirectives as z, vShow as E } from "vue";
import { createNamespace as N } from "../../../utils/create.js";
import { CollapseGroupContextKey as S } from "./collapse.js";
import B from "../../icon/index.js";
const I = /* @__PURE__ */ m({
  name: "TlCollapse",
  __name: "collapse",
  props: {
    title: {},
    id: {},
    disabled: { type: Boolean, default: !1 },
    size: { default: "m" }
  },
  setup(v) {
    const s = N("collapse"), o = v, a = u(S, null), r = d(() => a.activeKeys.value.includes(o.id)), h = d(() => a.size ?? o.size), f = () => {
      o.disabled || a == null || a.handleItemClick(o.id);
    }, p = {
      beforeEnter(e) {
        e.style.height = "0px", e.style.overflow = "hidden";
      },
      enter(e) {
        e.style.height = `${e.scrollHeight}px`;
      },
      afterEnter(e) {
        e.style.height = "", e.style.overflow = "";
      },
      beforeLeave(e) {
        e.style.height = `${e.scrollHeight}px`, e.style.overflow = "hidden";
      },
      leave(e) {
        e.style.height = "0px";
      },
      afterLeave(e) {
        e.style.height = "", e.style.overflow = "";
      }
    };
    return (e, H) => (g(), y("div", {
      class: l([
        t(s).b(),
        t(s).m(h.value),
        t(s).is("active", r.value ?? !1),
        t(s).is("disabled", e.disabled ?? !1)
      ])
    }, [
      i("div", {
        class: l([t(s).e("header")]),
        onClick: f
      }, [
        i("div", {
          class: l(t(s).e("header-left"))
        }, [
          i("div", {
            class: l([t(s).e("header-ctl"), t(s).is("active", r.value ?? !1)])
          }, [
            n(e.$slots, "icon", { isActive: r.value }, () => [
              c(t(B), { icon: "angle-right" })
            ])
          ], 2),
          i("div", {
            class: l(t(s).e("header-title"))
          }, [
            n(e.$slots, "title", {}, () => [
              b(C(e.title), 1)
            ])
          ], 2)
        ], 2),
        i("div", {
          class: l(t(s).e("header-extra"))
        }, [
          n(e.$slots, "extra")
        ], 2)
      ], 2),
      c(w, $({ name: "slide" }, k(p)), {
        default: x(() => [
          z(i("div", {
            class: l(t(s).e("content"))
          }, [
            i("div", {
              class: l(t(s).e("content-box"))
            }, [
              n(e.$slots, "default")
            ], 2)
          ], 2), [
            [E, r.value]
          ])
        ]),
        _: 3
      }, 16)
    ], 2));
  }
});
export {
  I as default
};
