<template>
  <component
    :is="tag"
    :class="[
      bem.b(),
      bem.m(type),
      bem.is('disabled', disabled),
      bem.is('mark', mark),
      bem.is('strong', strong),
      bem.is('underline', underline),
      bem.is('del', del),
    ]"
  >
    <slot></slot>
  </component>
</template>

<script setup lang="ts">
import { createNamespace } from "@teal/utils/create";
import { textProps } from "./typography";

defineOptions({
  name: "TlText",
});

const bem = createNamespace("text");
const props = defineProps(textProps);

const TagMap = { ...props, type: false };
const [_tag, ...classList] = Object.entries(TagMap)
  .filter((item) => item[1])
  .map((item) => item[0]);
const tag = _tag || "span";
</script>
