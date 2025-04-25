import { defineComponent as m, ref as f, watch as v, provide as h, createElementBlock as g, openBlock as y, normalizeClass as K, unref as r, renderSlot as C } from "vue";
import { createNamespace as b } from "../../../utils/create.js";
import { CollapseGroupContextKey as _ } from "./collapse.js";
const A = /* @__PURE__ */ m({
  name: "TlCollapseGroup",
  __name: "collapse-group",
  props: {
    activeKey: {},
    defaultActiveKey: { default: () => [] },
    accordion: { type: Boolean, default: !1 },
    border: { type: Boolean, default: !0 },
    size: { default: "m" }
  },
  emits: ["update:modelValue", "change"],
  setup(d, { emit: u }) {
    var s, i;
    const l = b("collapse-group"), o = d;
    console.log(o);
    const c = u, a = f((s = o.activeKey) != null && s.length ? o.activeKey : o.defaultActiveKey);
    v(() => o.activeKey, (e) => {
      e && (a.value = e);
    }), o.accordion && ((i = a.value) == null ? void 0 : i.length) > 1 && console.log("according mode should only have one active item");
    const p = (e) => {
      let t = [...a.value];
      if (o.accordion)
        t = [a.value[0] === e ? "" : e];
      else {
        const n = t.indexOf(e);
        n > -1 ? t.splice(n, 1) : t.push(e);
      }
      a.value = t, c("update:modelValue", t), c("change", t);
    };
    return h(_, {
      activeKeys: a,
      size: o.size,
      handleItemClick: p
    }), (e, t) => (y(), g("div", {
      class: K([r(l).b(), r(l).is("border", e.border)])
    }, [
      C(e.$slots, "default")
    ], 2));
  }
});
export {
  A as default
};
