export type CounterEnum<T extends Record<string, string>> = {
    [K in T[keyof T]]: { [P in keyof T]: T[P] extends K ? P : never }[keyof T];
};
export default function counterenum<T extends Record<string, string>>(e: T): CounterEnum<T> {
    return Object.entries(e).reduce(function(accumulator, [key, value]) {
        accumulator[value as keyof CounterEnum<T>] = key as keyof T;
        return accumulator;
    }, {} as CounterEnum<T>);
};