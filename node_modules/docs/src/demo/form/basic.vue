<template>
  <tl-form ref="formRef" :model="form" :rules="rulesMap">
    <tl-form-item label="姓名" field="name" :rules="nameExtraRule">
      <tl-input v-model="form.name"></tl-input>
    </tl-form-item>
    <tl-form-item label="昵称" field="nickname">
      <tl-input v-model="form.nickname" placeholder="请输入"></tl-input>
    </tl-form-item>
    <tl-form-item label="手机号" field="phone">
      <tl-input v-model="form.phone" placeholder="请输入"></tl-input>
    </tl-form-item>
    <tl-form-item label="性别" field="sex" :rules="rulesMap.sex">
      <tl-radio-group v-model="form.sex">
        <tl-radio value="man">男</tl-radio>
        <tl-radio value="woman">女</tl-radio>
      </tl-radio-group>
    </tl-form-item>
    <tl-form-item label="年龄" field="age" :rules="rulesMap.age">
      <tl-input-number v-model="form.age"></tl-input-number>
    </tl-form-item>
    <tl-form-item label="日期" field="date" :required="true">
      <tl-checkbox-group v-model="form.date">
        <tl-checkbox v-for="item in data" :key="item.id" :value="item.id">
          {{ item.label }}
        </tl-checkbox>
      </tl-checkbox-group>
    </tl-form-item>
    <tl-form-item label="住址" field="others.address" required>
      <tl-input v-model="form.others.address" placeholder="请输入"></tl-input>
    </tl-form-item>
    <tl-form-item label="我同意" field="agree" :rules="rulesMap.agree">
      <tl-checkbox v-model:checked="form.agree"></tl-checkbox>
    </tl-form-item>
    <tl-form-item>
      <tl-space>
        <tl-button status="primary" @click="resetForm">重置</tl-button>
        <tl-button @click="submitForm">提交</tl-button>
      </tl-space>
    </tl-form-item>
  </tl-form>
</template>
<script lang="ts" setup>
// import { FormInstance } from "@teal/components/form/index";
// import { RuleType } from "@yike-design/ui/components/utils/validate/interface";
import type { RuleType } from "@teal/components/form/index";

import { reactive, ref, useTemplateRef } from "vue";
const formRef = ref();
const form = reactive({
  name: "大飞",
  sex: "man",
  date: ["2"],
  nickname: "",
  age: 20,
  phone: "",
  agree: false,
  others: {
    address: "南京",
  },
});
const rulesMap = {
  name: [
    {
      required: true,
      message: "Please select Activity count",
      trigger: "change",
    },
    {
      min: 4,
      trigger: "change",
    },
  ],
  nickname: [
    {
      required: true,
      message: "请输入昵称",
      trigger: "blur",
    },
  ],
  sex: [
    {
      required: true,
      message: "请选择",
    },
  ],
  age: [
    {
      type: "number" as RuleType,
      max: 100,
      required: true,
      message: "年龄不超过100",
    },
  ],
  phone: [
    {
      validator: (rule: any, value: any, callback: any) => {
        const reg = /^1(3\d|4[0-9]|5[0-35-9]|6[567]|7[013-8]|8\d|9[0-35-9])\d{8}$/;
        if (reg.test(value)) {
          callback();
        } else {
          callback("请输入正确的手机号");
        }
      },
    },
  ],
  agree: [
    {
      type: "enum" as RuleType,
      enum: [true],
      message: "请同意！",
    },
  ],
};
const nameExtraRule = [
  {
    max: 6,
    require: true,
    trigger: ["change", "blur", "focus"],
  },
];
const data = ref([
  { id: "1", label: "昨天" },
  { id: "2", label: "今天" },
  { id: "3", label: "明天" },
]);
const resetForm = () => {
  formRef.value.resetFields();
  console.log("reset");
};
const submitForm = async () => {
  if (!formRef.value) {
    return;
  }
  console.log(form);
  formRef.value
    .validate()
    .then((res: any) => {
      console.log(res);
    })
    .catch((e: any) => {
      console.log(e);
    });

  //   if (res) {
  //     console.log("校验失败");
  //   } else {
  //     console.log("校验成功");
  //   }
};
</script>
