import { defineComponent as M, ref as d, watch as L, computed as q, provide as G, useSlots as H, onMounted as J, createElementBlock as _, openBlock as m, normalizeClass as P, unref as Q, createVNode as U, withCtx as V, Fragment as W, renderList as X, createBlock as Y } from "vue";
import { createNamespace as Z } from "../../../utils/create.js";
import { TreeInjectKey as ee } from "./tree.js";
import te from "./tree-node.vue.js";
import le from "./expand-transition.vue.js";
const de = /* @__PURE__ */ M({
  name: "tl-tree",
  __name: "tree",
  props: {
    data: { default: () => [] },
    type: {},
    keyField: { default: "key" },
    labelField: { default: "label" },
    childrenField: { default: "children" },
    onLoad: {},
    fileTree: { type: Boolean, default: !1 },
    selectable: { type: Boolean, default: !0 },
    multiple: { type: Boolean, default: !1 },
    showCheckbox: { type: Boolean, default: !1 },
    selectedKeys: { default: () => [] },
    defaultExpandedKeys: { default: () => [] },
    defaultCheckedKeys: { default: () => [] }
  },
  emits: ["update:selectedKeys"],
  setup(N, { emit: S }) {
    const B = Z("tree"), s = N, g = d([]);
    function E(e, t, l) {
      return {
        getKey(a) {
          return a[e];
        },
        getLabel(a) {
          return a[t];
        },
        getChildren(a) {
          return a[l];
        }
      };
    }
    const y = E(s.keyField, s.labelField, s.childrenField);
    function v(e, t = null) {
      function l(n, i = null) {
        return n.map((r) => {
          const k = y.getChildren(r) || [], p = {
            key: y.getKey(r),
            label: y.getLabel(r),
            children: [],
            // 默认为空
            rawNode: r,
            disabled: r.disabled ? r.disabled : !1,
            level: i ? i.level + 1 : 0,
            isLeaf: r.isLeaf ?? k.length == 0,
            parentKey: i == null ? void 0 : i.key
          };
          return k.length > 0 && (p.children = l(k, p)), p;
        });
      }
      return l(e, t);
    }
    L(
      () => s.data,
      (e) => {
        g.value = v(e);
      },
      { immediate: !0 }
    );
    const c = d(new Set(s.defaultExpandedKeys)), K = q(() => {
      let e = c.value, t = [];
      const l = g.value || [], a = [];
      for (let n = l.length - 1; n >= 0; --n)
        a.push(l[n]);
      for (; a.length; ) {
        const n = a.pop();
        if (n && (t.push(n), e.has(n.key))) {
          const i = n.children;
          if (i)
            for (let r = i.length - 1; r >= 0; --r)
              a.push(n.children[r]);
        }
      }
      return t;
    });
    function F(e) {
      return c.value.has(e.key);
    }
    const h = d(/* @__PURE__ */ new Set());
    function T(e) {
      if (!e.children.length && !e.isLeaf) {
        const t = h.value;
        if (!t.has(e.key)) {
          t.add(e.key);
          const l = s.onLoad;
          l && l(e.rawNode).then((a) => {
            e.rawNode.children = a, e.children = v(a, e), t.delete(e.key);
          });
        }
      }
    }
    function I(e) {
      c.value.delete(e.key);
    }
    function R(e) {
      c.value.add(e.key), T(e);
    }
    function O(e) {
      c.value.has(e.key) && !h.value.has(e.key) ? I(e) : R(e);
    }
    const $ = S, f = d([]);
    L(
      () => s.selectedKeys,
      (e) => {
        e && (f.value = e);
      },
      {
        immediate: !0
      }
    );
    function j(e) {
      let t = Array.from(f.value);
      if (s.selectable) {
        if (s.multiple) {
          let l = t.findIndex((a) => a === e.key);
          l > -1 ? t.splice(l, 1) : t.push(e.key);
        } else
          t.includes(e.key) ? t = [] : t = [e.key];
        f.value = t, $("update:selectedKeys", t);
      }
    }
    G(ee, {
      slots: H()
    });
    const u = d(new Set(s.defaultCheckedKeys));
    function z(e) {
      return u.value.has(e.key);
    }
    function A(e) {
      return !!e.disabled;
    }
    const o = d(/* @__PURE__ */ new Set());
    function D(e) {
      return o.value.has(e.key);
    }
    function b(e, t) {
      console.log("toggle", e, t);
      let l = u.value;
      t && o.value.delete(e.key), l[t ? "add" : "delete"](e.key);
      let a = e.children;
      a && a.forEach((n) => {
        n.disabled || b(n, t);
      });
    }
    function x(e) {
      return K.value.find((t) => t.key === e);
    }
    function C(e) {
      if (console.log("updateCheckKey", e, e.parentKey), e.parentKey) {
        const t = x(e.parentKey);
        if (t) {
          let l = !0, a = !1;
          const n = t.children;
          for (const i of n)
            if (u.value.has(i.key))
              a = !0;
            else if (o.value.has(i.key)) {
              l = !1, a = !0;
              break;
            } else if (l = !1, a == !0) break;
          l ? (u.value.add(t.key), o.value.delete(t.key)) : a && (o.value.add(t.key), u.value.delete(t.key)), C(t);
        }
      }
    }
    function w(e, t) {
      b(e, t), C(e);
    }
    return J(() => {
      s.defaultCheckedKeys.forEach((e) => {
        const t = x(e);
        t && w(t, !0);
      });
    }), (e, t) => (m(), _("div", {
      class: P(Q(B).b())
    }, [
      U(le, null, {
        default: V(() => [
          (m(!0), _(W, null, X(K.value, (l) => (m(), Y(te, {
            key: l.key,
            node: l,
            expanded: F(l),
            onToggle: O,
            onSelect: j,
            onCheck: w,
            "selected-keys": f.value,
            loadingKeys: h.value,
            "show-checkbox": e.showCheckbox,
            checked: z(l),
            disabled: A(l),
            indeterminate: D(l),
            "file-tree": e.fileTree
          }, null, 8, ["node", "expanded", "selected-keys", "loadingKeys", "show-checkbox", "checked", "disabled", "indeterminate", "file-tree"]))), 128))
        ]),
        _: 1
      })
    ], 2));
  }
});
export {
  de as default
};
