<template>
  <button
    :class="[
      bem.b(),
      bem.m(type),
      bem.m(status),
      bem.m(size),
      bem.m(shape),
      bem.is('loading', loading),
      bem.is('lang', long),
    ]"
    :disabled="disabled || loading"
  >
    <tl-icon v-if="loading" icon="spinner" spin />
    <tl-icon v-if="icon" :icon="icon" />
    <slot />
  </button>
</template>
<script setup lang="ts">
import { createNamespace } from "@teal/utils/create";
import type { ButtonProps } from "./button";
import TlIcon from "@teal/components/icon";

defineOptions({
  name: "tl-button",
});

const bem = createNamespace("button");

withDefaults(defineProps<ButtonProps>(), {
  type: "primary",
  size: "m",
  shape: "default",
  icon: "",
  disabled: false,
  loading: false,
  long: false,
});
</script>
