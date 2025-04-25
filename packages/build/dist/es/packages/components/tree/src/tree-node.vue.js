import { defineComponent as y, computed as c, createElementBlock as b, openBlock as a, normalizeStyle as g, normalizeClass as t, unref as n, createBlock as s, createCommentVNode as C, createElementVNode as B, createVNode as v } from "vue";
import { createNamespace as w } from "../../../utils/create.js";
import r from "../../icon/index.js";
import K from "./tree-node-content.vue.js";
import L from "../../checkbox/index.js";
const $ = /* @__PURE__ */ y({
  __name: "tree-node",
  props: {
    node: {},
    expanded: { type: Boolean, default: !1 },
    loadingKeys: { default: () => /* @__PURE__ */ new Set([]) },
    selectedKeys: { default: () => [] },
    showCheckbox: { type: Boolean, default: !1 },
    checked: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    indeterminate: { type: Boolean, default: !1 },
    fileTree: { type: Boolean, default: !1 }
  },
  emits: ["toggle", "select", "check"],
  setup(f, { emit: m }) {
    const o = w("tree-node"), l = f, d = m;
    function p() {
      d("toggle", l.node);
    }
    const u = c(() => l.loadingKeys.has(l.node.key)), i = c(() => l.selectedKeys.includes(l.node.key));
    function h() {
      l.node.disabled || d("select", l.node);
    }
    function k(e) {
      l.disabled || d("check", l.node, e);
    }
    return (e, N) => (a(), b("div", {
      class: t([n(o).b(), n(o).is("selected", i.value), n(o).is("disabled", e.node.disabled)]),
      style: g({ paddingLeft: `${e.node.level * 20}px` })
    }, [
      u.value ? (a(), s(n(r), {
        key: 1,
        icon: "spinner",
        spin: ""
      })) : (a(), s(n(r), {
        key: 0,
        class: t([
          n(o).e("switcher"),
          { expanded: e.expanded && !e.node.isLeaf },
          n(o).is("leaf", e.node.isLeaf)
        ]),
        icon: "fa-solid fa-caret-right",
        onClick: p
      }, null, 8, ["class"])),
      e.showCheckbox ? (a(), s(n(L), {
        key: 2,
        checked: e.checked,
        disabled: e.disabled,
        indeterminate: e.indeterminate,
        onChange: k
      }, null, 8, ["checked", "disabled", "indeterminate"])) : C("", !0),
      B("span", {
        onClick: h,
        class: t([n(o).e("label"), n(o).is("selected", i.value)])
      }, [
        v(K, {
          node: e.node,
          "file-tree": e.fileTree
        }, null, 8, ["node", "file-tree"])
      ], 2)
    ], 6));
  }
});
export {
  $ as default
};
