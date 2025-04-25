<template>
  <tl-space dir="vertical">
    <tl-space>
      <tl-badge is-dot out-dot>
        <tl-avatar shape="square"></tl-avatar>
      </tl-badge>
      <tl-badge is-dot out-dot status="primary">
        <tl-avatar shape="square"></tl-avatar>
      </tl-badge>
      <tl-badge is-dot out-dot status="success">
        <tl-avatar shape="square"></tl-avatar>
      </tl-badge>
      <tl-badge is-dot out-dot status="warning">
        <tl-avatar shape="square"></tl-avatar>
      </tl-badge>
    </tl-space>
    <tl-space>
      <tl-badge :count="0" show-zero>
        <tl-avatar shape="square"></tl-avatar>
      </tl-badge>
      <tl-badge :count="5" status="primary">
        <tl-avatar shape="square"></tl-avatar>
      </tl-badge>
      <tl-badge :count="88" status="success">
        <tl-avatar shape="square"></tl-avatar>
      </tl-badge>
      <tl-badge :count="102" status="warning">
        <tl-avatar shape="square"></tl-avatar>
      </tl-badge>
    </tl-space>
  </tl-space>
</template>
