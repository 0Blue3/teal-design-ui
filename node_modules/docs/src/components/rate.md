---
title: Radio | Teal-Element
description: Radio 组件的文档
---

# TlRate 评分

## 基本用法

评分组件基本用法。
<preview path="../demo/rate/basic.vue" placeholder="place input" title="基础用法" description="Radio 组件的基础用法"></preview>

## 尺寸 size

按钮分为：`s`、`m`、`l` 三种尺寸。高度分别为：`15px`、`20px`、`25px`。默认尺寸为 `m`。
<preview path="../demo/rate/size.vue" placeholder="place input" title="基础用法" description="Radio 组件的基础用法"></preview>

## 半选

指定 allow-half 来开启半选。
<preview path="../demo/rate/allow-half.vue" placeholder="place input" title="基础用法" description="Radio 组件的基础用法"></preview>

## 自定义颜色

通过 color 可以自定义颜色。另外可以通过对象形式自定义不同分值时的颜色。
<preview path="../demo/rate/color.vue" placeholder="place input" title="基础用法" description="Radio 组件的基础用法"></preview>

## 只读模式

通过设置 readonly 属性让评分组件为只读状态。
<preview path="../demo/rate/readonly.vue" placeholder="place input" title="基础用法" description="Radio 组件的基础用法"></preview>

## 支持清除

通过设置 allow-clear 来允许清除评分。
<preview path="../demo/rate/allow-clear.vue" placeholder="place input" title="基础用法" description="Radio 组件的基础用法"></preview>

## 任意长度的评分

通过指定 count 来指定任意长度的评分组件。
<preview path="../demo/rate/count.vue" placeholder="place input" title="基础用法" description="Radio 组件的基础用法"></preview>

## API

| 参数                  | 描述              | 类型               | 默认值    |
| :-------------------- | :---------------- | :----------------- | :-------- |
| count                 | 评分的总数        | `string`\|`number` | 5         |
| size                  | 尺寸              | `s`｜`m`｜`l`      | 'l'       |
| model-value (v-model) | 绑定值            | `string`\|`number` | -         |
| default-value         | 默认值            | `string`\|`number` | 0         |
| allow-half            | 是否允许半选      | `boolean`          | false     |
| allow-clear           | 是否允许清除      | `boolean`          | false     |
| readonly              | 是否为只读状态    | `boolean`          | false     |
| disabled              | 是否禁用          | `boolean`          | false     |
| color                 | 颜色              | `string`           | -         |
| icon                  | Icon 内置图标名称 | `string`           | 'fa-star' |

### Events

| 事件名       | 描述                   | 参数            |
| :----------- | :--------------------- | :-------------- |
| change       | 值改变时触发           | `value: number` |
| hover-change | 鼠标移动到数值上时触发 | `value: number` |
