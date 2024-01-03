import { Chart } from "../instances/Chart";
import { DataSet } from "../interfaces/DataSet";
import { AxisX } from "../interfaces/AxisX";
import { AxisY } from "../interfaces/AxisY";
import { TooltipTriggerOn, TooltipTriggers } from "../types/ChartTypes";
export declare const createBarChart: (series: DataSet[], axisX?: AxisX, axisY?: AxisY) => Chart;
export declare const createSankeyChart: (series: DataSet[], axisX?: AxisX, axisY?: AxisY) => Chart;
export declare const addBasicTooltip: (chart: Chart, trigger?: TooltipTriggers, triggerOn?: TooltipTriggerOn) => Chart;
export declare const setChartTitle: (chart: Chart, title?: string, subtitle?: string) => Chart;
