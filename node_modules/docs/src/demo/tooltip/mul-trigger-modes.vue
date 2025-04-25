<template>
  <tl-space dir="vertical">
    <tl-space>
      <tl-switch v-model="open"></tl-switch>
      <tl-text type="second">切换气泡显示状态</tl-text>
    </tl-space>
    <tl-space>
      <tl-tooltip
        placement="bottom"
        trigger="none"
        content="当 trigger 设置为 none 时，所有组件内触发气泡打开或关闭的事件都将失效"
        v-model:open="open"
      >
        <tl-button type="primary">tooltip</tl-button>
      </tl-tooltip>
      <tl-tooltip placement="bottom">
        <tl-button type="outline">hover</tl-button>
      </tl-tooltip>
      <tl-tooltip placement="bottom" trigger="click">
        <tl-button type="outline">click</tl-button>
      </tl-tooltip>
      <tl-tooltip placement="bottom" :trigger="['hover', 'click']">
        <tl-button type="outline">click && hover</tl-button>
      </tl-tooltip>
      <tl-tooltip placement="bottom" trigger="contextmenu">
        <tl-button type="outline">contextmenu</tl-button>
      </tl-tooltip>
      <tl-tooltip placement="bottom" trigger="focus">
        <tl-input />
      </tl-tooltip>
    </tl-space>
  </tl-space>
</template>
<script setup>
import { ref } from "vue";
const open = ref(false);
</script>
