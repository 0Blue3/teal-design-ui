---
title: Button | Teal-Element
description: Button 组件的文档
---

# TlButton

点击开启一个即时操作。

## 按钮类型

按钮有三种类型：`primary` 、`secondary` 、`outline` 。主按钮在同一个操作区域建议最多出现一次。

<preview path="../demo/button/basic.vue" placeholder="place input" title="基础用法" description="Button 组件的基础用法"></preview>

## 按钮尺寸

按钮分为：`s`、`m`、`l` 三种尺寸。高度分别为：`24px`、`32px`、`36px`。默认尺寸为 `m`。

<preview path="../demo/button/size.vue" placeholder="place input" title="基础用法" description="Button 组件的基础用法"></preview>

## 按钮形状

按钮分为默认形状、`circle` 圆形、`round` 全圆角、`square` 正方形四种形状。

<preview path="../demo/button/shape.vue" placeholder="place input" title="基础用法" description="Button 组件的基础用法"></preview>

## 图标按钮

在按钮文字前面插入图标，或单独使用。

<preview path="../demo/button/icon.vue" placeholder="place input" title="基础用法" description="Button 组件的基础用法"></preview>

## 按钮状态

按钮的状态分为 `primary` 主要、`success` 成功、`warning` 警告、`danger` 危险五种，可以与按钮类型同时使用。

<preview path="../demo/button/status.vue" placeholder="place input" title="基础用法" description="Button 组件的基础用法"></preview>

## 禁用状态

按钮不可点击。

<preview path="../demo/button/disabled.vue" placeholder="place input" title="基础用法" description="Button 组件的基础用法"></preview>

## 加载中按钮

通过设置 `loading` 可以让按钮处于加载中状态。处于加载中状态的按钮不会触发点击事件。

<preview path="../demo/button/loading.vue" placeholder="place input" title="基础用法" description="Button 组件的基础用法"></preview>

## 长按钮

通过设置 `long` 属性，使按钮的宽度跟随容器的宽度。

<preview path="../demo/button/long.vue" placeholder="place input" title="基础用法" description="Button 组件的基础用法"></preview>

## API

通过设置 Button 的属性来产生不同的按钮样式，推荐顺序为：`type` -> `size` -> `shape` -> `status` -> `disabled`。

| 参数     | 描述           | 类型                                      | 默认值 |
| :------- | :------------- | :---------------------------------------- | :----- |
| type     | 按钮的类型     | `primary`\|`secondary`\|`outline`         | \`     |
| shape    | 按钮的形状     | `round`\|`circle`\|`square`               | -      |
| status   | 按钮的状态     | `primary`\|`success`\|`warning`\|`danger` | -      |
| size     | 按钮的大小     | `s`\|`m`\|`l`                             | 'l'    |
| disabled | 按钮是否被禁用 | `boolean`                                 | false  |
| loading  | 按钮是否加载中 | `boolean`                                 | false  |
| long     | 按钮是否通栏   | `boolean`                                 | false  |

### Button Slots

| 参数 | 描述 | 默认值 |
| :--- | :--- | :----- |
| icon | 图标 | -      |
