import {ItemStyle} from "./ItemStyle";
import {ChartDataType} from "../types/ChartTypes";

export interface ChartData {
    value?: number | string
    itemStyle?: ItemStyle
    name?: string
    stack?: string
    type?: ChartDataType
    emphasis?: {
        itemStyle?: ItemStyle
        focus?: 'adjacency'
    },
    label?: {
        show?: boolean,
        position?: 'inside'
    },
    data?: { name: string }[]
    links?: { source: string, target: string, value: string }[]
    lineStyle?: {
        color?: 'gradient',
        curveness?: 0.5
    }
}