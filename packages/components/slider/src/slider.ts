import { Direction } from "@teal/utils";
import { StyleValue, VNode } from "vue";

export type SliderValue = number | number[];

export type SliderMark = {
  key: number;
  label?: string;
  style?: StyleValue;
  labelNode?: VNode;
};

export interface SliderMarksProps {
  modelValue: SliderMark[];
  direction: Direction;
  disabled: boolean;
  height: number;
  percentStart: number;
  percentEnd: number;
  rangeMin: number;
  rangeMax: number;
}

export interface SliderMarkRenderItem extends SliderMark {
  percent: number;
  isOver: boolean;
  isOvered: boolean;
  markInfo: VNode;
}

export type SliderProps = {
  modelValue?: SliderValue;
  min?: number;
  max?: number;
  step?: number;
  marks?: SliderMark[];
  direction?: Direction;
  height?: number;
  disabled?: boolean;
  showInput?: boolean;
};

export interface UseSliderProps {
  modelValue: SliderValue;
  min: number;
  max: number;
  step: number;
  direction: Direction;
  disabled: boolean;
}

export type SliderEmitEvents = "update:modelValue" | "change";

// export interface SliderEmits {
//   (e: "update:modelValue", val: SliderValue): void;
//   (e: "change", val: SliderValue): void;
// }

export type SliderEmits = (event: SliderEmitEvents, ...arg: any[]) => void;
