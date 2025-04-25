import { Ref } from 'vue';
declare const useState: <T = any>(defaultValue: T, value: T, emitFn?: (v: T) => void) => [Ref<T>, (v: T) => void];
export default useState;
