import { defineComponent as D, ref as f, computed as c, watch as F, onMounted as O, resolveComponent as j, withDirectives as A, createElementBlock as d, openBlock as u, normalizeStyle as M, normalizeClass as s, unref as o, createElementVNode as r, createCommentVNode as n, createVNode as _, mergeProps as T, renderSlot as m, toDisplayString as g } from "vue";
import { createNamespace as U } from "../../../utils/create.js";
import q from "./hook/use-img-load-status.js";
import { pick as G, normalizeImageSizeProp as k, vObserveVisibility as H } from "./utils.js";
import { TlImagePreview as J } from "../index.js";
const K = ["src"], Q = { class: "icon" }, R = {
  key: 0,
  class: "alt"
}, W = { class: "title" }, X = { class: "description" }, te = /* @__PURE__ */ D({
  name: "tl-image",
  __name: "image",
  props: {
    src: {},
    width: {},
    height: {},
    title: {},
    alt: {},
    description: {},
    footerPosition: { default: "inner" },
    isLazy: { type: Boolean, default: !1 },
    fit: {},
    preview: { type: Boolean, default: !0 },
    popupContainer: {},
    onCancel: {}
  },
  setup(L) {
    const t = U("image"), e = L, { isLoaded: S, isError: y, isLoading: h, setLoadStatus: a } = q(), l = f(), b = c(
      () => G(e, ["width", "height", "title", "alt"])
    ), p = f(!1), z = c(() => e.fit ? {
      objectFit: e.fit
    } : {}), V = c(() => ({
      width: k(e.width),
      height: C.value ? void 0 : k(e.height)
    })), C = c(() => e.title || e.description), v = f(!1), I = (i) => {
      e.isLazy ? !l.value && i && (l.value = e.src) : l.value = e.src, v.value = i;
    };
    F(
      () => e.src,
      (i) => {
        a("loading"), v.value && (l.value = i), e.isLazy && !v.value && (l.value = "");
      }
    );
    const E = () => a("loaded"), P = () => a("error"), B = () => {
      e.preview && (p.value = !0);
    };
    return O(() => {
      a("loading");
    }), (i, w) => {
      const N = j("tl-icon");
      return A((u(), d("div", {
        class: s([o(t).b(), o(y) && o(t).m("error"), o(h) && o(t).m("loading")]),
        style: M(V.value)
      }, [
        r("img", T({
          class: o(t).e("img"),
          style: z.value,
          src: l.value
        }, b.value, {
          onLoad: E,
          onError: P,
          onClick: B
        }), null, 16, K),
        o(S) ? n("", !0) : (u(), d("div", {
          key: 0,
          class: s(o(t).e("overlay-container"))
        }, [
          o(y) ? m(i.$slots, "error", { key: 0 }, () => [
            r("div", {
              class: s([o(t).e("overlay"), o(t).em("overlay", "error")])
            }, [
              r("div", Q, [
                m(i.$slots, "error-icon", {}, () => [
                  _(N, { icon: "fa-file-excel" })
                ])
              ]),
              e.alt ? (u(), d("div", R, g(e.alt), 1)) : n("", !0)
            ], 2)
          ]) : n("", !0),
          o(h) ? m(i.$slots, "loading", { key: 1 }, () => [
            r("div", {
              class: s([o(t).e("overlay"), o(t).em("overlay", "loading")])
            }, null, 2)
          ]) : n("", !0)
        ], 2)),
        C.value ? (u(), d("div", {
          key: 1,
          class: s([o(t).e("footer"), o(t).em("footer", i.footerPosition)])
        }, [
          r("div", null, [
            r("div", W, g(e.title), 1),
            r("div", X, g(e.description), 1)
          ]),
          r("div", null, [
            m(i.$slots, "extra")
          ])
        ], 2)) : n("", !0),
        _(o(J), {
          visible: p.value,
          "onUpdate:visible": w[0] || (w[0] = ($) => p.value = $),
          src: e.src,
          "popup-container": e.popupContainer,
          onCancel: e.onCancel
        }, null, 8, ["visible", "src", "popup-container", "onCancel"])
      ], 6)), [
        [o(H), I]
      ]);
    };
  }
});
export {
  te as default
};
