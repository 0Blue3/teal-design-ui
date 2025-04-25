<template>
  <tl-button status="success" size="s">{{ `布局: vertical` }}</tl-button>
  <tl-form :model="form" layout="vertical">
    <tl-form-item label="姓名" field="name">
      <tl-input v-model="form.name"></tl-input>
    </tl-form-item>
    <tl-form-item label="性别" field="sex">
      <tl-radio-group v-model="form.sex">
        <tl-radio value="man">男</tl-radio>
        <tl-radio value="woman">女</tl-radio>
      </tl-radio-group>
    </tl-form-item>
    <tl-form-item label="日期" field="date">
      <tl-checkbox-group v-model="form.date">
        <tl-checkbox v-for="item in data" :key="item.id" :value="item.id">
          {{ item.label }}
        </tl-checkbox>
      </tl-checkbox-group>
    </tl-form-item>
  </tl-form>
  <tl-button status="success" size="s">{{ `布局: inline` }}</tl-button>
  <tl-form :model="form" layout="inline" :label-width="50">
    <tl-form-item label="姓名" field="name">
      <tl-input v-model="form.name"></tl-input>
    </tl-form-item>
    <tl-form-item label="性别" field="sex">
      <tl-radio-group v-model="form.sex">
        <tl-radio value="man">男</tl-radio>
        <tl-radio value="woman">女</tl-radio>
      </tl-radio-group>
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
<style scoped>
.tl-button {
  margin-bottom: 16px;
}
</style>
