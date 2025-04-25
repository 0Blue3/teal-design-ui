<template>
  <p ref="containerRef" :class="[bem.b()]">
    <span ref="textRef" :class="[bem.e('text')]"><slot /></span>
    <tl-icon v-if="copyable" :class="bem.e('copy')" icon="fa-copy" @click="handleCopy" />
    <span v-if="moreable" :class="[bem.e('more')]" @click="isOpen = !isOpen">
      {{ isOpen ? closeText : openText }}
    </span>
  </p>
</template>
<script setup lang="ts">
import { onMounted, ref, Transition, watch } from "vue";
import { useClipboard, useElementSize } from "@vueuse/core";
import { createNamespace, debounce } from "@teal/utils/index";
import { paragraphProps, paragraphEmits } from "./typography";
import TlIcon from "../../icon/index";

const bem = createNamespace("paragraph");

defineOptions({ name: "tl-paragraph" });

const props = defineProps(paragraphProps);
const emit = defineEmits(paragraphEmits);
const containerRef = ref<HTMLElement>();
const textRef = ref<HTMLElement>();
const { copy } = useClipboard({ legacy: true });
const isOpen = ref(props.open);
const moreable = ref(props.moreable);

let originalText = "";
let truncatedText = "";

onMounted(() => {
  if (props.rows === 0 || !moreable.value) return;
  const container = containerRef.value!;
  const node = textRef.value!;
  const { width } = useElementSize(container);
  const { execute } = debounce(truncateMultilineText, 200);
  const { fontSize, lineHeight } = getComputedStyle(node);

  const maxHeight = Math.round(props.rows * parseFloat(lineHeight));
  const _fontSize = parseInt(fontSize);

  originalText = node.innerText;
  container.style.maxHeight = `${maxHeight}px`;

  // 监听容器宽度变化，重新计算文本截断
  watch(width, (newVal, oldVal) => {
    if (isOpen.value) return;
    if (newVal - oldVal > _fontSize) {
      execute(container, node, maxHeight, true);
    } else if (container.scrollHeight > maxHeight) {
      execute(container, node, maxHeight);
    }
  });

  // 实现响应式
  watch(
    () => props.open,
    (newVal) => (isOpen.value = newVal)
  );

  // 监听 isOpen 变化，触发展开/收起事件
  watch(
    isOpen,
    (newVal) => {
      if (newVal) {
        node.innerText = originalText;
        container.style.maxHeight = "none";
      } else {
        container.style.maxHeight = `${maxHeight}px`;
        truncateMultilineText(container, node, maxHeight, true);
      }

      emit("changeOpen", newVal);
      emit("update:open", newVal);
    },
    { immediate: true }
  );
});
/**
 *
 * @param container 容器
 * @param textNode 文本节点
 * @param maxHeight 最大高度
 * @param flag 容器宽度变大
 */
function truncateMultilineText(
  container: HTMLElement,
  textNode: HTMLElement,
  maxHeight: number,
  flag: boolean = false
) {
  let start = 0;
  let end = originalText.length;

  while (start < end) {
    const mid = Math.floor((start + end) / 2);

    truncatedText = originalText.slice(0, mid).concat("...");
    textNode.innerText = truncatedText;

    container.scrollHeight > maxHeight ? (end = mid) : (start = mid + 1);
  }

  // start - 1 是因为 start 位置的字符是省略号
  let finalText = originalText.slice(0, start - 1).concat("...");
  const isEqual = truncatedText.length - 3 + 1 === originalText.length;
  let _moreable = props.moreable;

  if (flag && isEqual) {
    finalText = originalText;
    _moreable = false;
  }

  moreable.value = _moreable;
  textNode.innerText = finalText;
}

function handleCopy() {
  const text = ref(textRef.value!.innerText);

  emit("copyBefore", text);
  copy(text.value);

  // message({ type: success, message: '复制成功' })
}
</script>
