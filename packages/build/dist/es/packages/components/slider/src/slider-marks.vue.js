import { defineComponent as h, computed as u, createVNode as b, createElementBlock as d, openBlock as i, normalizeClass as c, unref as r, Fragment as g, renderList as M, normalizeStyle as _, createElementVNode as m, createBlock as C, resolveDynamicComponent as E } from "vue";
import { createNamespace as S } from "../../../utils/create.js";
const x = ["onClick"], B = ["onClick"], V = /* @__PURE__ */ h({
  inheritAttrs: !1,
  __name: "slider-marks",
  props: {
    modelValue: { default: () => [] },
    direction: {},
    disabled: { type: Boolean },
    height: {},
    percentStart: { default: 0 },
    percentEnd: { default: 0 },
    rangeMin: { default: 0 },
    rangeMax: { default: 100 }
  },
  emits: ["position"],
  setup(f, { emit: v }) {
    const n = S("sliderMarks"), e = f, p = v, k = u(() => (o) => e.direction === "horizontal" ? {
      left: o + "%"
    } : e.direction === "vertical" ? {
      // bottom: percent + "%",
      bottom: o / 100 * e.height + "px"
    } : {}), y = u(() => {
      const o = e.rangeMax - e.rangeMin;
      return e.modelValue.map((a) => {
        const t = a.key - e.rangeMin, s = Math.round(t / o * 100) || 0, l = s / 100;
        return {
          ...a,
          percent: s,
          isOver: l === e.percentStart || l === e.percentEnd,
          isOvered: l > e.percentStart && l < e.percentEnd,
          markInfo: a.labelNode || b("span", { style: a.style }, a.label)
        };
      });
    });
    return (o, a) => (i(), d("div", {
      class: c([r(n).b(), r(n).m(o.direction), r(n).is("disabled", o.disabled)])
    }, [
      (i(!0), d(g, null, M(y.value, (t) => (i(), d("div", {
        key: t.key,
        class: c([
          r(n).e("item"),
          r(n).is("over", t.isOver),
          r(n).is("overed", t.isOvered)
        ]),
        style: _(k.value(t.percent))
      }, [
        m("div", {
          class: c(r(n).e("item-pointer")),
          onClick: (s) => p("position", t.percent)
        }, null, 10, x),
        m("div", {
          class: c(r(n).e("item-box")),
          onClick: (s) => p("position", t.percent)
        }, [
          (i(), C(E(t.markInfo)))
        ], 10, B)
      ], 6))), 128))
    ], 2));
  }
});
export {
  V as default
};
