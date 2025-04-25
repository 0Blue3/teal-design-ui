<template>
  <tl-space size="l">
    <tl-image
      src="image-error.png"
      alt="图片加载失败"
      width="300"
      height="200"
    ></tl-image>
    <tl-image src="image-error.png" width="300" height="200">
      <template #error-icon>
        <tl-icon icon="fa-circle-exclamation " />
      </template>
    </tl-image>
  </tl-space>
</template>
