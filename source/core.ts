import { CounterEnum } from './types';
export default function counterenum<T extends Record<string, string>>(e: T): CounterEnum<T> {
    return Object.entries(e).reduce(function(accumulator, [key, value]) {
        accumulator[value as keyof CounterEnum<T>] = key as keyof T;
        return accumulator;
    }, {} as CounterEnum<T>);
};