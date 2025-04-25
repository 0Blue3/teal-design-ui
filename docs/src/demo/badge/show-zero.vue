<template>
  <tl-space dir="vertical">
    <tl-space>
      <tl-badge :count="0" show-zero>
        <tl-avatar shape="square"></tl-avatar>
      </tl-badge>
      <span style="margin-top: 10px; font-size: 14px; font-weight: 700">
        {{ `show-zero: true` }} | {{ `count: 0` }}
      </span>
    </tl-space>
    <tl-space>
      <tl-badge :count="0">
        <tl-avatar shape="square"></tl-avatar>
      </tl-badge>
      <span style="margin-top: 10px; font-size: 14px; font-weight: 700">
        {{ `show-zero: false` }} | {{ `count: 0` }}
      </span>
    </tl-space>
    <tl-space>
      <tl-badge :count="MessageCount" show-zero>
        <tl-avatar shape="square"></tl-avatar>
      </tl-badge>
      <div class="btn-group">
        <tl-button type="outline" class="btn-first-child" @click="MessageCount--">
          -
        </tl-button>
        <tl-button
          type="outline"
          style="border-top-left-radius: 0; border-bottom-left-radius: 0"
          @click="MessageCount++"
        >
          +
        </tl-button>
      </div>
      <span style="margin-top: 10px; font-size: 14px; font-weight: 700">
        {{ `消息数量: ${MessageCount}` }}
      </span>
    </tl-space>
  </tl-space>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const MessageCount = ref(3);
</script>

<style>
.btn-group .tl-button:first-child {
  border-right: 1px solid rgb(255 255 255 / 40%);
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
</style>
