import {
  ComponentInternalInstance,
  VNode,
  computed,
  defineComponent,
  getCurrentInstance,
  h,
  onBeforeMount,
  onBeforeUnmount,
  onMounted,
  ref,
} from "vue";

import { TableColumn, defaultTableColumnProps } from "./table";

import TlCheckbox from "@teal/components/checkbox";

let columnIdSeed = 1;

export default defineComponent({
  name: "TlTableColumn",
  components: {
    TlCheckbox,
  },
  props: defaultTableColumnProps,
  setup(props, { slots }) {
    const instance = getCurrentInstance() as ComponentInternalInstance;
    const columnConfig = ref<Partial<TableColumn<any>>>({});
    const columnId = `column_${columnIdSeed++}`;

    const owner = computed(() => {
      // 当前组件实例的父组件实例
      let parent = instance.parent as any;
      // 父组件存在 tableId 说明找到了父组件
      while (parent && !parent?.tableId) {
        parent = parent.parent;
      }
      return parent;
    });

    const store = owner.value.store;

    type Row = (typeof store.state.data)[number];
    // 渲染表格
    const defaultRenderCell = ({
      row,
      column,
      index,
    }: {
      row: Row; // 数据
      column: TableColumn<Row>; // table-column props
      index: number; // 索引
    }) => {
      // key
      const property = column.property;
      // value
      const value = property && row[property];

      if (column && column.type == "checkbox") {
        return h(TlCheckbox, {
          checked: store.isSelected(row),
          onChange(val) {
            store.dispatch("toggleRowSelection", row, val);
          },
        });
      }

      if (column && column.formatter) {
        return column.formatter(row, column, value, index);
      }
      return value?.toString?.() || "";
    };

    onBeforeMount(() => {
      columnConfig.value = {
        // 列 ID
        id: columnId,
        // checkbox 或 文本 或 格式化文本
        type: props.type,
        // 对齐方式
        align: props.align,
        // 对应 Key
        property: props.property,
        // 表头 label
        label: props.label,
        // 格式化
        formatter: props.formatter,
        // 渲染表格值方法
        renderCell: (data) => {
          let children: VNode | null = null;
          // 如果使用了插槽
          if (slots.default) {
            const vnodes = slots.default(data);
            // 如果数组中存在至少一个不是注释节点
            children = vnodes.some((v) => v.type !== Comment)
              ? vnodes
              : defaultRenderCell(data);
          } else {
            children = defaultRenderCell(data);
          }
          return h("div", { class: ["cell"] }, [children]);
        },
        renderHeader: ({ column, index }) => {
          const renderHeader = slots.header;
          let children: VNode | null = null;
          if (column.type === "checkbox") {
            children = h(TlCheckbox, {
              checked: store.state.isAllSelected.value,
              indeterminate:
                store.state.selection.value.length > 0 &&
                !store.state.isAllSelected.value,
              onChange: (val) => {
                store.dispatch("toggleAllSelection", val);
              },
            });
          } else {
            children = column.label;
          }
          return h("div", { class: "cell text-" + props.align }, [
            renderHeader ? renderHeader({ column, index }) : children,
          ]);
        },
      };
    });

    onMounted(() => {
      const children = owner.value.refs.hiddenColumns?.children;
      const getColumnIndex = () =>
        Array.from(children).findIndex((e) => e == instance.vnode.el);

      columnConfig.value.getColumnIndex = getColumnIndex;
      const columnIndex = getColumnIndex();
      if (columnIndex > -1) {
        owner.value.store.dispatch("insertColumn", columnConfig.value);
      }
    });

    onBeforeUnmount(() => {
      owner.value.store.dispatch("removeColumn", columnConfig.value);
    });

    return {
      columnId,
      columnConfig,
    };
  },
  render() {
    const renderDefault = this.$slots.default?.({
      row: {},
      column: {},
      $index: -1,
    });
    if (renderDefault) {
      return h("div", renderDefault);
    } else {
      return h("div", []);
    }
  },
});
