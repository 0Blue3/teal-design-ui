import { InjectionKey, Slots } from 'vue';
export type BreadcrumbProps = {
    separator?: string;
    separatorIcon?: string;
};
export type BreadcrumbItemProps = {
    to?: string;
};
interface Key {
    props: BreadcrumbProps;
    slots: Slots;
}
export declare const breadcrumbName: InjectionKey<Key>;
export {};
