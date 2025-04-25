import { defineComponent as b, ref as g, toRefs as h, watch as z, provide as V, resolveComponent as B, createBlock as k, createElementBlock as C, openBlock as n, normalizeClass as d, unref as o, withCtx as N, renderSlot as m, createElementVNode as S } from "vue";
import { useFormItem as w } from "../../../utils/hooks/use-form-item.js";
import { createNamespace as E } from "../../../utils/create.js";
import { RadioGroupKey as R } from "./radio.js";
const I = /* @__PURE__ */ b({
  name: "tl-radio-group",
  __name: "radio-group",
  props: {
    type: { default: "radio" },
    modelValue: { type: [Number, String, Boolean] },
    direction: { default: "horizontal" },
    size: { default: "m" },
    solid: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "change"],
  setup(p, { emit: u }) {
    const a = E("radio-group"), l = p, i = u, t = g(l.modelValue), { size: c, disabled: f } = h(l), { mergedSize: s, mergedDisabled: r } = w({
      size: c,
      disabled: f
    });
    z(
      () => l.modelValue,
      (e) => {
        t.value = e;
      }
    );
    const y = (e) => {
      t.value = e, i("update:modelValue", t.value), i("change", t.value);
    };
    return V(R, {
      localValue: t,
      size: s.value,
      type: l.type,
      solid: l.solid,
      disabled: r.value,
      handleChange: y
    }), (e, _) => {
      const v = B("tl-space");
      return e.type === "radio" ? (n(), k(v, {
        key: 0,
        dir: e.direction,
        size: o(s),
        type: e.type,
        class: d([o(a).b(), o(a).is("disabled", o(r) ?? !1)])
      }, {
        default: N(() => [
          m(e.$slots, "default")
        ]),
        _: 3
      }, 8, ["dir", "size", "type", "class"])) : (n(), C("div", {
        key: 1,
        class: d([
          o(a).b(),
          o(a).is("solid", e.solid),
          o(a).m(e.type),
          o(a).m(o(s)),
          o(a).m(e.direction)
        ])
      }, [
        S("div", {
          class: d(o(a).e("container"))
        }, [
          m(e.$slots, "default")
        ], 2)
      ], 2));
    };
  }
});
export {
  I as default
};
