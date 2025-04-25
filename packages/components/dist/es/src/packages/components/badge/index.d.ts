declare const TlBadge: import('@teal/utils').SFCWithInstall<{
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./src/badge').BadgeProps> & Readonly<{
        "onUpdate:count"?: ((count: number) => any) | undefined;
        "onUpdate:hidden"?: ((hidden: boolean) => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
        "update:count": (count: number) => any;
        "update:hidden": (hidden: boolean) => any;
    }, import('vue').PublicProps, {
        status: import('@teal/utils').Status;
        border: number;
        hidden: boolean;
        count: number;
        overflowCount: number;
        showZero: boolean;
    }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {
        badgeRef: HTMLDivElement;
        supRef: HTMLDivElement;
    }, HTMLDivElement, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('./src/badge').BadgeProps> & Readonly<{
        "onUpdate:count"?: ((count: number) => any) | undefined;
        "onUpdate:hidden"?: ((hidden: boolean) => any) | undefined;
    }>, {}, {}, {}, {}, {
        status: import('@teal/utils').Status;
        border: number;
        hidden: boolean;
        count: number;
        overflowCount: number;
        showZero: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('./src/badge').BadgeProps> & Readonly<{
    "onUpdate:count"?: ((count: number) => any) | undefined;
    "onUpdate:hidden"?: ((hidden: boolean) => any) | undefined;
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    "update:count": (count: number) => any;
    "update:hidden": (hidden: boolean) => any;
}, string, {
    status: import('@teal/utils').Status;
    border: number;
    hidden: boolean;
    count: number;
    overflowCount: number;
    showZero: boolean;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
    };
})> & Record<string, any>;
export default TlBadge;
export * from './src/badge';
declare module "@vue/runtime-core" {
    interface GlobalComponents {
        TlBadge: typeof TlBadge;
    }
}
