<template>
  <div :class="bem.b()">
    <table>
      <TableHeader />
      <TableBody v-if="!isEmpty" />
      <slot name="tbody" />
    </table>
    <div v-show="false" ref="hiddenColumns">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { TableProps, Table, TableContextKey } from "./table";
import { createNamespace } from "@teal/utils";
import { computed, getCurrentInstance, provide } from "vue";
import { useStore } from "./store";
import TableHeader from "./header";
import TableBody from "./body";

let tableIdSeed = 1;

defineOptions({
  name: "TlTable",
});

const bem = createNamespace("table");

const props = withDefaults(defineProps<TableProps>(), {
  data: () => [],
  height: 56,
});

type Row = typeof props.data[number];

const table = getCurrentInstance() as Table<Row>;

table.bem = bem;

const store = useStore<Row>();
store.state.data.value = props.data!;
table.store = store;

const tableId = `tl-table_${tableIdSeed++}`;
table.tableId = tableId;

const isEmpty = computed(() => (store.state.data.value || []).length === 0);

provide(TableContextKey, table);
</script>
