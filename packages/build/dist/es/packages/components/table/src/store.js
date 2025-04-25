import { getCurrentInstance as S, ref as u, unref as r } from "vue";
const w = function(s = []) {
  const o = S(), t = u(s), h = u([]), a = u([]), v = u(!1);
  return {
    state: {
      data: t,
      columns: h,
      selection: a,
      isAllSelected: v
    },
    action: {
      insertColumn(e, c) {
        const n = r(e.columns);
        n.push(c), g(n), e.columns.value = n;
      },
      removeColumn(e, c) {
        const n = r(e.columns), l = n.findIndex((i) => i === c);
        l > -1 && n.splice(l, 1), g(n), e.columns.value = n;
      },
      toggleRowSelection(e, c, n) {
        const l = r(e.selection), i = l.indexOf(c), d = i !== -1;
        n && !d ? l.push(c) : !n && d && l.splice(i, 1), e.selection.value = l, e.data.value.length === l.length ? e.isAllSelected.value = !0 : e.isAllSelected.value = !1;
        const f = (e.selection.value || []).slice();
        o.emit("select", f, c), o.emit("selection-change", f);
      },
      toggleAllSelection(e, c) {
        e.data.value.forEach((n) => {
          this.toggleRowSelection(e, n, c);
        }), o.emit("select-all", a.value);
      }
    },
    dispatch: function(e, ...c) {
      const n = o.store.action;
      if (n[e])
        n[e](o.store.state, ...c);
      else
        throw new Error(`Action not found: ${e}`);
    },
    isSelected: function(e) {
      return a.value.includes(e);
    }
  };
};
function g(s) {
  s.forEach((o) => {
    var t;
    o.index = (t = o.getColumnIndex) == null ? void 0 : t.call(o);
  }), s.sort((o, t) => o.index - t.index);
}
export {
  w as useStore
};
