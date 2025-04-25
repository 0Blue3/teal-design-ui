<template>
  <div :class="[bem.b(), bem.is('disabled', disabled)]">
    <tl-icon :icon="icon"></tl-icon>
  </div>
</template>
<script lang="ts" setup>
import { createNamespace } from "@teal/utils";
import type { Component, Ref } from "vue";
import { computed, inject } from "vue";
import TlIcon from "../../icon";
import { PaginationContextKey, type PgnInfo } from "./pagination";

interface Props {
  icon: "prev" | "next";
  prevIcon?: string;
  nextIcon?: string;
}

const bem = createNamespace("pagination-control");

const { isFirstPage, isLastPage } = inject(PaginationContextKey) as PgnInfo;

// prettier-ignore
const props = withDefaults(
    defineProps<Props>(),
    {
        disabled: false,
        prevIcon: "fa-angle-left ",
        nextIcon: "fa-angle-right "
    }
)

const disabled = computed(() => {
  if (props.icon === "prev" && isFirstPage.value) return true;
  if (props.icon === "next" && isLastPage.value) return true;
  return false;
});

const icon = computed(() => {
  if (props.icon === "prev") return props.prevIcon;
  return props.nextIcon;
});
</script>
