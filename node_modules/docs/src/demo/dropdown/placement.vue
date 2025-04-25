<template>
  <tl-space wrap>
    <tl-dropdown
      v-for="placement in placements"
      :key="placement"
      :title="placement"
      :placement="placement"
    >
      <tl-dropdown-item>Action 1</tl-dropdown-item>
      <tl-dropdown-item>Action 2</tl-dropdown-item>
      <tl-dropdown-item>Action 3</tl-dropdown-item>
      <tl-dropdown-item>Action 4</tl-dropdown-item>
    </tl-dropdown>
  </tl-space>
</template>

<script setup lang="ts">
import type { Placement } from "@teal/components/dropdown";

const placements: Placement[] = [
  "top",
  "top-start",
  "top-end",

  "bottom",
  "bottom-start",
  "bottom-end",

  "left",
  "left-start",
  "left-end",

  "right",
  "right-start",
  "right-end",
];
</script>
