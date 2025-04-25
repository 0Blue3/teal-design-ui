<template>
  <tl-table :data="dataList" @selection-change="handleSelectionChange">
    <tl-table-column type="checkbox"></tl-table-column>
    <tl-table-column property="name" label="用户名"></tl-table-column>
    <tl-table-column property="email" label="邮箱"></tl-table-column>
    <tl-table-column property="bir" label="生日"></tl-table-column>
    <tl-table-column property="desc" label="简介"></tl-table-column>
  </tl-table>
</template>
<script setup lang="ts">
const dataList: any = [];
for (let index = 0; index < 5; index++) {
  dataList.push({
    name: "浩哥看沟通",
    email: "xigeotmete@qq.com",
    bir: "1994.03.12",
    desc: "这句话不知道 当讲不当讲，反正就是想讲一讲的",
  });
}
const handleSelectionChange = (val) => {
  console.log(val);
};
</script>
