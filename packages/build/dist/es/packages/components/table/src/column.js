import { defineComponent as g, h as c, getCurrentInstance as v, ref as x, computed as y, onBeforeMount as b, onMounted as I, onBeforeUnmount as S } from "vue";
import { defaultTableColumnProps as k } from "./table.js";
import f from "../../checkbox/index.js";
let T = 1;
const H = g({
  name: "TlTableColumn",
  components: {
    TlCheckbox: f
  },
  props: k,
  setup(r, { slots: d }) {
    const i = v(), s = x({}), m = `column_${T++}`, u = y(() => {
      let e = i.parent;
      for (; e && !(e != null && e.tableId); )
        e = e.parent;
      return e;
    }), a = u.value.store, h = ({
      row: e,
      column: t,
      index: o
    }) => {
      var p;
      const n = t.property, l = n && e[n];
      return t && t.type == "checkbox" ? c(f, {
        checked: a.isSelected(e),
        onChange(C) {
          a.dispatch("toggleRowSelection", e, C);
        }
      }) : t && t.formatter ? t.formatter(e, t, l, o) : ((p = l == null ? void 0 : l.toString) == null ? void 0 : p.call(l)) || "";
    };
    return b(() => {
      s.value = {
        // 列 ID
        id: m,
        // checkbox 或 文本 或 格式化文本
        type: r.type,
        // 对齐方式
        align: r.align,
        // 对应 Key
        property: r.property,
        // 表头 label
        label: r.label,
        // 格式化
        formatter: r.formatter,
        // 渲染表格值方法
        renderCell: (e) => {
          let t = null;
          if (d.default) {
            const o = d.default(e);
            t = o.some((n) => n.type !== Comment) ? o : h(e);
          } else
            t = h(e);
          return c("div", { class: ["cell"] }, [t]);
        },
        renderHeader: ({ column: e, index: t }) => {
          const o = d.header;
          let n = null;
          return e.type === "checkbox" ? n = c(f, {
            checked: a.state.isAllSelected.value,
            indeterminate: a.state.selection.value.length > 0 && !a.state.isAllSelected.value,
            onChange: (l) => {
              a.dispatch("toggleAllSelection", l);
            }
          }) : n = e.label, c("div", { class: "cell text-" + r.align }, [
            o ? o({ column: e, index: t }) : n
          ]);
        }
      };
    }), I(() => {
      var n;
      const e = (n = u.value.refs.hiddenColumns) == null ? void 0 : n.children, t = () => Array.from(e).findIndex((l) => l == i.vnode.el);
      s.value.getColumnIndex = t, t() > -1 && u.value.store.dispatch("insertColumn", s.value);
    }), S(() => {
      u.value.store.dispatch("removeColumn", s.value);
    }), {
      columnId: m,
      columnConfig: s
    };
  },
  render() {
    var d, i;
    const r = (i = (d = this.$slots).default) == null ? void 0 : i.call(d, {
      row: {},
      column: {},
      $index: -1
    });
    return r ? c("div", r) : c("div", []);
  }
});
export {
  H as default
};
