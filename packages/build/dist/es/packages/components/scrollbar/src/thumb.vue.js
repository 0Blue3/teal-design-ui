import { defineComponent as C, inject as B, computed as w, ref as a, toRef as b, createBlock as T, openBlock as X, Transition as Y, unref as c, withCtx as k, withDirectives as P, createElementVNode as E, normalizeClass as g, normalizeStyle as $, vShow as j } from "vue";
import { createNamespace as H } from "../../../utils/create.js";
import { scrollbarContextKey as K } from "./scrollbar.js";
import { useEventListener as y } from "../../../../node_modules/.pnpm/@vueuse_core@12.8.2_typescript@5.8.2/node_modules/@vueuse/core/index.js";
const W = /* @__PURE__ */ C({
  __name: "thumb",
  props: {
    vertical: { type: Boolean },
    always: { type: Boolean },
    size: {},
    move: {},
    ratio: {}
  },
  setup(L) {
    const l = H("scrollbar-bar"), o = L, r = B(K);
    if (!r) throw new Error("can not inject scrollbar context!");
    const z = w(() => o.vertical ? {
      height: o.size,
      transform: `translateY(${o.move}px)`
    } : {
      width: o.size,
      transform: `translateX(${o.move}px)`
    });
    let i = document.onselectstart, n = 0;
    const u = a(!1), v = a(0), d = a(0), m = a(!1), S = (e) => {
      var t, s, h;
      e.stopPropagation(), !(e.ctrlKey || [1, 2].includes(e.button)) && (m.value = !0, (t = window.getSelection()) == null || t.removeAllRanges(), e.stopImmediatePropagation(), document.addEventListener("mousemove", f), document.addEventListener("mouseup", p), i = document.onselectstart, document.onselectstart = () => !1, o.vertical ? n = ((s = r.wrapEl) == null ? void 0 : s.scrollTop) ?? 0 : n = ((h = r.wrapEl) == null ? void 0 : h.scrollLeft) ?? 0, v.value = e.screenY, d.value = e.screenX);
    }, f = (e) => {
      const t = r == null ? void 0 : r.wrapEl;
      if (t)
        if (o.vertical) {
          const s = e.screenY - v.value;
          t.scrollTop = n + s * t.scrollHeight / t.clientHeight;
        } else {
          const s = e.screenX - d.value;
          t.scrollLeft = n + s * t.scrollWidth / t.clientWidth;
        }
    }, p = () => {
      m.value = !1, document.removeEventListener("mousemove", f), document.removeEventListener("mouseup", p), _();
    }, _ = () => {
      document.onselectstart !== i && (document.onselectstart = i);
    };
    y(b(r, "scrollbarEl"), "mousemove", () => {
      u.value = !0;
    }), y(b(r, "scrollbarEl"), "mouseleave", () => {
      u.value = !1;
    });
    const x = w(() => o.ratio === 1 ? !1 : o.always ? !0 : u.value || m.value);
    return (e, t) => (X(), T(Y, {
      name: `${c(l).e("fade")}`
    }, {
      default: k(() => [
        P(E("div", {
          class: g([c(l).b(), c(l).m(e.vertical ? "vertical" : "horizontal")])
        }, [
          E("div", {
            class: g(c(l).e("thumb")),
            style: $(z.value),
            onMousedown: S
          }, null, 38)
        ], 2), [
          [j, x.value]
        ])
      ]),
      _: 1
    }, 8, ["name"]));
  }
});
export {
  W as default
};
