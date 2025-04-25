<template>
  <tl-space size="l">
    <tl-image
      src="https://image.meiye.art/pic_LLeU6KQHP8uWNWnIMgdB1"
      width="320"
      height="200"
      fit="cover"
      title="Rohan Dahotre"
      description="ROHAN DAHOTRE是一名印度籍的插画师，他的插画作品大都是聚焦野生动物。"
    >
      <template #extra>
        <tl-space size="s">
          <span class="image-extra-btn">
            <tl-icon icon="fa-download" />
          </span>
          <span class="image-extra-btn">
            <tl-icon icon="fa-circle-exclamation" />
          </span>
        </tl-space>
      </template>
    </tl-image>
    <tl-image
      src="https://image.meiye.art/pic_MipylzO5dCBmslTT5DfWN"
      width="320"
      height="200"
      fit="cover"
      footer-position="outer"
      title="Rohan Dahotre"
      description="ROHAN DAHOTRE是一名印度籍的插画师，他的插画作品大都是聚焦野生动物。"
    >
      <template #extra>
        <tl-space size="s">
          <span class="image-extra-btn">
            <tl-icon icon="fa-download" />
          </span>
          <span class="image-extra-btn">
            <tl-icon icon="fa-circle-exclamation" />
          </span>
        </tl-space> </template
    ></tl-image>
  </tl-space>
</template>
<style>
.image-extra-btn {
  padding: 8px;
  border-radius: 8px;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    color: #fff;
    background-color: rgb(0 0 0 / 50%);
  }
}
</style>
