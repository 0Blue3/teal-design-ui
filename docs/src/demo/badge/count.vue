<!-- eslint-disable no-irregular-whitespace -->
<template>
  <tl-space dir="vertical">
    <tl-space>
      <tl-badge :count="2">
        <tl-avatar shape="square"></tl-avatar>
      </tl-badge>
    </tl-space>
    <tl-space>
      <tl-badge :count="MessageCount">
        <tl-avatar shape="square"></tl-avatar>
      </tl-badge>
      <span style="margin-top: 10px; font-size: 14px; font-weight: 700">
        {{ `消息数量: ${MessageCount}` }}
      </span>
    </tl-space>
    <tl-space>
      <tl-badge :count="9999999" :overflow-count="9999">
        <tl-avatar shape="square"></tl-avatar>
      </tl-badge>
      <span style="margin-top: 10px; font-size: 14px; font-weight: 700">
        {{ `消息数量: 9999999` }}
      </span>
    </tl-space>
    <tl-space>
      <tl-badge :count="MessageCount2">
        <tl-avatar shape="square"></tl-avatar>
      </tl-badge>
      <tl-badge :count="MessageCount2" :overflow-count="5">
        <tl-avatar shape="square"></tl-avatar>
      </tl-badge>
      <div class="btn-group">
        <tl-button
          type="outline"
          style="border-top-right-radius: 0; border-bottom-right-radius: 0"
          @click="MessageCount2--"
        >
          -
        </tl-button>
        <tl-button
          type="outline"
          style="border-top-left-radius: 0; border-bottom-left-radius: 0"
          @click="MessageCount2++"
        >
          +
        </tl-button>
      </div>
      <span style="margin-top: 10px; font-size: 14px; font-weight: 700">
        {{ `消息数量: ${MessageCount2}` }}
      </span>
    </tl-space>
  </tl-space>
</template>
<script lang="ts" setup>
import { ref } from "vue";
const MessageCount = ref<number>(233);
const MessageCount2 = ref<number>(8);
</script>
