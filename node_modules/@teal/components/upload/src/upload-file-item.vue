<template>
  <div :class="bem.b()">
    <div :class="bem.e('main')">
      <div :class="bem.e('main-left')">
        <tl-icon :icon="iconName" class="icon-annex" />
        <span :class="bem.em('main-left-name', status)">{{ name }}</span>
      </div>
      <div :class="bem.e('main-right')">
        <!-- 删除 -->
        <tl-icon
          v-if="status !== 'uploading'"
          class="icon-delete"
          icon="fa-trash-can"
          @click="handleRemove"
        />
        <!-- 成功 -->
        <tl-icon
          v-if="'success'.includes(status)"
          class="icon-success"
          icon="fa-check "
        />
        <!-- 失败/重新上传 -->
        <tl-icon
          icon="fa-upload"
          v-if="['error', 'pause'].includes(status)"
          class="icon-reupload"
          @click="handleReUpload"
        />
        <!-- 上传中 -->
        <div
          class="abort-upload"
          v-if="['uploading'].includes(status)"
          @click="handlePause"
        >
          <svg width="14" height="14">
            <circle cx="7" cy="7" r="7" class="uploading-bg" fill-opacity="0.6" />
            <path :d="getArcPath(7, 7, 7, progress)" class="uploading-bg" />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, toRefs } from "vue";
import { getArcPath } from "./utils";
import { generateUid, createNamespace } from "@teal/utils";
import type { FileItemProps } from "./upload";

const props = withDefaults(defineProps<FileItemProps>(), {
  progress: 0,
  fileContent: () => ({
    status: "success",
    name: "",
    uid: generateUid(),
  }),
});
const bem = createNamespace("upload__files-list-item");

const { status, name, uid } = toRefs(props.fileContent);

const emits = defineEmits(["handleAbort", "handleRemove", "handleReUpload"]);

const iconName: any = computed(() => {
  return getFileTypeIconName(name.value);
});
const progressPercent = computed(() => Math.floor(props.progress) + "%");
const handlePause = () => {
  emits("handleAbort", uid.value);
};
const handleRemove = () => {
  emits("handleRemove", uid.value);
};
const handleReUpload = () => {
  emits("handleReUpload", uid.value);
};

const getFileTypeIconName = (fileName: string) => {
  const fileExtension = fileName.split(".").pop()?.toLowerCase();
  switch (fileExtension) {
    case "jpg":
    case "png":
    case "jpeg":
    case "gif":
      return "fa-file-image";
    case "pdf":
      return "fa-file-pdf";
    case "mp4":
    case "mkv":
      return "fa-file-video";
    case "doc":
    case "docx":
      return "fa-file-word";
    case "xls":
    case "xlsx":
      return "fa-file-excel";
    case "ppt":
    case "pptx":
      return "fa-file-powerpoint ";
    case "wmv":
    case "mp3":
      return "fa-file-audio ";
    case "txt":
      return "fa-file-lines ";
    default:
      return "fa-file";
  }
};
</script>
