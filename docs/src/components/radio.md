---
title: Radio | Teal-Element
description: Radio 组件的文档
---

# Radio 单选框

## 基本用法

这里展示基本用法。
<preview path="../demo/radio/basic.vue" placeholder="place input" title="基础用法" description="Radio 组件的基础用法"></preview>

## 控制状态

通过 `v-model` (modelValue) 属性控制是否选中。
<preview path="../demo/radio/v-model.vue" placeholder="place input" title="基础用法" description="Radio 组件的基础用法"></preview>

## 单选框组

基本单选框组使用方式，使用原则，当选项大于 5 个时 推荐使用选项框。使用 `tl-radio-group` 组件将 `tl-radio` 组件包裹使用。
<preview path="../demo/radio/group.vue" placeholder="place input" title="基础用法" description="Radio 组件的基础用法"></preview>

## 禁用状态单选框组

设置单选框组的 `disabled` 属性开启禁用状态。
<preview path="../demo/radio/group-disabled.vue" placeholder="place input" title="基础用法" description="Radio 组件的基础用法"></preview>

## 垂直方向单选框组

设置单选框组的 `direction` 属性设置为 `vertical` 子元素为垂直方向展示,默认值 `horizontal`。
<preview path="../demo/radio/group-direction.vue" placeholder="place input" title="基础用法" description="Radio 组件的基础用法"></preview>

## 按钮单选框组

设置单选框组的 type 属性设置为 button。
<preview path="../demo/radio/group-button.vue" placeholder="place input" title="基础用法" description="Radio 组件的基础用法"></preview>

## 按钮单选框组风格

设置单选框组的 solid 切换填充风格。
<preview path="../demo/radio/group-button-solid.vue" placeholder="place input" title="基础用法" description="Radio 组件的基础用法"></preview>

## 按钮单选框组尺寸

设置单选框组的 `size` 属性设置为 `l`35px、`m`30px、`s`24px,默认值 30px。
<preview path="../demo/radio/group-size.vue" placeholder="place input" title="基础用法" description="Radio 组件的基础用法"></preview>

## API

### Radio Attributes

| 参数           | 描述           | 类型                          | 默认值 |
| :------------- | :------------- | :---------------------------- | :----- |
| value(v-model) | 选中项绑定值   | `number`\|`string`\|`boolean` | -      |
| label          | 单选框的值     | `number`\|`string`\|`boolean` | -      |
| disabled       | 按钮是否被禁用 | `boolean`                     | false  |

### Radio Slots

| 参数    | 描述       |
| :------ | :--------- |
| default | 自定义内容 |

### Radio Events

| 事件名 | 说明                   | 类型     |
| :----- | :--------------------- | :------- |
| change | 绑定值变化时触发的事件 | Function |

### RadioGroup Attributes

| 参数           | 描述                             | 类型                          | 默认值       |
| :------------- | :------------------------------- | :---------------------------- | :----------- |
| value(v-model) | 选中项绑定值                     | `number`\|`string`\|`boolean` | -            |
| solid          | 当 type='button'时，按钮是否填充 | `boolean`                     | false        |
| type           | 单选框组的类型                   | `radio`\|`button`             | 'radio'      |
| size           | 单选框组的尺寸、间距             | `s`\|`m`\|`l`                 | 'l'          |
| disabled       | 单选框组是否被禁用               | `boolean`                     | false        |
| direction      | 单选框的方向                     | `horizontal`\|`vertical`      | 'horizontal' |

### RadioGroup Slots

| 参数    | 描述                |
| :------ | :------------------ |
| default | Radio / RadioButton |

### RadioGroup Events

| 事件名 | 说明                   | 类型     |
| :----- | :--------------------- | :------- |
| change | 绑定值变化时触发的事件 | Function |
