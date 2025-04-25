<template>
  <div :class="[bem.b()]" :style="avatarStyle">
    <!-- showSizeM && bem.m(size as string), showShapeM && bem.m(shape as string) -->
    <img v-if="imgUrl" :src="imgUrl" />
    <span v-else :class="bem.e('text')">
      <slot>
        <img :src="imgUrl" />
      </slot>
    </span>
  </div>
</template>

<script lang="ts" setup>
import { createNamespace } from "@teal/utils";
import { type AvatarProps, AvatarGroupContextKey, type AvatarGroupContext } from "./avatar";
import { computed, CSSProperties, inject } from "vue";
import { getAvatarStyle } from "./utils";

defineOptions({ name: "tl-avatar" });

const bem = createNamespace("avatar");

const props = withDefaults(defineProps<AvatarProps>(), {
  imgUrl: "",
  size: "m",
  shape: "circle"
});

const avatarContext = inject(AvatarGroupContextKey, null) as AvatarGroupContext;

const avatarStyle = computed<CSSProperties>(() => {
    if(avatarContext) {
        const { size, shape, style } = avatarContext;
        if(size && shape) return style?.value as CSSProperties;
        return getAvatarStyle(size || props.size, shape || props.shape) as CSSProperties;

    }else {
        return getAvatarStyle(props.size, props.shape) as CSSProperties;
    }
});
</script>
