import {ChartData} from "./ChartData";
import {DataSetType} from "../types/ChartTypes";

export interface DataSet {
    name?: string,
    type?: DataSetType,
    data: number[]|ChartData[]
}