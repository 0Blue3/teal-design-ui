import { defineComponent as E, ref as v, computed as r, watch as L, createElementBlock as p, openBlock as y, normalizeClass as d, unref as a, Fragment as D, renderList as H, normalizeStyle as h, withDirectives as F, createVNode as k, vShow as I } from "vue";
import { createNamespace as j } from "../../../utils/create.js";
import g from "../../icon/index.js";
const q = ["onAnimationend"], O = /* @__PURE__ */ E({
  name: "tl-rate",
  __name: "rate",
  props: {
    count: { default: 5 },
    modelValue: { default: 0 },
    defaultValue: { default: 0 },
    allowHalf: { type: Boolean, default: !1 },
    allowClear: { type: Boolean, default: !1 },
    grading: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    color: { default: "" },
    icon: { default: "fa-star" },
    size: { default: "m" }
  },
  emits: ["update:modelValue", "change", "hover-change"],
  setup(B, { emit: M }) {
    const o = j("rate"), n = B, c = M, m = v(n.defaultValue ?? n.modelValue), u = v(n.defaultValue ?? n.modelValue), t = v(!1), $ = r(() => Number(n.count)), s = r(() => Number(m.value)), V = r(() => Number(u.value)), f = r(() => n.disabled || n.readonly), N = r(() => (e) => t.value ? { animationDelay: `${50 * e}ms` } : void 0);
    L(
      () => n.modelValue,
      (e) => {
        u.value = e;
      }
    );
    function z(e) {
      n.modelValue && (c("update:modelValue", e), c("change", e));
    }
    function S() {
      f.value || (m.value = u.value);
    }
    function b(e) {
      f.value || (m.value = e, c("hover-change", e));
    }
    function w(e) {
      if (!f.value) {
        if (t.value = !0, n.allowClear && V.value == e) {
          t.value = !1, u.value = 0;
          return;
        }
        u.value = e, z(e);
      }
    }
    function A(e) {
      t.value && e == Math.ceil(V.value) - 1 && (t.value = !1);
    }
    return (e, C) => (y(), p("div", {
      class: d([a(o).b(), a(o).is("disabled", e.disabled), a(o).m(e.size)]),
      onMouseleave: C[0] || (C[0] = (l) => S())
    }, [
      (y(!0), p(D, null, H($.value, (l) => (y(), p("div", {
        key: l,
        class: d([
          a(o).e("item"),
          a(o).is("readonly", e.readonly),
          a(o).is("disabled", e.disabled),
          t.value && s.value >= l && a(o).em("item", "animation")
        ]),
        style: h(N.value(l)),
        onAnimationend: (i) => A(l)
      }, [
        F(k(a(g), {
          icon: e.icon,
          class: d([a(o).em("item", "half"), a(o).is("select", s.value + 0.5 == l)]),
          style: h({
            color: s.value + 0.5 == l ? e.color : ""
          }),
          onMouseenter: (i) => b(l - 0.5),
          onClick: (i) => w(l - 0.5)
        }, null, 8, ["icon", "class", "style", "onMouseenter", "onClick"]), [
          [I, e.allowHalf]
        ]),
        k(a(g), {
          icon: e.icon,
          class: d([a(o).is("select", s.value >= l)]),
          style: h({ color: s.value >= l ? e.color : "" }),
          onMouseenter: (i) => b(l),
          onClick: (i) => w(l)
        }, null, 8, ["icon", "class", "style", "onMouseenter", "onClick"])
      ], 46, q))), 128))
    ], 34));
  }
});
export {
  O as default
};
