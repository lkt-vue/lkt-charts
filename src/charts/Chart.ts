import * as d3 from "d3";
import {defaultXMapper, defaultYMapper} from "../functions/default-chart-functions";
import {IChartOptions} from "../types/IChartOptions";
import {IChartSizing} from "../types/IChartSizing";
import {InternSet} from "d3";
import {IChartAxisY} from "../types/IChartAxisY";
import {IChartAxisX} from "../types/IChartAxisX";
import {IChartColor} from "../types/IChartColor";

export abstract class Chart implements IChartOptions, IChartSizing, IChartAxisY, IChartAxisX, IChartColor {
    x = defaultXMapper; // given d in data, returns the (ordinal) x-value
    y = defaultYMapper; // given d in data, returns the (quantitative) y-value
    title: string | Function | number | boolean = ''; // given d in data, returns the title text
    marginTop: number = 20; // the top margin, in pixels
    marginRight: number = 0; // the right margin, in pixels
    marginBottom: number = 30; // the bottom margin, in pixels
    marginLeft: number = 40; // the left margin, in pixels
    width: number = 640; // the outer width of the chart, in pixels
    height: number = 400; // the outer height of the chart, in pixels
    xDomain: InternSet|any[] = undefined; // an array of (ordinal) x-values
    xRange: number[] = [40, this.width - this.marginRight]; // [left, right]
    yType = d3.scaleLinear; // y-scale type
    yDomain: InternSet|any[] = undefined; // [ymin, ymax]
    yRange: number[] = [this.height - this.marginBottom, this.marginTop]; // [bottom, top]
    xPadding = 0.1; // amount of x-range to reserve to separate bars
    yFormat: string = ''; // a format specifier string for the y-axis
    yLabel: string = ''; // a label for the y-axis
    color: string = "currentColor"; // bar fill color

    X: any = undefined;
    Y: any = undefined;
    I: any = undefined;
    xScale: any = undefined;
    yScale: any = undefined;
    xAxis: any = undefined;
    yAxis: any = undefined;
    data: Iterable<any> = [];

    protected constructor(data: Iterable<any>, {
        title = undefined,
    }: IChartOptions = {}) {
        this.data = data;

        this.title = title;
    }

    setSizing(sizing: IChartSizing): Chart {
        if (sizing.width) {
            this.width = sizing.width;
        }
        if (sizing.height) {
            this.height = sizing.height;
        }
        if (sizing.marginRight) {
            this.marginRight = sizing.marginRight;
        }
        if (sizing.marginTop) {
            this.marginTop = sizing.marginTop;
        }
        if (sizing.marginBottom) {
            this.marginBottom = sizing.marginBottom;
        }
        if (sizing.marginLeft) {
            this.marginLeft = sizing.marginLeft;
        }
        if (sizing.yRange) {
            this.yRange = sizing.yRange;
        }
        if (sizing.xPadding) {
            this.xPadding = sizing.xPadding;
        }
        if (!sizing.xRange) {
            this.xRange = [this.marginLeft, this.width - this.marginRight]
        } else {
            this.xRange = sizing.xRange;
        }
        if (!sizing.yRange) {
            this.yRange = [this.height - this.marginBottom, this.marginTop]
        } else {
            this.xRange = sizing.xRange;
        }
        return this;
    }

    setAxisYScaleLinear(): Chart {
        this.yType = d3.scaleLinear;
        return this;
    }

    setAxisY(settings: IChartAxisY): Chart {

        if (settings.y) {
            // @ts-ignore
            this.y = settings.y;
        }

        if (settings.yType) {
            this.yType = settings.yType;
        }

        if (settings.yDomain) {
            this.yDomain = settings.yDomain;
        }

        if (settings.yFormat) {
            this.yFormat = settings.yFormat;
        }

        if (settings.yLabel) {
            this.yLabel = settings.yLabel;
        }
        return this;
    }

    setAxisX(settings: IChartAxisX): Chart {

        if (settings.x) {
            // @ts-ignore
            this.x = settings.x;
        }

        if (settings.xDomain) {
            this.xDomain = settings.xDomain;
        }
        return this;
    }

    setColor(settings: IChartColor): Chart {
        if (settings.color) {
            this.color = settings.color;
        }
        return this;
    }

    prepare() {

        // Compute values.
        // @ts-ignore
        const X = d3.map(this.data, this.x);
        // @ts-ignore
        const Y = d3.map(this.data, this.y);

        this.X = X;
        this.Y = Y;

        // Compute default domains, and unique the x-domain.
        if (this.xDomain === undefined) this.xDomain = this.X;
        if (this.yDomain === undefined) { // @ts-ignore
            this.yDomain = [0, d3.max(this.Y)];
        }
        this.xDomain = new d3.InternSet(this.xDomain);

        // Omit any data not present in the x-domain.
        // @ts-ignore
        this.I = d3.range(X.length).filter(i => this.xDomain.has(this.X[i]));

        // Construct scales, axes, and formats.
        const xScale = d3.scaleBand(this.xDomain, this.xRange).padding(this.xPadding);
        const yScale = this.yType(this.yDomain, this.yRange);
        // @ts-ignore
        const xAxis = d3.axisBottom(xScale).tickSizeOuter(0);
        const yAxis = d3.axisLeft(yScale).ticks(this.height / 40, this.yFormat);

        // Compute titles.
        if (this.title === undefined) {
            const formatValue = yScale.tickFormat(100, this.yFormat);
            this.title = (i: number) => `${this.X[i]}\n${formatValue(this.Y[i])}`;
        } else {
            const O = d3.map(this.data, d => d);
            const T = this.title;
            // @ts-ignore
            this.title = (i: number) => T(O[i], i, this.data);
        }
        this.xScale = xScale;
        this.yScale = yScale;
        this.xAxis = xAxis;
        this.yAxis = yAxis;
        return this;
    }

    abstract getSVG(): SVGSVGElement;
}

