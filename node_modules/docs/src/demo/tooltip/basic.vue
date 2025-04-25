<template>
  <tl-tooltip content="arrow">
    <span>Mouse hover over the text will appear text prompt</span>
  </tl-tooltip>
  <br />
  <br />
  <tl-tooltip :arrow="false" content="no-arrow">
    <span>Mouse hover over the text will appear text prompt</span>
  </tl-tooltip>
</template>
<script setup>
import "@teal/theme-chalk/src/index.scss";
import TlTooltip from "@teal/components/tooltip";
</script>
