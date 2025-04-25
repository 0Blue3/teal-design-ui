<template>
  <tl-space>
    <tl-button @click="handleClick">滚动100px</tl-button>
    <tl-button @click="handleClick2">滚动+100px</tl-button>
  </tl-space>
  <tl-scrollbar ref="scrollbar" height="400px">
    <div class="content">
      <div v-for="item in 20" :key="item" class="item">{{ item }}</div>
    </div>
  </tl-scrollbar>
</template>
<script setup lang="ts">
import { shallowRef } from "vue";
const scrollbar = shallowRef();
const handleClick = () => {
  scrollbar.value.scrollTo({
    top: 100,
  });
};
const handleClick2 = () => {
  scrollbar.value.scrollBy({
    top: 100,
    behavior: "smooth",
  });
};
</script>
<style scoped>
.content {
  overflow: hidden;
}

.item {
  margin: 10px;
  padding: 10px;
  background: var(--teal-color-primary-1);
}
</style>
