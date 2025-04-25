import { StyleValue } from "vue";

import type { Placement } from "@floating-ui/vue";

export type { Placement } from "@floating-ui/vue";

export const TRIGGER_MODE = [
  "hover",
  "click",
  "focus",
  "none",
  "contextmenu",
] as const;

export type TriggerMode = (typeof TRIGGER_MODE)[number];

export interface TooltipProps {
  open?: boolean;
  title?: string;
  trigger?: TriggerMode | TriggerMode[];
  color?: string;
  placement?: Placement;
  animation?: string;
  arrow?: boolean;
  autoAdjustOverflow?: boolean;
  openDelay?: number;
  closeDelay?: number;
  overlayStyle?: StyleValue;
  zIndex?: number;
}

export interface TooltipEmits {
  (e: "update:open", value: boolean): void;
  (e: "open-change", value: boolean): void;
}

export interface TooltipInstance {
  show: () => void;
  hide: () => void;
}
