import { defineComponent as n, createBlock as r, openBlock as s, TransitionGroup as d, mergeProps as l, unref as i, toHandlers as p, withCtx as f, renderSlot as m } from "vue";
import { createNamespace as c } from "../../../utils/create.js";
const x = /* @__PURE__ */ n({
  __name: "expand-transition",
  setup(h) {
    const a = c("collapse"), t = (e) => {
      e.style.maxHeight = "", e.style.overflow = e.dataset.oldOverflow, e.style.paddingTop = e.dataset.oldPaddingTop, e.style.paddingBottom = e.dataset.oldPaddingBottom;
    }, o = {
      beforeEnter(e) {
        e.style.height = 0;
      },
      enter(e) {
        e.style.height = "32px";
      },
      afterEnter(e) {
        e.style.height = "";
      },
      enterCancelled(e) {
        t(e);
      },
      beforeLeave(e) {
        e.dataset || (e.dataset = {}), e.style.maxHeight = "32px", e.style.overflow = "hidden";
      },
      leave(e) {
        e.scrollHeight !== 0 && (e.style.maxHeight = 0);
      },
      afterLeave(e) {
        t(e);
      },
      leaveCancelled(e) {
        t(e);
      }
    };
    return (e, g) => (s(), r(d, l({
      name: i(a).b()
    }, p(o)), {
      default: f(() => [
        m(e.$slots, "default")
      ]),
      _: 3
    }, 16, ["name"]));
  }
});
export {
  x as default
};
