<template>
  <div class="tl-collapse-demo">
    <tl-collapse-group :active-key="activeKey">
      <tl-collapse title="This is panel header 1" id="1">
        <template #extra><tl-icon icon="fa-circle-question" /></template>
        <span
          >A dog is a type of domesticated animal. Known for its loyalty and faithfulness,
          it can be found as a welcome guest in many households across the world.</span
        >
      </tl-collapse>
      <tl-collapse :active="true" title="This is panel header 2" id="2">
        <template #extra><tl-icon icon="fa-circle-question" /></template>
        <span
          >A dog is a type of domesticated animal. Known for its loyalty and faithfulness,
          it can be found as a welcome guest in many households across the world.</span
        >
      </tl-collapse>
      <tl-collapse title="This is panel header 3" disabled id="3">
        <template #extra><tl-icon icon="fa-circle-question" /></template>
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
const activeKey = ref(["3"]);
</script>
<style>
.tl-collapse-demo {
  width: 600px;
}

.tl-collapse p {
  margin: 5px 16px;
}
</style>
