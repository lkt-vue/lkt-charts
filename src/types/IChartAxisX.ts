import {InternSet} from "d3";

export interface IChartAxisX {
    x?: <T, U>(value: T, index: number, iterable: Iterable<T>) => U,
    xDomain?: InternSet|any[],
}