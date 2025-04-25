const t = {
  level: {
    type: Number,
    validator: (e) => [1, 2, 3, 4, 5, 6].includes(e),
    default: 1
  },
  type: String
}, a = {
  // 文本类型-颜色
  type: {
    type: String,
    default: ""
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  // 高亮
  mark: {
    type: Boolean,
    default: !1
  },
  // 粗体
  strong: {
    type: Boolean,
    default: !1
  },
  // 下划线
  underline: {
    type: Boolean,
    default: !1
  },
  // 删除
  del: {
    type: Boolean,
    default: !1
  }
}, l = {
  // 限制段落显示的行数
  rows: {
    type: Number,
    validator: (e) => e >= 0,
    default: 0
  },
  // 拷贝文案按钮
  copyable: {
    type: Boolean,
    default: !1
  },
  //   是否可展开
  moreable: {
    type: Boolean,
    default: !1
  },
  open: {
    type: Boolean,
    default: !1
  },
  openText: {
    type: String,
    default: "展开"
  },
  closeText: {
    type: String,
    default: "收起"
  }
}, o = {
  "update:open": (e) => !0,
  // 展开更多时触发事件
  changeOpen: (e) => !0,
  // 复制前触发，用于处理需要复制的文字
  copyBefore: (e) => e
};
export {
  o as paragraphEmits,
  l as paragraphProps,
  a as textProps,
  t as titleProps
};
