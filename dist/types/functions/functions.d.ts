import { Chart } from "../instances/Chart";
import { IDataSet } from "../interfaces/IDataSet";
import { IAxisX } from "../interfaces/IAxisX";
import { IAxisY } from "../interfaces/IAxisY";
import { TTooltipTriggerOn, TTooltipTriggers } from "../types/ChartTypes";
export declare const createBarChart: (series: IDataSet[], axisX?: IAxisX, axisY?: IAxisY) => Chart;
export declare const createSankeyChart: (series: IDataSet[], axisX?: IAxisX, axisY?: IAxisY) => Chart;
export declare const addBasicTooltip: (chart: Chart, trigger?: TTooltipTriggers, triggerOn?: TTooltipTriggerOn) => Chart;
export declare const setChartTitle: (chart: Chart, title?: string, subtitle?: string) => Chart;
