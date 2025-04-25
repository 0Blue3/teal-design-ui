---
title: Tree | Teal-Element
description: Tree 组件文档
---

# TlTree 树

## 基础用法

通过 `defaultExpandedKeys` 初始化默认展开的节点，可监听 `expand` 节点展开收起事件。

<preview path="../demo/tree/basic.vue" title="基础用法" description="Tree 组件的基础用法"></preview>

## 节点点击

通过 `defaultSelectedKeys` 初始化默认选中的节点，点击节点，切换不同节点的选中状态。设置 `multiple` 来允许节点多选。也可以通过 `expand-icon` 来定制展开收起的图标，展开状态会旋转 `90°`。

<preview path="../demo/tree/multiple.vue" title="基础用法" description="Tree 组件的基础用法"></preview>

## 可选择树

通过 `showCheckbox` 开启选择模式，`checkedKeys` 获取已选中的 `keys`。

<preview path="../demo/tree/checkbox.vue" title="基础用法" description="Tree 组件的基础用法"></preview>

## 异步加载

点击展开节点，动态加载数据。

<preview path="../demo/tree/load.vue" title="基础用法" description="Tree 组件的基础用法"></preview>

## 目录树

通过 `fileIcons` 自定义目录展开、目录收起、文件图标，也支持定制单个节点图标。

<preview path="../demo/tree/file.vue" title="基础用法" description="Tree 组件的基础用法"></preview>

## 自定义 label

通过插槽自定义目录。

<preview path="../demo/tree/label.vue" title="基础用法" description="Tree 组件的基础用法"></preview>
