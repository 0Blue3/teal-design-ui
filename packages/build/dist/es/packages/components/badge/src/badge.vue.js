import { defineComponent as R, ref as p, computed as s, useSlots as m, onMounted as $, createElementBlock as u, openBlock as r, normalizeClass as n, unref as h, createElementVNode as V, renderSlot as Z, createVNode as v, Transition as y, withCtx as b, createCommentVNode as g, normalizeStyle as x, toDisplayString as z } from "vue";
import { createNamespace as A } from "../../../utils/create.js";
const T = /* @__PURE__ */ R({
  name: "tl-badge",
  __name: "badge",
  props: {
    count: { default: 0 },
    overflowCount: { default: 99 },
    showZero: { type: Boolean, default: !1 },
    offset: {},
    hidden: { type: Boolean, default: !1 },
    isDot: { type: Boolean },
    inDot: { type: Boolean },
    color: {},
    border: { default: 0 },
    status: { default: "danger" }
  },
  emits: ["update:count", "update:hidden"],
  setup(w, { emit: E }) {
    const o = A("badge"), e = w, C = p(), l = p(), f = s(() => {
      var t;
      return ((t = l.value) == null ? void 0 : t.height) / 2;
    }), S = s(() => d.value ? !0 : a.value && a.value.toString().length === 1), d = s(() => (e == null ? void 0 : e.isDot) ?? !1), c = s(() => d.value && !e.hidden), _ = s(() => {
      const t = {};
      return e.color && (t.background = e.color), e.border && (t.boxShadow = `#ffffff 0 0 0 ${e.border}px`), t;
    }), D = s(() => {
      let t = [o.e("dot")];
      return e.status && t.push(o.m(e.status)), e.inDot && t.push(o.is("inDot", !0)), !m().default && t.push(o.m("stand")), t;
    }), k = s(() => {
      const t = e.count === 0 && !e.showZero, i = e.count < 0;
      return !(e.hidden || c.value || t || i);
    }), a = s(() => e.count && e.count > e.overflowCount ? e.overflowCount + "+" : e.count + ""), B = s(() => {
      let t = {};
      return t.translate = "50% -50%", e.offset && e.offset === "right" ? t.translate = `-16px ${f.value}px` : e.offset && e.offset === "left" ? t.translate = `16px ${f.value}px` : Array.isArray(e.offset) && (t.translate = e.offset[0] + "px " + e.offset[1] + "px"), e.border && (t.boxShadow = `#ffffff 0 0 0 ${e.border}px`), t;
    }), N = s(() => {
      let t = [o.e("count")];
      return S.value && t.push(o.is("round", !0)), e.status && t.push(o.m(e.status)), e.offset && typeof e.offset == "string" && t.push(o.m(e.offset)), !m().default && t.push(o.m("stand")), t;
    });
    return $(() => {
    }), (t, i) => (r(), u("div", {
      ref_key: "badgeRef",
      ref: C,
      class: n(h(o).b())
    }, [
      V("div", {
        ref_key: "supRef",
        ref: l,
        class: n(h(o).e("sup"))
      }, [
        v(y, { name: "modal" }, {
          default: b(() => [
            c.value ? (r(), u("div", {
              key: 0,
              class: n(D.value),
              style: x(_.value)
            }, null, 6)) : g("", !0)
          ]),
          _: 1
        }),
        v(y, { name: "modal" }, {
          default: b(() => [
            k.value ? (r(), u("div", {
              key: 0,
              class: n(N.value),
              style: x(B.value)
            }, z(a.value), 7)) : g("", !0)
          ]),
          _: 1
        })
      ], 2),
      Z(t.$slots, "default")
    ], 2));
  }
});
export {
  T as default
};
