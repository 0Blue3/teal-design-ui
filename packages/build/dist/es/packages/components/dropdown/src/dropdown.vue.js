import { defineComponent as C, ref as s, provide as S, computed as k, watch as p, resolveComponent as m, createElementBlock as D, openBlock as u, normalizeClass as y, unref as l, createVNode as f, withCtx as r, createElementVNode as h, createBlock as N, renderSlot as c, createTextVNode as V, toDisplayString as O, normalizeStyle as $ } from "vue";
import { createNamespace as j } from "../../../utils/create.js";
import { dropdownContextKey as A } from "./dropdown.js";
import E from "../../tooltip/index.js";
const q = /* @__PURE__ */ C({
  name: "tl-dropdown",
  __name: "dropdown",
  props: {
    type: { default: "secondary" },
    size: {},
    disabled: { type: Boolean, default: !1 },
    trigger: { default: "hover" },
    open: { type: Boolean, default: !1 },
    title: { default: "" },
    color: {},
    placement: { default: "bottom" },
    animation: { default: "downBottom" },
    arrow: { type: Boolean, default: !0 },
    autoAdjustOverflow: { type: Boolean },
    openDelay: { default: 0 },
    closeDelay: { default: 80 },
    overlayStyle: { type: [Boolean, null, String, Object, Array], default: () => ({}) },
    zIndex: {}
  },
  emits: ["selected", "visibleChange"],
  setup(v, { emit: b }) {
    const a = j("dropdown"), d = b, n = v, i = s(null), t = s(n.open);
    S(A, {
      ...n,
      isOpen: t,
      selectedValue: i
    });
    const g = k(() => ({
      transform: `rotate(${t.value ? "180deg" : "0deg"})`,
      transition: "transform .3s"
    }));
    return p(i, (e, o) => {
      n.disabled || e !== o && d("selected", e);
    }), p(t, (e) => {
      d("visibleChange", e);
    }), (e, o) => {
      const w = m("tl-icon"), z = m("tl-button");
      return u(), D("div", {
        class: y([l(a).b(), l(a).is("disabled", e.disabled)])
      }, [
        f(l(E), {
          open: t.value,
          "onUpdate:open": o[0] || (o[0] = (B) => t.value = B),
          arrow: e.arrow,
          trigger: e.trigger,
          animation: e.animation,
          placement: e.placement,
          "open-delay": e.openDelay,
          "close-delay": e.closeDelay,
          "overlay-style": e.overlayStyle,
          "z-index": e.zIndex
        }, {
          content: r(() => [
            c(e.$slots, "default")
          ]),
          default: r(() => [
            h("div", {
              class: y(l(a).e("title"))
            }, [
              e.title ? (u(), N(z, {
                key: 0,
                size: e.size,
                type: e.type,
                disabled: e.disabled
              }, {
                default: r(() => [
                  V(O(e.title) + " ", 1),
                  f(w, {
                    style: $(g.value),
                    icon: "fa-angle-down "
                  }, null, 8, ["style"])
                ]),
                _: 1
              }, 8, ["size", "type", "disabled"])) : c(e.$slots, "title", { key: 1 })
            ], 2)
          ]),
          _: 3
        }, 8, ["open", "arrow", "trigger", "animation", "placement", "open-delay", "close-delay", "overlay-style", "z-index"])
      ], 2);
    };
  }
});
export {
  q as default
};
