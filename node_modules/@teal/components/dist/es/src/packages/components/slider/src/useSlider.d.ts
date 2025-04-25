import { Ref } from 'vue';
import { UseSliderProps, SliderEmits, SliderEmitEvents } from './slider';
declare const useSlider: (props: UseSliderProps, runwayRef: Ref<HTMLElement>, runwayWidth: Ref<number>, barStartPoint: Ref<number>, barEndPoint: Ref<number>, isRange: Ref<boolean>, emits: SliderEmits) => {
    isEndBtn: Ref<boolean, boolean>;
    moving: Ref<boolean, boolean>;
    handleStartMouseDown: () => void;
    handleEndMouseDown: () => void;
    emitValue: (event: SliderEmitEvents) => void;
};
export { useSlider };
