import { InjectionKey, Slots } from "vue";

export type BreadcrumbProps = {
  // 分割符号
  separator?: string;
  //   分割图标
  separatorIcon?: string;
};

export type BreadcrumbItemProps = {
  to?: string;
};

interface Key {
  props: BreadcrumbProps;
  slots: Slots;
}

export const breadcrumbName: InjectionKey<Key> = Symbol("breadcrumbName");
