---
title: Switch | Teal-Element
description: Switch 组件的文档
---

# TlSwitch

## 基本用法

通过 `v-model(modelValue)` 可以进行双向绑定。
<preview path="../demo/switch/basic.vue" title="基础用法" description="Switch 组件的基础用法"></preview>

## 按钮尺寸

按钮分为：`s` `m` `l`三种尺寸。默认尺寸为 `m`。
<preview path="../demo/switch/size.vue" title="基础用法" description="Switch 组件的基础用法"></preview>

## 自定义开关的背景色

通过 `checkedColor` 和 `uncheckedColor` 属性可以指定开关的背景色。
<preview path="../demo/switch/custom-bg-color.vue" title="基础用法" description="Switch 组件的基础用法"></preview>

## 自定义开关的值

通过 `checkedValue` 和 `uncheckedValue` 属性可以指定开关在不同状态的值。
<preview path="../demo/switch/custom-value.vue" title="基础用法" description="Switch 组件的基础用法"></preview>

## 自定义开关文本

通过 `checkedText` 和 `uncheckedText` 属性可以指定开关在不同状态的值。
<preview path="../demo/switch/custom-text.vue" title="基础用法" description="Switch 组件的基础用法"></preview>

## 禁用状态 disabled

设置 `disabled` 后无法触发事件

<preview path="../demo/switch/disabled.vue" title="基础用法" description="Switch 组件的基础用法"></preview>

## 加载状态 loading

`loading` 时无法触发事件
<preview path="../demo/switch/loading.vue" title="基础用法" description="Switch 组件的基础用法"></preview>

## API

### props

| 参数                  | 描述                 | 类型                              | 默认值 |
| :-------------------- | :------------------- | :-------------------------------- | :----- |
| model-value (v-model) | 绑定值               | `string` \| `number` \| `boolean` | -      |
| disabled              | 是否禁用             | `boolean`                         | false  |
| loading               | 是否为加载中状态     | `boolean`                         | false  |
| size                  | 开关的大小           | `s` \|`m`\|`l`                    | m      |
| checked-value         | 选中时的值           | `string`\|`number`\|`boolean`     | true   |
| unchecked-value       | 未选中时的值         | `string`\|`number`\|`boolean`     | false  |
| checked-color         | 选中时的开关背景色   | `string`                          | -      |
| unchecked-color       | 未选中时的开关背景色 | `string`                          | -      |
| checked-text          | 选中时的开关文本     | `string`                          | -      |
| unchecked-text        | 未选中时的开关文本   | `string`                          | -      |

### events

| 事件名 | 描述         | 参数                                                     |
| :----- | :----------- | :------------------------------------------------------- |
| change | 值改变时触发 | `Function(value: string ｜ number ｜ boolean, e: Event)` |
