import { defineComponent as j, toRefs as q, ref as w, computed as i, onMounted as F, watch as x, resolveComponent as G, createElementBlock as J, openBlock as C, normalizeClass as f, unref as t, createElementVNode as V, createVNode as E, normalizeStyle as R, createBlock as K, createCommentVNode as O, withCtx as _, isRef as Q } from "vue";
import { createNamespace as Z } from "../../../utils/create.js";
import { useSlider as ee } from "./useSlider.js";
import te from "./slider-marks.vue.js";
const ie = /* @__PURE__ */ j({
  name: "tl-slider",
  __name: "slider",
  props: {
    modelValue: { default: 0 },
    min: { default: 0 },
    max: { default: 100 },
    step: { default: 1 },
    marks: { default: () => [] },
    direction: { default: "horizontal" },
    height: { default: 200 },
    disabled: { type: Boolean, default: !1 },
    showInput: { type: Boolean, default: !1 }
  },
  setup(P, { emit: T }) {
    const o = Z("slider"), e = P, { modelValue: u, marks: y, min: D, max: N } = q(e), s = w(), W = T, d = i(() => Array.isArray(u.value)), M = i(() => e.max - e.min), a = w(0), B = () => {
      e.direction === "horizontal" ? a.value = s.value ? s.value.offsetWidth : 0 : e.direction === "vertical" && (a.value = s.value ? s.value.offsetHeight : 0);
    };
    F(() => {
      B(), window.addEventListener("resize", B);
    });
    const A = i(() => d.value ? (u.value[0] || 0).toString() : "0"), L = i(() => d.value ? (u.value[1] || 0).toString() : u.value.toString()), k = i(() => e.direction === "horizontal" ? "top" : "right"), r = w(0), c = w(0), h = i(() => {
      if (d.value) {
        const n = (u.value[0] || 0) - e.min;
        return Math.round(n / M.value * 100) / 100;
      } else
        return 0;
    }), g = i(() => {
      if (d.value) {
        const n = (u.value[1] || 0) - e.min;
        return Math.round(n / M.value * 100) / 100;
      } else {
        const l = u.value;
        return Math.round(l / M.value * 100) / 100;
      }
    }), H = i(() => e.direction === "horizontal" ? {
      height: "2px"
    } : e.direction === "vertical" ? {
      height: e.height + "px",
      width: "2px"
    } : {}), I = i(() => e.direction === "horizontal" ? {
      top: 0,
      height: "2px",
      left: r.value + "px",
      width: c.value - r.value + "px"
    } : e.direction === "vertical" ? {
      left: 0,
      width: "2px",
      bottom: r.value + "px",
      height: c.value - r.value + "px"
    } : {}), {
      moving: b,
      isEndBtn: z,
      handleStartMouseDown: U,
      handleEndMouseDown: X,
      emitValue: Y
    } = ee(e, s, a, r, c, d, W);
    x(
      h,
      () => {
        b.value || (r.value = h.value * a.value);
      },
      { immediate: !0 }
    ), x(
      g,
      () => {
        b.value || (c.value = g.value * a.value);
      },
      { immediate: !0 }
    ), x(
      a,
      () => {
        r.value = h.value * a.value, c.value = g.value * a.value;
      },
      { immediate: !0 }
    );
    function S(l) {
      if (e.disabled) return;
      let n = l / 100;
      if (d.value) {
        let v = Math.abs(h.value - n), m = Math.abs(g.value - n);
        v >= m ? c.value = n * a.value : r.value = n * a.value;
      } else
        c.value = n * a.value;
      Y("update:modelValue");
    }
    function $(l) {
      if (e.disabled) return;
      const v = s.value.getBoundingClientRect();
      if (e.direction === "horizontal") {
        const m = l.clientX - v.left;
        let p = Math.round(m / a.value * 100);
        p = Math.round(p / e.step) * e.step, S(p);
      } else if (e.direction === "vertical") {
        const m = a.value - (l.clientY - v.top);
        let p = Math.round(m / a.value * 100);
        p = Math.round(p / e.step) * e.step, S(p);
      }
    }
    return (l, n) => {
      const v = G("tl-tooltip");
      return C(), J("div", {
        class: f([t(o).b(), t(o).is("disabled", l.disabled)])
      }, [
        V("div", {
          ref_key: "runwayRef",
          ref: s,
          class: f(t(o).e("runway")),
          style: R(H.value),
          onClick: $
        }, [
          V("div", {
            class: f([t(o).e("bar"), t(o).m(l.direction)]),
            style: R(I.value)
          }, [
            d.value ? (C(), K(v, {
              key: 0,
              class: f([t(o).e("bar-button-start")]),
              placement: k.value,
              open: t(b) && !t(z),
              trigger: "hover",
              content: A.value,
              onMousedown: t(U)
            }, {
              default: _(() => [
                V("div", {
                  class: f(t(o).e("bar-tooltipSpan"))
                }, null, 2)
              ]),
              _: 1
            }, 8, ["class", "placement", "open", "content", "onMousedown"])) : O("", !0),
            E(v, {
              class: f(t(o).e("bar-button-end")),
              placement: k.value,
              open: t(b) && t(z),
              trigger: "hover",
              content: L.value,
              onMousedown: t(X)
            }, {
              default: _(() => [
                V("div", {
                  class: f(t(o).e("bar-tooltipSpan"))
                }, null, 2)
              ]),
              _: 1
            }, 8, ["class", "placement", "open", "content", "onMousedown"])
          ], 6)
        ], 6),
        E(te, {
          modelValue: t(y),
          "onUpdate:modelValue": n[0] || (n[0] = (m) => Q(y) ? y.value = m : null),
          direction: l.direction,
          disabled: l.disabled,
          height: l.height,
          "range-min": t(D),
          "range-max": t(N),
          "percent-start": h.value,
          "percent-end": g.value,
          onPosition: S
        }, null, 8, ["modelValue", "direction", "disabled", "height", "range-min", "range-max", "percent-start", "percent-end"])
      ], 2);
    };
  }
});
export {
  ie as default
};
