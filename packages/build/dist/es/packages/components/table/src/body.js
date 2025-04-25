import { defineComponent as m, h as a, inject as i } from "vue";
import { TableContextKey as p } from "./table.js";
const f = m({
  setup() {
    const n = i(p), t = n.store, e = t == null ? void 0 : t.state.columns;
    return {
      store: t,
      columnList: e,
      bem: n.bem
    };
  },
  render() {
    const { columnList: n, store: t, bem: e } = this, o = (t == null ? void 0 : t.state.data.value) || [];
    return a(
      "tbody",
      {
        class: [e.e("body")]
      },
      o.map((r, c) => a(
        "tr",
        {
          class: [e.e("row")]
        },
        n.map((s) => {
          const l = {
            row: r,
            index: c,
            column: s
          }, d = s.renderCell(l);
          return a("td", { class: [e.e("cell"), `text-${s.align}`] }, [
            d
          ]);
        })
      ))
    );
  }
});
export {
  f as default
};
