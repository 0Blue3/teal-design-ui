<template>
  <component :is="`h${level}`" :class="[bem.b(), bem.m(type)]">
    <slot></slot>
  </component>
</template>

<script setup lang="ts">
import { createNamespace } from "@teal/utils/create";
import { titleProps } from "./typography";

defineOptions({ name: "TlTitle" });

const bem = createNamespace("title");
const props = defineProps(titleProps);
</script>
