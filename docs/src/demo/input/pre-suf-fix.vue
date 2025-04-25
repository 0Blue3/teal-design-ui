<template>
  <tl-space dir="vertical">
    <tl-input placeholder="四" style="width: 360px">
      <template #prefix><tl-text>今天是星期</tl-text></template>
    </tl-input>
    <tl-input style="width: 360px">
      <template #prefix><tl-text>衬衫的价格是</tl-text></template>
      <template #suffix><tl-text>便士</tl-text></template>
    </tl-input>
    <tl-input placeholder="输入总金额" style="width: 360px" size="s">
      <template #prefix>
        <tl-icon icon="fa-circle-dollar-to-slot " />
      </template>
    </tl-input>
    <tl-input placeholder="输入总金额" style="width: 360px" size="m">
      <template #prefix>
        <tl-icon icon="fa-circle-dollar-to-slot " />
      </template>
    </tl-input>
    <tl-input placeholder="输入总金额" style="width: 360px">
      <template #prefix>
        <tl-icon icon="fa-circle-dollar-to-slot " />
      </template>
    </tl-input>
    <tl-input placeholder="输入总金额" style="width: 360px">
      <template #prefix>
        <tl-icon icon="fa-circle-dollar-to-slot " />
      </template>
    </tl-input>
    <tl-input placeholder="请输入你最喜欢的书" style="width: 360px">
      <template #suffix>
        <tl-icon icon="fa-book-bookmark " />
      </template>
    </tl-input>
  </tl-space>
</template>
