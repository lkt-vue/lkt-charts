import {IChartData} from "./IChartData";
import {TDataSetType} from "../types/ChartTypes";

export interface IDataSet {
    name?: string,
    type?: TDataSetType,
    data: number[]|IChartData[]
}