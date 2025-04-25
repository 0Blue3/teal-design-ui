---
title: Dropdown | Teal-Element
description: Dropdown 组件的文档
---

# TlDropdown 下拉菜单

## 基本使用

您可以通过 `title` 属性设置下拉菜单显示值。

<preview path="../demo/dropdown/basic.vue" placeholder="place input" title="基础用法" description="Dropdown 组件的基础用法"></preview>

## 触发方式

触发下拉菜单出现，有这些方式：`hover`、`click`、`contextMenu`。您可以使用 `trigger` 属性设置。默认值为 `hover`。

<preview path="../demo/dropdown/trigger.vue" placeholder="place input" title="基础用法" description="Dropdown 组件的基础用法"></preview>

## 类型

这里的 `type` 属性与 `tl-button` 组件的 `type` 属性一致。可选值有：`primary`（默认）、`secondary`、`outline`。

<preview path="../demo/dropdown/type.vue" placeholder="place input" title="基础用法" description="Dropdown 组件的基础用法"></preview>

## 尺寸

这里的 `size` 属性与 `tl-button` 组件的 `size` 属性一致。可选值有：`s`、`m` ( 默认 )、`l`。

<preview path="../demo/dropdown/size.vue" placeholder="place input" title="基础用法" description="Dropdown 组件的基础用法"></preview>

## 禁用

您可以通过添加 `disabled` 属性禁用下拉菜单。

<preview path="../demo/dropdown/disabled.vue" placeholder="place input" title="基础用法" description="Dropdown 组件的基础用法"></preview>

## 位置

您可以通过添加 `placement` 属性设置下拉列表的位置。

<preview path="../demo/dropdown/placement.vue" placeholder="place input" title="基础用法" description="Dropdown 组件的基础用法"></preview>

## 多级菜单

<preview path="../demo/dropdown/level.vue" placeholder="place input" title="基础用法" description="Dropdown 组件的基础用法"></preview>

## API

### Dropdown Props

| 属性名         | 描述                                                                | 类型                                                                                                                                                   | 默认值      |
| :------------- | :------------------------------------------------------------------ | :----------------------------------------------------------------------------------------------------------------------------------------------------- | :---------- |
| title          | dropdown 按钮显示文字。                                             | `string`                                                                                                                                               | -           |
| type           | 类型。                                                              | `string` - `primary`\|`secondary`\|`outline`                                                                                                           | 'secondary' |
| size           | 尺寸。                                                              | `string` - `s`\|`m`\|`l`                                                                                                                               | 'l'         |
| trigger        | 下拉列表显示方式。                                                  | `string`\|`string[]` - `hover`\|`click`\|`contextMenu`\|`none`                                                                                         | 'hover'     |
| placement      | 下拉列表显示位置。                                                  | `string`- `bottom`\|`bottom-start`\|`bottom-end`\|`top`\|`top-start`\|`top-end`\|`right`\|`right-start`\|`right-end`\|`left`\|`left-start`\|`left-end` | 'bottom'    |
| disabled       | 禁用。                                                              | `boolean`                                                                                                                                              | false       |
| overlayStyle   | 下拉列表卡片样式。                                                  | `object`                                                                                                                                               | -           |
| overlayClass   | 下拉列表卡片类名。                                                  | `string`                                                                                                                                               | -           |
| closeDelay     | 延时打开时长。单位：毫秒。                                          | `number`                                                                                                                                               | 0           |
| openDelay      | 延时打开时长。单位：毫秒。                                          | `number`                                                                                                                                               | 80          |
| zIndex         | 设置下拉列表的 z-index                                              | `number`                                                                                                                                               | 1           |
| visible-change | 下拉框出现/隐藏时触发。出现则为 true，隐藏则为 false。              | `(open: boolean) => void`                                                                                                                              | -           |
| selected       | 点击菜单项触发的事件回调。`<tl-dropdown-item>` 的值（`value` 属性） | (value: number \|string\|object) => void                                                                                                               | -           |

### Dropdown Slots

| 属性名 | 说明                               |
| :----- | :--------------------------------- |
| -      | 下拉列表项（`tl-dropdown-item`）。 |
| title  | 下拉菜单的内容。                   |

### DropdownItem Props

| 属性名    | 说明                                      | 类型                         | 默认值                  |
| :-------- | :---------------------------------------- | :--------------------------- | :---------------------- |
| value     | 传递给 `selected` 事件的参数。            | `string`\|`number`\|`object` | -                       |
| disabled  | 禁用。                                    | `boolean`                    | `false`                 |
| submenu   | 是否为多级菜单。                          | `boolean`                    | `false`                 |
| dir       | 多级菜单展开方向。可选值：`left`、`right` | `string`                     | `right`                 |
| animation | 多级菜单展开动画。                        | `string`                     | `downRight`\|`downLeft` |

### DropdownItem Slots

| 插槽名 | 说明                                                |
| :----- | :-------------------------------------------------- |
| -      | 自定义 Dropdown-Item 内容                           |
| title  | 当 `submenu` 为 true 时，该插槽为拉下项显示的内容。 |
