import { defineComponent as q, computed as x, shallowRef as G, ref as s, onMounted as J, watch as K, nextTick as Q, resolveComponent as X, createElementBlock as f, openBlock as p, normalizeClass as i, unref as n, createCommentVNode as C, createElementVNode as Y, normalizeStyle as A, toDisplayString as W, createVNode as Z } from "vue";
import { createNamespace as ee } from "../../../utils/create.js";
import { getSizeStyles as te, splitUnit as oe, getOutProp as ae } from "./utils.js";
import { useResizeObserver as le } from "../../../../node_modules/.pnpm/@vueuse_core@12.8.2_typescript@5.8.2/node_modules/@vueuse/core/index.js";
const ne = ["value", "placeholder", "disabled"], ce = /* @__PURE__ */ q({
  name: "tl-textarea",
  __name: "textarea",
  props: {
    id: { default: "" },
    modelValue: { default: "" },
    placeholder: { default: "" },
    clearable: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    showWordLimit: { type: Boolean, default: !1 },
    maxLength: { default: 0 },
    autoSize: {}
  },
  emits: ["update:modelValue", "input", "change", "clear", "focus", "blur"],
  setup($, { emit: E }) {
    const a = ee("textarea"), t = $, l = E, u = x(() => t.modelValue), r = G(), h = s(), F = x(() => t.showWordLimit ? `${u.value ? u.value.toString().length : 0}/${t.maxLength}` : ""), c = s(!1), I = (e) => {
      c.value = !0, l("focus", e);
    }, M = (e) => {
      c.value = !1, l("blur", e);
    }, O = (e) => {
      if (t.disabled || v.value)
        return;
      const { value: o } = e.target;
      z(o);
    }, V = (e) => {
      t.modelValue !== e && !c.value && l("change", e);
    }, P = x(() => t.clearable && u.value), D = () => {
      l("clear", ""), V(""), l("update:modelValue", "");
    }, v = s(!1), g = (e) => {
      const { value: o } = e.target;
      e.type === "compositionend" ? (v.value = !1, z(o)) : v.value = !0;
    }, z = (e) => {
      let o = e;
      t.maxLength && e.length > t.maxLength && (o = e.slice(0, Math.max(0, t.maxLength)), r.value.value = o), V(o), l("input", o), l("update:modelValue", o);
    }, k = s(), b = s(0);
    let m;
    const R = s();
    J(() => {
      m = getComputedStyle(r.value, null), t.autoSize && (R.value = te(m)), b.value = oe(m.getPropertyValue("line-height")), y();
    }), K(
      () => t.modelValue,
      () => y()
    );
    const y = async () => {
      var H, N;
      if (!t.autoSize)
        return;
      await Q();
      let e, o, d = "hidden";
      const L = (H = t.autoSize) == null ? void 0 : H.minRows, _ = (N = t.autoSize) == null ? void 0 : N.maxRows, { pt: T, pb: U, bw: j } = ae(m), B = T + U + j, S = h.value.offsetHeight;
      L && (e = b.value * L + B), _ && (o = b.value * _ + B);
      let w = S ?? 0;
      e && S < e && (w = e), o && S > o && (w = o, d = "auto"), k.value = {
        height: `${w}px`,
        resize: t.autoSize ? "none" : "vertical",
        overflow: d
      };
    };
    return le(r, y), (e, o) => {
      const d = X("tl-icon");
      return p(), f("div", {
        ref_key: "contentRef",
        ref: h,
        class: i([n(a).b(), n(a).is("disabled", e.disabled), n(a).is("focus", c.value)])
      }, [
        t.autoSize ? (p(), f("div", {
          key: 0,
          ref_key: "contentRef",
          ref: h,
          style: A(R.value),
          class: i([n(a).e("content")])
        }, W(e.modelValue), 7)) : C("", !0),
        t.showWordLimit ? (p(), f("span", {
          key: 1,
          class: i(n(a).e("wordLimit"))
        }, W(F.value), 3)) : C("", !0),
        Y("textarea", {
          ref_key: "textAreaRef",
          ref: r,
          value: u.value,
          rows: "5",
          cols: "",
          placeholder: e.placeholder,
          class: i([n(a).e("inner")]),
          disabled: e.disabled,
          style: A(k.value),
          onFocus: I,
          onBlur: M,
          onInput: O,
          onCompositionstart: g,
          onCompositionupdate: g,
          onCompositionend: g
        }, null, 46, ne),
        P.value && !e.disabled ? (p(), f("button", {
          key: 2,
          "aria-label": "清空内容",
          class: i(n(a).e("button")),
          onClick: D
        }, [
          Z(d, { icon: "fa-solid fa-xmark " })
        ], 2)) : C("", !0)
      ], 2);
    };
  }
});
export {
  ce as default
};
