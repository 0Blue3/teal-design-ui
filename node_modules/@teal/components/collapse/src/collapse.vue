<template>
  <div
    :class="[
      bem.b(),
      bem.m(MergeSize),
      bem.is('active', isActive ?? false),
      bem.is('disabled', disabled ?? false),
    ]"
  >
    <div :class="[bem.e('header')]" @click="handleClick">
      <div :class="bem.e('header-left')">
        <div :class="[bem.e('header-ctl'), bem.is('active', isActive ?? false)]">
          <slot name="icon" :isActive="isActive"><tl-icon icon="angle-right" /></slot>
        </div>
        <div :class="bem.e('header-title')">
          <slot name="title">{{ title }}</slot>
        </div>
      </div>
      <div :class="bem.e('header-extra')"><slot name="extra" /></div>
    </div>
    <Transition name="slide" v-on="transitionEvents">
      <div :class="bem.e('content')" v-show="isActive">
        <div :class="bem.e('content-box')">
          <slot />
        </div>
      </div>
    </Transition>
  </div>
</template>

<script lang="ts" setup>
import { createNamespace } from "@teal/utils";
import { inject, computed, onMounted, mergeProps } from "vue";
import { type CollapseProps, CollapseGroupContextKey } from "./collapse";
import TlIcon from "@teal/components/icon";

const bem = createNamespace("collapse");

defineOptions({
  name: "TlCollapse",
});

const props = withDefaults(defineProps<CollapseProps>(), {
  disabled: false,
  size: "m"
})

const collapseContext = inject(CollapseGroupContextKey, null);

const isActive = computed(() => collapseContext!.activeKeys.value.includes(props.id!));

const MergeSize = computed(() => collapseContext!.size ?? props.size);

const handleClick = () => {
  if (props.disabled) return;
  collapseContext?.handleItemClick(props.id);
};

const transitionEvents: Record<string, (el: HTMLElement) => void> = {
  beforeEnter(el) {
    el.style.height = "0px";
    el.style.overflow = "hidden";
  },
  enter(el) {
    el.style.height = `${el.scrollHeight}px`;
  },
  afterEnter(el) {
    el.style.height = "";
    el.style.overflow = "";
  },
  beforeLeave(el) {
    el.style.height = `${el.scrollHeight}px`;
    el.style.overflow = "hidden";
  },
  leave(el) {
    el.style.height = "0px";
  },
  afterLeave(el) {
    el.style.height = "";
    el.style.overflow = "";
  },
};
</script>
