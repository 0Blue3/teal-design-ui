---
title: Collapse | Teal-Element
description: Collapse 组件的文档
---

# TlCollapse 折叠面板

## 基本用法

在一个屏幕展示太多的信息可能会让人厌烦，但用上这个组件，即可轻松解决问题。

<preview path="../demo/collapse/basic.vue" placeholder="place input" title="基础用法" description="Collapse 组件的基础用法"></preview>

## 手风琴模式

手风琴模式，始终只有一个面板处在激活状态。使用 `accordion` 属性控制。

<preview path="../demo/collapse/accordion.vue" placeholder="place input" title="基础用法" description="Collapse 组件的基础用法"></preview>

## 尺寸

折叠面板有大、中、小三种尺寸。

通过设置 `size` 为 `s` 、`m`、`l` 分别把折叠面板设为大、小尺寸。若不设置 `size`，则尺寸默认为 `m`。

<preview path="../demo/collapse/size.vue" placeholder="place input" title="基础用法" description="Collapse 组件的基础用法"></preview>

## 嵌套面板

嵌套折叠面板。

<preview path="../demo/collapse/cover.vue" placeholder="place input" title="基础用法" description="Collapse 组件的基础用法"></preview>

## 额外节点

自定义渲染每个面板右上角的内容。

<preview path="../demo/collapse/extra.vue" placeholder="place input" title="基础用法" description="Collapse 组件的基础用法"></preview>

## 无边框

通过 `border` 控制折叠面板组是否显示边框线。默认为 `true` 。

<preview path="../demo/collapse/no-border.vue" placeholder="place input" title="基础用法" description="Collapse 组件的基础用法"></preview>

## 使用插槽

通过 `slot#name` 和 `slot#title` 可自定义标题和展开关闭图标。

<preview path="../demo/collapse/custom.vue" placeholder="place input" title="基础用法" description="Collapse 组件的基础用法"></preview>
