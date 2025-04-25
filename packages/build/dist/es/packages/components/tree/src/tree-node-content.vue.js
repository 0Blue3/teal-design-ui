import { defineComponent as r, toRef as s, computed as f, resolveComponent as i, renderSlot as d, createBlock as m, createCommentVNode as p, createTextVNode as u, openBlock as _, normalizeClass as v, unref as C, toDisplayString as b } from "vue";
import { createNamespace as k } from "../../../utils/create.js";
const T = /* @__PURE__ */ r({
  name: "tl-tree-node-content",
  __name: "tree-node-content",
  props: {
    node: {},
    fileTree: { type: Boolean }
  },
  setup(t) {
    const l = k("tree-node-label"), o = t, e = s(o.node), n = f(
      () => o.fileTree ? e.value.isLeaf ? "fa-file-lines" : "fa-folder-closed" : !1
    );
    return (a, y) => {
      const c = i("tl-icon");
      return d(a.$slots, "default", { node: e.value }, () => [
        n.value ? (_(), m(c, {
          key: 0,
          class: v(C(l).e("file")),
          icon: n.value
        }, null, 8, ["class", "icon"])) : p("", !0),
        u(" " + b(e.value.label), 1)
      ]);
    };
  }
});
export {
  T as default
};
