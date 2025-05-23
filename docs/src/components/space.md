---
title: Space | Teal-Element
description: Space 组件的文档
---

# TlSpace 间距

## 基本用法

<preview path="../demo/space/basic.vue" title="基础用法" description="Space 组件的基础用法"></preview>

## 间距

您可以通过 `size` 来设置间距，可以是数字或内置尺寸（`ss`、`s`、`m`、`l`、`xl`），也可以是数组，分别对应水平和垂直间距。

<preview path="../demo/space/size.vue" title="基础用法" description="Space 组件的基础用法"></preview>

## 水平对齐

您可以通过 `justify` 属性来设置 `y` 轴对齐方式。可选值：`start`、`center`、`end`、`between`、`around`。默认为 `start`。

<preview path="../demo/space/justify.vue" title="基础用法" description="Space 组件的基础用法"></preview>

## 垂直对齐

您可以通过 `align` 属性来设置 `x` 轴对齐方式。可选值：`start`、`center`、`end`、`baseline`。默认为 `start`。

<preview path="../demo/space/align.vue" title="基础用法" description="Space 组件的基础用法"></preview>

## 排列方向

您可以通过 `dir` 属性来设置元素排列方向。可选值：`vertical`、`horizontal`、`vertical-reverse`、`horizontal-reverse`。默认为 `horizontal`。

<preview path="../demo/space/dir.vue" title="基础用法" description="Space 组件的基础用法"></preview>

## 换行

您可以通过 `wrap` 属性来设置是否换行。

<preview path="../demo/space/wrap.vue" title="基础用法" description="Space 组件的基础用法"></preview>

## 溢出

您可以通过 `overflow` 属性来设置溢出情况。

<preview path="../demo/space/overflow.vue" title="基础用法" description="Space 组件的基础用法"></preview>

## API

注意：对于默认值，例如：`start`，并不需要设置，只需要设置其他值即可。

| 参数     | 描述                                                                                                                              | 类型                                      | 默认值       |
| :------- | :-------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------- | :----------- |
| inline   | 是否内联。                                                                                                                        | `boolean`                                 | false        |
| dir      | 排列方向。可选值：`vertical`、`horizontal`、`vertical-reverse`、`horizontal-reverse`                                              | `string`                                  | 'horizontal' |
| size     | 间距尺寸。可选值：`ss`、`s`、`m`、`l`、`xl`。注意：对于 `number` 类型则默认为 `px` 单位。如果想自定义单位需要使用 `string` 类型。 | `number`\|`string`\|`(number \|string)[]` | 'm'          |
| justify  | 水平对齐。可选值：`start`、`center`、`end`、`space-between`、`space-around`                                                       | `string`                                  | 'start'      |
| align    | 垂直对齐。可选值：`start`、`center`、`end`、`baseline`                                                                            | `string`                                  | 'start'      |
| overflow | 溢出处理。可选值：`visible`、`hidden`、`clip`、`scroll`、`auto`                                                                   | `string`\|`string[]`                      | true         |
| wrap     | 换行。                                                                                                                            | `boolean`\|`wrap-reverse`                 | true         |
