---
title: InputNumber | Teal-Element
description: InputNumber 组件的文档
---

# YkInputNumber 数字输入框

数字输入框用于准确地输入数字。

## 基本用法

数字输入框的基本用法。
<preview path="../demo/input-number/basic.vue" placeholder="place input" title="基础用法" description="InputNumber 组件的基础用法"></preview>

## 尺寸

与 输入框 一样，有三种尺寸：`s`，`m`，`l`，如下：
<preview path="../demo/input-number/size.vue" placeholder="place input" title="基础用法" description="InputNumber 组件的基础用法"></preview>

## 自定义格式

通过 `formatter` 设置用于自定义显示格式的处理函数。

<preview path="../demo/input-number/formatter.vue" placeholder="place input" title="基础用法" description="InputNumber 组件的基础用法"></preview>

## 最大最小值

通过 `max` 和 `min` 设置最大和最小值。输出值始终会被限制在设定范围内，即使计算值超出。
<preview path="../demo/input-number/maxmin.vue" placeholder="place input" title="基础用法" description="InputNumber 组件的基础用法"></preview>

## 精度与步进值

通过 `precision` 和 `step` 设置精度和步进值。
<preview path="../demo/input-number/step.vue" placeholder="place input" title="基础用法" description="InputNumber 组件的基础用法"></preview>

## API

### props

| 参数                 | 描述               | 类型                        | 默认值                   |
| :------------------- | :----------------- | :-------------------------- | :----------------------- |
| v-model(model-value) | 绑定模型           | `Ref`                       | ''                       |
| max                  | 最大值             | `number`                    | Infinity                 |
| min                  | 最小值             | `number`                    | -Infinity                |
| step                 | 步进值             | `number`                    | 1                        |
| precision            | 显示精度           | `number`                    | 0                        |
| size                 | 数字输入框的尺寸   | `s`\|`m`\|`l`               | 'l'                      |
| disabled             | 是否禁用数字输入框 | `boolean`                   | false                    |
| controls             | 是否开启控制按钮   | `boolean`                   | true                     |
| formatter            | 自定义格式函数     | `(value: string) => string` | (value: string) => value |

### events

| 事件     | 描述           |
| :------- | :------------- |
| increase | 数字增加时触发 |
| decrease | 数字减少时触发 |
