<template>
  <tl-space dir="vertical">
    <tl-input-search loading placeholder="正在查找..." style="width: 360px" />
    <tl-input-search style="width: 360px">
      <template #prefix>
        <tl-icon icon="fa-magnifying-glass " />
      </template>
      <template #suffix>
        <tl-button type="secondary">搜索</tl-button>
      </template>
    </tl-input-search>
    <tl-input-search size="xl" placeholder="搜点什么" style="width: 360px">
      <template #suffix>
        <tl-button size="xl"><tl-icon icon="fa-magnifying-glass " /></tl-button>
      </template>
    </tl-input-search>
  </tl-space>
</template>
