<template>
  <div
    v-observe-visibility="handleVisibilityChange"
    :class="[bem.b(), isError && bem.m('error'), isLoading && bem.m('loading')]"
    :style="sizeStyle"
  >
    <img
      :class="bem.e('img')"
      :style="fitStyle"
      :src="imageSrc"
      v-bind="imgAttrs"
      @load="onImgLoaded"
      @error="onImgLoadError"
      @click="onImageClick"
    />
    <!-- 加载失败 | 加载中 -->
    <div v-if="!isLoaded" :class="bem.e('overlay-container')">
      <slot v-if="isError" name="error">
        <div :class="[bem.e('overlay'), bem.em('overlay', 'error')]">
          <div class="icon">
            <slot name="error-icon">
              <tl-icon icon="fa-file-excel" />
            </slot>
          </div>
          <div v-if="props.alt" class="alt">
            {{ props.alt }}
          </div>
        </div>
      </slot>
      <slot v-if="isLoading" name="loading">
        <div :class="[bem.e('overlay'), bem.em('overlay', 'loading')]"></div>
      </slot>
    </div>
    <div v-if="isShowFooter" :class="[bem.e('footer'), bem.em('footer', footerPosition)]">
      <div>
        <div class="title">{{ props.title }}</div>
        <div class="description">{{ props.description }}</div>
      </div>
      <div>
        <slot name="extra"></slot>
      </div>
    </div>
    <tl-imagePreview
      v-model:visible="previewVOpen"
      :src="props.src"
      :popup-container="props.popupContainer"
      @cancel="props.onCancel"
    ></tl-imagePreview>
  </div>
</template>
<script setup lang="ts">
import { createNamespace } from "@teal/utils";
import { type ImageProps } from "./image";
import { ref, computed, CSSProperties, watch, onMounted } from "vue";
import { useImageLoadStatus } from "./hook/index";
import { normalizeImageSizeProp, pick, vObserveVisibility } from "./utils";
import { TlImagePreview } from "..";

const bem = createNamespace("image");

defineOptions({ name: "tl-image" });

const props = withDefaults(defineProps<ImageProps>(), {
    preview: true,
    isLazy: false,
    footerPosition: 'inner',
});

const { isLoaded, isError, isLoading, setLoadStatus } = useImageLoadStatus();

const imageSrc = ref();
const imgAttrs = computed(() =>
  pick(props, ['width', 'height', 'title', 'alt'])
);
const previewVOpen = ref<boolean>(false);

const fitStyle = computed<CSSProperties>(() => {
    if(!props.fit) return {};
    return {
        "objectFit": props.fit
    };
});

const sizeStyle = computed(() => ({
    width: normalizeImageSizeProp(props.width),
    height: isShowFooter.value ? undefined : normalizeImageSizeProp(props.height),
}));

const isShowFooter = computed(() => props.title || props.description);

// 记录当前是否在可视区域，为监听到src变化可及时更新
const nowVisible = ref<boolean>(false);

const handleVisibilityChange = (visible: boolean) => {
  if (props.isLazy) {
    // 懒加载: 图片src为空 且 可见, 则赋值 src
    if (!imageSrc.value && visible) imageSrc.value = props.src;
  } else imageSrc.value = props.src;
  nowVisible.value = visible;
}

watch(
  () => props.src,
  (newSrc) => {
    setLoadStatus('loading')
    if (nowVisible.value) {
      // 更新src时在可视区域内直接渲染
      imageSrc.value = newSrc
    }
    if (props.isLazy && !nowVisible.value) {
      // 更新src时在非可视区域，但需要懒加载, 先清空旧src等待加载
      imageSrc.value = ''
    }
  },
)

const onImgLoaded = () => setLoadStatus('loaded');

const onImgLoadError = () => setLoadStatus('error');

const onImageClick = () => {
  if (!props.preview) return;
  previewVOpen.value = true;
}

onMounted(() => {
  setLoadStatus('loading');
});
</script>
