import { CSSProperties, InjectionKey, ComputedRef } from "vue";
import { Size } from "@teal/utils";

type SizeNumber = Size | number;

type Shape = "circle" | "square" | number;

export type AvatarProps = {
  imgUrl?: string;
  size?: SizeNumber;
  shape?: Shape;
};

export type AvatarGroupProps = {
  max?: number;
  size?: SizeNumber;
  shape?: Shape;
};

export interface AvatarGroupContext {
  shape?: Shape;
  size?: SizeNumber;
  style?: ComputedRef<CSSProperties>;
}
export const AvatarGroupContextKey: InjectionKey<AvatarGroupContext> = Symbol(
  "AvatarGroupContextKey"
);
