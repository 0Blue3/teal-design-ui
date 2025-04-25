---
title: Badge | Teal-Element
description: Badge 组件的文档
---

# TlBadge 徽标

## 使用场景

一般出现在通知图标或头像的右上角，用于显示需要处理的消息条数，通过醒目视觉形式吸引用户处理。

<preview path="../demo/badge/basic.vue" placeholder="place input" title="基础用法" description="Badge 组件的基础用法"></preview>

## 基本使用

通过插槽方式，可以在其他组件上展现需要处理的消息条数。

<preview path="../demo/badge/slot.vue" placeholder="place input" title="基础用法" description="Badge 组件的基础用法"></preview>

## border

通过 `border` 可以控制消息红点或者是徽标的白色边框。

<preview path="../demo/badge/border.vue" placeholder="place input" title="基础用法" description="Badge 组件的基础用法"></preview>

## 独立使用

不给插槽传值，可以进行独立使用。

<preview path="../demo/badge/stand.vue" placeholder="place input" title="基础用法" description="Badge 组件的基础用法"></preview>

## 小红点

以小红点的形式标注需要关注的内容。默认是外部,可以通过 `in-dot` 移到插槽里面。

<preview path="../demo/badge/in-dot.vue" placeholder="place input" title="基础用法" description="Badge 组件的基础用法"></preview>

## 消息数量

通过 `count` 可以绑定需要展示的消息数量, 通过 `overflowCount` 控制最大显示消息数量,超过将以 `%{overflowCount}+` 的形式展示，默认为 99+。

<preview path="../demo/badge/count.vue" placeholder="place input" title="基础用法" description="Badge 组件的基础用法"></preview>

## 是否展示 0

通过 `showZero` 可以当消息数量为 0 时开启展示。

<preview path="../demo/badge/show-zero.vue" placeholder="place input" title="基础用法" description="Badge 组件的基础用法"></preview>

## 消息位置

通过 `offset` 可以指定消息左侧 `left` 或者右侧 `right`。

<preview path="../demo/badge/offset.vue" placeholder="place input" title="基础用法" description="Badge 组件的基础用法"></preview>

## 消息状态

通过 `status` 可以控制 `status`，默认是 `danger`。

<preview path="../demo/badge/status.vue" placeholder="place input" title="基础用法" description="Badge 组件的基础用法"></preview>

## 消息颜色自定义

通过 `color` 自定义颜色，默认是 `status` 为`danger` 的颜色, 注意：`color` 的优先级会高于 `status`。

<preview path="../demo/badge/custom-color.vue" placeholder="place input" title="基础用法" description="Badge 组件的基础用法"></preview>

## hidden

有时候可能要自主控制是否展示,提供了 `hidden` 的开关,同时显示与隐藏有相关动画效果。

<preview path="../demo/badge/hidden.vue" placeholder="place input" title="基础用法" description="Badge 组件的基础用法"></preview>

## API

### Badge Props

| 参数          | 描述                                     | 类型                                      | 默认值   |
| :------------ | :--------------------------------------- | :---------------------------------------- | :------- |
| is-dot        | 展示为小红点                             | `boolean`                                 | --       |
| in-dot        | 小红点移到内部                           | `boolean`                                 | --       |
| count         | 徽标显示的数字                           | `number`                                  | --       |
| border        | 徽标或者红点的白色边框                   | `number`                                  | 2        |
| overflowCount | 徽标显示的最大数字                       | `number`                                  | 99       |
| showZero      | 徽标是否展示 0                           | `boolean`                                 | false    |
| offset        | 徽标的方位                               | `left`\|`right`\|`[number, number]`       | --       |
| status        | 徽标或者小红点的状态                     | `primary`\|`success`\|`warning`\|`danger` | 'danger' |
| color         | 徽标或者小红点的颜色, 优先级高于`status` | `string`                                  | --       |
| hidden        | 是否隐藏徽标或小红点                     | `boolean`                                 | false    |

### Badge Slots

| 参数    | 描述               |
| :------ | :----------------- |
| default | 自定义内容或者组件 |
