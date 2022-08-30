import { IDataSet } from "./IDataSet";
import { IAxisX } from "./IAxisX";
import { ITitle } from "./ITitle";
import { IAxisY } from "./IAxisY";
import { ITooltip } from "./ITooltip";
import { IGrid } from "./IGrid";
export interface IChart {
    title?: ITitle;
    tooltip?: ITooltip;
    xAxis?: IAxisX;
    yAxis?: IAxisY;
    grid?: IGrid;
    series: IDataSet[];
}
