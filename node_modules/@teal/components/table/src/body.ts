import { defineComponent, h, inject } from "vue";
import { TableContextKey } from "./table";

export default defineComponent({
  setup() {
    const parent = inject(TableContextKey);
    const store = parent!.store;
    const columnList = store?.state.columns;

    return {
      store,
      columnList,
      bem: parent!.bem,
    };
  },
  render() {
    const { columnList, store, bem } = this;
    const data = store?.state.data.value || [];

    return h(
      "tbody",
      {
        class: [bem.e("body")],
      },
      data.map((row, index) => {
        return h(
          "tr",
          {
            class: [bem.e("row")],
          },
          columnList.map((column) => {
            const data = {
              row,
              index,
              column,
            };
            const tdChildren = column.renderCell(data);
            return h("td", { class: [bem.e("cell"), `text-${column.align}`] }, [
              tdChildren,
            ]);
          })
        );
      })
    );
  },
});
