---
title: Avatar | Teal-Element
description: Avatar 组件的文档
---

# TlAvatar 头像

用于头像显示，可以设置头像形状、内容可以是图片、图标、颜色。

## 基本使用

头像的基本用法，实际中使用图片为主。

<preview path="../demo/avatar/basic.vue" placeholder="place input" title="基础用法" description="Button 组件的基础用法"></preview>

## 大小 size

通过设置 `size` 字段，调节头像大小，默认大小为 `40px` ，当然可以直接输入数字。

<preview path="../demo/avatar/size.vue" placeholder="place input" title="基础用法" description="Button 组件的基础用法"></preview>

## 形状 shape

头像默认为圆形，可以设置为圆角方形，并且支持输入数值渲染圆角大小。

<preview path="../demo/avatar/shape.vue" placeholder="place input" title="基础用法" description="Button 组件的基础用法"></preview>

## AvatarGroup 头像组

使用 `AvatarGroup` 可以使用头像组功能，可通过 `size` 指定头像的大小，可通过 `max` 指定头像显示最多个数,默认 3 个。

<preview path="../demo/avatar/group.vue" placeholder="place input" title="基础用法" description="Button 组件的基础用法"></preview>

## API

### Avatar Props

| 参数     | 描述     | 类型                         | 默认值   |
| :------- | :------- | :--------------------------- | :------- |
| `size`   | 头像大小 | `s`\|`m`\|`l`\|`number`      | 'l'      |
| `icon`   | 图标名称 | `boolean`                    | true     |
| `imgUrl` | 图片地址 | -                            | -        |
| `shape`  | 头像形状 | `circle`\|`square`\|`number` | 'circle' |

### AvatarGroup Props

| 参数    | 描述               | 类型                         | 默认值   |
| :------ | :----------------- | :--------------------------- | :------- |
| `size`  | 头像大小           | `s`\|`m`\|`l`\|`number`      | 'l'      |
| `max`   | 头像组最多显示个数 | `number`                     | 3        |
| `shape` | 头像形状           | `circle`\|`square`\|`number` | 'circle' |
