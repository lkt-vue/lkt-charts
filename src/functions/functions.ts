import {Chart} from "../instances/Chart";
import {IDataSet} from "../interfaces/IDataSet";
import {IAxisX} from "../interfaces/IAxisX";
import {IAxisY} from "../interfaces/IAxisY";
import {isArray, isObject} from "lkt-tools";
import {TTooltipTriggerOn, TTooltipTriggers} from "../types/ChartTypes";

export const createBarChart = (series: IDataSet[], axisX: IAxisX = {}, axisY: IAxisY = {}): Chart => {
    let r = new Chart();

    if (isArray(series) && series.length > 0) {
        r.setSeries(series);
    }

    if (isObject(axisX) && Object.keys(axisX).length > 0) {
        r.setAxisX(axisX);
    }

    if (isObject(axisY) && Object.keys(axisY).length > 0) {
        r.setAxisY(axisY);
    }

    return r;
}

export const createSankeyChart = (series: IDataSet[], axisX: IAxisX = undefined, axisY: IAxisY = undefined): Chart => {
    let r = new Chart();

    if (isArray(series) && series.length > 0) {
        r.setSeries(series);
    }

    if (isObject(axisX) && Object.keys(axisX).length > 0) {
        r.setAxisX(axisX);
    }

    if (isObject(axisY) && Object.keys(axisY).length > 0) {
        r.setAxisY(axisY);
    }

    return r;
}

export const addBasicTooltip = (chart: Chart, trigger: TTooltipTriggers = 'item', triggerOn: TTooltipTriggerOn = 'mousemove') => {
    chart.setTooltip({trigger, triggerOn});
    return chart;
}

export const setChartTitle = (chart: Chart, title: string = undefined, subtitle: string = undefined) => {
    chart.setTitle({text: title, subtext: subtitle});
    return chart;
}