import { Shape, Size, STATUS, Type } from "@teal/utils";

const ButtonStatus = [...STATUS, "info"];
export type ButtonStatus = (typeof ButtonStatus)[number];
export type ButtonProps = {
  type?: Type;
  status?: ButtonStatus;
  size?: Size;
  shape?: Shape; // 图标按钮
  icon?: string;
  disabled?: boolean;
  loading?: boolean;
  long?: boolean;
};
