<template>
  <tl-space dir="vertical">
    <tl-space align="center">
      <tl-badge :count="2" status="primary"></tl-badge>
      <tl-badge :count="2"></tl-badge>
      <tl-badge :count="100" status="success"></tl-badge>
      <tl-badge :count="100" color="blueviolet"></tl-badge>
    </tl-space>
    <tl-space>
      <tl-badge is-dot></tl-badge>
      <tl-badge is-dot status="success"></tl-badge>
      <tl-badge is-dot status="primary"></tl-badge>
      <tl-badge is-dot color="blueviolet"></tl-badge>
    </tl-space>
  </tl-space>
</template>
