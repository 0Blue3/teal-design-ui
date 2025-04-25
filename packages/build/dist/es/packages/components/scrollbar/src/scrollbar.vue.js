import { defineComponent as V, computed as P, shallowRef as d, ref as s, watch as X, onMounted as Y, provide as A, reactive as F, createElementBlock as B, openBlock as W, normalizeClass as y, unref as l, createElementVNode as _, createCommentVNode as G, normalizeStyle as K, renderSlot as M, Fragment as j, createVNode as $ } from "vue";
import { createNamespace as q } from "../../../utils/create.js";
import { toPx as D } from "../../../utils/utils.js";
import { scrollbarContextKey as I } from "./scrollbar.js";
import { useResizeObserver as J, useEventListener as O } from "../../../../node_modules/.pnpm/@vueuse_core@12.8.2_typescript@5.8.2/node_modules/@vueuse/core/index.js";
import k from "./thumb.vue.js";
const S = 4, re = /* @__PURE__ */ V({
  name: "TlScrollbar",
  __name: "scrollbar",
  props: {
    height: {},
    native: { type: Boolean },
    always: { type: Boolean, default: !1 },
    noresize: { type: Boolean, default: !1 }
  },
  emits: ["scroll"],
  setup(T, { expose: E, emit: x }) {
    const c = q("scrollbar"), a = T, C = x, N = P(() => ({
      height: D(a.height)
    })), w = d(), r = d(), u = d(), v = s(0), p = s(0), L = (e) => {
      const o = l(r), t = l(u);
      if (!o || !t) return;
      const f = o.offsetHeight - S, m = o.offsetWidth - S;
      v.value = o.scrollTop * f / t.scrollHeight, p.value = o.scrollLeft * m / t.scrollWidth, C("scroll", e);
    }, g = s(1), b = s(1), H = s("0"), z = s("0"), h = () => {
      console.log("窗口变化，更新");
      const e = l(r);
      if (!e) return;
      const o = e.offsetHeight, t = e.offsetWidth, f = o ** 2 / e.scrollHeight, m = t ** 2 / e.scrollWidth;
      H.value = f + "px", z.value = m + "px", g.value = f / o, b.value = m / t, v.value = e.scrollTop * o / e.scrollHeight, p.value = e.scrollLeft * t / e.scrollWidth;
    };
    let n, i;
    return X(
      () => a.noresize,
      // 容器高度不会变化
      (e) => {
        e || a.native ? (n == null || n(), i == null || i()) : ({ stop: n } = J(u, h), i = O("resize", h));
      },
      { immediate: !0 }
    ), Y(h), A(
      I,
      F({
        scrollbarEl: w,
        wrapEl: r
      })
    ), E({
      scrollBy: (e) => {
        var o;
        (o = r.value) == null || o.scrollBy(e);
      },
      // 相对滚动
      scrollTo: (e) => {
        var o;
        (o = r.value) == null || o.scrollTo(e);
      }
      // 绝对滚动
    }), (e, o) => (W(), B("div", {
      ref_key: "$scrollbar",
      ref: w,
      class: y(l(c).b())
    }, [
      _("div", {
        ref_key: "$wrap",
        ref: r,
        class: y([l(c).b("wrap"), l(c).bm("wrap", a.native ? "" : "defaultHide")]),
        style: K(N.value),
        onScroll: L
      }, [
        _("div", {
          ref_key: "$content",
          ref: u,
          class: y(l(c).be("wrap", "content"))
        }, [
          M(e.$slots, "default")
        ], 2)
      ], 38),
      a.native ? G("", !0) : (W(), B(j, { key: 0 }, [
        $(k, {
          vertical: "",
          size: H.value,
          move: v.value,
          always: e.always,
          ratio: g.value
        }, null, 8, ["size", "move", "always", "ratio"]),
        $(k, {
          size: z.value,
          move: p.value,
          always: e.always,
          ratio: b.value
        }, null, 8, ["size", "move", "always", "ratio"])
      ], 64))
    ], 2));
  }
});
export {
  re as default
};
