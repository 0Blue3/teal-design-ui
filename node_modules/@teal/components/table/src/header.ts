import { defineComponent, h, inject } from "vue";
import { TableContextKey } from "./table";
import TlCheckbox from "@teal/components/checkbox";

export default defineComponent({
  components: { TlCheckbox },
  setup() {
    const parent = inject(TableContextKey);
    const store = parent?.store;
    const columnList = store?.state.columns;
    return { columnList, bem: parent!.bem };
  },
  render() {
    const { columnList, bem } = this;
    return h(
      "thead",
      {
        class: [bem.e("header")],
      },
      h(
        "tr",
        {},
        columnList?.map((column, index) => {
          return h(
            "th",
            { class: [bem.e("cell")] },
            column.renderHeader({ column, index })
          );
        })
      )
    );
  },
});
