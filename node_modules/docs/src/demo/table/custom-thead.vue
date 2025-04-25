<template>
  <tl-table :data="dataList">
    <tl-table-column property="name" label="用户名"></tl-table-column>
    <tl-table-column property="email" label="邮箱"></tl-table-column>
    <tl-table-column property="bir" label="生日"></tl-table-column>
    <tl-table-column property="desc" label="操作">
      <template #header="scope">
        <tl-input
          v-model="search"
          placeholder="Type to search"
          @input="handleInput(scope)"
        />
      </template>
    </tl-table-column>
  </tl-table>
</template>
<script setup lang="ts">
import { ref } from "vue";
const search = "";
const dataList = ref<any>([]);
for (let index = 0; index < 5; index++) {
  dataList.value.push({
    name: "浩哥看沟通",
    email: "xigeotmete@qq.com",
    bir: "1994.03.12",
    desc: "这句话不知道 当讲不当讲，反正就是想讲一讲的",
  });
}
const handleInput = ({ column, index }) => {
  console.log(column);
};
</script>
