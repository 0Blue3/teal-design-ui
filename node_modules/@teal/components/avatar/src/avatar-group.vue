<template>
  <div ref="$avatarGroup" :class="bem.b()">
    <slot></slot>
    <div
      :class="bem.e('more')"
      :style="[
        avatarStyle,
        {
          display: overstep > 1 ? 'flex' : 'none',
        },
      ]"
    >
      <span>+{{ overstep - 1 }}</span>
    </div>
  </div>
</template>
<script setup lang="ts">
import { provide, ref, onMounted, computed } from "vue";
import { createNamespace } from "@teal/utils";
import { type AvatarGroupProps, AvatarGroupContextKey } from "./avatar";
import { getSize, getAvatarStyle } from "./utils";

defineOptions({ name: "tl-avatar-group" });

const bem = createNamespace("avatarGroup");

const props = withDefaults(defineProps<AvatarGroupProps>(), {
    size: "m",
    shape: "circle",
    max: 3
});

const $avatarGroup = ref();

const { size, shape } = props;

const overstep = ref(0);

const avatarStyle = computed(() => {
    return getAvatarStyle(props.size, props.shape);
})

const addStyle = (): void => {
  let boxId: HTMLDivElement = $avatarGroup.value

  Array.from(boxId.children).map((child, index) => {
    const avatar: HTMLDivElement = child as HTMLDivElement
    avatar.style.border = "2px solid #FFF";
    avatar.style.marginRight = -getSize(props.size) / 3 + 'px'
    if (index >= props.max) {
      overstep.value++
      //如果大于最大值隐藏
      avatar.style.display = 'none'
    }
  })
}

onMounted(addStyle);

provide(AvatarGroupContextKey, {
    size,
    shape,
    style: avatarStyle
});
</script>
