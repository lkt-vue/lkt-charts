import {Chart} from "../charts/Chart";
import * as d3 from "d3";

export const getBarChart = (chart: Chart) => {

    const svg = d3.create("svg")
        .attr("width", chart.width)
        .attr("height", chart.height)
        .attr("viewBox", [0, 0, chart.width, chart.height])
        .attr("style", "max-width: 100%; height: auto; height: intrinsic;");

    svg.append("g")
        .attr("transform", `translate(${chart.marginLeft},0)`)
        .call(chart.yAxis)
        .call(g => g.select(".domain").remove())
        .call(g => g.selectAll(".tick line").clone()
            .attr("x2", chart.width - chart.marginLeft - chart.marginRight)
            .attr("stroke-opacity", 0.1))
        .call(g => g.append("text")
            .attr("x", -chart.marginLeft)
            .attr("y", 10)
            .attr("fill", "currentColor")
            .attr("text-anchor", "start")
            .text(chart.yLabel));

    const bar = svg.append("g")
        .attr("fill", chart.color)
        .selectAll("rect")
        .data(chart.I)
        .join("rect")
        .attr("x", (i: number) => chart.xScale(chart.mapX(chart.data)[i]))
        .attr("y", (i: number) => chart.yScale(chart.mapY(chart.data)[i]))
        .attr("height", (i: number) => chart.yScale(0) - chart.yScale(chart.mapY[i]))
        .attr("width", chart.xScale.bandwidth());

    if (chart.title) {
        // @ts-ignore
        bar.append("title").text(chart.title);
    }

    svg.append("g")
        .attr("transform", `translate(0,${chart.height - chart.marginBottom})`)
        .call(chart.xAxis);

    return svg.node();
}