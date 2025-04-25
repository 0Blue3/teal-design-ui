<template>
  <tl-slider v-model="value" :marks="marks"></tl-slider>
</template>
<script setup lang="ts">
import { ref, createVNode } from "vue";
import { SliderMark } from "@teal/components/slider/index";
const value = ref([10, 40]);
const marks = ref<SliderMark[]>([
  {
    key: 0,
    label: "0°C",
  },
  {
    key: 8,
    label: "8°C",
  },
  {
    key: 40,
    label: "40°C",
    style: {
      color: "red",
    },
  },
  {
    key: 60,
    labelNode: createVNode("em", null, "60°C"),
  },
]);
</script>
