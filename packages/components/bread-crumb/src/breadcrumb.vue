<template>
  <div :class="bem.b()" ref="breadCrumbRef">
    <slot />
    <div v-if="false">
      <slot name="separator"></slot>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, provide, useSlots } from "vue";
import { createNamespace } from "@teal/utils";
import { BreadcrumbProps, breadcrumbName } from "./breadcrumb";

const bem = createNamespace("breadcrumb");

defineOptions({ name: "tl-breadcrumb" });

const slots = useSlots();
const props = withDefaults(defineProps<BreadcrumbProps>(), {
  separator: "/",
});
provide(breadcrumbName, { props, slots });
</script>
