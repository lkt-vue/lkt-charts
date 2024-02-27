import { DataSet } from "../interfaces/DataSet";
import { AxisX } from "../interfaces/AxisX";
import { Title } from "../interfaces/Title";
import { AxisY } from "../interfaces/AxisY";
import { Grid } from "../interfaces/Grid";
import { Tooltip } from "../interfaces/Tooltip";
export declare class Chart {
    title?: Title;
    xAxis?: AxisX;
    yAxis?: AxisY;
    series: DataSet[];
    tooltip?: Tooltip;
    grid?: Grid;
    setSeries(series: DataSet[]): Chart;
    setAxisX(data: AxisX): Chart;
    setAxisY(data: AxisY): Chart;
    setTitle(data: Title): Chart;
    setGrid(data: Grid): Chart;
    setTooltip(data: Tooltip): Chart;
}
