declare const TlSpace: import('@teal/utils').SFCWithInstall<{
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./src/space').SpaceProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {
        inline: boolean;
        size: import('./src/space').SpaceSize | number | string | (number | string)[];
        wrap: boolean | "wrap-reverse";
        align: import('./src/space').SpaceAlign;
        justify: import('./src/space').SpaceJustify;
        dir: import('./src/space').SpaceDirection;
        overflow: import('./src/space').SpaceOverflow;
    }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLDivElement, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('./src/space').SpaceProps> & Readonly<{}>, {}, {}, {}, {}, {
        inline: boolean;
        size: import('./src/space').SpaceSize | number | string | (number | string)[];
        wrap: boolean | "wrap-reverse";
        align: import('./src/space').SpaceAlign;
        justify: import('./src/space').SpaceJustify;
        dir: import('./src/space').SpaceDirection;
        overflow: import('./src/space').SpaceOverflow;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('./src/space').SpaceProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
    inline: boolean;
    size: import('./src/space').SpaceSize | number | string | (number | string)[];
    wrap: boolean | "wrap-reverse";
    align: import('./src/space').SpaceAlign;
    justify: import('./src/space').SpaceJustify;
    dir: import('./src/space').SpaceDirection;
    overflow: import('./src/space').SpaceOverflow;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
    };
})> & Record<string, any>;
export default TlSpace;
export * from './src/space';
declare module "@vue/runtime-core" {
    interface GlobalComponents {
        TlSpace: typeof TlSpace;
    }
}
