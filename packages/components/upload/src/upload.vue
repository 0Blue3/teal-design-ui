<template>
  <div :class="bem.b()">
    <input
      ref="inputRef"
      style="display: none"
      :accept="accept"
      :multiple="multiple"
      type="file"
      @change="handleInputChange"
      @click.stop
    />
    <!-- file list -->
    <div v-if="!isPicture" :class="bem.e('files')">
      <!-- file uploader -->
      <div v-if="!draggable" :class="bem.e('files-file')">
        <tl-button
          :class="bem.e('files-file-button')"
          type="secondary"
          :disabled="uploadDisabled"
          @click="handleUpload"
        >
          <tl-icon icon="fa-upload " />
          <span>上传文件</span>
        </tl-button>
        <tl-text type="third">{{ desc }}</tl-text>
      </div>
      <!-- dragger uploader -->
      <div v-if="draggable" :class="bem.e('files-draggle-wrapper')">
        <upload-draggle
          :desc="desc"
          :disabled="uploadDisabled"
          :accept="accept"
          @handle-upload="handleUpload"
          @handle-draggle-files="handleDraggleFiles"
        ></upload-draggle>
      </div>
      <!-- file list -->
      <div v-if="currentList.length" :class="bem.e('files-list')">
        <upload-file-item
          v-for="item in currentList"
          :key="item.uid"
          :file-content="item"
          :progress="item.progress"
          @handle-remove="handleRemove"
          @handle-re-upload="handleReUpload"
          @handle-abort="handleAbort"
        ></upload-file-item>
      </div>
    </div>
    <!-- picture list -->
    <tl-space v-if="isPicture && !draggable" wrap :size="8">
      <span v-for="item in currentList" :class="bem.e('picture')">
        <upload-picture-item
          :key="item.uid"
          :file-content="item"
          :is-picture="isPicture"
          :progress="item.progress"
          :shape="shape"
          :avatar="avatar"
          @handle-remove="handleRemove"
          @handle-re-upload="handleReUpload"
          @handle-upload="handleUpload"
          @handle-abort="handleAbort"
          @handle-edit="handleEdit"
          @handle-review="handleReview"
        ></upload-picture-item>
      </span>
      <!-- 不是上传头像或者当前列表没有文件/没有禁止上传 -->
      <div
        v-if="!(avatar && currentLength) && !uploadDisabled"
        :class="[
          bem.e('picture-button'),
          bem.is('disabled', uploadDisabled),
          bem.em('picture-button', shape),
        ]"
        @click="handleUpload"
      >
        <div :class="bem.e('picture-desc')">
          <tl-icon icon="fa-plus" :class="bem.e('picture-button-icon')" />
          <span v-if="desc" :class="bem.e('picture-button-desc')">
            {{ desc }}
          </span>
        </div>
      </div>
    </tl-space>
  </div>
  <!-- <tl-image-preview-group
    v-model:visible="reviewVisible"
    v-model:current="defaultReviewIndex"
    :src-list="imagesUrlList"
    :is-render="false"
    width="300"
    height="200"
    fit="cover"
  /> -->
</template>
<script setup lang="ts">
import { ref, computed, getCurrentInstance, reactive } from "vue";
import { UploadRequest } from "./ajax";
import { createNamespace, generateUid } from "@teal/utils";
import {
  UploadProps,
  ImageTypes,
  RequestOptions,
  UploadFile,
  RequestInstance,
} from "./upload";
import { generateListUid, findFileByUid, blobToFile } from "./utils";
import uploadPictureItem from "./upload-picture-item.vue";
import uploadFileItem from "./upload-file-item.vue";
import uploadDraggle from "./upload-draggle.vue";

defineOptions({ name: "tl-upload" });

const bem = createNamespace("upload");
const props = withDefaults(defineProps<UploadProps>(), {
  accept: "*",
  maxSize: 3 * 1024 * 1024,
  multiple: true,
  shape: "default",
  limit: 0,
  uploadUrl: "",
  fileList: () => [],
  desc: "",
  avatar: false,
  draggable: false,
});

const emits = defineEmits([
  "handleSuccess",
  "handleDelete",
  "handleError",
  "handleBeforeUpload",
]);
const isPicture = ref(false);

const reviewVisible = ref(false);

// 预览时的默认下标
const cropRef = ref();
// 裁剪模态框
const editModalVisible = ref(false);
// 头像上传
const currentUploadAvatar = reactive<UploadFile>({
  name: "",
  url: "",
  uid: generateUid(),
  status: "uploading",
});

const defaultReviewIndex = ref(0);

const currentList = ref<UploadFile[]>(generateListUid(props.fileList));
const inputRef = ref<HTMLElement>();
const uploadInstances = new Map<number, RequestInstance>();
const currentLength = computed(() => {
  return currentList.value.length;
});

const imagesUrlList = computed(() => {
  const urlArray = currentList.value.map((ele) => {
    if (ele.raw) {
      const blobRaw = URL.createObjectURL(ele.raw);
      return blobRaw;
    }
    return ele.url;
  }) as string[];
  return urlArray;
});

