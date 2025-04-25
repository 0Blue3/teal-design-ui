import { SliderProps } from './slider';
declare const _default: import('vue').DefineComponent<SliderProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    change: (...args: any[]) => any;
    "update:modelValue": (...args: any[]) => any;
}, string, import('vue').PublicProps, Readonly<SliderProps> & Readonly<{
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}>, {
    disabled: boolean;
    height: number;
    modelValue: import('./slider').SliderValue;
    direction: import('@teal/utils').Direction;
    max: number;
    min: number;
    step: number;
    marks: import('./slider').SliderMark[];
    showInput: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    runwayRef: HTMLDivElement;
}, HTMLDivElement>;
export default _default;
