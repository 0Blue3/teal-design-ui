<template>
  <div :class="[bem.b(), bem.m(shape)]">
    <img v-if="blobRaw || url" :src="url || blobRaw" alt="" />
    <div
      :class="[
        bem.e('overlay-hover'),
        bem.em('overlay-hover', status),
        status === 'uploading' && bem.em('overlay-hover', 'uploading'),
      ]"
    ></div>
    <!-- 上传中 -->
    <tl-icon
      v-if="status === 'uploading'"
      :class="[bem.e('icon-uploading'), bem.e('icon')]"
      @click="handlePause"
      icon="fa-circle "
    />
    <!-- 上传失败/中断 -->
    <tl-icon
      v-if="['error', 'pause'].includes(status)"
      :class="[bem.e('icon-fail'), bem.e('icon')]"
      icon="fa-file-excel "
    />
    <!-- hover -->
    <div v-if="['error', 'pause'].includes(status)" :class="bem.e('hover-icons')">
      <tl-icon icon="fa-upload " @click="handleReUpload" />
      <tl-icon icon="fa-trash-can" @click="handleRemove" />
    </div>
    <div v-if="status === 'success' && !avatar" :class="bem.e('hover-icons')">
      <tl-icon icon="fa-eye " @click="handleReview" />
      <tl-icon icon="fa-trash-can" @click="handleRemove" />
    </div>
    <div v-if="status === 'success' && avatar" :class="bem.e('hover-icons')">
      <tl-icon icon="fa-pen-clip" @click="handleEdit" />
      <tl-icon icon="fa-trash-can" @click="handleRemove" />
    </div>

    <!-- <tl-modal
      v-if="editModalVisible"
      v-model="editModalVisible"
      :scrollable="false"
      title="图片裁剪"
      size="s"
      @on-submit="handleSubmit"
    > -->
    <cropPicture ref="cropRef" :file-content="fileContent" />
    <!-- </tl-modal> -->
  </div>
</template>
<script setup lang="ts">
import { createNamespace, generateUid } from "@teal/utils";
import type { FileItemProps } from "./upload";
import { computed, toRefs, ref } from "vue";

const bem = createNamespace("upload__picture-item");

const props = withDefaults(defineProps<FileItemProps>(), {
  progress: 0,
  fileContent: () => ({
    status: "success",
    name: "",
    uid: generateUid(),
    avatar: false,
  }),
  shape: "default",
});

const emits = defineEmits([
  "handleAbort",
  "handleRemove",
  "handleReUpload",
  "handleEdit",
  "handleReview",
]);

const { status, uid, raw, url } = toRefs(props.fileContent);

const editModalVisible = ref(false);

const cropRef = ref();

const blobRaw = computed(() => {
  if (raw?.value) {
    const blobUrl = URL.createObjectURL(raw.value);
    return blobUrl;
  }
  return "";
});

const handleReview = () => {
  emits("handleReview", uid.value);
};
const handlePause = () => {
  emits("handleAbort", uid.value);
};
const handleRemove = () => {
  emits("handleRemove", uid.value);
};
const handleReUpload = () => {
  emits("handleReUpload", uid.value);
};
const handleEdit = () => {
  editModalVisible.value = true;
};
const handleSubmit = async () => {
  const { blobRaw, uid } = await cropRef.value.handleCrop();
  emits("handleEdit", blobRaw, uid);
  editModalVisible.value = false;
};
</script>
