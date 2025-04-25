import { Status } from "@teal/utils";
import Badge from "./badge.vue";

export type BadgeProps = {
  count?: number;
  overflowCount?: number;
  showZero?: boolean;
  offset?: "left" | "right" | [number, number];
  hidden?: boolean;
  isDot?: boolean;
  inDot?: boolean;
  color?: string;
  border?: number;
  status?: Status;
};

export interface BadgeEmits {
  (e: "update:count", count: number): void;
  (e: "update:hidden", hidden: boolean): void;
}
