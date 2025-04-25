import { useSlots, defineComponent, h } from "vue";
import type { Ref } from "vue";
/**
 * @function useDefaultSlots 将默认插槽以组件形式返回
 */
export function useDefaultSlots() {
  const slots = useSlots();

  const DefaultSlot = defineComponent(
    (componentProps, context) => {
      return () => {
        const VNodes = slots.default
          ? slots.default()
          : [h("span", {}, "tooltip")];

        if (VNodes.length > 1) {
          console.error(
            new Error(
              "Component can only have one root element, but you have used multiple root elements"
            )
          );
        }

        VNodes[0] = h(VNodes[0], { ...componentProps, ...context.attrs });
        return VNodes;
      };
    },
    { inheritAttrs: false }
  );

  return DefaultSlot;
}
