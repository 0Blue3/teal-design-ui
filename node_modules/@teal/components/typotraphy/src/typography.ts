import { ExtractPropTypes, PropType, type Ref } from "vue";

type TitleLevel = 1 | 2 | 3 | 4 | 5 | 6;
type TitleType = "secondary" | "primary" | "success" | "warning" | "danger";

export const titleProps = {
  level: {
    type: Number as PropType<TitleLevel>,
    validator: (val: number) => {
      return [1, 2, 3, 4, 5, 6].includes(val);
    },
    default: 1,
  },
  type: String as PropType<TitleType>,
};
export type titleProps = Partial<ExtractPropTypes<typeof titleProps>>;

type TextType =
  | "secondary"
  | "third"
  | "primary"
  | "success"
  | "warning"
  | "danger"
  | "disabled";
export const textProps = {
  // 文本类型-颜色
  type: {
    type: String as PropType<TextType>,
    default: "",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  // 高亮
  mark: {
    type: Boolean,
    default: false,
  },
  // 粗体
  strong: {
    type: Boolean,
    default: false,
  },
  // 下划线
  underline: {
    type: Boolean,
    default: false,
  },
  // 删除
  del: {
    type: Boolean,
    default: false,
  },
};
export type TextProps = Partial<ExtractPropTypes<typeof textProps>>;

export const paragraphProps = {
  // 限制段落显示的行数
  rows: {
    type: Number,
    validator: (val: number) => {
      return val >= 0;
    },
    default: 0,
  },
  // 拷贝文案按钮
  copyable: {
    type: Boolean,
    default: false,
  },
  //   是否可展开
  moreable: {
    type: Boolean,
    default: false,
  },
  open: {
    type: Boolean,
    default: false,
  },
  openText: {
    type: String,
    default: "展开",
  },
  closeText: {
    type: String,
    default: "收起",
  },
};

export type ParagraphProps = Partial<ExtractPropTypes<typeof paragraphProps>>;

export const paragraphEmits = {
  "update:open": (open: boolean) => true,
  // 展开更多时触发事件
  changeOpen: (open: boolean) => true,
  // 复制前触发，用于处理需要复制的文字
  copyBefore: (value: Ref<string>) => value,
};

export type ParagraphEmits = Partial<ExtractPropTypes<typeof paragraphEmits>>;
