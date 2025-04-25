<template>
  <div v-if="simple" :class="[bem.b(), bem.m(size), bem.is('disabled', disabled)]">
    <Control icon="prev" :disabled="isFirstPage" @click="onPrev" />
    <TlInputNumber
      v-model="_current"
      :min="1"
      :max="lastPage"
      :controls="false"
      :size="size"
    />
    /
    <div :class="bem.e('total')">{{ lastPage }}</div>
    <Control icon="next" :disabled="isLastPage" @click="onNext" />
  </div>
  <div v-else-if="!hidden" :class="[bem.b(), bem.m(size), bem.is('disabled', disabled)]">
    <template v-for="[key, comp] in Object.entries(_layouts)" :key="key">
      <component :is="comp" :disabled="disabled" />
    </template>
  </div>
</template>
<script setup lang="ts">
import { createNamespace } from "@teal/utils";
import {
  PaginationContextKey,
  type PaginationProps,
  type LayoutMapType,
  type PaginationEmits,
} from "./pagination";
import { computed, ref, provide, h, watch } from "vue";
import Pager from "./pager.vue";
import Control from "./control.vue";
import Jumper from "./jumper.vue";
import PageSize from "./page-size.vue";
import TlInputNumber from "@teal/components/input-number";

const bem = createNamespace("pagination");

const props = withDefaults(defineProps<PaginationProps>(), {
  current: 1,
  pageSize: 10,
  defaultCurrent: 1,
  defaultPageSize: 10,
  pagerCount: 7,
  simple: false,
  fixWidth: false,
  disabled: false,
  hideOnSinglePage: false,
  layouts: () => ["prev", "pager", "next"],
  pageSizeOptions: () => [10, 20, 30, 40, 50],
});

const emits = defineEmits<PaginationEmits>();

const _current = ref(props.defaultCurrent);
const _pageSize = ref(props.defaultPageSize);

const lastPage = computed(() => Math.ceil(props.total / _pageSize.value));

const hidden = computed(() => props.hideOnSinglePage && lastPage.value === 1);

const isFirstPage = computed(() => _current.value === 1);

const isLastPage = computed(() => _current.value === lastPage.value);

const size = computed(() => props.size ?? "m");

provide(PaginationContextKey, {
  _current,
  _pageSize,
  lastPage,
  isFirstPage,
  isLastPage,
  size,
});

const layoutMap: LayoutMapType = {
  pager: h(Pager, {
    pagerCount: props.pagerCount,
    fixWidth: props.fixWidth,
  }),
  prev: h(Control, {
    icon: "prev",
    onClick: onPrev,
  }),
  next: h(Control, {
    icon: "next",
    onClick: onNext,
  }),
  total: h("div", null, `共${props.total}条`),
  jumper: h(Jumper),
  pageSize: h(PageSize, {
    pageSizeOptions: props.pageSizeOptions,
    "onUpdate:pageSize": (pageSize: number) => {
      if (!props.disabled) _pageSize.value = pageSize;
    },
  }),
};

const _layouts = props.layouts.reduce((acc, cur) => {
  acc[cur] = layoutMap[cur];
  return acc;
}, {} as LayoutMapType);

watch(
  () => props.current,
  (val) => {
    _current.value = val
  }
);

watch(_current, (newVal) => {
  emits('update:current', newVal)
  emits('change', newVal)
});

watch(
  () => props.pageSize,
  (val) => (_pageSize.value = val),
);

watch(_pageSize, (newVal) => {
  emits("update:pageSize", newVal);
  emits("pageSizeChange", newVal);
});

function onPrev() {
  if (!props.disabled && _current.value > 1) {
    _current.value--;
  }
}
function onNext() {
  if (!props.disabled && _current.value < lastPage.value) {
    _current.value++;
  }
}
</script>
