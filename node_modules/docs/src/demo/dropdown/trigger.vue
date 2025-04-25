<template>
  <tl-space wrap>
    <tl-dropdown title="hover">
      <tl-dropdown-item value="1">Action 1</tl-dropdown-item>
      <tl-dropdown-item value="2">Action 2</tl-dropdown-item>
      <tl-dropdown-item value="3">Action 3</tl-dropdown-item>
      <tl-dropdown-item value="4">Action 4</tl-dropdown-item>
    </tl-dropdown>
    <tl-dropdown title="click" trigger="click">
      <tl-dropdown-item value="11">Action 1</tl-dropdown-item>
      <tl-dropdown-item value="22">Action 2</tl-dropdown-item>
      <tl-dropdown-item value="33">Action 3</tl-dropdown-item>
      <tl-dropdown-item value="44">Action 4</tl-dropdown-item>
    </tl-dropdown>
    <tl-dropdown title="contextmenu" trigger="contextmenu">
      <tl-dropdown-item value="111">Action 1</tl-dropdown-item>
      <tl-dropdown-item value="222">Action 2</tl-dropdown-item>
      <tl-dropdown-item value="333">Action 3</tl-dropdown-item>
      <tl-dropdown-item value="444">Action 4</tl-dropdown-item>
    </tl-dropdown>
    <tl-dropdown title="click & contextmenu" :trigger="['click', 'contextmenu']">
      <tl-dropdown-item value="111">Action 1</tl-dropdown-item>
      <tl-dropdown-item value="222">Action 2</tl-dropdown-item>
      <tl-dropdown-item value="333">Action 3</tl-dropdown-item>
      <tl-dropdown-item value="444">Action 4</tl-dropdown-item>
    </tl-dropdown>
  </tl-space>
</template>
