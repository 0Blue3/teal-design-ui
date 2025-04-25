<template>
  <div ref="$scrollbar" :class="bem.b()">
    <div
      ref="$wrap"
      :class="[bem.b('wrap'), bem.bm('wrap', !props.native ? 'defaultHide' : '')]"
      :style="wrapStyle"
      @scroll="handleScroll"
    >
      <div ref="$content" :class="bem.be('wrap', 'content')">
        <slot />
      </div>
    </div>
    <template v-if="!props.native">
      <Thumb
        vertical
        :size="thumbHeight"
        :move="moveY"
        :always="always"
        :ratio="ratioY"
      />
      <Thumb :size="thumbWidth" :move="moveX" :always="always" :ratio="ratioX" />
    </template>
  </div>
</template>
<script setup lang="ts">
import { createNamespace, toPx } from "@teal/utils";
import { scrollbarContextKey, ScrollbarProps } from "./scrollbar";
import { ref, unref, computed, shallowRef, type CSSProperties, watch, onMounted, reactive, provide } from "vue";
import { useEventListener, useResizeObserver } from '@vueuse/core'
import Thumb from "./thumb.vue";

const GAP = 4;

defineOptions({
  name: "TlScrollbar",
});

const bem = createNamespace("scrollbar");
const props = withDefaults(defineProps<ScrollbarProps>(), {
  size: 5,
  space: 2,
  show: true,
  always: false,
  xScrollable: false,
  noresize: false,
  minSize: 10,
});
const emits = defineEmits<{ scroll: [e: Event] }>();

// 根据props设置高度
const wrapStyle = computed<CSSProperties>(() => {
  return {
    height: toPx(props.height),
  };
});

// 组件
const $scrollbar = shallowRef<HTMLDivElement>();
// 滚动容器
const $wrap = shallowRef<HTMLDivElement>();
// 滚动内容
const $content = shallowRef<HTMLDivElement>();

// 滚动条位移
const moveY = ref(0);
const moveX = ref(0);

// 实时处理滚动条位移
const handleScroll = (e: Event) => {

    const wrap = unref($wrap);
    const content = unref($content);
    if(!wrap || !content) return;
    // 获取滚动容器高度
    const offsetHeight = wrap.offsetHeight - GAP;
    const offsetWidth = wrap.offsetWidth - GAP;

    /**
     * handleScroll, 更新滚动条位移
     * 计算滚动条位移
     * moveY/offsetHeight = scrollTop / scrollHeight
     * moveY = ( scrollTop / scrollHeight ) * offsetHeight
    */
    moveY.value = (wrap.scrollTop * offsetHeight) / content.scrollHeight;
    moveX.value = (wrap.scrollLeft * offsetWidth) / content.scrollWidth;

    // 触发滚动事件
    emits('scroll', e)
}

const ratioY = ref(1);
const ratioX = ref(1);

// 滚动条高度 / 宽度
const thumbHeight = ref('0');
const thumbWidth = ref('0');
// 计算滚动条的宽高和位移
const update = () => {
    console.log("窗口变化，更新");

    const wrap = unref($wrap);
    if(!wrap) return;
    const offsetHeight = wrap.offsetHeight;
    const offsetWidth = wrap.offsetWidth;
    // 计算出来实际的滚动条高度/ 宽度
    /** offsetHeight / scrollHeight = ogH / offsetHeight */
    const ogH = offsetHeight ** 2 / wrap.scrollHeight;
    const ogW = offsetWidth ** 2 / wrap.scrollWidth;
    thumbHeight.value = ogH + 'px';
    thumbWidth.value = ogW + 'px';

    // 滚动条高度/宽度占全部滚动条的比率
    ratioY.value = ogH / offsetHeight;
    ratioX.value = ogW / offsetWidth;

    // 滚动条位移
    moveY.value = (wrap.scrollTop * offsetHeight) / wrap.scrollHeight;
    moveX.value = (wrap.scrollLeft * offsetWidth) / wrap.scrollWidth;
}

// 停止监听容器大小
let stopResizeObs: () => void;
// 停止监听容器大小
let stopWindowResize: () => void;

watch(
    () => props.noresize,
    // 容器高度不会变化
    (noresize) => {

        if(noresize || props.native) {
            // 如果指定内容高度不会变化或者采用原生滚动条
            // 停止resize监听 提高性能
            stopResizeObs?.();
            stopWindowResize?.();
        }else {
            // 监听元素大小
            ;({stop: stopResizeObs} = useResizeObserver($content, update))
            // 监听窗口大小
            stopWindowResize = useEventListener('resize', update);
        }
    },
    { immediate: true }
)
onMounted(update);

provide(
    scrollbarContextKey,
    reactive({
        scrollbarEl: $scrollbar,
        wrapEl: $wrap
    })
)

// eslint-disable-next-line no-undef
const scrollBy: (options?: ScrollToOptions | undefined) => void = (options) => {
    $wrap.value?.scrollBy(options);
}
const scrollTo: (options?: ScrollToOptions | undefined) => void = (options) => {
    $wrap.value?.scrollTo(options);
}

defineExpose({
    scrollBy: scrollBy, // 相对滚动
    scrollTo: scrollTo // 绝对滚动
})
</script>
