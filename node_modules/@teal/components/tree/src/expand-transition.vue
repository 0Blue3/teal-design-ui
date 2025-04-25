<script setup lang="ts">
import { RendererElement } from "vue";
import { createNamespace } from "@teal/utils/create";

const bem = createNamespace("collapse");

const reset = (el: RendererElement) => {
  el.style.maxHeight = "";
  el.style.overflow = el.dataset.oldOverflow;
  el.style.paddingTop = el.dataset.oldPaddingTop;
  el.style.paddingBottom = el.dataset.oldPaddingBottom;
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

const on = {
  beforeEnter(el: RendererElement) {
    el.style.height = 0;
  },

  enter(el: RendererElement) {
    el.style.height = "32px";
  },

  afterEnter(el: RendererElement) {
    el.style.height = "";
    // el.style.overflow = el.dataset.oldOverflow;
  },

  enterCancelled(el: RendererElement) {
    reset(el);
  },

  beforeLeave(el: RendererElement) {
    if (!el.dataset) el.dataset = {};

    el.style.maxHeight = "32px";
    el.style.overflow = "hidden";
  },

  leave(el: RendererElement) {
    if (el.scrollHeight !== 0) {
      el.style.maxHeight = 0;
    }
  },

  afterLeave(el: RendererElement) {
    reset(el);
  },

  leaveCancelled(el: RendererElement) {
    reset(el);
  },
};
</script>

<template>
  <TransitionGroup :name="(bem.b() as string)" v-on="on">
    <slot></slot>
  </TransitionGroup>
</template>
