<template>
  <p>反转换行：</p>
  <tl-space wrap="reverse" :size="[10, 20]" class="margin" style="width: 300px">
    <tl-button v-for="item in 10" :key="item">按钮</tl-button>
  </tl-space>
</template>
