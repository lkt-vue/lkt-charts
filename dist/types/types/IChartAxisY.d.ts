import { InternSet } from "d3";
export interface IChartAxisY {
    y?: <T, U>(value: T, index: number, iterable: Iterable<T>) => U;
    yType?: any;
    yDomain?: InternSet | any[];
    yFormat?: string;
    yLabel?: string;
}
