import { defineComponent as V, inject as N, computed as S, createElementBlock as i, openBlock as s, normalizeClass as n, unref as e, renderSlot as r, createVNode as $, withCtx as d, createElementVNode as D } from "vue";
import { createNamespace as E } from "../../../utils/create.js";
import { dropdownContextKey as I } from "./dropdown.js";
import j from "../../tooltip/index.js";
const A = /* @__PURE__ */ V({
  __name: "dropdown-item",
  props: {
    value: { default: "" },
    disabled: { type: Boolean, default: !1 },
    submenu: { type: Boolean, default: !1 },
    animation: { default: "" },
    dir: { default: "right" }
  },
  setup(c) {
    const t = E("dropdown__item"), p = c, {
      selectedValue: m,
      isOpen: u,
      arrow: f,
      trigger: y,
      openDelay: g,
      closeDelay: v,
      overlayStyle: w,
      zIndex: b
    } = N(I), { value: h, disabled: a, animation: _, dir: l } = p, k = {
      left: "downLeft",
      right: "downRight"
    }, C = {
      left: "left-start",
      right: "right-start"
    }, x = _ || k[l], z = C[l], B = S(() => [
      w,
      {
        top: "-4px",
        [l]: "-8px"
      }
    ]);
    function O() {
      a || (u.value = !1, m.value = h);
    }
    return (o, K) => o.submenu ? (s(), i("div", {
      key: 1,
      class: n([e(t).b(), e(t).is("disabled", e(a))])
    }, [
      $(e(j), {
        arrow: e(f),
        trigger: e(y),
        animation: e(x),
        placement: e(z),
        "open-delay": e(g),
        "close-delay": e(v),
        "overlay-style": B.value,
        "z-index": e(b)
      }, {
        content: d(() => [
          r(o.$slots, "default")
        ]),
        default: d(() => [
          D("div", {
            class: n([e(t).e("title")])
          }, [
            r(o.$slots, "title")
          ], 2)
        ]),
        _: 3
      }, 8, ["arrow", "trigger", "animation", "placement", "open-delay", "close-delay", "overlay-style", "z-index"])
    ], 2)) : (s(), i("div", {
      key: 0,
      onClick: O,
      class: n([e(t).b(), e(t).is("disabled", e(a))])
    }, [
      r(o.$slots, "default")
    ], 2));
  }
});
export {
  A as default
};
