import { CSSProperties } from 'vue';
export type EmptyProps = {
    image?: string;
    type?: "primary" | "secondary";
    description?: string;
    imageStyle?: CSSProperties;
};
