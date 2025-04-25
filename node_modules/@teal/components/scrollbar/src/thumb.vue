<template>
  <Transition :name="`${bem.e('fade')}`">
    <!-- 滚动bar -->
    <div v-show="show" :class="[bem.b(), bem.m(vertical ? 'vertical' : 'horizontal')]">
      <!-- 滚动条 -->
      <div
        :class="bem.e('thumb')"
        :style="thumbStyle"
        @mousedown="handleThumbClick"
      ></div>
    </div>
  </Transition>
</template>
<script setup lang="ts">
import { createNamespace } from "@teal/utils";
import { scrollbarContextKey } from "./scrollbar";
import { useEventListener } from "@vueuse/core";
import { computed, inject, CSSProperties, ref, toRef } from "vue";

const bem = createNamespace("scrollbar-bar");
const props = defineProps<{
  // 滚动条方向
  vertical?: boolean;
  // 总是显示滚动条
  always?: boolean;
  // 滚动条宽度/高度
  size: string;
  // 滚动条位移
  move: number;
  // 滚动条大小比率
  ratio: number;
}>();

const context = inject(scrollbarContextKey);

if (!context) throw new Error("can not inject scrollbar context!");

/** 根据 props.move props.size 控制滚动条的位置 */
const thumbStyle = computed<CSSProperties>(() => {
  if (props.vertical) {
    return {
      height: props.size,
      transform: `translateY(${props.move}px)`,
    };
  }
  return {
    width: props.size,
    transform: `translateX(${props.move}px)`,
  };
});
// 用户开始选择文本时触发
let originalOnSelectStart = document.onselectstart;
let scrollPos = 0;
const visible = ref(false);
// 鼠标初始位移
const mouseY = ref(0);
const mouseX = ref(0);
const drag = ref(false);
// 改变滚动内容
const handleThumbClick = (e: MouseEvent) => {
  // 阻止事件冒泡
  e.stopPropagation();
  // 按下ctrl键或者鼠标左键或中键 则不是拖拽操作
  if (e.ctrlKey || [1, 2].includes(e.button)) return;
  // 拖拽滚动条
  drag.value = true;
  // 清除当前页面上所有的文本选区
  // 保持焦点 || 避免拖拽文本
  window.getSelection()?.removeAllRanges();
  // 阻止后续同类型事件的执行
  e.stopImmediatePropagation();
  // 添加移动和抬起事件
  document.addEventListener("mousemove", mouseMove);
  document.addEventListener("mouseup", mouseUp);
  // 保存文本选择事件
  originalOnSelectStart = document.onselectstart;
  // 阻止文本选择
  document.onselectstart = () => false;

  // 确定滚动条位移
  if (props.vertical) {
    scrollPos = context.wrapEl?.scrollTop ?? 0;
  } else {
    scrollPos = context.wrapEl?.scrollLeft ?? 0;
  }

  // 记录鼠标位移
  mouseY.value = e.screenY;
  mouseX.value = e.screenX;
};

// 鼠标移动
const mouseMove = (e: MouseEvent) => {
  const wrapEl = context?.wrapEl;
  if (!wrapEl) return;

  //  更新滚动距离，触发handleScroll事件
  //  滚动条改变的位移 / 总长 = dis / 总wrap长
  if (props.vertical) {
    const dis = e.screenY - mouseY.value;
    wrapEl.scrollTop = scrollPos + (dis * wrapEl.scrollHeight) / wrapEl.clientHeight;
  } else {
    const dis = e.screenX - mouseX.value;
    wrapEl.scrollLeft = scrollPos + (dis * wrapEl.scrollWidth) / wrapEl.clientWidth;
  }
};

// 鼠标抬起
const mouseUp = () => {
  // 拖拽结束
  drag.value = false;
  document.removeEventListener("mousemove", mouseMove);
  document.removeEventListener("mouseup", mouseUp);
  // 恢复文本选择功能
  restoreOnselectstart();
};

const restoreOnselectstart = () => {
  if (document.onselectstart !== originalOnSelectStart) {
    document.onselectstart = originalOnSelectStart;
  }
};

// overflow: auto 的实现
useEventListener(toRef(context, "scrollbarEl"), "mousemove", () => {
  visible.value = true;
});

useEventListener(toRef(context, "scrollbarEl"), "mouseleave", () => {
  visible.value = false;
});

// 是否出现滚动条
const show = computed(() => {
  // 比率=1 说明不需要滚动
  if (props.ratio === 1) return false;
  // 用户配置 总是显示滚动条
  if (props.always) return true;
  // 鼠标移入容器 或 正在拖拽滚动条时 滚动条出现
  return visible.value || drag.value;
});
</script>
