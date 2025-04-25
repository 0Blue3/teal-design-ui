<template>
  <div :class="bem.b()">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { createNamespace } from "@teal/utils/create";

const bem = createNamespace("anchor");
</script>
