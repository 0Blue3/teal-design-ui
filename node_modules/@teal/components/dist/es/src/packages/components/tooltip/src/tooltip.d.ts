import { StyleValue } from 'vue';
import { Placement } from '@floating-ui/vue';
export type { Placement } from '@floating-ui/vue';
export declare const TRIGGER_MODE: readonly ["hover", "click", "focus", "none", "contextmenu"];
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
