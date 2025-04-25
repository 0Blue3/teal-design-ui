<template>
  <div :class="bem.b()" v-on="outerEvents" ref="popperContainerNode">
    <div :class="bem.e('trigger')" ref="triggerNode">
      <DefaultSlot v-on="events"></DefaultSlot>
    </div>
    <Transition :name="animation">
      <div
        v-on="popperEvents"
        v-show="isOpen"
        :class="[bem.e('popper')]"
        :style="[floatingStyles, triggerStyles, overlayStyle, { zIndex }]"
        ref="popperNode"
      >
        <slot name="content">
          {{ title }}
        </slot>
        <div
          v-if="arrowProp"
          id="arrow"
          ref="arrowRef"
          v-on="popperEvents"
          :data-popper-placement="placement"
          :style="{
            backgroundColor: color ?? '',
            position: 'absolute',
            right: middlewareData.arrow?.x != null ? `${middlewareData.arrow.x}px` : '',
            top: middlewareData.arrow?.y != null ? `${middlewareData.arrow.y}px` : '',
          }"
        ></div>
      </div>
    </Transition>
  </div>
</template>
<script setup lang="ts">
import { createNamespace, debounce, useClickOutside } from "@teal/utils";
import { TooltipProps, TooltipEmits, TooltipInstance, TriggerMode } from "./tooltip";
import { ref, reactive, computed, watch, toRefs, onMounted } from "vue";
import { useFloating, autoUpdate, offset, flip, shift, arrow } from "@floating-ui/vue";
import { useDefaultSlots } from "./hooks";

defineOptions({ name: "tl-tooltip" });

const bem = createNamespace("tooltip");

const props = withDefaults(defineProps<TooltipProps>(), {
  title: "hello",
  trigger: "hover",
  animation: "fade",
  placement: "bottom",
  arrow: true,
  autoAdjustOverflow: false,
  openDelay: 0,
  closeDelay: 0,
  overlayStyle: () => ({}),
});

const emits = defineEmits<TooltipEmits>();

const DefaultSlot = useDefaultSlots();
const { placement, arrow: arrowProp, autoAdjustOverflow, trigger, overlayStyle } = toRefs(
  props
);

const isOpen = ref(props.open ?? false);

const popperNode = ref<HTMLElement>();
const triggerNode = ref<HTMLElement>();
const arrowRef = ref<HTMLElement>();
const popperContainerNode = ref<HTMLElement>();

const middleware = computed(() => {
  let ware = [];
  if (arrowProp.value) {
    ware.push(offset(9));
    ware.push(
      arrow({
        element: arrowRef,
        padding: 8,
      })
    );
  } else {
    ware.push(offset(3));
  }
  if (autoAdjustOverflow.value) {
    ware.push(flip());
  }
  return ware;
});
const popperOptions = reactive({
  placement,
  middleware: middleware.value,
  whileElementsMounted: autoUpdate,
});
const { update, floatingStyles, middlewareData } = useFloating(
  triggerNode,
  popperNode,
  popperOptions
);
const triggerStyles = computed(() => {
  return {
    background: props.color ?? "",
  };
});

const togglePopper = () => {
  if (isOpen.value) {
    closeFinal();
  } else {
    openFinal();
  }
};
const open = () => {
  isOpen.value = true;
  emits("open-change", true);
  emits("update:open", isOpen.value);
};
const close = () => {
  isOpen.value = false;
  emits("open-change", false);
  emits("update:open", isOpen.value);
};
const openDebounce = debounce(open, props.openDelay);
const closeDebounce = debounce(close, props.closeDelay);

const openFinal = () => {
  closeDebounce.cancel();
  openDebounce.execute();
};
const closeFinal = () => {
  openDebounce.cancel();
  closeDebounce.execute();
};
useClickOutside(popperContainerNode, () => {
  if (!isOpen.value) return;
  if (checkTrigger("click") || checkTrigger("focus")) {
    closeFinal();
  }
});
let events: Record<string, () => void> = reactive({});
let outerEvents: Record<string, () => void> = reactive({});
let popperEvents: Record<string, () => void> = reactive({});

const attachEvents = () => {
  if (!openFinal || !closeFinal) return;

  if (checkTrigger("click")) {
    events["click"] = togglePopper;
  }

  if (checkTrigger("hover")) {
    events["mouseenter"] = openFinal;
    outerEvents["mouseleave"] = closeFinal;
    popperEvents["mouseenter"] = openFinal;
    popperEvents["mouseleave"] = closeFinal;
  }

  if (checkTrigger("focus")) {
    events["focus"] = openFinal;
    outerEvents["blur"] = closeFinal;
  }

  if (checkTrigger("contextmenu")) {
    events["contextmenu"] = openFinal;
  }
};
/**
 * 检查 trigger 类型
 * @param {Trigger} type - 要检查的类型
 */
function checkTrigger(type: TriggerMode) {
  return trigger.value === type || trigger.value.includes(type);
}
/**
 * 监听触发方式
 */
watch(
  () => props.trigger,
  (newTrigger, oldTrigger) => {
    if (newTrigger != oldTrigger) {
      events = {};
      outerEvents = {};
      attachEvents();
    }
  }
);
/**
 * 实现数据双向绑定
 */
watch(
  () => props.open,
  (newVal) => {
    isOpen.value = newVal;
  }
);
// 监听 isOpen 气泡打开状态, 更新气泡信息(位置...)
watch(
  isOpen,
  (newValue) => {
    // 打开状态
    if (newValue) {
      if (popperOptions && triggerNode.value && popperNode.value) {
        update();
      }
    }
  },
  { flush: "post" }
);
// 事件注册
onMounted(() => {
  attachEvents();
});
// 暴露
defineExpose<TooltipInstance>({
  show: openFinal,
  hide: closeFinal,
});
</script>
