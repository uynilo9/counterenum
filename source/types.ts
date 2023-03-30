export type CounterEnum<T extends Record<string, string>> = {
    [K in T[keyof T]]: { [P in keyof T]: T[P] extends K ? P : never }[keyof T];
};