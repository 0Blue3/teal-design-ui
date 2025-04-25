---
title: Empty| Teal-Element
description: Empty 组件的文档
---

# TlEmpty 空状态

## 基本用法

<preview path="../demo/empty/basic.vue" placeholder="place input" title="基础用法" description="Empty 组件的基础用法"></preview>

## 切换风格

通过使用 `type` 属性来切换不同风格空状态。

<preview path="../demo/empty/type.vue" placeholder="place input" title="基础用法" description="Empty 组件的基础用法"></preview>

## 自定义图片

通过设置 `image` 属性传入图片 `URL`,通过使用 `imageStyle` 属性来控制图片样式。

<preview path="../demo/empty/custom-img.vue" placeholder="place input" title="基础用法" description="Empty 组件的基础用法"></preview>

## 内容自定义

通过插槽来自定义组件内容。

<preview path="../demo/empty/custom-ctx.vue" placeholder="place input" title="基础用法" description="Empty 组件的基础用法"></preview>

## API

### Props

| 参数        | 描述     | 类型            | 默认值 |
| :---------- | :------- | :-------------- | :----- |
| description | 描述信息 | `string`        | -      |
| image       | 图像地址 | `string`        | -      |
| image-style | 图像样式 | `CSSProperties` | -      |

### slots

| 插槽名      | 描述           |
| :---------- | :------------- |
| default     | 自定义底部部分 |
| image       | 自定义图片部分 |
| description | 自定义描述部分 |
