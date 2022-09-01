import {IDataSet} from "../interfaces/IDataSet";
import {IAxisX} from "../interfaces/IAxisX";
import {ITitle} from "../interfaces/ITitle";
import {IAxisY} from "../interfaces/IAxisY";
import {IGrid} from "../interfaces/IGrid";
import {ITooltip} from "../interfaces/ITooltip";

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

    setAxisY(data: IAxisY): Chart {
        this.yAxis = data;
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