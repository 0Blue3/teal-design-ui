<template>
  <div :class="bem.b()" ref="wrapperRef" @Scroll="handleScroll">
    <div :class="bem.e('scroll-bar')" ref="barRef"></div>
    <div :class="bem.e('scroll-list')" ref="listRef">
      <slot :data="visibleData"></slot>
    </div>
  </div>
</template>
<script setup lang="ts">
import { createNamespace } from "@teal/utils/create";
import { type VirtualProps } from "./virtual";
import { onMounted, reactive, ref, computed, watch } from "vue";

defineOptions({ name: "tl-virtual" });

const bem = createNamespace("vl");

const props = withDefaults(defineProps<VirtualProps>(), {
    size: 35,
    remain: 8,
    items: () => ([])
});

const wrapperRef = ref<HTMLElement>();
const barRef = ref<HTMLElement>();
const listRef = ref<HTMLElement>();

const state = reactive({
  // 计算显示的区域
  start: 0,
  end: props.remain,
});

const prev = computed(() => {
  return Math.min(state.start, props.remain);
});

const next = computed(() => {
  return Math.min(props.items.length - state.end, props.remain);
});

// 多展示上下各8条 保证用户快速上下滚动不白屏
const visibleData = computed(() => {
    console.log(props.items.slice(state.start - prev.value, state.end + next.value))
  return props.items.slice(state.start - prev.value, state.end + next.value);
});

const offset = ref(0);

const handleScroll = () => {
  // 根据滚动的距离， 计算过去了几个数据
  const scrollTop = wrapperRef.value!.scrollTop;

  state.start = Math.floor(scrollTop / props.size);

  state.end = state.start + props.remain;

  offset.value = state.start * props.size - prev.value * props.size; // 滚过去多少

  listRef.value!.style.transform = `translate(0px, ${offset.value}px)`;
};

watch(
  () => props.items,
  () => {
    wrapperRef.value!.style.height = props.size * props.remain + "px";
    barRef.value!.style.height = props.items.length * props.size + "px";
  }
);

onMounted(() => {
  wrapperRef.value!.style.height = props.size * props.remain + "px";
  barRef.value!.style.height = props.items.length * props.size + "px";
});
</script>
