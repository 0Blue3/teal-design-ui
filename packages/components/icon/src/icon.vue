<template>
  <i
    :class="{
      [bem.b()]: true,
      [bem.m(type)]: type,
    }"
    :style="customColor"
    v-bind="$attrs"
  >
    <font-awesome-icon v-bind="filteredProps" />
  </i>
</template>
<script setup lang="ts">
import { createNamespace } from "@teal/utils/create";
import { computed } from "vue";
import type { IconProps } from "./icon";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { omit } from "lodash-es";

defineOptions({
  name: "tl-icon",
});

const bem = createNamespace("icon");
const props = defineProps<IconProps>();

// awesome 过滤 type color
const filteredProps = computed(() => omit(props, ["type", "color"]));
// 添加自定义颜色
const customColor = computed(() => {
  return props.color ? { color: props.color } : {};
});
</script>
