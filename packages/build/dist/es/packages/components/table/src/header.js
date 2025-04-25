import { defineComponent as s, h as o, inject as m } from "vue";
import { TableContextKey as c } from "./table.js";
import a from "../../checkbox/index.js";
const p = s({
  components: { TlCheckbox: a },
  setup() {
    const e = m(c), t = e == null ? void 0 : e.store;
    return { columnList: t == null ? void 0 : t.state.columns, bem: e.bem };
  },
  render() {
    const { columnList: e, bem: t } = this;
    return o(
      "thead",
      {
        class: [t.e("header")]
      },
      o(
        "tr",
        {},
        e == null ? void 0 : e.map((r, n) => o(
          "th",
          { class: [t.e("cell")] },
          r.renderHeader({ column: r, index: n })
        ))
      )
    );
  }
});
export {
  p as default
};
