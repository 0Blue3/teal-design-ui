<template>
  <tl-space dir="vertical" size="s">
    <tl-title :level="5">size="s"</tl-title>
    <tl-checkbox-group size="s" :default-value="['1']">
      <tl-checkbox v-for="item in data" :key="item.id" :value="item.id">
        {{ item.label }}
      </tl-checkbox>
    </tl-checkbox-group>
    <tl-title :level="5">size="m"</tl-title>
    <tl-checkbox-group size="m" :default-value="['1']">
      <tl-checkbox v-for="item in data" :key="item.id" :value="item.id">
        {{ item.label }}
      </tl-checkbox>
    </tl-checkbox-group>
    <tl-title :level="5">size="l"</tl-title>
    <tl-checkbox-group size="l" :default-value="['1']">
      <tl-checkbox v-for="item in data" :key="item.id" :value="item.id">
        {{ item.label }}
      </tl-checkbox>
    </tl-checkbox-group>

    <tl-title :level="5">size="40"</tl-title>
    <tl-checkbox-group :size="40" :default-value="['1']">
      <tl-checkbox v-for="item in data" :key="item.id" :value="item.id">
        {{ item.label }}
      </tl-checkbox>
    </tl-checkbox-group>
    <tl-title :level="5">自定义水平和竖直间距 :size="[10, 30]"</tl-title>
    <tl-checkbox-group :size="[10, 30]" :default-value="['1']">
      <tl-checkbox v-for="item in data2" :key="item.id" :value="item.id">
        {{ item.label }}
      </tl-checkbox>
    </tl-checkbox-group>
  </tl-space>
</template>
<script setup lang="ts">
import { ref } from "vue";
const data = ref([
  { id: "1", label: "option1" },
  { id: "2", label: "option2" },
  { id: "3", label: "option3" },
]);
const data2 = Array.from({ length: 19 }).map((i, index) => ({
  id: `${index}`,
  label: `option${index}`,
}));
</script>
<style scoped></style>
