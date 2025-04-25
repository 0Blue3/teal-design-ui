import { defineComponent as _, toRefs as ee, ref as p, unref as e, computed as F, watch as se, createElementBlock as i, openBlock as n, Fragment as le, createElementVNode as y, createVNode as ae, mergeProps as oe, createCommentVNode as r, normalizeClass as u, renderSlot as v, normalizeStyle as te, createBlock as N, toDisplayString as V, Transition as ne, withCtx as ue } from "vue";
import { useFormItem as re } from "../../../utils/hooks/use-form-item.js";
import { createNamespace as ie } from "../../../utils/create.js";
import T from "../../icon/index.js";
const de = ["id", "name", "placeholder", "disabled", "readonly", "required", "type", "value", "aria-disabled"], pe = { key: 0 }, he = /* @__PURE__ */ _({
  name: "tl-input",
  __name: "input",
  props: {
    id: {},
    name: {},
    size: { default: "m" },
    type: { default: "text" },
    placeholder: {},
    modelValue: { default: "" },
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    required: { type: Boolean, default: !1 },
    clearable: { type: Boolean, default: !1 },
    visible: { type: Boolean, default: !0 },
    status: { default: "primary" },
    loading: { type: Boolean, default: !1 },
    showCounter: { type: Boolean, default: !1 },
    limit: { default: -1 },
    style: {},
    message: { default: "" },
    inputStyle: {}
  },
  emits: [
    "focus",
    "blur",
    "clear",
    "change",
    "submit",
    "keydown",
    "update:modelValue",
    "hoverin",
    "hoverout"
  ],
  setup(R, { expose: D, emit: L }) {
    const l = ie("input"), o = R, { disabled: h, status: C, message: b, size: M, inputStyle: P } = ee(o), { mergedDisabled: c, isError: $, mergedStatus: H, mergedSize: K, validate: g } = re({
      disabled: h,
      status: C,
      message: b,
      size: M
    }), m = p(!1), S = o.limit > 0, j = o.showCounter && S, I = o.type === "password" && !o.disabled && o.visible;
    let a = e(o.modelValue);
    const z = p(a.length), t = L, d = p(), f = p(!1), w = p(!1), q = p(a.length > 0), k = p(o.type), A = F(() => k.value === "password" ? "eye-slash" : "eye"), E = F(() => q.value && (o.clearable || o.visible) && (f.value || w.value)), G = () => {
      var s;
      k.value = ((s = d.value) == null ? void 0 : s.type) === "text" ? "password" : "text";
    }, J = () => {
      d.value.value = "", d.value.focus(), B(), t("clear", "");
    }, O = () => {
      o.disabled || o.readonly || (f.value = !0, g("focus"), t("focus", a));
    }, B = () => {
      var s;
      o.disabled || o.readonly || (a = ((s = d.value) == null ? void 0 : s.value) ?? "", S && !m.value && a.length > o.limit && (a = a.slice(0, o.limit), d.value.value = a), q.value = a.length > 0, z.value = a.length, g("change"), t("update:modelValue", a), t("change", a));
    }, Q = () => {
      f.value = !1, g("blur"), t("blur", a);
    }, U = () => {
      w.value = !0, t("hoverin");
    }, W = () => {
      w.value = !1, t("hoverout");
    }, X = () => {
      m.value = !0;
    }, Y = () => {
      m.value = !1, B();
    }, Z = (s) => {
      s.key === "Enter" && !m.value && t("submit"), t("keydown", s);
    }, x = (s) => {
      a = s, t("update:modelValue", a), t("change", a);
    };
    return se(
      () => o.modelValue,
      (s) => {
        a = s, t("update:modelValue", a);
      }
    ), D({
      inputRef: d,
      setValue: x
    }), (s, ce) => (n(), i(le, null, [
      y("div", oe({
        class: [
          e(l).b(),
          e(l).is("prepend", !!s.$slots.prepend),
          e(l).is("append", !!s.$slots.append),
          e(l).m(e(K))
        ],
        style: s.style
      }, s.$attrs, {
        onMouseenter: U,
        onMouseleave: W
      }), [
        s.$slots.prepend ? (n(), i("span", {
          key: 0,
          class: u(e(l).e("prepend"))
        }, [
          v(s.$slots, "prepend")
        ], 2)) : r("", !0),
        y("div", {
          class: u([
            e(l).e("wrapper"),
            !e(c) && e(l).em("wrapper", `${e(C)}`),
            e(l).is("focus", f.value && !e(c) && !e($)),
            e(l).is("loading", s.loading),
            e(l).is("readonly", s.readonly),
            e(l).is("disabled", e(c)),
            e($) && e(l).em("wrapper", "danger")
          ])
        }, [
          s.$slots.prefix ? (n(), i("span", {
            key: 0,
            class: u(e(l).e("prefix"))
          }, [
            v(s.$slots, "prefix")
          ], 2)) : r("", !0),
          y("input", {
            ref_key: "inputRef",
            ref: d,
            id: s.id,
            name: s.name,
            placeholder: s.placeholder,
            disabled: e(c),
            readonly: s.readonly,
            required: s.required,
            class: u(e(l).e("inner")),
            type: k.value,
            value: e(a),
            "aria-disabled": e(c),
            style: te(e(P)),
            onFocus: O,
            onInput: B,
            onBlur: Q,
            onCompositionstart: X,
            onCompositionend: Y,
            onKeydown: Z
          }, null, 46, de),
          e(I) || s.clearable && !e(h) ? (n(), i("div", {
            key: 1,
            class: u([e(l).e("buttons")])
          }, [
            e(I) ? (n(), N(e(T), {
              key: 0,
              onClick: G,
              class: u(e(l).is("show", E.value)),
              icon: A.value
            }, null, 8, ["class", "icon"])) : r("", !0),
            s.clearable && !e(h) ? (n(), N(e(T), {
              key: 1,
              class: u(e(l).is("show", E.value)),
              icon: "close",
              onClick: J
            }, null, 8, ["class"])) : r("", !0)
          ], 2)) : r("", !0),
          s.showCounter ? (n(), i("div", {
            key: 2,
            class: u(e(l).e("counter"))
          }, [
            y("span", null, V(z.value), 1),
            e(j) ? (n(), i("span", pe, " / " + V(s.limit), 1)) : r("", !0)
          ], 2)) : r("", !0),
          s.$slots.suffix ? (n(), i("span", {
            key: 3,
            class: u(e(l).e("suffix"))
          }, [
            v(s.$slots, "suffix")
          ], 2)) : r("", !0)
        ], 2),
        s.$slots.append ? (n(), i("span", {
          key: 1,
          class: u(e(l).e("append"))
        }, [
          v(s.$slots, "append")
        ], 2)) : r("", !0)
      ], 16),
      ae(ne, { name: "fade" }, {
        default: ue(() => [
          e(b) ? (n(), i("div", {
            key: 0,
            class: u(e(l).em("message", e(H)))
          }, V(e(b)), 3)) : r("", !0)
        ]),
        _: 1
      })
    ], 64));
  }
});
export {
  he as default
};
