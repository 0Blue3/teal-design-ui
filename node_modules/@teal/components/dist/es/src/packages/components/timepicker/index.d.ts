declare const Timepicker: import('@teal/utils').SFCWithInstall<import('vue').DefineComponent<{}, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>> & Record<string, any>;
export default Timepicker;
export * from './src/timepicker';
declare module "@vue/runtime-core" {
    interface GlobalComponents {
        TlTimepicker: typeof Timepicker;
    }
}
