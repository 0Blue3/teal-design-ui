<template>
  <div
    v-if="!submenu"
    @click="handleClick"
    :class="[bem.b(), bem.is('disabled', disabled)]"
  >
    <slot></slot>
  </div>
  <div v-else :class="[bem.b(), bem.is('disabled', disabled)]">
    <tl-tooltip
      :arrow="arrow"
      :trigger="trigger"
      :animation="_animation"
      :placement="_placement"
      :open-delay="openDelay"
      :close-delay="closeDelay"
      :overlay-style="getOverlayStyle"
      :z-index="zIndex"
    >
      <div :class="[bem.e('title')]">
        <slot name="title"></slot>
      </div>
      <template #content><slot></slot></template>
    </tl-tooltip>
  </div>
</template>
<script setup lang="ts">
import { createNamespace } from "@teal/utils";
import { DropdownItemProps, dropdownContextKey, DropdownOption } from "./dropdown";
import { inject, computed, StyleValue } from "vue";
import TlTooltip from "@teal/components/tooltip";

const bem = createNamespace("dropdown__item");
const props = withDefaults(defineProps<DropdownItemProps>(), {
  value: "",
  disabled: false,
  submenu: false,
  dir: "right",
  animation: "",
});

// Injects
const {
  selectedValue,
  isOpen,
  arrow,
  trigger,
  openDelay,
  closeDelay,
  overlayStyle,
  zIndex,
} = inject(dropdownContextKey) as DropdownOption;

const { value: dropdownItemValue, disabled, animation, dir } = props;

const animationOption = {
  left: "downLeft",
  right: "downRight",
};
const placementOption = {
  left: "left-start",
  right: "right-start",
};

const _animation = animation || animationOption[dir];
const _placement = placementOption[dir] as DropdownOption["placement"];

const getOverlayStyle = computed(() => {
  return [
    overlayStyle,
    {
      top: "-4px",
      [dir]: "-8px",
    },
  ] as StyleValue;
});

function handleClick() {
  if (disabled) return;
  isOpen.value = false;
  selectedValue.value = dropdownItemValue;
}
</script>
