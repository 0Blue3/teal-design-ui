<template>
  <div :class="[bem.b(), ...classList]" :style="spaceStyle">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed, CSSProperties, toRefs } from "vue";
import { createNamespace } from "@teal/utils/create";
import { SPACE_SIZE, type SpaceSize, SpaceProps } from "./space";

defineOptions({
  name: "TlSpace",
});

const bem = createNamespace("space");

// prettier-ignore
const props = withDefaults(defineProps<SpaceProps>(), {
  inline: false,
  size: "m",
  wrap: false,
  justify: "start",
  align: "start",
  dir: "horizontal",
  overflow: "visible"
});

// prettier-ignore
const {
    inline,
    size,
    wrap,
    justify,
    align,
    dir,
    overflow
} = toRefs(props);

const isSize = (val: any): val is SpaceSize => {
    return SPACE_SIZE.includes(val);
}
const isNumber = (num: any) => typeof num === "number";
const isString = (str: any) => typeof str === "string";
const isBoolean = (bool: any) => typeof bool === "boolean";

const classList = computed(() => {
  const classes: string[] = [];

  if(inline.value) {
    classes.push(bem.is("inline", inline.value))
  }

  if(isBoolean(wrap.value)) {
    classes.push(bem.is("wrap", wrap.value));
  }else {
    classes.push(bem.is("wrap-reverse", wrap.value));
  };

  if (isSize(size.value) && size.value !== "s") {
    classes.push(bem.m(size.value));
  };

  classes.push(bem.m(`justify-${justify.value}`));
  classes.push(bem.m(`align-${align.value}`));

  if(dir.value !== 'horizontal') {
    classes.push(bem.m(`dir-${dir.value}`));
  }

  if(overflow.value !== 'visible') {
    classes.push(bem.m(`overflow-${overflow.value}`));
  }

  return classes;
});
const spaceStyle = computed(() => {
  const style: CSSProperties = {};

  if(!isSize(size.value)) {

    if (isNumber(size.value)) {
        style.gap = `${size.value}px`;
    } else if (isString(size.value)) {
        style.gap = `${size.value}`;
    } else if (Array.isArray(size.value)) {
        const [columnGap, rowGap] = size.value;

        if (isNumber(columnGap) && isNumber(rowGap)) {
            style.columnGap = `${columnGap}px`;
            style.rowGap = `${rowGap}px`;
        } else {
            style.columnGap = `${columnGap}`;
            style.rowGap = `${rowGap}`;
        }
    }
  }

  if(Array.isArray(overflow.value)) {
    const [overflowX, overflowY] = overflow.value;

    style.overflowX = overflowX;
    style.overflowY = overflowY;
  }
  return style;
});
</script>
