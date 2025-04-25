export declare function isNumber(obj: any): obj is number;
export declare function isString(obj: any): obj is string;
export declare function isBoolean(obj: any): obj is boolean;
export declare function isObject(obj: any): obj is {
    [key: string]: any;
};
export declare function isArray(obj: any): obj is any[];
export declare function isUndefined(obj: any): obj is undefined;
export declare function isFunction(obj: any): obj is () => void | any;
