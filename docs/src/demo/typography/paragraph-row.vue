<template>
  <tl-switch v-model="isOpen"></tl-switch>
  <tl-paragraph v-model:open="isOpen" moreable :rows="2" @change-open="handleOpen">
    Terraria is the land of adventure! It’s a mysterious place! It is a land for you to
    shape, defend and enjoy. In Terraria, your options are endless. Fan of action games
    with itchy fingers? Terraria is the land of adventure! It’s a mysterious place! It is
    a land for you to shape, defend and enjoy. In Terraria, your options are endless. Fan
    of action games with itchy fingers? Terraria is the land of adventure! It’s a
    mysterious place! It is a land for you to shape, defend and enjoy. In Terraria, your
    options are endless. Fan of action games with itchy fingers?
  </tl-paragraph>

  <p>{{ status }}</p>
</template>

<script setup="ts">
import { ref } from "vue";

const isOpen = ref(false);
const status = ref(false);

function handleOpen(value) {
  status.value = `open 状态：${value}`;
}
</script>
