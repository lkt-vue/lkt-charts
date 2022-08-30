import {Chart} from "./Chart";
import * as d3 from "d3";
import {IChartOptions} from "../types/IChartOptions";

export class BarChart extends Chart {

    constructor(data: Iterable<any>, {
        title = undefined,
    }: IChartOptions = {}) {
        super(arguments[0], arguments[1]);
    }
    getSVG() {
        const svg = d3.create("svg")
            .attr("width", this.width)
            .attr("height", this.height)
            .attr("viewBox", [0, 0, this.width, this.height])
            .attr("style", "max-width: 100%; height: auto; height: intrinsic;");

        svg.append("g")
            .attr("transform", `translate(${this.marginLeft},0)`)
            .call(this.yAxis)
            .call(g => g.select(".domain").remove())
            .call(g => g.selectAll(".tick line").clone()
                .attr("x2", this.width - this.marginLeft - this.marginRight)
                .attr("stroke-opacity", 0.1))
            .call(g => g.append("text")
                .attr("x", -this.marginLeft)
                .attr("y", 10)
                .attr("fill", "currentColor")
                .attr("text-anchor", "start")
                .text(this.yLabel));

        const bar = svg.append("g")
            .attr("fill", this.color)
            .selectAll("rect")
            .data(this.I)
            .join("rect")
            .attr("x", (i: number) => this.xScale(this.X[i]))
            .attr("y", (i: number) => this.yScale(this.Y[i]))
            .attr("height", (i: number) => this.yScale(0) - this.yScale(this.Y[i]))
            .attr("width", this.xScale.bandwidth());

        if (this.title) { // @ts-ignore
            bar.append("title").text(this.title);
        }

        svg.append("g")
            .attr("transform", `translate(0,${this.height - this.marginBottom})`)
            .call(this.xAxis);

        return svg.node();
    }
}