---
title: Tooltip | Teal-Element
description: Tooltip 组件文档
---

# Tooltip 文字提示

常用于展示鼠标 hover 时的提示信息。

## 基础用法

最简单的用法。
<preview path="../demo/tooltip/basic.vue" title="基础用法" description="Tooltip 组件的基础用法"></preview>

## 不同位置

`placement` 指定文本摆放位置。

<preview path="../demo/tooltip/placement.vue" title="基础用法" description="Tooltip 组件的基础用法"></preview>

## 气泡打开状态控制

`v-model:open` 控制打开状态。

<preview path="../demo/tooltip/v-model.vue" title="基础用法" description="Tooltip 组件的基础用法"></preview>

## 多种触发方式

`trigger` 控制气泡触发方式。
<preview path="../demo/tooltip/mul-trigger-modes.vue" title="基础用法" description="Tooltip 组件的基础用法"></preview>

## 自定义颜色

`color` 可自定义气泡颜色。
<preview path="../demo/tooltip/custom-color.vue" title="基础用法" description="Tooltip 组件的基础用法"></preview>

## 自定义气泡内容

`content`插槽自定义气泡内容。
<preview path="../demo/tooltip/custom-content.vue" title="基础用法" description="Tooltip 组件的基础用法"></preview>

## 自动调整气泡位置

`autoAdjustOverflow`控制是否自动调整气泡位置。
<preview path="../demo/tooltip/auto-adjust-overflow.vue" title="基础用法" description="Tooltip 组件的基础用法"></preview>

## API

### props

| 参数               | 描述                                                                                                                                                                                                                      | 类型                      | 默认值 |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- | ------ |
| content            | 气泡消息内容                                                                                                                                                                                                              | `string`                  | ''     |
| placement          | 气泡的位置信息，可选 `top-start`\| `top-end ` \| `bottom`\| `bottom-start` \|`bottom-end` \|`left` \|`left-start` \|`left-end` \|`right` \|`right-start` \|`right-end`                                                    | `string`                  | bottom |
| trigger            | 触发行为，可选 `hover`\|`focus`\|`click`\|`contextMenu`\|`none`, 可使用数组设置多个触发行为。 当 trigger 设置为 none 时，所有组件内触发气泡打开或关闭的事件都将失效，此时想要打开或者关闭气泡则需要通过 open 属性进行控制 | `string` \| `string[]`    | hover  |
| open               | 气泡打开状态                                                                                                                                                                                                              | `boolean`                 | false  |
| color              | 气泡的颜色                                                                                                                                                                                                                | `string`                  | -      |
| autoAdjustOverflow | 气泡被遮挡时自动调整位置                                                                                                                                                                                                  | `boolean`                 | false  |
| closeDelay         | 延迟关闭时长。单位：毫秒                                                                                                                                                                                                  | `number`                  | 300    |
| openDelay          | 延时打开时长。单位：毫秒                                                                                                                                                                                                  | `number`                  | 0      |
| openChange         | 显示隐藏的回调                                                                                                                                                                                                            | `(open: boolean) => void` | -      |
| animation          | 自定义 popper 展开动画                                                                                                                                                                                                    | `string`                  | -      |

### slots

| 名称    | 说明                           | 参数 |
| ------- | ------------------------------ | ---- |
| default | 默认插槽，触发气泡的标签元素。 | -    |
| content | 气泡内容插槽                   | -    |
