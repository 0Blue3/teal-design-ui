---
title: Checkbox | Teal-Element
description: Checkbox 组件的文档
---

# TlCheckbox 复选框

## 基本用法

复选框基本用法。

<preview path="../demo/checkbox/basic.vue" placeholder="place input" title="基础用法" description="Checkbox 组件的基础用法"></preview>

## 禁用

复选框禁用状态。

<preview path="../demo/checkbox/disabled.vue" placeholder="place input" title="基础用法" description="Checkbox 组件的基础用法"></preview>

## 复选框组

通过 `<tl-checkbox-group>` 组件展示复选框组。设置 `direction="vertical"` 可以展示竖向的复选框组。

<preview path="../demo/checkbox/group.vue" placeholder="place input" title="基础用法" description="Checkbox 组件的基础用法"></preview>

## 复选框组选项

`<tl-checkbox-group>` 通过 `options` 属性设置子元素。
<preview path="../demo/checkbox/group-options.vue" placeholder="place input" title="基础用法" description="Checkbox 组件的基础用法"></preview>

## 限制可勾选数量

通过设置 `max` 限制最多可被勾选的项目数。
<preview path="../demo/checkbox/max.vue" placeholder="place input" title="基础用法" description="Checkbox 组件的基础用法"></preview>

## 全选

在实现全选的功能时，可以通过 `indeterminate` 属性展示半选效果。
<preview path="../demo/checkbox/check-all.vue" placeholder="place input" title="基础用法" description="Checkbox 组件的基础用法"></preview>

## 间距

通过 `size` 实现 `<tl-checkbox-group/>` 下元素的间距。内置 3 个尺寸，分别是 `s` - 8px，`m` - 16px，`l` - 24px, 默认为 `m`; 值为数字或枚举值时，表示水平和垂直间距；值为数组时，是 [水平间距, 垂直间距]。

<preview path="../demo/checkbox/size.vue" placeholder="place input" title="基础用法" description="Checkbox 组件的基础用法"></preview>

## API

### Checkbox Props

| 参数名            | 描述                                   | 类型                          | 默认值 |
| :---------------- | :------------------------------------- | :---------------------------- | :----- |
| checked (v-model) | 绑定值                                 | `boolean`                     | -      |
| default-checked   | 默认是否选中（非受控状态）             | `boolean`                     | false  |
| value             | 选项的 value，当为选项组时为被选中的值 | `boolean`\|`number`\|`string` | -      |
| disabled          | 是否禁用                               | `boolean`                     | false  |
| indeterminate     | 是否为半选状态                         | `boolean`                     | false  |

### Checkbox Events

| 事件名 | 描述         | 参数                           |
| :----- | :----------- | :----------------------------- |
| change | 值改变时触发 | value: boolean\|string\|number |

### Checkbox Slots

| 插槽名  | 描述         | 参数 | 版本 |
| :------ | :----------- | :--- | :--- |
| default | 自定义 label | -    | -    |

### CheckboxGroup Props

| 参数名                | 描述                 | 类型                                  | 默认值       | 版本 |
| :-------------------- | :------------------- | :------------------------------------ | :----------- | :--- |
| model-value (v-model) | 绑定值               | Array<string\|number\|boolean>        | -            | -    |
| default-value         | 默认值（非受控状态） | Array<string\|number\|boolean>        | []           | -    |
| options               | 选项                 | Array<string\|number\|CheckboxOption> | []           | -    |
| direction             | 复选框的排列方向     | `horizontal`\|`vertical`              | 'horizontal' | -    |
| disabled              | 是否禁用             | `boolean`                             | false        | -    |
| max                   | 支持最多选中的数量   | `number`                              | -            | -    |
| size                  | 间距                 | `s`\|`m`\|`l`\|`number`\|`number[]`   | l            |      |

### CheckboxGroup Events

| 事件名 | 描述         | 参数                           |
| :----- | :----------- | :----------------------------- |
| change | 值改变时触发 | Array<string\|number\|boolean> |

### CheckboxGroup Slots

| 插槽名  | 描述              | 参数                   | 版本 |
| :------ | :---------------- | :--------------------- | :--- |
| default | 自定义内容        | -                      | -    |
| label   | checkbox 文案内容 | `data: CheckboxOption` | -    |

### CheckboxOption

| 插槽名        | 描述           | 类型                          | 默认值 |
| :------------ | :------------- | :---------------------------- | :----- |
| label         | 文案           | `string`                      | -      |
| value         | 选项的 `value` | `string`\|`boolean`\|`number` | -      |
| disabled      | 是否禁用       | `boolean`                     | -      |
| indeterminate | 是否为半选状态 | `boolean`                     | false  |
