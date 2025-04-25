import { Plugin } from "vue";

export type SFCWithInstall<T> = T & Plugin;

// function withInstall<T>(comp: T) {
//     (comp as SFCWithInstall<T>).install = function(app: any) {
//         const { name } = comp as unknown as { name: string }
//         app.component(name, comp);
//     }
//     return comp as SFCWithInstall<T>
// }

// export default withInstall;

// export type SFCWithInstall<T> = T & Plugin;

export const withInstall = <T, E extends Record<string, any>>(
  main: T,
  extra?: E
) => {
  (main as SFCWithInstall<T>).install = (app: any): void => {
    for (const comp of [main, ...Object.values(extra ?? {})]) {
      app.component(comp.name, comp);
    }
  };

  if (extra) {
    for (const [key, comp] of Object.entries(extra)) {
      (main as any)[key] = comp;
    }
  }
  return main as SFCWithInstall<T> & E;
};
