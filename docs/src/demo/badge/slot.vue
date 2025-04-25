<template>
  <tl-space>
    <tl-badge :count="2">
      <tl-button>主要按钮</tl-button>
    </tl-badge>
    <tl-badge is-dot>
      <tl-avatar shape="square"></tl-avatar>
    </tl-badge>
    <tl-badge is-dot in-dot>
      <tl-avatar shape="square"></tl-avatar>
    </tl-badge>
    <tl-badge :count="2">
      <div
        style="width: 40px; height: 40px; border-radius: 8px; background: #f6f6f8"
      ></div>
    </tl-badge>
    <tl-badge :count="100">
      <div
        style="width: 100px; height: 40px; border-radius: 8px; background: #f6f6f8"
      ></div>
    </tl-badge>
  </tl-space>
</template>
