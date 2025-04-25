<template>
  <tl-table :data="dataList">
    <tl-table-column property="name" label="用户名"></tl-table-column>
    <tl-table-column property="email" label="邮箱"></tl-table-column>
    <tl-table-column property="bir" label="生日"></tl-table-column>
    <tl-table-column property="desc" label="简介"></tl-table-column>
    <tl-table-column property="manage" label="操作" align="right"></tl-table-column>
    <template #tbody>
      <tr v-for="(item, index) in dataList" :key="index" class="tl-table__row">
        <td class="tl-table__cell">
          <tl-input v-model="item.name" />
        </td>
        <td class="tl-table__cell">
          {{ item.email }}
        </td>
        <td class="tl-table__cell">
          {{ item.bir }}
        </td>
        <td class="tl-table__cell">
          {{ item.desc }}
        </td>
        <td class="tl-table__cell text-right">
          <tl-text type="primary" style="cursor: pointer">删除</tl-text>
        </td>
      </tr>
    </template>
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
</script>
