import { defineComponent as S, toRefs as g, computed as f, createElementBlock as b, openBlock as z, normalizeStyle as G, normalizeClass as _, unref as A, renderSlot as B } from "vue";
import { createNamespace as x } from "../../../utils/create.js";
import { SPACE_SIZE as j } from "./space.js";
const N = /* @__PURE__ */ S({
  name: "TlSpace",
  __name: "space",
  props: {
    inline: { type: Boolean, default: !1 },
    wrap: { type: [Boolean, String], default: !1 },
    size: { default: "m" },
    align: { default: "start" },
    justify: { default: "start" },
    dir: { default: "horizontal" },
    overflow: { default: "visible" }
  },
  setup(v) {
    const l = x("space"), c = v, {
      inline: i,
      size: a,
      wrap: r,
      justify: m,
      align: d,
      dir: n,
      overflow: t
    } = g(c), p = (e) => j.includes(e), u = (e) => typeof e == "number", y = (e) => typeof e == "string", w = (e) => typeof e == "boolean", h = f(() => {
      const e = [];
      return i.value && e.push(l.is("inline", i.value)), w(r.value) ? e.push(l.is("wrap", r.value)) : e.push(l.is("wrap-reverse", r.value)), p(a.value) && a.value !== "s" && e.push(l.m(a.value)), e.push(l.m(`justify-${m.value}`)), e.push(l.m(`align-${d.value}`)), n.value !== "horizontal" && e.push(l.m(`dir-${n.value}`)), t.value !== "visible" && e.push(l.m(`overflow-${t.value}`)), e;
    }), $ = f(() => {
      const e = {};
      if (!p(a.value)) {
        if (u(a.value))
          e.gap = `${a.value}px`;
        else if (y(a.value))
          e.gap = `${a.value}`;
        else if (Array.isArray(a.value)) {
          const [s, o] = a.value;
          u(s) && u(o) ? (e.columnGap = `${s}px`, e.rowGap = `${o}px`) : (e.columnGap = `${s}`, e.rowGap = `${o}`);
        }
      }
      if (Array.isArray(t.value)) {
        const [s, o] = t.value;
        e.overflowX = s, e.overflowY = o;
      }
      return e;
    });
    return (e, s) => (z(), b("div", {
      class: _([A(l).b(), ...h.value]),
      style: G($.value)
    }, [
      B(e.$slots, "default")
    ], 6));
  }
});
export {
  N as default
};
