<template>
  <tl-scrollbar height="400px" native>
    <div class="content">
      <p v-for="item in 20" :key="item" class="item">{{ item }}</p>
    </div>
  </tl-scrollbar>
</template>
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
