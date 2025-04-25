<template>
  <tl-input
    v-model="inputValue"
    clearable
    placeholder="请输入..."
    @focus="onFocus"
    @blur="onBlur"
    @clear="onClear"
    @change="onChange"
  />
  <div id="events">
    <b>事件日志（试试操作输入框，观察这里）</b>
    <div v-for="msg in message" class="event">
      <div>{{ msg }}</div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
const inputValue = "你好，Teal Element UI";
const message = ref<string[]>([]);

onMounted(() => {
  message.value.push("输入框创建");
});

const onFocus = (value: string) => {
  message.value.push("输入框聚焦：" + value);
};
const onBlur = (value: string) => {
  message.value.push("输入框失焦：" + value);
};
const onClear = (value: string) => {
  message.value.push("输入框被清空。" + value);
};
const onChange = (value: string) => {
  message.value.push("输入框值更新为：" + value);
};
</script>
<style scoped>
#events {
  overflow: scroll;
  margin-top: 8px;
  height: 250px;
  border-radius: 8px;
}

b {
  font-weight: bold;
}
</style>
