import { defineComponent as s, computed as p, createElementBlock as i, openBlock as c, mergeProps as m, unref as t, createVNode as y, normalizeProps as u, guardReactiveProps as B } from "vue";
import { createNamespace as d } from "../../../utils/create.js";
import { FontAwesomeIcon as f } from "../../../../node_modules/.pnpm/@fortawesome_vue-fontawesom_0dffa63c46a30535dc47b65774fece1f/node_modules/@fortawesome/vue-fontawesome/index.es.js";
import b from "../../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/omit.js";
const h = /* @__PURE__ */ s({
  name: "tl-icon",
  __name: "icon",
  props: {
    type: {},
    color: {},
    border: { type: Boolean },
    fixedWidth: { type: Boolean },
    flip: {},
    icon: {},
    mask: {},
    maskId: {},
    listItem: { type: Boolean },
    pull: {},
    pulse: { type: Boolean },
    rotation: {},
    swapOpacity: { type: Boolean },
    size: {},
    spin: { type: Boolean },
    transform: {},
    symbol: { type: [Boolean, String] },
    title: {},
    titleId: {},
    inverse: { type: Boolean },
    bounce: { type: Boolean },
    shake: { type: Boolean },
    beat: { type: Boolean },
    fade: { type: Boolean },
    beatFade: { type: Boolean },
    spinPulse: { type: Boolean },
    spinReverse: { type: Boolean }
  },
  setup(r) {
    const n = d("icon"), e = r, a = p(() => b(e, ["type", "color"])), l = p(() => e.color ? { color: e.color } : {});
    return (o, k) => (c(), i("i", m({
      class: {
        [t(n).b()]: !0,
        [t(n).m(o.type)]: o.type
      },
      style: l.value
    }, o.$attrs), [
      y(t(f), u(B(a.value)), null, 16)
    ], 16));
  }
});
export {
  h as default
};
