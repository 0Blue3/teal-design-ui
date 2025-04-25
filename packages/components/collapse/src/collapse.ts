import type { Ref, InjectionKey } from "vue";
import { Size } from "@teal/utils";

export type strNum = string | number;

export interface CollapseProps {
  title?: string;
  id: string | number;
  disabled?: boolean;
  size?: Size;
}

export interface CollapseGroupEmits {
  (e: "update:modelValue", values: strNum[]): void;
  (e: "change", values: strNum[]): void;
}

export interface CollapseGroupProps {
  activeKey?: strNum[];
  defaultActiveKey?: strNum[];
  accordion?: boolean;
  border?: boolean;
  size?: Size;
}

export interface CollapseGroupContext {
  activeKeys: Ref<strNum[]>;
  size: Size;
  handleItemClick: (name: strNum) => void;
}

export const CollapseGroupContextKey: InjectionKey<CollapseGroupContext> =
  Symbol("CollapseGroupContextKey");
