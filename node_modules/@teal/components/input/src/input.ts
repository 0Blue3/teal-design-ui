import { CSSProperties } from "vue";
import { Size, Status } from "@teal/utils";

export type InputProps = {
  id?: string;
  name?: string;
  size?: Size;
  type?: "text" | "password";
  placeholder?: string;
  modelValue?: string;
  disabled?: boolean;
  readonly?: boolean;
  required?: boolean;
  clearable?: boolean;
  visible?: boolean; // 密码类型输入框是否显示查看密码按钮
  status?: Status; // 输入框的状态
  loading?: boolean; // 输入框是否为加载中状态
  showCounter?: boolean; // 输入框是否显示字数统计
  limit?: number; // 输入框最大输入字符数
  style?: CSSProperties; // 组件样式
  message?: string; // 输入框聚焦时显示的文字提示
  inputStyle?: CSSProperties; // input原生style
};
