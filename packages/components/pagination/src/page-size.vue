<template>
  <tl-dropdown
    :class="bem.b()"
    :title="title"
    :size="size"
    trigger="click"
    @selected="handleSelected"
  >
    <tl-dropdown-item
      v-for="pageSize in pageSizeOptions"
      :key="pageSize"
      :value="pageSize"
    >
      {{ pageSize === -1 ? "全部" : `${pageSize} 条/页` }}
    </tl-dropdown-item>
  </tl-dropdown>
</template>
<script setup lang="ts">
import { createNamespace } from "@teal/utils";
import { PaginationContextKey, type PaginationProps, type PgnInfo } from "./pagination";
import { computed, inject, ref } from "vue";

const bem = createNamespace("pagination-pageSize");

type PageSizeProps = Required<Pick<PaginationProps, "pageSizeOptions">>;
type PageSizeEmits = {
  (e: "update:pageSize", pageSize: number): void;
};

defineProps<PageSizeProps>();
const emits = defineEmits<PageSizeEmits>();

const { size } = inject(PaginationContextKey) as PgnInfo;
const selectedPageSize = ref(10);

const title = computed(() => {
  if (selectedPageSize.value < 0) return "全部";
  return `${selectedPageSize.value} 条/页`;
});

function handleSelected(value: number | string | object) {
  selectedPageSize.value = value as number;
  emits("update:pageSize", selectedPageSize.value);
}
</script>
