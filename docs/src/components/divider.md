---
title: Divider | Teal-Element
description: Divider 组件的文档
---

# TlDivider 分割线

## 基本用法

展示水平分割线基本用法。

<preview path="../demo/divider/basic.vue" placeholder="place input" title="基础用法" description="Divider 组件的基础用法"></preview>

## 标题设置

可以在分割线上自定义文本内容。

<preview path="../demo/divider/position.vue" placeholder="place input" title="基础用法" description="Divider 组件的基础用法"></preview>

## 分割线样式

在分割线上自定义分割线样式，含分割线类型和分割线宽度。

<preview path="../demo/divider/style.vue" placeholder="place input" title="基础用法" description="Divider 组件的基础用法"></preview>

## 竖分割线

设置竖方向分割线。

<preview path="../demo/divider/vertical.vue" placeholder="place input" title="基础用法" description="Divider 组件的基础用法"></preview>

## API

### Props

| 参数             | 描述           | 类型                                   | 默认值       |
| :--------------- | :------------- | :------------------------------------- | :----------- |
| content-position | 自定义文本位置 | `string` - `left`\|`middle`\|`right`   | 'left'       |
| width            | 分割线宽度     | `number`                               | 1            |
| height           | 分割线高度     | `number`                               | '1em'        |
| border-style     | 分割线类型     | `number` - `soild`\|`dotted`\|`double` | 'soild'      |
| direction        | 分割线方向     | `string` - `horizontal`\|`vertical`    | 'horizontal' |
