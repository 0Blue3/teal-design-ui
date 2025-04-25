---
title: Textarea | Teal-Element
description: Textarea 组件的文档
---

# TlTextArea 文本域

## 基本用法

可以用于多行输入。
<preview path="../demo/textarea/basic.vue" title="基础用法" description="Switch 组件的基础用法"></preview>

## 文本域状态

文本域可以设置禁用状态。
<preview path="../demo/textarea/disabled.vue" title="基础用法" description="Switch 组件的基础用法"></preview>

## 字数统计

设置 `max-length` 可以限制最大字数，配合 `show-word-limit` 可以显示字数统计。
<preview path="../demo/textarea/max-length.vue" title="基础用法" description="Switch 组件的基础用法"></preview>

## 高度自适应

通过设置 `auto-size`，可以让文本框自适应输入内容。
<preview path="../demo/textarea/auto-size.vue" title="基础用法" description="Switch 组件的基础用法"></preview>

## API

### props

| 参数          | 描述             | 类型                              | 默认值 |
| :------------ | :--------------- | :-------------------------------- | :----- |
| modelValue    | 绑定值           | `string`                          | -      |
| clearable     | 是否可置空       | `boolean`                         | false  |
| placeholder   | 占位文字         | `string`                          | -      |
| maxLength     | 最大限制长度     | `number`                          | 0      |
| showWordLimit | 是否显示字数统计 | `boolean`                         | false  |
| autoSize      | 高度自适应配置   | `{minRows:number,maxRows:number}` | -      |

### event

| 事件   | 描述             |
| :----- | :--------------- |
| input  | 文本域聚焦时触发 |
| change | 值改变时触发     |
| clear  | 置空时触发       |
| focus  | 聚焦时触发       |
| blur   | 失焦时触发       |
