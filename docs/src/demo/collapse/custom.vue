<template>
  <div class="tl-collapse-demo">
    <tl-collapse-group :active-key="activeKey">
      <tl-collapse id="1">
        <template #title>
          This is panel header 1 <tl-icon icon="fa-chess-queen" />
        </template>
        <template #icon>
          <tl-icon icon="fa-circle-right"></tl-icon>
        </template>
        <span
          >A dog is a type of domesticated animal. Known for its loyalty and faithfulness,
          it can be found as a welcome guest in many households across the world.</span
        >
      </tl-collapse>
      <tl-collapse :active="true" title="This is panel header 2" id="2">
        <template #title> This is panel header 1 <tl-icon icon="fa-child" /> </template>
        <template #icon="{ isActive }">
          {{ isActive ? "Close" : "Open" }}
        </template>
        <span
          >A dog is a type of domesticated animal. Known for its loyalty and faithfulness,
          it can be found as a welcome guest in many households across the world.</span
        >
      </tl-collapse>
      <tl-collapse title="This is panel header 3" id="3">
        <span
          >A dog is a type of domesticated animal. Known for its loyalty and faithfulness,
          it can be found as a welcome guest in many households across the world.</span
        >
      </tl-collapse>
    </tl-collapse-group>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
const activeKey = ref(["1"]);
</script>
<style>
.tl-collapse-demo {
  width: 600px;
}

.tl-collapse p {
  margin: 5px 16px;
}
</style>
