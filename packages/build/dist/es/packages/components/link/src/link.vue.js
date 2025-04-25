import { defineComponent as d, createElementBlock as r, openBlock as n, normalizeClass as f, unref as t, renderSlot as p, createCommentVNode as k } from "vue";
import { createNamespace as h } from "../../../utils/create.js";
import { linkProps as u } from "./link.js";
const b = ["target", "href"], _ = { key: 0 }, N = /* @__PURE__ */ d({
  name: "TlLink",
  __name: "link",
  props: u,
  emits: ["click"],
  setup(i, { emit: a }) {
    const o = h("link"), s = i, l = s.href.startsWith("#"), c = a, m = () => {
      s.disabled || c("click");
    };
    return (e, C) => (n(), r("a", {
      class: f([t(o).b(), t(o).is("disabled", e.disabled)]),
      target: e.newtab ? "_blank" : void 0,
      href: e.disabled || !e.href ? void 0 : e.href,
      onClick: m
    }, [
      p(e.$slots, "default"),
      t(l) ? (n(), r("sup", _, "#")) : k("", !0)
    ], 10, b));
  }
});
export {
  N as default
};
