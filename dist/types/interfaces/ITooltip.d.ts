import { TTooltipTriggers } from "../types/ChartTypes";
export interface ITooltip {
    trigger?: TTooltipTriggers;
    triggerOn?: 'mousemove';
    axisPointer?: {
        type?: 'shadow';
    };
    formatter?: Function;
}
