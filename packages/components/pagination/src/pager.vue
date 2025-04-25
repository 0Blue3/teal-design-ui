<template>
  <div :class="bem.b()">
    <div :class="[bem.e('item'), bem.is('active', isFirstPage)]" @click="pageChange(1)">
      1
    </div>

    <div v-if="showBeforeMore" :class="[bem.e('more')]" @click="onMore('prev')">...</div>
    <div
      v-for="page in getPages"
      :key="page"
      :class="[bem.e('item'), bem.is('active', cur === page)]"
      @click="pageChange(page)"
    >
      {{ page }}
    </div>
    <div v-if="showAfterMore" :class="[bem.e('more')]" @click="onMore('next')">...</div>
    <div
      v-if="lastPage > 1"
      :class="[bem.e('item'), bem.is('active', isLastPage)]"
      @click="pageChange(lastPage)"
    >
      {{ lastPage }}
    </div>
  </div>
</template>
<script setup lang="ts">
import { createNamespace } from "@teal/utils";
import { computed, handleError, inject } from "vue";
import { PaginationContextKey, type PgnInfo } from "./pagination";

interface Props {
  pagerCount: number;
  fixWidth: boolean;
}

const bem = createNamespace("pagination-pager");
const props = defineProps<Props>();

const { _current: cur, lastPage, isFirstPage, isLastPage } = inject(PaginationContextKey) as PgnInfo;

// 最多显示页码的一半
const halfPagerCount = Math.ceil(props.pagerCount / 2);
// 去掉第一页最后一页后 最多可显示页码的一半
const middlePagerIndex = Math.floor((props.pagerCount - 2) / 2);

// 总页数大于显示页码数量 显示...更多
const isShowMore = computed(() => lastPage.value > props.pagerCount);

// 显示前半段 更多  当前页数在后半段时
const showBeforeMore = computed(() => isShowMore.value && cur.value > halfPagerCount);
const showAfterMore = computed(
  () => isShowMore.value && cur.value + halfPagerCount <= lastPage.value
);
const getPages = computed(() => {
  const result = [] as number[];
  let current = cur.value;

  //   当前页数>最多可现实页码数量
  if (cur.value > halfPagerCount) {
    // 当前页数 + 一半可现实页码数量 + 1 不大于 最大码数
    while (current + middlePagerIndex + 1 > lastPage.value) {
      current--;
    }
    const min = current - middlePagerIndex;
    const max = current + middlePagerIndex;
    const index = props.fixWidth && showAfterMore.value ? min + 1 : min;

    for (let i = index; i <= max; i++) {
      result.push(i);
    }
  } else {
    for (let i = 2; i < props.pagerCount; i++) {
      result.push(i);
    }
  }

  return result.filter((item) => 1 < item && item < lastPage.value);
});

function handleCurrentChange(e: MouseEvent) {
  const target = e.target as HTMLElement;

  if (target.classList.contains(bem.e("item") as string)) {
    cur.value = Number(target.textContent);
  }
}

function pageChange(page: number) {
  cur.value = page;
}

function onMore(mode: "prev" | "next") {
  const carry = props.pagerCount - (props.fixWidth ? 3 : 2);

  if (mode === "prev") {
    const target = cur.value - carry;
    pageChange(target > 1 ? target : 1)
  } else {
    const target = cur.value + carry;
    pageChange(target < lastPage.value ? target : lastPage.value)
  }
}
</script>
