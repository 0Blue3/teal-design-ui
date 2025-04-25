import { Shape, Size, Type } from '@teal/utils';
declare const ButtonStatus: string[];
export type ButtonStatus = (typeof ButtonStatus)[number];
export type ButtonProps = {
    type?: Type;
    status?: ButtonStatus;
    size?: Size;
    shape?: Shape;
    icon?: string;
    disabled?: boolean;
    loading?: boolean;
    long?: boolean;
};
export {};
