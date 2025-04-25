<template>
  <div ref="scroll" class="scroll-box">
    <div class="scroll-view">
      <tl-tooltip
        placement="top-start"
        open
        trigger="click"
        title="The early bird catches the worm"
        auto-adjust-overflow
      >
        <tl-button type="outline">scroll view</tl-button>
      </tl-tooltip>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
const scroll = ref<HTMLElement>();
onMounted(() => {
  scroll.value!.scrollTop = (scroll.value!.scrollHeight - scroll.value!.offsetHeight) / 2;
  scroll.value!.scrollLeft = (scroll.value!.scrollWidth - scroll.value!.offsetWidth) / 2;
});
</script>
<style scoped>
.scroll-box {
  overflow: scroll;
  width: 100%;
  height: 400px;
  border: 1px solid #f0f0f0;
}

.scroll-view {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300%;
  height: 900px;
}
</style>
