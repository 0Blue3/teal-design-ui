---
title: Image | Teal-Element
description: Image 组件的文档
---

# TlImage 图片

## 基本用法

简单的设置 `src` 属性，就能获得一个有预览图片功能的组件。

<preview path="../demo/image/basic.vue" placeholder="place input" title="基础用法" description="Image 组件的基础用法"></preview>

## 标题和简介

通过设置 `title` 和 `alt` 可以将图片的标题和描述显示在图片内部或者底部，显示的位置通过 `footerPosition` 控制。

<preview path="../demo/image/title-alt.vue" placeholder="place input" title="基础用法" description="Image 组件的基础用法"></preview>

## 额外操作

组件提供了具名插槽 `extra` 供用户在页脚定制额外的内容。

<preview path="../demo/image/extra.vue" placeholder="place input" title="基础用法" description="Image 组件的基础用法"></preview>

## 加载状态

如果网络较快的情况下，可以打开 开发者工具将网络设置为 慢速 3G 或 龟速 来预览效果。

<preview path="../demo/image/status.vue" placeholder="place input" title="基础用法" description="Image 组件的基础用法"></preview>

## 错误状态

当图像加载失败时显示的错误内容，可以使用 `error-icon` 插槽来修改错误图标，或者使用 `error` 插槽来替换错误内容。

<preview path="../demo/image/error.vue" placeholder="place input" title="基础用法" description="Image 组件的基础用法"></preview>

## 多图预览

用 `<tl-image-preview-group>` 设置 `srcList` 可以实现多图预览。

<preview path="../demo/image/list-preview.vue" placeholder="place input" title="基础用法" description="Image 组件的基础用法"></preview>

## 单独使用预览组件

`<tl-image-preview>` 可单独使用，需要手动控制 visible。

<preview path="../demo/image/single-preview.vue" placeholder="place input" title="基础用法" description="Image 组件的基础用法"></preview>

## 单独使用多图预览组件

`<tl-image-preview-group>` 可单独使用，需要将 `isRender="false"` ，同时手动控制 `visible`。

<preview path="../demo/image/list-btn-preview.vue" placeholder="place input" title="基础用法" description="Image 组件的基础用法"></preview>

## 挂载节点

可以通过 `popupContainer` 指定预览挂载的父级节点。

<preview path="../demo/image/popup-container.vue" placeholder="place input" title="基础用法" description="Image 组件的基础用法"></preview>
