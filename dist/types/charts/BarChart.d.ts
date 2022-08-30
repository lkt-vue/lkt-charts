import { Chart } from "./Chart";
import { IChartOptions } from "../types/IChartOptions";
export declare class BarChart extends Chart {
    constructor(data: Iterable<any>, { title, }?: IChartOptions);
    getSVG(): SVGSVGElement;
}
