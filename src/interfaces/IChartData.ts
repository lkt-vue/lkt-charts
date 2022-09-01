import {IItemStyle} from "./IItemStyle";
import {TChartDataType} from "../types/ChartTypes";

export interface IChartData {
    value?: number | string
    itemStyle?: IItemStyle
    name?: string
    stack?: string
    type?: TChartDataType
    emphasis?: {
        itemStyle?: IItemStyle
        focus?: 'adjacency'
    },
    label?: {
        show?: boolean,
        position?: 'inside'
    },
    data?: {name: string}[]
    links?: {source: string, target: string, value: string}[]
    lineStyle?: {
        color?: 'gradient',
        curveness?: 0.5
    }
}