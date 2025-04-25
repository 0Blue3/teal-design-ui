---
title: Input | Teal-Element
description: Input 组件的文档
---

# Input 输入框

通过鼠标或键盘输入字符。

## 基本用法

<preview path="../demo/Input/basic.vue" placeholder="place input" title="基础用法" description="Input 组件的基础用法"></preview>

## 尺寸

输入框定义了三种默认尺寸 `s`、`m` 、`l`, 默认 `m`。
<preview path="../demo/Input/size.vue" placeholder="place input" title="基础用法" description="Input 组件的基础用法"></preview>

## 状态

不同于原生 Input 组件，我们的输入框提供了除可编辑、禁用外的如错误、警告等更多状态。
<preview path="../demo/Input/status.vue" placeholder="place input" title="基础用法" description="Input 组件的基础用法"></preview>

## 前置后置标签

在输入框的前后附加文字、图标等元素作为输入提示。
<preview path="../demo/Input/pre-suf-fix.vue" placeholder="place input" title="基础用法" description="Input 组件的基础用法"></preview>

## 前置后置元素

在输入框的高亮边框外放置元素。
<preview path="../demo/Input/pre-app-end.vue" placeholder="place input" title="基础用法" description="Input 组件的基础用法"></preview>

## 密码输入类型

添加对应的参数来显示输入框的加载指示器，这在异步获取数据时很有用。
<preview path="../demo/Input/password.vue" placeholder="place input" title="基础用法" description="Input 组件的基础用法"></preview>

## 字数统计与限制

通过 `show-counter` 控制是否在右侧显示输入字符数；通过 `limit` 控制最大输入的字符数。同时设置将会同时显示字符数统计与最大字符数。
<preview path="../demo/Input/counter.vue" placeholder="place input" title="基础用法" description="Input 组件的基础用法"></preview>

## 文字提示

通过 `message` 设置输入框下方的文字提示。这在指导用户填写严格数据时很有用。

<preview path="../demo/Input/message.vue" placeholder="place input" title="基础用法" description="Input 组件的基础用法"></preview>

## 搜索框

搜索框 = 输入框 + 按钮

<preview path="../demo/Input/search.vue" placeholder="place input" title="基础用法" description="Input 组件的基础用法"></preview>

## 事件

可以为输入框聚焦、失焦和变更等事件添加回调函数。
<preview path="../demo/Input/event.vue" placeholder="place input" title="基础用法" description="Input 组件的基础用法"></preview>

## API

### props

| 参数                 | 描述                       | 类型                                      | 默认值    |
| -------------------- | -------------------------- | ----------------------------------------- | --------- |
| v-model(model-value) | 绑定模型                   | `Ref`                                     | ''        |
| id                   | 输入框的 id 属性           | `string`                                  | ''        |
| name                 | 输入框的 name 属性         | `string`                                  | ''        |
| required             | 输入框的 required 属性     | `boolean`                                 | false     |
| size                 | 输入框的大小               | `s`\|`m`\|`l`                             | m         |
| type                 | 输入框的输入类型           | `text`\|`password`                        | text      |
| placeholder          | 输入框的占位文字           | `string`                                  | ''        |
| value                | 输入框的初始值             | `string`                                  | ''        |
| disabled             | 输入框是否禁用             | `boolean`                                 | false     |
| readonly             | 输入框是否只读             | `boolean`                                 | false     |
| clearable            | 输入框是否显示清空按钮     | `boolean`                                 | false     |
| clearable            | 输入框是否显示清空按钮     | `boolean`                                 | false     |
| statue               | 输入框的状态               | `danger`\|`success`\|`warning`\|`primary` | 'primary' |
| loading              | 输入框是否为加载中状态     | `boolean`                                 | false     |
| show-counter         | 输入框是否显示字数统计     | `boolean`                                 | false     |
| limit                | 输入框最大输入字符数       | `number`                                  | -1        |
| message              | 输入框聚焦时显示的文字提示 | `string`                                  | ''        |
| style                | 组件的样式                 | `CSSProperties`                           | undefined |

### events

| 事件   | 描述                             |
| :----- | :------------------------------- |
| focus  | 输入框聚焦时触发                 |
| blur   | 输入框失焦时触发                 |
| clear  | 输入框清空时触发                 |
| change | 输入框输入字符、退格、粘贴时触发 |
| submit | 输入框聚焦时按 Enter 触发        |

### slots

| 插槽    | 描述           |
| :------ | :------------- |
| prefix  | 输入框前置标签 |
| suffix  | 输入框后置标签 |
| prepend | 输入框前置元素 |
| append  | 输入框后置元素 |
