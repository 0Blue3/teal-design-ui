import { defineComponent as _, ref as p, onMounted as $, watch as b, createElementBlock as S, openBlock as k, normalizeClass as g, unref as m, createElementVNode as w, createBlock as I, createCommentVNode as E, renderSlot as N, toDisplayString as O } from "vue";
import { useClipboard as q, useElementSize as D } from "../../../../node_modules/.pnpm/@vueuse_core@12.8.2_typescript@5.8.2/node_modules/@vueuse/core/index.js";
import { createNamespace as F } from "../../../utils/create.js";
import { debounce as P } from "../../../utils/utils.js";
import { paragraphEmits as j, paragraphProps as A } from "./typography.js";
import G from "../../icon/index.js";
const W = /* @__PURE__ */ _({
  name: "tl-paragraph",
  __name: "paragraph",
  props: A,
  emits: j,
  setup(z, { emit: B }) {
    const u = F("paragraph"), r = z, x = B, C = p(), d = p(), { copy: M } = q({ legacy: !0 }), l = p(r.open), y = p(r.moreable);
    let a = "", v = "";
    $(() => {
      if (r.rows === 0 || !y.value) return;
      const e = C.value, t = d.value, { width: f } = D(e), { execute: h } = P(H, 200), { fontSize: s, lineHeight: i } = getComputedStyle(t), o = Math.round(r.rows * parseFloat(i)), T = parseInt(s);
      a = t.innerText, e.style.maxHeight = `${o}px`, b(f, (n, c) => {
        l.value || (n - c > T ? h(e, t, o, !0) : e.scrollHeight > o && h(e, t, o));
      }), b(
        () => r.open,
        (n) => l.value = n
      ), b(
        l,
        (n) => {
          n ? (t.innerText = a, e.style.maxHeight = "none") : (e.style.maxHeight = `${o}px`, H(e, t, o, !0)), x("changeOpen", n), x("update:open", n);
        },
        { immediate: !0 }
      );
    });
    function H(e, t, f, h = !1) {
      let s = 0, i = a.length;
      for (; s < i; ) {
        const c = Math.floor((s + i) / 2);
        v = a.slice(0, c).concat("..."), t.innerText = v, e.scrollHeight > f ? i = c : s = c + 1;
      }
      let o = a.slice(0, s - 1).concat("...");
      const T = v.length - 3 + 1 === a.length;
      let n = r.moreable;
      h && T && (o = a, n = !1), y.value = n, t.innerText = o;
    }
    function R() {
      const e = p(d.value.innerText);
      x("copyBefore", e), M(e.value);
    }
    return (e, t) => (k(), S("p", {
      ref_key: "containerRef",
      ref: C,
      class: g([m(u).b()])
    }, [
      w("span", {
        ref_key: "textRef",
        ref: d,
        class: g([m(u).e("text")])
      }, [
        N(e.$slots, "default")
      ], 2),
      e.copyable ? (k(), I(m(G), {
        key: 0,
        class: g(m(u).e("copy")),
        icon: "fa-copy",
        onClick: R
      }, null, 8, ["class"])) : E("", !0),
      y.value ? (k(), S("span", {
        key: 1,
        class: g([m(u).e("more")]),
        onClick: t[0] || (t[0] = (f) => l.value = !l.value)
      }, O(l.value ? e.closeText : e.openText), 3)) : E("", !0)
    ], 2));
  }
});
export {
  W as default
};
