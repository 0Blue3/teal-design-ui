import { defineComponent as k, toRefs as z, provide as j, reactive as x, createElementBlock as B, openBlock as C, withModifiers as O, normalizeClass as S, unref as r, renderSlot as M } from "vue";
import { formContextKey as W } from "./form.js";
import { createNamespace as g } from "../../../utils/create.js";
import { isFunction as w } from "../../../utils/is.js";
const $ = /* @__PURE__ */ k({
  name: "tl-form",
  __name: "form",
  props: {
    model: {},
    id: {},
    rules: {},
    labelWidth: { default: 116 },
    layout: { default: "horizontal" },
    size: { default: "m" },
    disabled: { type: Boolean, default: !1 }
  },
  setup(f, { expose: c }) {
    const l = g("form"), t = {}, m = f, { model: u, disabled: p, rules: h, labelWidth: b, size: i, layout: n } = z(m), v = async (e) => {
      const o = [];
      let s = {};
      return Object.keys(t).forEach((a) => {
        o.push(t[a].validate());
      }), Promise.all(o).then((a) => (a.forEach((d) => {
        d && (s = {
          ...s,
          ...d.fields
        });
      }), w(e) && e(), Object.keys(s).length == 0 ? !0 : s));
    }, y = (e) => {
      const o = e.field;
      t[o] = e;
    }, _ = (e) => {
      delete t[e];
    }, E = () => {
      Object.keys(t).forEach((e) => {
        t[e].resetField();
      });
    }, F = (e) => {
    };
    return j(
      W,
      x({
        model: u,
        labelWidth: b,
        disabled: p,
        size: i,
        layout: n,
        rules: h,
        addField: y,
        removeField: _
      })
    ), c({
      validate: v,
      resetFields: E
    }), (e, o) => (C(), B("form", {
      class: S([r(l).b(), r(l).m(r(n)), r(l).m(r(i))]),
      onSubmit: O(F, ["prevent"])
    }, [
      M(e.$slots, "default")
    ], 34));
  }
});
export {
  $ as default
};
