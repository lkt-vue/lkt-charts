import {DataSet} from "../interfaces/DataSet";
import {AxisX} from "../interfaces/AxisX";
import {Title} from "../interfaces/Title";
import {AxisY} from "../interfaces/AxisY";
import {Grid} from "../interfaces/Grid";
import {Tooltip} from "../interfaces/Tooltip";

export class Chart {

    title?: Title
    xAxis?: AxisX
    yAxis?: AxisY
    series:DataSet[] = []
    tooltip?: Tooltip
    grid?: Grid

    setSeries(series: DataSet[]): Chart {
        this.series = series;
        return this;
    }

    setAxisX(data: AxisX): Chart {
        this.xAxis = data;
        return this;
    }

    setAxisY(data: AxisY): Chart {
        this.yAxis = data;
        return this;
    }

    setTitle(data: Title): Chart {
        this.title = data;
        return this;
    }

    setGrid(data: Grid): Chart {
        this.grid = data;
        return this;
    }

    setTooltip(data: Tooltip): Chart {
        this.tooltip = data;
        return this;
    }
}