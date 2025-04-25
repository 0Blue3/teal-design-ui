<template>
  <a
    :class="[bem.b(), bem.is('disabled', disabled)]"
    :target="newtab ? '_blank' : undefined"
    :href="disabled || !href ? undefined : href"
    @click="onClick"
  >
    <slot />
    <sup v-if="isAnchor">#</sup>
  </a>
</template>
<script lang="ts" setup>
import { createNamespace } from "@teal/utils/create";
import { linkProps } from "./link";

defineOptions({
  name: "TlLink",
});

const bem = createNamespace("link");
const props = defineProps(linkProps);

const isAnchor = props.href.startsWith("#");
const emits = defineEmits(["click"]);

const onClick = () => {
  if (!props.disabled) {
    emits("click");
  }
  return;
};
</script>
