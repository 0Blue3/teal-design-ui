declare const Icon: import('@teal/utils').SFCWithInstall<import('vue').DefineComponent<import('./src/icon').IconProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('./src/icon').IconProps> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLElement>> & Record<string, any>;
export default Icon;
export * from './src/icon';
declare module "@vue/runtime-core" {
    interface GlobalComponents {
        TlIcon: typeof Icon;
    }
}
