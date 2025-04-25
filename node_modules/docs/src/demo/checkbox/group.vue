<template>
  <tl-space dir="vertical" size="l">
    <tl-checkbox-group :default-value="['1']">
      <tl-checkbox v-for="item in data" :key="item.id" :value="item.id">
        {{ item.label }}
      </tl-checkbox>
    </tl-checkbox-group>
    <div class="empty" />
    <tl-checkbox-group v-model="value" direction="vertical">
      <tl-checkbox v-for="item in data" :key="item.id" :value="item.id">
        {{ item.label }}
      </tl-checkbox>
    </tl-checkbox-group>
    <span>value: {{ value }}</span>
  </tl-space>
</template>
<script setup lang="ts">
import { ref } from "vue";
const data = ref([
  { id: "1", label: "option1" },
  { id: "2", label: "option2" },
  { id: "3", label: "option3" },
]);
const value = ref(["1"]);
</script>
<style scoped></style>
