import { defineComponent as V, ref as g, computed as n, watch as v, resolveComponent as y, createElementBlock as i, openBlock as d, normalizeStyle as C, normalizeClass as s, unref as o, createElementVNode as B, createCommentVNode as r, createBlock as N, toDisplayString as T } from "vue";
import { createNamespace as w } from "../../../utils/create.js";
const S = ["disabled"], _ = /* @__PURE__ */ V({
  name: "tl-switch",
  __name: "switch",
  props: {
    modelValue: { type: [Boolean, String, Number], default: !1 },
    size: { default: "m" },
    checkedColor: {},
    uncheckedColor: {},
    checkedValue: { type: [Boolean, String, Number], default: !0 },
    uncheckedValue: { type: [Boolean, String, Number], default: !1 },
    checkedText: {},
    uncheckedText: {},
    disabled: { type: Boolean, default: !1 },
    loading: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "change"],
  setup(m, { emit: h }) {
    const a = w("switch"), l = m, u = h, t = g(l.modelValue), c = n(() => t.value === l.checkedValue), p = n(() => l.disabled || l.loading);
    v(
      () => l.modelValue,
      (e) => {
        t.value = e;
      }
    );
    const k = n(() => ({
      backgroundColor: c.value ? l.checkedColor : l.uncheckedColor
    })), f = (e) => {
      p.value || (t.value = c.value ? l.uncheckedValue : l.checkedValue, u("update:modelValue", t.value), u("change", t.value, e));
    };
    return (e, z) => {
      const b = y("tl-icon");
      return d(), i("button", {
        type: "button",
        role: "switch",
        class: s([
          o(a).b(),
          o(a).is("disabled", e.disabled),
          o(a).is("checked", c.value),
          o(a).is("loading", e.loading),
          o(a).m(e.size)
        ]),
        style: C(k.value),
        disabled: e.disabled,
        onClick: f
      }, [
        B("span", {
          class: s(o(a).e("dot"))
        }, [
          e.loading ? (d(), N(b, {
            key: 0,
            icon: "fa-spinner",
            spin: ""
          })) : r("", !0)
        ], 2),
        e.checkedText || e.uncheckedText ? (d(), i("span", {
          key: 0,
          class: s(o(a).e("text"))
        }, T(c.value ? e.checkedText : e.uncheckedText), 3)) : r("", !0)
      ], 14, S);
    };
  }
});
export {
  _ as default
};
