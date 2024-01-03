import {TooltipTriggers} from "../types/ChartTypes";

export interface Tooltip {
    trigger?: TooltipTriggers
    triggerOn?: 'mousemove'
    axisPointer?: {
        type?: 'shadow'
    },
    formatter?: Function

}