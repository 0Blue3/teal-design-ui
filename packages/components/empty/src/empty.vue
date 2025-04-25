<template>
  <div :class="bem.b()">
    <div :class="[bem.e('image'), bem.m(type)]" :style="imageStyle">
      <slot name="image">
        <img v-if="image" :src="image" ondragstart="return false" />
        <img
          v-if="!image && type == 'primary'"
          src="./null-primary.svg"
          class="primary"
        />
        <img
          v-if="!image && type == 'secondary'"
          src="./null-secondary.svg"
          class="secondary"
        />
      </slot>
    </div>
    <div :class="bem.e('description')">
      <slot name="description"
        ><p>{{ description }}</p></slot
      >
    </div>
    <div :class="bem.e('bottom')">
      <slot></slot>
    </div>
  </div>
</template>
<script setup lang="ts">
import { createNamespace } from "@teal/utils";
import { EmptyProps } from "./empty";

defineOptions({ name: "tl-empty" });

const bem = createNamespace("empty");

withDefaults(defineProps<EmptyProps>(), {
  type: "primary",
  description: "No Data",
  imageStyle: () => ({}),
});
</script>
