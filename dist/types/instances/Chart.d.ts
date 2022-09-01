import { IDataSet } from "../interfaces/IDataSet";
import { IAxisX } from "../interfaces/IAxisX";
import { ITitle } from "../interfaces/ITitle";
import { IAxisY } from "../interfaces/IAxisY";
import { IGrid } from "../interfaces/IGrid";
import { ITooltip } from "../interfaces/ITooltip";
export declare class Chart {
    title?: ITitle;
    xAxis?: IAxisX;
    yAxis?: IAxisY;
    series: IDataSet[];
    tooltip?: ITooltip;
    grid?: IGrid;
    setSeries(series: IDataSet[]): Chart;
    setAxisX(data: IAxisX): Chart;
    setAxisY(data: IAxisY): Chart;
    setTitle(data: ITitle): Chart;
    setGrid(data: IGrid): Chart;
    setTooltip(data: ITooltip): Chart;
}
