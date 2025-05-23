---
title: Form | Teal-Element
description: Form 组件的文档
---

# TlForm 表单

## 基本用法

表单的基本用法。

<preview path="../demo/form/basic.vue" placeholder="place input" title="基础用法" description="Form 组件的基础用法"></preview>

## 禁用

通过 `disabled` 禁用当前表单，表单中的所有元素都将继承。

<preview path="../demo/form/disabled.vue" placeholder="place input" title="基础用法" description="Form 组件的基础用法"></preview>

## 尺寸

通过 `size` 控制表单元素大小，表单中的所有元素都将继承。

<preview path="../demo/form/size.vue" placeholder="place input" title="基础用法" description="Form 组件的基础用法"></preview>

## 布局

通过 `layout` 控制 `label` 和表单组件的相对位置，取值有 `horizontal`、`vertical`、`inline` 默认为水平。

<preview path="../demo/form/layout.vue" placeholder="place input" title="基础用法" description="Form 组件的基础用法"></preview>

## API

### Form Props

| 参数名     | 描述            | 类型                               | 默认值       |
| :--------- | :-------------- | :--------------------------------- | :----------- |
| model      | 绑定值 数据对象 | `[key: string]: any[]`             | -            |
| rules      | 校验规则对象    | `[key: string]: SchemaRuleType[]`  | -            |
| labelWidth | Label 宽度      | `number`                           | 116          |
| disabled   | 是否禁用        | `boolean`                          | false        |
| size       | 尺寸            | `s `\|`m` \|`l`                    | 'm'          |
| layout     | 布局            | `horizontal`\|`vertical`\|`inline` | 'horizontal' |

### Form-Item Props

| 参数名     | 描述         | 类型               | 默认值 |
| :--------- | :----------- | :----------------- | :----- |
| field      | 数据路径     | `string`           | -      |
| rules      | 校验规则对象 | `SchemaRuleType[]` | -      |
| labelWidth | Label 宽度   | `number`           | 116    |
| disabled   | 是否禁用     | `boolean`          | false  |
| label      | 说明         | `string`           | -      |
| required   | 是否必须     | `boolean`          | -      |

### Form-Expose

| 方法        | 说明     | 入参                                                          | 出参                                     |
| :---------- | :------- | :------------------------------------------------------------ | :--------------------------------------- |
| validate    | 校验表单 | callback?: (errors: undefined \| Record<string, any>) => void | errors: undefined \| Record<string, any> |
| resetFields | 重置表单 | -                                                             | -                                        |

### SchemaRuleType

| 参数              | 类型                  | 描述                         |
| :---------------- | :-------------------- | :--------------------------- |
| required          | `boolean`             | 是否必填                     |
| message           | `any`                 | 自定义错误消息               |
| validator         | `CustomValidatorType` | 自定义验证函数               |
| type              | `RuleType`            | 数据类型验证规则             |
| true              | `boolean`             | 值是否为 true                |
| false             | boolean`              | 值是否为 false               |
| deepEqual         | `object` \|`array`    | 深度比较对象或数组           |
| hasKeys           | `string[]`            | 对象是否具有指定的属性键     |
| empty             | `boolean`             | 值是否为空对象或空数组       |
| includes          | `any`                 | 数组是否包含指定的值         |
| maxLength         | `number`              | 字符串或数组的最大长度       |
| minLength         | `number`              | 字符串或数组的最小长度       |
| pattern           | `RegExp`              | 正则表达式匹配规则           |
| length            | `number`              | 字符串或数组的长度           |
| uppercase         | `boolean`             | 是否为大写字母               |
| lowercase         | `boolean`             | 是否为小写字母               |
| min               | `number`              | 数字的最小值                 |
| max               | `number`              | 数字的最大值                 |
| equal             | `number`              | 数字是否等于指定的值         |
| positive          | `boolean`             | 是否为正数                   |
| negative          | `boolean`             | 是否为负数                   |
| ignoreEmptyString | `boolean`             | 忽略空字符串                 |
| strict            | `boolean`             | 是否启用严格模式             |
| trigger           | `string`\|`string[]`  | 触发验证的事件名称或事件数组 |
