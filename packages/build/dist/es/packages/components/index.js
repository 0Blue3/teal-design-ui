import l from "./upload/index.js";
import t, { TlRadioGroup as T } from "./radio/index.js";
import p, { TlCheckboxGroup as i } from "./checkbox/index.js";
import a from "./anchor/index.js";
import e from "./switch/index.js";
import f, { TlTableColumn as n } from "./table/index.js";
import c, { TlBreadcrumbItem as d } from "./bread-crumb/index.js";
import u from "./badge/index.js";
import s from "./scrollbar/index.js";
import b from "./rate/index.js";
import x from "./input/index.js";
import I from "./tree/index.js";
import v from "./slider/index.js";
import A, { TlCollapseGroup as g } from "./collapse/index.js";
import h from "./input-number/index.js";
import w, { TlFormItem as C } from "./form/index.js";
import G from "./pagination/index.js";
import B from "./textarea/index.js";
import P from "./divider/index.js";
import S from "./link/index.js";
import k from "./button/index.js";
import D, { TlAvatarGroup as R } from "./avatar/index.js";
import U from "./space/index.js";
import { TlText as F, TlTitle as y, TlParagraph as E } from "./typotraphy/index.js";
import L from "./tooltip/index.js";
import N from "./empty/index.js";
import j, { TlDropdownItem as q } from "./dropdown/index.js";
import z, { TlImagePreviewGroup as H, TlImagePreview as J } from "./image/index.js";
const r = {
  TlUpload: l,
  TlRadioGroup: T,
  TlRadio: t,
  TlCheckbox: p,
  TlCheckboxGroup: i,
  TlSwitch: e,
  TlAnchor: a,
  //   Popover,
  //   Drawer,
  TlTable: f,
  TlTableColumn: n,
  //   Progress,
  TlBadge: u,
  TlScrollbar: s,
  TlRate: b,
  TlBreadcrumb: c,
  TlBreadcrumbItem: d,
  //   Affix,
  TlInput: x,
  //   InputSearch,
  TlTree: I,
  //   TreeSelect,
  TlSlider: v,
  TlCollapse: A,
  TlCollapseGroup: g,
  //   Popconfirm,
  TlInputNumber: h,
  //   Tabs,
  //   TabPane,
  TlPagination: G,
  TlForm: w,
  TlFormItem: C,
  //   InputTag,
  TlTextArea: B,
  //   Tag,
  //   Calendar,
  //   CalendarMin,
  //   Skeleton,
  TlDivider: P,
  TlLink: S,
  //   Alert,
  TlButton: k,
  //   Theme,
  TlAvatar: D,
  TlAvatarGroup: R,
  TlSpace: U,
  //   Timeline,
  //   TimelineItem,
  TlParagraph: E,
  TlTitle: y,
  TlText: F,
  TlEmpty: N,
  //   BackTop,
  TlTooltip: L,
  //   Modal,
  TlDropdown: j,
  TlDropdownItem: q,
  TlImage: z,
  TlImagePreview: J,
  TlImagePreviewGroup: H
  //   Spinner,
  //   TimePicker,
}, Io = {
  install: (m) => {
    for (const o in r)
      m.component(o, r[o]);
  }
};
export {
  a as TlAnchor,
  D as TlAvatar,
  R as TlAvatarGroup,
  u as TlBadge,
  c as TlBreadcrumb,
  d as TlBreadcrumbItem,
  k as TlButton,
  p as TlCheckbox,
  i as TlCheckboxGroup,
  A as TlCollapse,
  g as TlCollapseGroup,
  P as TlDivider,
  j as TlDropdown,
  q as TlDropdownItem,
  N as TlEmpty,
  w as TlForm,
  C as TlFormItem,
  z as TlImage,
  J as TlImagePreview,
  H as TlImagePreviewGroup,
  x as TlInput,
  h as TlInputNumber,
  S as TlLink,
  G as TlPagination,
  E as TlParagraph,
  t as TlRadio,
  T as TlRadioGroup,
  b as TlRate,
  s as TlScrollbar,
  v as TlSlider,
  U as TlSpace,
  e as TlSwitch,
  f as TlTable,
  n as TlTableColumn,
  F as TlText,
  B as TlTextArea,
  y as TlTitle,
  L as TlTooltip,
  l as TlUpload,
  Io as default
};
