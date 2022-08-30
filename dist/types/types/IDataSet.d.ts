import { IChartData } from "./IChartData";
export interface IDataSet {
    name?: string;
    type?: 'bar';
    data: number[] | IChartData[];
}
