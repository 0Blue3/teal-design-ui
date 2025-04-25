import { defineComponent as z, inject as N, computed as i, ref as S, watch as _, createElementBlock as b, openBlock as h, normalizeClass as t, unref as a, withDirectives as w, createCommentVNode as D, createElementVNode as v, vModelRadio as E, renderSlot as R } from "vue";
import { createNamespace as j } from "../../../utils/create.js";
import { RadioGroupKey as K } from "./radio.js";
const M = ["value", "disabled"], q = /* @__PURE__ */ z({
  name: "tl-radio",
  __name: "radio",
  props: {
    size: { default: "m" },
    value: { type: [Number, String, Boolean] },
    disabled: { type: Boolean },
    modelValue: { type: [Number, String, Boolean] },
    name: {},
    border: { type: Boolean },
    type: { default: "radio" },
    solid: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "change"],
  setup(y, { emit: g }) {
    const l = j("radio"), s = y, p = g, e = N(K), u = i(() => e ?? !1), d = S(u.value ? e == null ? void 0 : e.localValue : s.modelValue), c = i(() => d.value === s.value), n = i(
      () => u.value ? e == null ? void 0 : e.disabled : s.disabled
    ), V = i(() => u.value ? e == null ? void 0 : e.size : s.size), m = i(() => u.value ? e == null ? void 0 : e.type : s.type), r = i(
      () => u.value ? e == null ? void 0 : e.solid : s.solid
    );
    _(
      () => s.modelValue,
      (o) => {
        d.value = o;
      }
    );
    const k = () => {
      d.value = s.value, u && (e == null || e.handleChange(d.value)), p("update:modelValue", d.value), p("change", d.value);
    };
    return (o, f) => (h(), b("label", {
      class: t([
        a(l).b(),
        a(l).is("disabled", n.value ?? !1),
        a(l).m(m.value),
        a(l).m(V.value)
      ])
    }, [
      w(v("input", {
        "onUpdate:modelValue": f[0] || (f[0] = (B) => d.value = B),
        type: "radio",
        value: o.value,
        disabled: n.value,
        onChange: k
      }, null, 40, M), [
        [E, d.value]
      ]),
      m.value === "radio" ? (h(), b("span", {
        key: 0,
        class: t([
          a(l).e("box"),
          a(l).is("checked", c.value),
          a(l).is("disabled", n.value ?? !1)
        ])
      }, [
        v("span", {
          class: t([
            a(l).e("inner"),
            a(l).is("checked", c.value),
            a(l).is("disabled", n.value ?? !1),
            a(l).is("solid", r.value ?? !1)
          ])
        }, null, 2)
      ], 2)) : D("", !0),
      v("span", {
        class: t([
          a(l).e("label"),
          a(l).is("checked", c.value),
          a(l).em("label", m.value),
          a(l).is("solid", r.value ?? !1)
        ])
      }, [
        R(o.$slots, "default")
      ], 2)
    ], 2));
  }
});
export {
  q as default
};
