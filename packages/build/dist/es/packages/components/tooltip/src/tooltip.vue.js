import { defineComponent as Y, toRefs as Z, ref as p, computed as V, reactive as d, watch as h, onMounted as ee, createElementBlock as j, openBlock as A, mergeProps as w, unref as o, toHandlers as m, createElementVNode as F, createVNode as I, normalizeClass as oe, Transition as te, withCtx as re, withDirectives as le, renderSlot as ne, createCommentVNode as ae, createTextVNode as se, toDisplayString as pe, vShow as ue } from "vue";
import { useClickOutside as ce } from "../../../utils/hooks/use-click-outside.js";
import { createNamespace as ie } from "../../../utils/create.js";
import { debounce as P } from "../../../utils/utils.js";
import { arrow as fe, useFloating as de } from "../../../../node_modules/.pnpm/@floating-ui_vue@1.1.6_vue@3.5.13_typescript@5.8.2_/node_modules/@floating-ui/vue/dist/floating-ui.vue.js";
import { useDefaultSlots as me } from "./hooks.js";
import { offset as R, flip as ve, autoUpdate as ge } from "../../../../node_modules/.pnpm/@floating-ui_dom@1.6.13/node_modules/@floating-ui/dom/dist/floating-ui.dom.js";
const ye = ["data-popper-placement"], Se = /* @__PURE__ */ Y({
  name: "tl-tooltip",
  __name: "tooltip",
  props: {
    open: { type: Boolean },
    title: { default: "hello" },
    trigger: { default: "hover" },
    color: {},
    placement: { default: "bottom" },
    animation: { default: "fade" },
    arrow: { type: Boolean, default: !0 },
    autoAdjustOverflow: { type: Boolean, default: !1 },
    openDelay: { default: 0 },
    closeDelay: { default: 0 },
    overlayStyle: { type: [Boolean, null, String, Object, Array], default: () => ({}) },
    zIndex: {}
  },
  emits: ["update:open", "open-change"],
  setup(T, { expose: $, emit: M }) {
    const v = ie("tooltip"), r = T, u = M, H = me(), { placement: k, arrow: b, autoAdjustOverflow: U, trigger: x, overlayStyle: q } = Z(
      r
    ), t = p(r.open ?? !1), g = p(), y = p(), D = p(), N = p(), G = V(() => {
      let e = [];
      return b.value ? (e.push(R(9)), e.push(
        fe({
          element: D,
          padding: 8
        })
      )) : e.push(R(3)), U.value && e.push(ve()), e;
    }), S = d({
      placement: k,
      middleware: G.value,
      whileElementsMounted: ge
    }), { update: J, floatingStyles: K, middlewareData: c } = de(
      y,
      g,
      S
    ), L = V(() => ({
      background: r.color ?? ""
    })), Q = () => {
      t.value ? n() : l();
    }, W = () => {
      t.value = !0, u("open-change", !0), u("update:open", t.value);
    }, X = () => {
      t.value = !1, u("open-change", !1), u("update:open", t.value);
    }, C = P(W, r.openDelay), _ = P(X, r.closeDelay), l = () => {
      _.cancel(), C.execute();
    }, n = () => {
      C.cancel(), _.execute();
    };
    ce(N, () => {
      t.value && (s("click") || s("focus")) && n();
    });
    let a = d({}), i = d({}), f = d({});
    const B = () => {
      !l || !n || (s("click") && (a.click = Q), s("hover") && (a.mouseenter = l, i.mouseleave = n, f.mouseenter = l, f.mouseleave = n), s("focus") && (a.focus = l, i.blur = n), s("contextmenu") && (a.contextmenu = l));
    };
    function s(e) {
      return x.value === e || x.value.includes(e);
    }
    return h(
      () => r.trigger,
      (e, E) => {
        e != E && (a = {}, i = {}, B());
      }
    ), h(
      () => r.open,
      (e) => {
        t.value = e;
      }
    ), h(
      t,
      (e) => {
        e && S && y.value && g.value && J();
      },
      { flush: "post" }
    ), ee(() => {
      B();
    }), $({
      show: l,
      hide: n
    }), (e, E) => (A(), j("div", w({
      class: o(v).b()
    }, m(o(i), !0), {
      ref_key: "popperContainerNode",
      ref: N
    }), [
      F("div", {
        class: oe(o(v).e("trigger")),
        ref_key: "triggerNode",
        ref: y
      }, [
        I(o(H), m(o(a)), null, 16)
      ], 2),
      I(te, { name: e.animation }, {
        default: re(() => {
          var O, z;
          return [
            le(F("div", w(m(o(f), !0), {
              class: [o(v).e("popper")],
              style: [o(K), L.value, o(q), { zIndex: e.zIndex }],
              ref_key: "popperNode",
              ref: g
            }), [
              ne(e.$slots, "content", {}, () => [
                se(pe(e.title), 1)
              ]),
              o(b) ? (A(), j("div", w({
                key: 0,
                id: "arrow",
                ref_key: "arrowRef",
                ref: D
              }, m(o(f), !0), {
                "data-popper-placement": o(k),
                style: {
                  backgroundColor: e.color ?? "",
                  position: "absolute",
                  right: ((O = o(c).arrow) == null ? void 0 : O.x) != null ? `${o(c).arrow.x}px` : "",
                  top: ((z = o(c).arrow) == null ? void 0 : z.y) != null ? `${o(c).arrow.y}px` : ""
                }
              }), null, 16, ye)) : ae("", !0)
            ], 16), [
              [ue, t.value]
            ])
          ];
        }),
        _: 3
      }, 8, ["name"])
    ], 16));
  }
});
export {
  Se as default
};
