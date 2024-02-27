import {Chart} from "../instances/Chart";
import {DataSet} from "../interfaces/DataSet";
import {AxisX} from "../interfaces/AxisX";
import {AxisY} from "../interfaces/AxisY";
import {TooltipTriggerOn, TooltipTriggers} from "../types/ChartTypes";

export const createBarChart = (series: DataSet[], axisX: AxisX = {}, axisY: AxisY = {}): Chart => {
    const r = new Chart();

    if (Array.isArray(series) && series.length > 0) r.setSeries(series);
    if (typeof axisX === 'object' && Object.keys(axisX).length > 0) r.setAxisX(axisX);
    if (typeof axisY === 'object' && Object.keys(axisY).length > 0) r.setAxisY(axisY);

    return r;
}

export const createSankeyChart = (series: DataSet[], axisX: AxisX|undefined = undefined, axisY: AxisY|undefined = undefined): Chart => {
    const r = new Chart();

    if (Array.isArray(series) && series.length > 0) r.setSeries(series);
    if (typeof axisX === 'object' && Object.keys(axisX).length > 0) r.setAxisX(axisX);
    if (typeof axisY === 'object' && Object.keys(axisY).length > 0) r.setAxisY(axisY);

    return r;
}

export const addBasicTooltip = (chart: Chart, trigger: TooltipTriggers = 'item', triggerOn: TooltipTriggerOn = 'mousemove') => {
    chart.setTooltip({trigger, triggerOn});
    return chart;
}

export const setChartTitle = (chart: Chart, title: string|undefined = undefined, subtitle: string|undefined = undefined) => {
    chart.setTitle({text: title, subtext: subtitle});
    return chart;
}