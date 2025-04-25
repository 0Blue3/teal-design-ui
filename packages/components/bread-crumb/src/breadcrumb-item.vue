<template>
  <span :class="bem.b()">
    <span :class="bem.e('inner')" @click.prevent.stop="onClick">
      <a v-if="props.to" href="/" :class="bem.e('link')">
        <slot />
      </a>
      <slot v-else />
    </span>
  </span>
  <span :class="bem.e('separator')">
    <component :is="sepetatorComponent" v-if="sepetatorComponent" />
    <span v-else-if="separatorIcon">
      <tl-icon :icon="separatorIcon" />
    </span>
    <span v-else>{{ separator }}</span>
  </span>
</template>
<script lang="ts" setup>
import TlIcon from "../../icon";
import { createNamespace } from "@teal/utils";
import { type BreadcrumbItemProps, breadcrumbName } from "./breadcrumb";
import { inject, getCurrentInstance, reactive } from "vue";
import type { Router } from 'vue-router';

defineOptions({ name: "tl-breadcrumb-item" });

const bem = createNamespace("breadcrumbItem");

const props = defineProps<BreadcrumbItemProps>();
const instance = getCurrentInstance()!;

const breadcrumbProps = inject(breadcrumbName)!;

const {
  props: { separator, separatorIcon },
  slots,
} = reactive(breadcrumbProps);

const sepetatorComponent = slots.separator;

const router = instance.appContext.config.globalProperties.$router as Router;

const onClick = () => {
  if(!props.to || !router ) return;
  router.push(props.to);
};
</script>
