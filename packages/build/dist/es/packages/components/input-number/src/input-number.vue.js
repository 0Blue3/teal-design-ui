import { defineComponent as K, ref as d, toRefs as P, computed as v, onMounted as U, watch as _, resolveComponent as j, createBlock as q, openBlock as G, unref as o, mergeProps as J, withCtx as O, withDirectives as Q, createElementVNode as W, normalizeClass as X, createVNode as R, vShow as Y } from "vue";
import { useFormItem as Z } from "../../../utils/hooks/use-form-item.js";
import { createNamespace as ee } from "../../../utils/create.js";
import te from "../../input/index.js";
import { calculate as $, numberMatchReg as ne, normalizeNumber as ae } from "./utils.js";
const oe = 250, le = 60, de = /* @__PURE__ */ K({
  name: "tl-input-number",
  __name: "input-number",
  props: {
    modelValue: {},
    max: { default: 1 / 0 },
    min: { default: -1 / 0 },
    step: { default: 1 },
    precision: { default: 0 },
    size: { default: "m" },
    disabled: { type: Boolean, default: !1 },
    message: {},
    controls: { type: Boolean, default: !0 },
    formatter: { type: Function, default: (c) => c }
  },
  emits: ["update:modelValue", "increase", "decrease"],
  setup(c, { emit: T }) {
    const f = ee("inputNumber"), p = T, l = c, b = d(!1), w = d(!1), n = P(l), t = d(0), k = d(), { disabled: E, size: H } = n, { mergedSize: i, mergedDisabled: M } = Z({ disabled: E, size: H });
    let u;
    const s = v(() => {
      let e = n.precision.value;
      return (!Number.isInteger(e) || e > 20) && (e = 0), e;
    }), N = () => l.max === 1 / 0 && l.min === -1 / 0 ? 0 : l.min;
    let y, V;
    const B = (e) => {
      if (l.disabled) return;
      const a = e === 1 ? x : z;
      window.addEventListener("mouseup", r), y = window.setTimeout(() => {
        V = window.setInterval(() => {
          a();
        }, le);
      }, oe);
    }, r = () => {
      y && clearTimeout(y), V && clearInterval(V), window.removeEventListener("mouseup", r);
    }, g = v(() => l.disabled || t.value <= n.min.value), I = v(() => l.disabled || t.value >= n.max.value);
    U(() => {
      var e;
      t.value = ((e = n.modelValue) == null ? void 0 : e.value) ?? N();
    });
    const x = () => {
      if (I.value) {
        r();
        return;
      }
      u = $(t.value, n.step.value, s.value), t.value = u >= n.max.value ? n.max.value : u, m(), p("increase");
    }, z = () => {
      if (g.value) {
        r();
        return;
      }
      u = $(t.value, -n.step.value, s.value), t.value = u <= n.min.value ? n.min.value : u, m(), p("decrease");
    }, S = (e) => {
      e.key === "ArrowUp" && x(), e.key === "ArrowDown" && z();
    }, h = () => {
      m();
    }, A = () => {
      w.value = !0;
    }, L = (e) => {
      var a;
      t.value = e ? Number((e.match(ne) ?? ["0"])[0]) : 0, s.value === 0 ? t.value = Math.trunc(t.value) : t.value = ae(t.value, s.value), I.value && (t.value = n.max.value), g.value && (t.value = n.min.value), m(), w.value = !1, (a = k.value) == null || a.setValue(D.value);
    }, m = () => {
      p("update:modelValue", t.value);
    }, D = v(() => {
      const e = t.value.toFixed(s.value);
      return w.value ? e : n.formatter.value(e) ?? e;
    });
    return _(
      () => l.modelValue,
      (e) => {
        t.value = e ?? N();
      }
    ), (e, a) => {
      const F = j("tl-button");
      return G(), q(o(te), J({
        ref_key: "inputRef",
        ref: k,
        "model-value": D.value,
        disabled: o(M),
        size: o(i),
        class: o(f).b()
      }, e.$attrs, {
        onFocus: A,
        onChange: h,
        onBlur: L,
        onHoverin: a[2] || (a[2] = (C) => b.value = !0),
        onHoverout: a[3] || (a[3] = (C) => b.value = !1),
        onKeydown: S
      }), {
        suffix: O(() => [
          Q(W("div", {
            class: X([o(f).e("buttons--number"), o(f).em("buttons--number", o(i))])
          }, [
            R(F, {
              disabled: I.value,
              size: o(i),
              type: "secondary",
              onClick: x,
              onMousedown: a[0] || (a[0] = (C) => B(1)),
              icon: "fa-angle-up"
            }, null, 8, ["disabled", "size"]),
            R(F, {
              disabled: g.value,
              size: o(i),
              type: "secondary",
              onClick: z,
              onMousedown: a[1] || (a[1] = (C) => B(0)),
              icon: "fa-angle-down"
            }, null, 8, ["disabled", "size"])
          ], 2), [
            [Y, e.controls && !o(M) && b.value]
          ])
        ]),
        _: 1
      }, 16, ["model-value", "disabled", "size", "class"]);
    };
  }
});
export {
  de as default
};
