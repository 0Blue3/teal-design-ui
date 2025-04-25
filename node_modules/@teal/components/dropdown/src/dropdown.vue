<template>
  <div :class="[bem.b(), bem.is('disabled', disabled)]">
    <tl-tooltip
      v-model:open="isOpen"
      :arrow="arrow"
      :trigger="trigger"
      :animation="animation"
      :placement="placement"
      :open-delay="openDelay"
      :close-delay="closeDelay"
      :overlay-style="overlayStyle"
      :z-index="zIndex"
    >
      <div :class="bem.e('title')">
        <tl-button v-if="title" :size="size" :type="type" :disabled="disabled">
          {{ title }}
          <tl-icon :style="iconStyle" icon="fa-angle-down "></tl-icon>
        </tl-button>
        <slot v-else name="title"></slot>
      </div>

      <template #content>
        <slot></slot>
      </template>
    </tl-tooltip>
  </div>
</template>
<script lang="ts" setup>
import { createNamespace } from "@teal/utils";
import { type DropdownProps, type DropdownEmits, dropdownContextKey } from "./dropdown";
import { ref, provide, watch, computed } from "vue";
import TlTooltip from "@teal/components/tooltip";

defineOptions({ name: "tl-dropdown" });

const bem = createNamespace("dropdown");
const emit = defineEmits<DropdownEmits>();

// prettier-ignore
const props = withDefaults(
  defineProps<DropdownProps>(),
  {
    title: '',
    open: false,
    arrow: true,
    disabled: false,
    type: 'secondary',
    placement: 'bottom',
    trigger: 'hover',
    animation: 'downBottom',
    openDelay: 0,
    closeDelay: 80,
    overlayStyle: () => ({})
  }
)

// prettier-ignore
const selectedValue = ref<any>(null);
const isOpen = ref(props.open);

provide(dropdownContextKey, {
  ...props,
  isOpen,
  selectedValue,
});

const iconStyle = computed(() => {
  return {
    transform: `rotate(${isOpen.value ? "180deg" : "0deg"})`,
    transition: 'transform .3s'
  }
})

watch(selectedValue, (newSelected, oldSelected) => {
  if (props.disabled) return;
  if (newSelected !== oldSelected) {
    emit("selected", newSelected);
  }
});

watch(isOpen, (newVal) => {
  emit("visibleChange", newVal);
});
</script>
