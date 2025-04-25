<template>
  <tl-space wrap>
    <tl-dropdown
      title="下拉菜单"
      @visible-change="handleChange"
      @selected="handleSelected"
    >
      <tl-dropdown-item value="1">Action 1</tl-dropdown-item>
      <tl-dropdown-item value="2">Action 2</tl-dropdown-item>
      <tl-dropdown-item value="3" submenu>
        <template #title>
          Action 3
          <tl-icon icon="fa-angle-right " />
        </template>
        <tl-dropdown-item value="11">Action 11</tl-dropdown-item>
        <tl-dropdown-item value="22">Action 22</tl-dropdown-item>
        <tl-dropdown-item value="33">Action 33</tl-dropdown-item>
      </tl-dropdown-item>
      <tl-dropdown-item value="4">Action 4</tl-dropdown-item>
      <tl-dropdown-item value="5">Action 5</tl-dropdown-item>
    </tl-dropdown>

    <tl-dropdown
      title="下拉菜单"
      @visible-change="handleChange"
      @selected="handleSelected"
    >
      <tl-dropdown-item value="1">Action 1</tl-dropdown-item>
      <tl-dropdown-item value="2">Action 2</tl-dropdown-item>
      <tl-dropdown-item value="3" submenu dir="left" :arrow="false">
        <template #title>Action 3</template>
        <tl-dropdown-item value="11">Action 11</tl-dropdown-item>
        <tl-dropdown-item value="22">Action 22</tl-dropdown-item>
        <tl-dropdown-item value="33">Action 33</tl-dropdown-item>
      </tl-dropdown-item>
      <tl-dropdown-item value="4">Action 4</tl-dropdown-item>
      <tl-dropdown-item value="5">Action 5</tl-dropdown-item>
    </tl-dropdown>
  </tl-space>
</template>

<script setup>
function handleChange(value) {
  console.log("一级菜单：", value);
}

function handleSelected(value) {
  console.log(value);
}
</script>
