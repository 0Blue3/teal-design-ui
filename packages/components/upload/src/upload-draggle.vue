<template>
  <div
    :class="bem.b()"
    @drop.prevent="handleDrop"
    @dragover.prevent="handleDragover"
    @click="handleUpload"
  >
    <tl-icon :class="bem.e('icon-upload')" icon="fa-cloud-arrow-up" />
    <span :class="bem.e('methods')">单击或拖动文件到此区域进行上传</span>
    <span :class="bem.e('desc')">{{ desc }}</span>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import type { DraggleProps } from "./upload";
import { createNamespace } from "@teal/utils";

const bem = createNamespace("upload__files-draggle");

const props = withDefaults(defineProps<DraggleProps>(), {
  desc: "",
  disabled: false,
  accept: "*",
});

const emits = defineEmits(["handleUpload", "handleDraggleFiles"]);

const dragover = ref(false);

// 拖拽元素释放
const handleDrop = (e: DragEvent) => {
  if (props.disabled) return;
  dragover.value = false;
  e.stopPropagation();
  const files = Array.from(e.dataTransfer!.files);
  //TODO 根据accept筛文件
  emits("handleDraggleFiles", files);
};

const handleDragover = () => {
  if (!props.disabled) dragover.value = true;
};

const handleUpload = () => {
  emits("handleUpload");
};
</script>