// 上传数量限制
const uploadDisabled = computed(() => {
  return !!props.limit && currentLength.value >= props.limit;
});

isPicture.value = ImageTypes.some((type) => props.accept.includes(type)) || props.avatar;
const { proxy }: any = getCurrentInstance();

const handleSuccess = (uid: number, res: string) => {
  //   proxy.$message.success("上传成功");
  console.log("success");

  const idx = findFileByUid(uid, currentList.value);
  currentList.value[idx].status = "success";

  emits("handleSuccess", res, currentList.value);
};

const handleProgress = (uid: number, progress: number) => {
  const idx = findFileByUid(uid, currentList.value);
  currentList.value[idx].progress = progress;
};

const handleError = (uid: number, err: string) => {
  //   proxy.$message.error(err || "上传失败");
  console.log(err, "error");
  const idx = findFileByUid(uid, currentList.value);
  currentList.value[idx].status = "error";

  emits("handleError", err, currentList.value);
};

// 触发文件上传
const handleUpload = async () => {
  if (!uploadDisabled.value) {
    inputRef.value?.click();
  }
};
// 检查文件大小和数量
const handleBeforeUpload = (uploadFile: File) => {
  emits("handleBeforeUpload", uploadFile);
  if (props.maxSize && uploadFile.size > props.maxSize) {
    // proxy.$message.error("超出限制大小，请压缩后上传");
    return false;
  }
  if (props.limit && props.limit <= currentLength.value) {
    // proxy.$message.error("数量超出限制");
    return false;
  }
  return true;
};
const handleInputChange = (event: any) => {
  const uploadFiles = Array.from(event.target.files) as File[];
  if (!uploadFiles.length) {
    return;
  }
  // 头像
  if (props.avatar) {
    handleBeforeUpload(uploadFiles[0]);
    handleUploadAvatar(uploadFiles[0]);
    return;
  }
  uploadFiles.forEach((upload: File) => {
    const validate = handleBeforeUpload(upload);
    if (upload && validate) {
      // 上传请求
      onUploadRequest(upload);
    }
  });
  event.target.value = "";
};
// 上传文件
const onUploadRequest = async (uploadFile: File) => {
  const fileName = uploadFile?.name;
  if (!fileName) {
    // proxy.$message.error("文件上传失败，请重新选择文件");
    return;
  }
  const uid = generateUid();
  currentList.value.push({
    name: fileName,
    status: "uploading",
    raw: uploadFile,
    uid,
  });
  const requestOptions: RequestOptions = {
    uid,
    uploadUrl: props.uploadUrl,
    selectedFile: uploadFile,
    fileName,
    onSuccess: handleSuccess,
    onError: handleError,
    onProgress: handleProgress,
  };
  uploadInstances.set(uid, UploadRequest(requestOptions));
};

const handleUploadAvatar = (avatarFile: File) => {
  // 只允许上传一张头像
  currentList.value = [];
  const fileName = avatarFile?.name;

  if (!fileName) {
    // proxy.$message.error("文件上传失败，请重新选择文件");
    console.log("error");

    return;
  }
  const uid = generateUid();
  currentUploadAvatar.name = fileName;
  currentUploadAvatar.raw = avatarFile;
  currentUploadAvatar.uid = uid;
  editModalVisible.value = true;
  onUploadRequest(avatarFile);
};

// 中断上传
const handleAbort = (uid: number) => {
  const idx = findFileByUid(uid, currentList.value);
  const request = uploadInstances.get(uid);
  if (request?.abort) {
    request.abort();
    currentList.value[idx].status = "pause";
    // proxy.$message.error("用户中断上传");
  }
};

// 移除上传
const handleRemove = (uid: number) => {
  emits("handleDelete", [findFileByUid(uid, currentList.value), currentList.value]);
  currentList.value.splice(findFileByUid(uid, currentList.value), 1);
  //   proxy.$message.success(`已删除`);
};

// 重新上传
const handleReUpload = (uid: number) => {
  const idx = findFileByUid(uid, currentList.value);
  const raw = currentList.value[idx]!.raw as File;
  currentList.value.splice(idx, 1);
  onUploadRequest(raw);
};

// 更新文件后上传
const handleEdit = (blob: Blob, uid: number) => {
  const idx = findFileByUid(uid, currentList.value);
  const fileName = currentList.value[idx].name;
  currentList.value.splice(findFileByUid(uid, currentList.value), 1);
  const newFile = blobToFile(blob, fileName);
  onUploadRequest(newFile);
};

// 文件预览
const handleReview = (uid: number) => {
  const idx = findFileByUid(uid, currentList.value);
  defaultReviewIndex.value = idx;
  reviewVisible.value = true;
};

const handleSubmit = async () => {
  const { blobRaw } = await cropRef.value.handleCrop();
  const newFile = blobToFile(blobRaw, currentUploadAvatar.name);
  onUploadRequest(newFile);
  editModalVisible.value = false;
};

const handleDraggleFiles = (files: File[]) => {
  files.forEach((file) => {
    onUploadRequest(file);
  });
};
</script>
