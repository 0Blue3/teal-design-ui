import { defineComponent as _, ref as y, inject as C, computed as i, watch as A, createElementBlock as D, openBlock as E, normalizeClass as h, unref as n, createElementVNode as u, renderSlot as N, toDisplayString as R } from "vue";
import { createNamespace as j } from "../../../utils/create.js";
import { toBoolean as b } from "../../../utils/utils.js";
import { isArray as g, isUndefined as K } from "../../../utils/is.js";
import { checkboxGroupContextKey as M } from "./checkbox.js";
const P = ["disabled", "checked"], I = /* @__PURE__ */ _({
  name: "tl-checkbox",
  __name: "checkbox",
  props: {
    size: { default: "m" },
    defaultChecked: { type: Boolean, default: !1 },
    checked: { type: Boolean, default: void 0 },
    disabled: { type: Boolean, default: !1 },
    indeterminate: { type: Boolean },
    value: {}
  },
  emits: ["change", "update:checked"],
  setup(B, { emit: z }) {
    const l = j("checkbox"), t = B, p = z, r = y(), e = C(M, void 0), m = i(() => !!e), c = y(t.defaultChecked), s = i(() => {
      const a = t.checked ?? c.value;
      return m.value ? e == null ? void 0 : e.calcVal : a;
    }), v = i(() => m.value && g(s.value) ? s.value.includes(t.value) : b(s.value)), o = i(() => (e == null ? void 0 : e.disabled) || t.disabled || !c.value && (e == null ? void 0 : e.isMax)), V = i(() => (e == null ? void 0 : e.size) || t.size);
    function w(a) {
      const { checked: d } = a.target;
      c.value = d;
      let k;
      if (m.value && g(s.value)) {
        const f = new Set(s.value);
        d ? f.add(t.value ?? !0) : f.delete(t.value ?? !0), k = Array.from(f), e == null || e.handleChange(k);
      } else
        p("update:checked", d), p("change", d);
    }
    A(
      () => t.checked,
      (a) => {
        c.value = K(a) ? !1 : b(a), r.value && (r.value.checked = c.value);
      }
    );
    const S = (a) => {
      a.stopPropagation();
    };
    return (a, d) => (E(), D("label", {
      class: h([n(l).b(), n(l).is("disabled", o.value ?? ""), n(l).m(V.value)])
    }, [
      u("input", {
        ref_key: "checkboxRef",
        ref: r,
        type: "checkbox",
        class: h([n(l).e("target")]),
        disabled: o.value,
        checked: v.value,
        onChange: w,
        onClick: S
      }, null, 42, P),
      u("div", {
        class: h([
          n(l).e("wrap"),
          n(l).m("common"),
          // 选中
          v.value && !a.indeterminate && n(l).m("active"),
          // 未选中
          !v.value && !o.value && !a.indeterminate && n(l).m("normal"),
          // 半选
          a.indeterminate && n(l).m("indeterminate"),
          n(l).is("disabled", o.value ?? "")
        ])
      }, null, 2),
      u("div", null, [
        N(a.$slots, "default", {}, () => [
          u("span", null, R(a.value), 1)
        ])
      ])
    ], 2));
  }
});
export {
  I as default
};
