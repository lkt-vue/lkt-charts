import {IDataSet} from "../types/IDataSet";
import {IAxisX} from "../types/IAxisX";
import {ITitle} from "../types/ITitle";
import {IAxisY} from "../types/IAxisY";
import {IGrid} from "../types/IGrid";
import {ITooltip} from "../types/ITooltip";

export class Chart {

    title?: ITitle
    xAxis?: IAxisX
    yAxis?: IAxisY
    series:IDataSet[] = []
    tooltip?: ITooltip
    grid?: IGrid

    setSeries(series: IDataSet[]): Chart {
        this.series = series;
        return this;
    }

    setAxisX(data: IAxisX): Chart {
        this.xAxis = data;
        return this;
    }

    setTitle(data: ITitle): Chart {
        this.title = data;
        return this;
    }

    setGrid(data: IGrid): Chart {
        this.grid = data;
        return this;
    }

    setTooltip(data: ITooltip): Chart {
        this.tooltip = data;
        return this;
    }
}