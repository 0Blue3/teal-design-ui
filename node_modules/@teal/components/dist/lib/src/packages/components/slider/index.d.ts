declare const TlSlider: import('@teal/utils').SFCWithInstall<import('vue').DefineComponent<import('./src/slider').SliderProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    change: (...args: any[]) => any;
    "update:modelValue": (...args: any[]) => any;
}, string, import('vue').PublicProps, Readonly<import('./src/slider').SliderProps> & Readonly<{
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}>, {
    disabled: boolean;
    height: number;
    modelValue: import('./src/slider').SliderValue;
    direction: import('@teal/utils').Direction;
    max: number;
    min: number;
    step: number;
    marks: import('./src/slider').SliderMark[];
    showInput: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    runwayRef: HTMLDivElement;
}, HTMLDivElement>> & Record<string, any>;
export default TlSlider;
export * from './src/slider';
declare module "@vue/runtime-core" {
    interface GlobalComponents {
        TlSlider: typeof TlSlider;
    }
}
