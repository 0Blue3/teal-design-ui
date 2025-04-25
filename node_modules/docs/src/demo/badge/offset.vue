<template>
  <tl-space dir="vertical">
    <tl-space>
      <tl-badge :count="2" offset="left">
        <div
          style="width: 100px; height: 40px; border-radius: 8px; background: #f6f6f8"
        ></div>
      </tl-badge>
    </tl-space>
    <tl-space>
      <tl-badge :count="100" offset="right">
        <div
          style="width: 100px; height: 40px; border-radius: 8px; background: #f6f6f8"
        ></div>
      </tl-badge>
    </tl-space>
    <tl-space>
      <tl-badge :count="1">
        <tl-avatar shape="square"></tl-avatar>
      </tl-badge>
      <tl-badge :count="1" :offset="[20, 20]">
        <tl-avatar shape="square"></tl-avatar>
      </tl-badge>
    </tl-space>
  </tl-space>
</template>
