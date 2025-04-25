import type { Size } from "@teal/utils/index";
import type { Component, VNode, Ref, InjectionKey, ComputedRef } from "vue";

export type paginationSize = [];

export type PaginationProps = {
  total: number; // 总数
  current?: number; // 当前页数
  pageSize?: number; // 每页展示的数据条数
  defaultCurrent?: number; // 默认的当前页数
  defaultPageSize?: number; // 默认每页展示的数据条数（-1 表示显示全部）
  pageSizeOptions?: number[]; // 数据条数选择器的选项列表
  pagerCount?: number; // 最大显示页码数量
  size?: Size; // 组件尺寸
  layouts?: ("pager" | "prev" | "next" | "total" | "jumper" | "pageSize")[]; // 自定义分页器的布局
  prevIcon?: Component; // 前一夜图标
  nextIcon?: Component; // 后一页图标
  simple?: boolean; // 简单模式
  fixWidth?: boolean; // 固定宽度
  disabled?: boolean; // 禁用
  hideOnSinglePage?: boolean;
};

export type PaginationEmits = {
  (e: "change", current: number): void;
  (e: "pageSizeChange", pageSize: number): void;
  (e: "update:current", current: number): void;
  (e: "update:pageSize", pageSize: number): void;
};

export type LayoutMapType = Record<string, VNode>;

export type PgnInfo = {
  _current: Ref<number>;
  _pageSize: Ref<number>;
  lastPage: Ref<number>;
  isFirstPage: Ref<boolean>;
  isLastPage: Ref<boolean>;
  size: Ref<Size> | ComputedRef<Size>;
};

export const PaginationContextKey: InjectionKey<PgnInfo> = Symbol(
  "PaginationContextKey"
);
