<template>
  <tl-form :model="form" :disabled="true">
    <tl-form-item label="姓名" field="name">
      <tl-input v-model="form.name"></tl-input>
    </tl-form-item>
    <tl-form-item label="性别" field="sex">
      <tl-radio-group v-model="form.sex">
        <tl-radio value="man">男</tl-radio>
        <tl-radio value="woman">女</tl-radio>
      </tl-radio-group>
    </tl-form-item>
    <tl-form-item label="年龄" field="sex">
      <tl-input-number></tl-input-number>
    </tl-form-item>
    <tl-form-item label="日期" field="date">
      <tl-checkbox-group v-model="form.date">
        <tl-checkbox v-for="item in data" :key="item.id" :value="item.id">
          {{ item.label }}
        </tl-checkbox>
      </tl-checkbox-group>
    </tl-form-item>
  </tl-form>
</template>
<script lang="ts" setup>
import { reactive, ref } from "vue";
const form = reactive({
  name: "大飞",
  sex: "man",
  date: ["2"],
});
const data = ref([
  { id: "1", label: "昨天" },
  { id: "2", label: "今天" },
  { id: "3", label: "明天" },
]);
</script>
