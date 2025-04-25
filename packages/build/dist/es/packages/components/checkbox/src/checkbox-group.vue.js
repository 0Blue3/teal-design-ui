import { defineComponent as w, toRefs as B, useSlots as N, ref as F, computed as l, provide as M, reactive as A, resolveComponent as E, createBlock as c, openBlock as o, resolveDynamicComponent as I, normalizeStyle as K, normalizeClass as L, unref as r, withCtx as p, createElementBlock as f, createCommentVNode as O, renderSlot as b, Fragment as v, renderList as R, createTextVNode as T, toDisplayString as j } from "vue";
import { useFormItem as q } from "../../../utils/hooks/use-form-item.js";
import { createNamespace as H } from "../../../utils/create.js";
import { isArray as h } from "../../../utils/is.js";
import { checkboxGroupContextKey as J } from "./checkbox.js";
const Z = /* @__PURE__ */ w({
  name: "tl-checkbox-group",
  __name: "checkbox-group",
  props: {
    modelValue: {},
    defaultValue: { default: () => [] },
    disabled: { type: Boolean, default: !1 },
    max: {},
    tag: { default: "div" },
    direction: { default: "horizontal" },
    options: { default: () => [] },
    gap: {},
    size: { default: "m" }
  },
  emits: ["change", "update:modelValue"],
  setup(g, { emit: k }) {
    const n = H("checkboxGroup"), t = g, { size: x, disabled: y } = B(t), { mergedSize: u, mergedDisabled: V } = q({
      size: x,
      disabled: y
    }), i = k;
    N();
    const s = F(t.defaultValue), d = l(
      () => h(t.modelValue) ? t.modelValue : s.value
    ), z = (e) => {
      s.value = e, i("update:modelValue", e), i("change", e);
    }, m = l(() => t.options.map((e) => typeof e == "number" || typeof e == "string" ? {
      value: e,
      label: e
    } : e)), C = l(() => t.max === void 0 ? !1 : d.value.length >= t.max), G = l(
      () => h(t.size) ? {
        rowGap: `${t.size[1]}px`,
        columnGap: `${t.size[0]}px`
      } : {
        gap: `${_(t.size)}px`
      }
    ), S = l(() => ({
      flexDirection: $(t.direction),
      ...G.value
    }));
    M(
      J,
      A({
        size: u,
        name: "tlCheckboxGroup",
        calcVal: d,
        disabled: V,
        handleChange: z,
        isMax: C
      })
    );
    const _ = (e) => {
      if (typeof e == "number")
        return e;
      switch (e) {
        case "s":
          return 8;
        case "m":
          return 16;
        case "l":
          return 24;
        default:
          return 16;
      }
    }, $ = (e) => e == "vertical" ? "column" : "row";
    return (e, P) => {
      const D = E("tl-checkbox");
      return o(), c(I(e.tag), {
        class: L([r(n).b(), r(n).m(e.direction), r(n).m(r(u))]),
        style: K(S.value)
      }, {
        default: p(() => [
          m.value.length ? (o(!0), f(v, { key: 0 }, R(m.value, (a) => (o(), c(D, {
            key: a.value,
            checked: s.value.includes(a.value),
            value: a.value,
            disabled: a.disabled,
            indeterminate: a.indeterminate
          }, {
            default: p(() => [
              e.$slots.label ? b(e.$slots, "label", {
                key: 0,
                data: a
              }) : (o(), f(v, { key: 1 }, [
                T(j((a == null ? void 0 : a.label) ?? (a == null ? void 0 : a.value)), 1)
              ], 64))
            ]),
            _: 2
          }, 1032, ["checked", "value", "disabled", "indeterminate"]))), 128)) : O("", !0),
          b(e.$slots, "default")
        ]),
        _: 3
      }, 8, ["class", "style"]);
    };
  }
});
export {
  Z as default
};
