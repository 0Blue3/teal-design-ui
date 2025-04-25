<template>
  <div class="tl-collapse-demo">
    <tl-collapse-group :active-key="activeKey" size="s">
      <tl-collapse title="This is panel header 1" id="1">
        <span
          >A dog is a type of domesticated animal. Known for its loyalty and faithfulness,
          it can be found as a welcome guest in many households across the world.</span
        >
      </tl-collapse>
    </tl-collapse-group>
    <br />
    <tl-collapse-group :active-key="activeKey" size="m">
      <tl-collapse title="This is panel header 1" id="1">
        <span
          >A dog is a type of domesticated animal. Known for its loyalty and faithfulness,
          it can be found as a welcome guest in many households across the world.</span
        >
      </tl-collapse>
    </tl-collapse-group>
    <br />
    <tl-collapse-group :active-key="activeKey" size="l">
      <tl-collapse title="This is panel header 1" id="1">
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
const activeKey = ref([""]);
</script>
<style>
.tl-collapse-demo {
  width: 600px;
}

.tl-collapse p {
  margin: 5px 16px;
}
</style>
