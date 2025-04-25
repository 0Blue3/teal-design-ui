slide-fade
<template>
  <tl-space>
    <tl-tooltip>
      <tl-button type="outline">fade</tl-button>
    </tl-tooltip>
    <tl-tooltip transition="zoomIn">
      <tl-button type="outline">fade-slide</tl-button>
    </tl-tooltip>
  </tl-space>
</template>
<style scoped>
.t-tooltip {
  .zoomIn-enter-active,
  .zoomIn-leave-active {
    transition: opacity 0.5s ease;
  }

  .zoomIn-enter-from,
  .zoomIn-leave-to {
    opacity: 0;
  }
}
</style>
