import { defineComponent as _, computed as c, watch as f, createElementBlock as m, openBlock as n, Fragment as v, createBlock as d, createCommentVNode as y, createVNode as I, unref as a, withCtx as N, renderList as P } from "vue";
import p from "./hook/use-state.js";
import T, { TlImagePreview as V } from "../index.js";
import S from "../../space/index.js";
const j = /* @__PURE__ */ _({
  name: "TlImageGroup",
  __name: "preview-group",
  props: {
    visible: { type: Boolean },
    current: { default: 0 },
    srcList: {},
    width: {},
    height: {},
    defaultCurrent: { default: 0 },
    isRender: { type: Boolean, default: !0 },
    closable: { type: Boolean, default: !0 },
    maskClosable: { type: Boolean, default: !0 },
    fit: {},
    onCancel: {}
  },
  emits: ["update:visible", "update:current"],
  setup(b, { emit: h }) {
    const e = b, s = h, [l, o] = p(
      e.defaultCurrent,
      e.current,
      (t) => s("update:current", t)
    ), [C, i] = p(
      e.visible,
      !1,
      (t) => s("update:visible", t)
    ), r = c(() => {
      var t;
      return (t = e.srcList) == null ? void 0 : t.length;
    }), g = c(() => {
      if (e.srcList && e.srcList.length) return e.srcList[l.value];
    });
    f(
      () => e.visible,
      (t) => i(t)
    ), f(
      () => e.current,
      (t) => o(t)
    );
    const k = (t) => {
      o(t), i(!0);
    }, w = () => {
      var t;
      i(!1), (t = e.onCancel) == null || t.call(e);
    }, x = () => {
      r.value && (l.value >= r.value - 1 ? l.value = 0 : l.value++);
    }, B = () => {
      r.value && (l.value <= 0 ? l.value = r.value - 1 : l.value--);
    };
    return (t, O) => (n(), m(v, null, [
      e.isRender ? (n(), d(a(S), { key: 0 }, {
        default: N(() => [
          (n(!0), m(v, null, P(e.srcList, (u, L) => (n(), d(a(T), {
            key: u,
            src: u,
            width: e.width,
            height: e.height,
            preview: !1,
            fit: e.fit,
            onClick: () => k(L)
          }, null, 8, ["src", "width", "height", "fit", "onClick"]))), 128))
        ]),
        _: 1
      })) : y("", !0),
      I(a(V), {
        visible: a(C),
        src: g.value,
        closable: e.closable,
        "mask-closable": e.maskClosable,
        "preview-group": "",
        onOnNext: x,
        onOnPrev: B,
        onCancel: w
      }, null, 8, ["visible", "src", "closable", "mask-closable"])
    ], 64));
  }
});
export {
  j as default
};
