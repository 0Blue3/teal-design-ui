import { TooltipProps, TriggerMode } from "@teal/components/tooltip";
import { Size, Type } from "@teal/utils";
import type { Ref, InjectionKey } from "vue";

export type { Placement } from "@floating-ui/vue";

export type DropdownTrigger = Exclude<TriggerMode, "focus">;

/* @vue-ignore */
export interface DropdownProps extends TooltipProps {
  type?: Type; // Button type
  size?: Size;
  disabled?: boolean;
  trigger?: DropdownTrigger | DropdownTrigger[];
}

export type DropdownEmits = {
  selected: [value: string | number | object];
  visibleChange: [value: boolean];
};

export interface DropdownItemProps {
  value?: string | number | object;
  disabled?: boolean;
  submenu?: boolean;
  animation?: string;
  dir?: "left" | "right";
}

export type DropdownItemValue = Ref<string | number | object>;

export interface DropdownContext extends DropdownProps {
  isOpen: Ref<boolean>;
  selectedValue: DropdownItemValue;
}

export const dropdownContextKey: InjectionKey<DropdownContext> =
  Symbol("dropdownContextKey");

export interface DropdownOption extends DropdownContext {
  placement?: "left-start" | "right-end";
}
