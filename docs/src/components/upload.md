---
title: Upload | Teal-Element
description: Upload 组件的文档
---

# TlUpload 文件上传

## 基本用法

文件列表上传。
<preview path="../demo/upload/basic.vue" title="基础用法" description="Upload 组件的基础用法"></preview>

## 单文件上传

通过 `multiple` 控制是否能够上传多文件，默认为 true。
<preview path="../demo/upload/multiple.vue" title="基础用法" description="Upload 组件的基础用法"></preview>

## 文件数量限制

通过 `limit` 控制文件上传数量限制。

<preview path="../demo/upload/limit.vue" title="基础用法" description="Upload 组件的基础用法"></preview>

## 图片上传

通过 `accept` 判断是否仅上传图片，若接受对象包含 `image` 、 `png` 、 `jpg/jpeg` ，则采用图片列表上传 。
<preview path="../demo/upload/img.vue" title="基础用法" description="Upload 组件的基础用法"></preview>

## 图片列表样式及限制数量

通过 `limit` 控制图片上限、通过 `shape` 修改列表风格。

<preview path="../demo/upload/img-list.vue" title="基础用法" description="Upload 组件的基础用法"></preview>

## 头像上传

通过传入 `avatar` 进行头像上传，只允许上传一张图片且上传后允许通过裁剪重新上传。
<preview path="../demo/upload/avatar.vue" title="基础用法" description="Upload 组件的基础用法"></preview>

## 拖拽上传

通过传入 `draggle` 将 `UI` 变更为拖拽区，文件列表与常规文件一致，允许通过拖拽上传文件。

<preview path="../demo/upload/toggle.vue" title="基础用法" description="Upload 组件的基础用法"></preview>

## 回调函数

目前支持上传前、上传成功、上传失败、删除文件四个钩子

<preview path="../demo/upload/callback.vue" title="基础用法" description="Upload 组件的基础用法"></preview>
