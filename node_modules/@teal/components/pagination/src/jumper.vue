<template>
  <div :class="bem.b()">
    <div :class="bem.e('label')">前往</div>
    <TlInputNumber
      v-model="_current"
      :min="1"
      :max="lastPage"
      :controls="false"
      :size="size"
    />
  </div>
</template>
<script setup lang="ts">
import { createNamespace } from "@teal/utils";
import { inject } from "vue";
import { type PgnInfo, PaginationContextKey } from "./pagination";
import TlInputNumber from "@teal/components/input-number";

const bem = createNamespace("pagination-jumper");

const { _current, lastPage, size } = inject(PaginationContextKey) as PgnInfo;
</script>
