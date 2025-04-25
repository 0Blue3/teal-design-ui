<template>
  <div ref="badgeRef" :class="bem.b()">
    <div ref="supRef" :class="bem.e('sup')">
      <Transition name="modal">
        <div v-if="isShowDot" :class="dotClasses" :style="dotStyle"></div>
      </Transition>
      <Transition name="modal">
        <div v-if="isShowCount" :class="countClasses" :style="countStyle">
          {{ showCount }}
        </div>
      </Transition>
    </div>
    <slot></slot>
  </div>
</template>
<script setup lang="ts">
import { createNamespace } from "@teal/utils/create";
import { type BadgeProps, type BadgeEmits} from "./badge";
import { computed, toRefs, CSSProperties, useSlots, ref, onMounted } from "vue";

defineOptions({
  name: "tl-badge",
});

const bem = createNamespace("badge");

const props = withDefaults(defineProps<BadgeProps>(), {
    count: 0,
    border: 0,
    overflowCount: 99,
    showZero: false,
    status: 'danger',
    hidden: false,
});

const emits = defineEmits<BadgeEmits>();

// dom
const badgeRef = ref();
const supRef = ref();

const offsetY = computed(() => supRef.value?.height / 2);

// 是否是圆形
const isRound = computed(() => {
  if (isDot.value) {
    return true;
  } else {
    return showCount.value && showCount.value.toString().length === 1;
  }
})

// 是否是点类型
const isDot = computed(() => props?.isDot ?? false);

// 是否展示dot
const isShowDot = computed(() => {
  return isDot.value && !props.hidden;
});

// dot 样式 --- color, border
const dotStyle = computed<CSSProperties>(() => {
  const styles: CSSProperties = {}
  if (props.color) {
    styles.background = props.color;
  }

  // 自定义了border时候
  if (props.border) {
    styles.boxShadow = `#ffffff 0 0 0 ${props.border}px`;
  }

  return styles;
});

// dot 类样式 - status, inDot, 独立的点
const dotClasses = computed(() => {
  let classes = [bem.e('dot')];
  props.status && classes.push(bem.m(props.status));
  props.inDot && classes.push(bem.is('inDot', true));
  !(!!useSlots().default) && classes.push(bem.m('stand'));

  return classes;
});

// 是否展示count
const isShowCount = computed(() => {
  // = 0 且 隐藏
  const countZeroHidden = props.count === 0 && !props.showZero
// 是否有数量可显示
  const countNormalHidden = props.count < 0
  // 设置隐藏 或 显示点 或 0隐藏 或 数量不可显示
  if (props.hidden || isShowDot.value || countZeroHidden || countNormalHidden) {
    return false;
  }
  return true;
});

// count 展示值
const showCount = computed(() => {
  if (props.count && props.count > props.overflowCount) {
    return props.overflowCount + '+';
  } else {
    return props.count + '';
  }
});

// count style
const countStyle = computed<CSSProperties>(() => {
  let styles: CSSProperties = {};

  // 默认右上角
  styles.translate = `50% -50%`;

  // count的方位  定位右边，就左移动，左边，就右边移动
  if (props.offset && props.offset === 'right') {
    styles.translate = `-16px ${offsetY.value}px`;
  } else if (props.offset && props.offset === 'left') {
    styles.translate = `16px ${offsetY.value}px`;
  }else if(Array.isArray(props.offset)) {
    styles.translate = props.offset[0] + 'px' + ' ' + props.offset[1] + 'px';
  }

  if (props.border) {
    styles.boxShadow = `#ffffff 0 0 0 ${props.border}px`;
  }

  return styles;
})

// count 类样式 --- round, status, offset, stand
const countClasses = computed(() => {
  let classes = [bem.e('count')];
  isRound.value && classes.push(bem.is('round', true));
  props.status && classes.push(bem.m(props.status));
  if(props.offset && typeof props.offset === 'string') {
    classes.push(bem.m(props.offset));
  }
  !(!!useSlots().default) && classes.push(bem.m('stand'));
  return classes;
})

onMounted(() => {
  // const badgeDom: HTMLDivElement = badgeRef.value;
  // const supDom: HTMLDivElement = supRef.value;

  // // 移动父级的50% - 自身高度的 50%
  // offsetValue.value = badgeDom.offsetHeight / 2 - supDom.offsetHeight / 2;
});
</script>
