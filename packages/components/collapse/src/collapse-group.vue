<template>
  <div :class="[bem.b(), bem.is('border', border)]">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { createNamespace } from "@teal/utils";
import { ref, provide, watch } from 'vue';
import {
    CollapseGroupContextKey,
    type strNum,
    type CollapseGroupProps,
    type CollapseGroupEmits
} from './collapse';

const bem = createNamespace("collapse-group");

defineOptions({
    name: 'TlCollapseGroup'
});

const props = withDefaults(defineProps<CollapseGroupProps>(), {
    defaultActiveKey: () => ([]),
    accordion: false,
    border: true,
    size: 'm'
});

console.log(props)
const emits = defineEmits<CollapseGroupEmits>();

const activeKeys = ref(props.activeKey?.length ? props.activeKey : props.defaultActiveKey);

watch(() => props.activeKey, (newVal) => {
    if(newVal) {
        activeKeys.value = newVal;
    }
});

if(props.accordion && activeKeys.value?.length > 1) {
    console.log('according mode should only have one active item');
}
const handleItemClick = (key: strNum) => {
    let _activeKeys = [...activeKeys.value];

    if(props.accordion) {
        _activeKeys = [ activeKeys.value[0] === key ? '' : key ];
    }else {
        const index = _activeKeys.indexOf(key);
        if(index > -1) {
            _activeKeys.splice(index, 1);
        }else {
            _activeKeys.push(key);
        };
    }
    activeKeys.value = _activeKeys;

    emits('update:modelValue',_activeKeys);
    emits('change', _activeKeys);
}
provide(CollapseGroupContextKey, {
    activeKeys,
    size: props.size,
    handleItemClick
})
</script>
