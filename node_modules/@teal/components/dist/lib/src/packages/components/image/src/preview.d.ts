import { FitType } from './image';
export interface ImagePreviewProps {
    visible?: boolean;
    src?: string;
    closable?: boolean;
    maskClosable?: boolean;
    previewGroup?: boolean;
    popupContainer?: string | HTMLElement;
    unmountOnClose?: boolean;
    onCancel?: () => void;
}
export interface ImagePreviewGroupProps {
    visible?: boolean;
    current?: number;
    srcList?: string[];
    width?: number | string;
    height?: number | string;
    defaultCurrent?: number;
    isRender?: boolean;
    closable?: boolean;
    maskClosable?: boolean;
    fit?: FitType;
    onCancel?: () => void;
}
