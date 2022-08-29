import * as d3 from "d3";
import {InternSet} from "d3";

export class Chart {
    x: Function = (d: any, i: any) => i; // given d in data, returns the (ordinal) x-value
    y: Function = (d: any) => d; // given d in data, returns the (quantitative) y-value
    title: string | Function | number | boolean = ''; // given d in data, returns the title text
    marginTop: number = 20; // the top margin, in pixels
    marginRight: number = 0; // the right margin, in pixels
    marginBottom: number = 30; // the bottom margin, in pixels
    marginLeft: number = 40; // the left margin, in pixels
    width: number = 640; // the outer width of the chart, in pixels
    height: number = 400; // the outer height of the chart, in pixels
    xDomain: Iterable<any> = []; // an array of (ordinal) x-values
    xRange: number[] = [40, this.width - this.marginRight]; // [left, right]
    yType = d3.scaleLinear; // y-scale type
    yDomain: Iterable<any> = []; // [ymin, ymax]
    yRange: number[] = [this.height - this.marginBottom, this.marginTop]; // [bottom, top]
    xPadding = 0.1; // amount of x-range to reserve to separate bars
    yFormat: string = ''; // a format specifier string for the y-axis
    yLabel: string = ''; // a label for the y-axis
    color: string = "currentColor"; // bar fill color

    mapX: any = undefined;
    mapY: any = undefined;
    I: any = undefined;
    xScale: any = undefined;
    yScale: any = undefined;
    xAxis: any = undefined;
    yAxis: any = undefined;
    data: Iterable<any> = [];

    constructor(data: Iterable<any>) {
        this.data = data;
        // @ts-ignore
        this.mapX = d3.map(data, this.x);
        // @ts-ignore
        this.mapY = d3.map(data, this.y);

        // Compute default domains, and unique the x-domain.
        if (this.xDomain === undefined) this.xDomain = this.mapX;
        if (this.yDomain === undefined) { // @ts-ignore
            this.yDomain = [0, d3.max(this.mapY)];
        }
        // @ts-ignore
        this.xDomain = new d3.InternSet(this.xDomain);

        // Omit any data not present in the x-domain.
        // @ts-ignore
        const I = d3.range(this.mapX.length).filter((i: number) => this.xDomain.has(this.mapX[i]));

        // Construct scales, axes, and formats.
        const xScale = d3.scaleBand(this.xDomain, this.xRange).padding(this.xPadding);
        // @ts-ignore
        const yScale = this.yType(this.yDomain, this.yRange);
        const xAxis = d3.axisBottom(xScale).tickSizeOuter(0);
        const yAxis = d3.axisLeft(yScale).ticks(this.height / 40, this.yFormat);

        this.I = I;
        this.xScale = xScale;
        this.yScale = yScale;
        this.xAxis = xAxis;
        this.yAxis = yAxis;
    }
}

