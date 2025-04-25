---
title: Pagination | Teal-Element
description: Pagination 组件的文档
---

# TlPagination 分页

## 基本用法

分页的基本用法。

<preview path="../demo/pagination/basic.vue" placeholder="place input" title="基础用法" description="Pagination 组件的基础用法"></preview>

## 简洁模式

通过设置 `simple` 属性开启简洁模式。

<preview path="../demo/pagination/simple.vue" placeholder="place input" title="基础用法" description="Pagination 组件的基础用法"></preview>

## 尺寸

通过设置 `size` 属性改变组件的尺寸。

<preview path="../demo/pagination/size.vue" placeholder="place input" title="基础用法" description="Pagination 组件的基础用法"></preview>

## 固定宽度

属性 `fix-width` 通过将 `pager-count` - 1 使组件的宽度固定。

<preview path="../demo/pagination/fix-width.vue" placeholder="place input" title="基础用法" description="Pagination 组件的基础用法"></preview>

## 禁用

属性 `disabled` 可以禁用组件。

<preview path="../demo/pagination/disabled.vue" placeholder="place input" title="基础用法" description="Pagination 组件的基础用法"></preview>

## 布局

属性 `layouts` 可以自定义分页组件的布局。

<preview path="../demo/pagination/layout.vue" placeholder="place input" title="基础用法" description="Pagination 组件的基础用法"></preview>

## 事件

请前往控制台查看事件监听结果。

<preview path="../demo/pagination/event.vue" placeholder="place input" title="基础用法" description="Pagination 组件的基础用法"></preview>

## API

### Props

| 参数                          | 描述                                            | 类型                                                        | 默认值                    |
| :---------------------------- | :---------------------------------------------- | :---------------------------------------------------------- | :------------------------ |
| total（必填）                 | 总数据量                                        | `number`                                                    | -                         |
| current / v-model:current     | 当前页数                                        | `number`                                                    | -                         |
| page-size / v-model:page-size | 每页展示的数据条数                              | `number`                                                    | -                         |
| default-current               | 默认的页数                                      | `number`                                                    | 1                         |
| default-page-size             | 默认每页展示的数据条数（-1 时表示显示全部数据） | `number`                                                    | 10                        |
| page-size-options             | 数据条数选择器的选项列表                        | `number[]`                                                  | [10, 20, 30, 40, 50]      |
| pager-count                   | 最大显示页码数量                                | `number`                                                    | 7                         |
| layouts                       | 自定义分页器的布局                              | (`pager`\|`prev`\|` next`\|`jumper`\| `pageSize`\|`total[]` | ['prev', 'pager', 'next'] |
| fix-width                     | 固定宽度                                        | `boolean`                                                   | false                     |
| size                          | 组件尺寸                                        | `s`\|`m`\|`l`                                               | 'l'                       |
| simple                        | 简单模式                                        | `boolean`                                                   | false                     |
| disabled                      | 禁用组件                                        | `boolean`                                                   | false                     |

### Events

| 事件名称         | 描述               | 类型                       |
| :--------------- | :----------------- | :------------------------- |
| change           | 页码改变时触发     | (current: number) => void  |
| page-size-change | 数据条数改变时触发 | (pageSize: number) => void |
