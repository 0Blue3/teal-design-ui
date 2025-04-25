import { defineComponent as Z, ref as d, onMounted as q, computed as T, watch as H, reactive as $, resolveComponent as E, createBlock as J, openBlock as b, Teleport as K, createVNode as o, Transition as Q, withCtx as u, withDirectives as U, createCommentVNode as k, createElementBlock as x, normalizeStyle as p, normalizeClass as l, unref as e, createElementVNode as n, Fragment as W, toDisplayString as X, vShow as Y } from "vue";
import { createNamespace as ee } from "../../../utils/create.js";
import { popupManager as y } from "../../../utils/utils.js";
import { getPopupContainer as te, formatePercentage as oe } from "./utils.js";
import le from "./hook/use-img-scale.js";
import ae from "./hook/use-img-drag.js";
const ne = ["src"], w = 90, me = /* @__PURE__ */ Z({
  name: "tl-image-preview",
  __name: "preview",
  props: {
    visible: { type: Boolean },
    src: {},
    closable: { type: Boolean, default: !0 },
    maskClosable: { type: Boolean, default: !0 },
    previewGroup: { type: Boolean, default: !1 },
    popupContainer: {},
    unmountOnClose: { type: Boolean, default: !1 },
    onCancel: {}
  },
  emits: ["update:visible", "onNext", "onPrev"],
  setup(N, { emit: R }) {
    const t = ee("image-preview"), a = N, C = R, g = d(a.visible), c = d(0), r = d();
    q(() => r.value = te(a.popupContainer));
    const _ = d(), I = d(), O = T(() => r.value === document.body), P = T(() => ({ ...O.value ? { zIndex: y.nextIndex() } : { zIndex: "inherit", position: "absolute", height: "100%" } }));
    H(
      () => a.visible,
      (s) => {
        !s && a.unmountOnClose ? g.value = !1 : g.value = !0, r.value && (s ? r.value.style.overflow = "hidden" : r.value.style.overflow = "");
      }
    );
    const { scale: f, resetScale: D, adjustZoom: h } = le(
      $({ wrapperEl: I })
    ), { translate: S, resetTranslate: V } = ae(
      $({ imageEl: _, scale: f })
    ), z = () => {
      var s;
      C("update:visible", !1), (s = a.onCancel) == null || s.call(a);
    }, B = (s) => {
      a.maskClosable && s.target === s.currentTarget && z();
    }, F = () => {
      c.value = c.value === 0 ? 360 - w : c.value - w;
    }, G = () => {
      c.value = (c.value + w) % 360;
    }, M = () => {
      h("zoomIn");
    }, j = () => {
      h("zoomOut");
    }, A = () => {
      D(), V();
    };
    return (s, v) => {
      const i = E("tl-icon"), m = E("tl-tooltip");
      return b(), J(K, {
        to: r.value,
        disabled: !r.value
      }, [
        o(Q, { name: "preview-fade" }, {
          default: u(() => [
            g.value ? U((b(), x("div", {
              key: 0,
              ref_key: "wrapperRef",
              ref: I,
              class: l(e(t).b()),
              style: p(P.value)
            }, [
              n("div", {
                class: l(e(t).e("mask")),
                onClick: B
              }, null, 2),
              n("div", {
                class: l(e(t).e("body")),
                style: p({
                  transform: `scale(${e(f)}, ${e(f)})`
                }),
                onClick: B
              }, [
                n("img", {
                  ref_key: "imageRef",
                  ref: _,
                  src: a.src,
                  class: l(e(t).e("img")),
                  style: p({
                    transform: `rotate(${c.value}deg) translate(${e(S)[0]}px, ${e(S)[1]}px)`
                  })
                }, null, 14, ne)
              ], 6),
              a.closable ? (b(), x("button", {
                key: 0,
                class: l(e(t).e("close-btn")),
                onClick: z
              }, [
                o(i, { icon: "fa-xmark" })
              ], 2)) : k("", !0),
              a.previewGroup ? (b(), x(W, { key: 1 }, [
                n("button", {
                  class: l(e(t).e("arrow-left")),
                  style: p({ zIndex: e(y).nextIndex() }),
                  onClick: v[0] || (v[0] = (L) => C("onPrev"))
                }, [
                  o(i, { icon: "fa-angle-left" })
                ], 6),
                n("button", {
                  class: l(e(t).e("arrow-right")),
                  style: p({ zIndex: e(y).nextIndex() }),
                  onClick: v[1] || (v[1] = (L) => C("onNext"))
                }, [
                  o(i, { icon: "fa-angle-right" })
                ], 6)
              ], 64)) : k("", !0),
              n("div", {
                class: l(e(t).e("toolbar")),
                style: p({ zIndex: e(y).nextIndex() })
              }, [
                o(m, {
                  placement: "top",
                  title: "向左旋转",
                  "close-delay": 0
                }, {
                  default: u(() => [
                    n("button", {
                      class: l(e(t).e("toolbar-btn")),
                      onClick: F
                    }, [
                      o(i, { icon: "fa-arrow-rotate-left" })
                    ], 2)
                  ]),
                  _: 1
                }),
                o(m, {
                  placement: "top",
                  title: "向右旋转",
                  "close-delay": 0
                }, {
                  default: u(() => [
                    n("button", {
                      class: l(e(t).e("toolbar-btn")),
                      onClick: G
                    }, [
                      o(i, { icon: "fa-arrow-rotate-right" })
                    ], 2)
                  ]),
                  _: 1
                }),
                o(m, {
                  placement: "top",
                  title: "放大",
                  "close-delay": 0
                }, {
                  default: u(() => [
                    n("button", {
                      class: l(e(t).e("toolbar-btn")),
                      onClick: M
                    }, [
                      o(i, { icon: "fa-plus " })
                    ], 2)
                  ]),
                  _: 1
                }),
                o(m, {
                  placement: "top",
                  title: "缩小",
                  "close-delay": 0
                }, {
                  default: u(() => [
                    n("button", {
                      class: l(e(t).e("toolbar-btn")),
                      onClick: j
                    }, [
                      o(i, { icon: "fa-minus" })
                    ], 2)
                  ]),
                  _: 1
                }),
                o(m, {
                  placement: "top",
                  title: "原始比例",
                  "close-delay": 0
                }, {
                  default: u(() => [
                    n("button", {
                      class: l(e(t).e("toolbar-btn")),
                      style: { width: "50px" },
                      onClick: A
                    }, [
                      n("span", null, X(e(oe)(e(f))), 1)
                    ], 2)
                  ]),
                  _: 1
                })
              ], 6)
            ], 6)), [
              [Y, a.visible]
            ]) : k("", !0)
          ]),
          _: 1
        })
      ], 8, ["to", "disabled"]);
    };
  }
});
export {
  me as default
};
