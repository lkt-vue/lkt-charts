import { IDataSet } from "../types/IDataSet";
import { IAxisX } from "../types/IAxisX";
import { ITitle } from "../types/ITitle";
import { IAxisY } from "../types/IAxisY";
import { IGrid } from "../types/IGrid";
import { ITooltip } from "../types/ITooltip";
export declare class Chart {
    title?: ITitle;
    xAxis?: IAxisX;
    yAxis?: IAxisY;
    series: IDataSet[];
    tooltip?: ITooltip;
    grid?: IGrid;
    setSeries(series: IDataSet[]): Chart;
    setAxisX(data: IAxisX): Chart;
    setTitle(data: ITitle): Chart;
    setGrid(data: IGrid): Chart;
    setTooltip(data: ITooltip): Chart;
}
