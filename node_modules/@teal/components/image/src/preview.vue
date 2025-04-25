<template>
  <Teleport :to="container" :disabled="!container">
    <Transition name="preview-fade">
      <div
        v-if="mounted"
        v-show="props.visible"
        ref="wrapperRef"
        :class="bem.b()"
        :style="wrapperStyles"
      >
        <div :class="bem.e('mask')" @click="maskClick"></div>

        <div
          :class="bem.e('body')"
          :style="{
            transform: `scale(${scale}, ${scale})`,
          }"
          @click="maskClick"
        >
          <img
            ref="imageRef"
            :src="props.src"
            :class="bem.e('img')"
            :style="{
              transform: `rotate(${rotate}deg) translate(${translate[0]}px, ${translate[1]}px)`,
            }"
          />
        </div>

        <button v-if="props.closable" :class="bem.e('close-btn')" @click="handleCancel">
          <tl-icon icon="fa-xmark" />
        </button>

        <template v-if="props.previewGroup">
          <button
            :class="bem.e('arrow-left')"
            :style="{ zIndex: popupManager.nextIndex() }"
            @click="emit('onPrev')"
          >
            <tl-icon icon="fa-angle-left" />
          </button>
          <button
            :class="bem.e('arrow-right')"
            :style="{ zIndex: popupManager.nextIndex() }"
            @click="emit('onNext')"
          >
            <tl-icon icon="fa-angle-right" />
          </button>
        </template>

        <div :class="bem.e('toolbar')" :style="{ zIndex: popupManager.nextIndex() }">
          <tl-tooltip placement="top" title="向左旋转" :close-delay="0">
            <button :class="bem.e('toolbar-btn')" @click="rotateLeft">
              <tl-icon icon="fa-arrow-rotate-left" />
            </button>
          </tl-tooltip>
          <tl-tooltip placement="top" title="向右旋转" :close-delay="0">
            <button :class="bem.e('toolbar-btn')" @click="rotateRight">
              <tl-icon icon="fa-arrow-rotate-right" />
            </button>
          </tl-tooltip>
          <tl-tooltip placement="top" title="放大" :close-delay="0">
            <button :class="bem.e('toolbar-btn')" @click="scaleIn">
              <tl-icon icon="fa-plus " />
            </button>
          </tl-tooltip>
          <tl-tooltip placement="top" title="缩小" :close-delay="0">
            <button :class="bem.e('toolbar-btn')" @click="scaleOut">
              <tl-icon icon="fa-minus" />
            </button>
          </tl-tooltip>
          <tl-tooltip placement="top" title="原始比例" :close-delay="0">
            <button
              :class="bem.e('toolbar-btn')"
              style="width: 50px"
              @click="restoreScale"
            >
              <span>{{ formatePercentage(scale) }}</span>
            </button>
          </tl-tooltip>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
<script setup lang="ts">
import { createNamespace, popupManager } from "@teal/utils";
import { ImagePreviewProps } from "./preview";
import { formatePercentage, getPopupContainer } from "./utils";
import { useImageScale, useImageDrag } from "./hook/index";
import { ref, computed, onMounted, CSSProperties, reactive, watch } from "vue";

defineOptions({ name: "tl-image-preview" });

const bem = createNamespace("image-preview");

const props = withDefaults(defineProps<ImagePreviewProps>(), {
  unmountOnClose: false,
  maskClosable: true,
  closable: true,
  previewGroup: false,
});

const emit = defineEmits<{
  (e: "update:visible", value: boolean): void;
  (e: "onNext"): void;
  (e: "onPrev"): void;
}>();

/** 默认是否渲染 */
const mounted = ref(props.visible);
/** 旋转的刻度 */
const ROTATE_STEP = 90;
/** 旋转后的角度 */
const rotate = ref(0);

const container = ref();
onMounted(() => (container.value = getPopupContainer(props.popupContainer)));

const imageRef = ref();
const wrapperRef = ref();
const isFixed = computed(() => container.value === document.body);
const wrapperStyles = computed<CSSProperties>(() => {
  const positionStyles: CSSProperties = isFixed.value
    ? { zIndex: popupManager.nextIndex() }
    : { zIndex: "inherit", position: "absolute", height: "100%" };

  return { ...positionStyles };
});

watch(
  () => props.visible,
  (value) => {
    // 关闭状态 且 需要卸载节点
    if (!value && props.unmountOnClose) mounted.value = false;
    else mounted.value = true;

    if (container.value) {
      if (value) container.value.style.overflow = "hidden";
      else container.value.style.overflow = "";
    }
  }
);

const { scale, resetScale, adjustZoom } = useImageScale(
  reactive({ wrapperEl: wrapperRef })
);

const { translate, resetTranslate } = useImageDrag(
  reactive({ imageEl: imageRef, scale })
);

const handleCancel = () => {
  emit("update:visible", false);
  props.onCancel?.();
};

const maskClick = (e: MouseEvent) => {
  if (props.maskClosable && e.target === e.currentTarget) handleCancel();
};

/** 向左旋转 */
const rotateLeft = () => {
  rotate.value = rotate.value === 0 ? 360 - ROTATE_STEP : rotate.value - ROTATE_STEP;
};

/** 向右旋转 */
const rotateRight = () => {
  rotate.value = (rotate.value + ROTATE_STEP) % 360;
};

/** 放大 */
const scaleIn = () => {
  adjustZoom("zoomIn");
};

/** 缩小 */
const scaleOut = () => {
  adjustZoom("zoomOut");
};

/** 原始比例 */
const restoreScale = () => {
  resetScale();
  resetTranslate();
};
</script>
