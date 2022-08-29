<template>
    <div data-lkt="chart" ref="container">

    </div>
</template>

<script>

import * as d3 from "d3";
import {Chart} from "../charts/Chart";
import {getBarChart} from "../functions/functions";

const data = [
    { date: "24-Apr-07", amount: 93.24 },
    { date: "25-Apr-07", amount: 95.35 },
    { date: "26-Apr-07", amount: 98.84 },
    { date: "27-Apr-07", amount: 99.92 },
    { date: "30-Apr-07", amount: 99.8 },
    { date: "1-May-07", amount: 99.47 },
    { date: "2-May-07", amount: 100.39 },
    { date: "3-May-07", amount: 100.4 },
    { date: "4-May-07", amount: 100.81 },
    { date: "7-May-07", amount: 103.92 },
    { date: "8-May-07", amount: 105.06 },
    { date: "9-May-07", amount: 106.88 },
    { date: "10-May-07", amount: 107.34 },
];
export default {
    name: "LktChartBar",
    data(){
        return {
            chart: undefined,
            svg: undefined,
        }
    },
    mounted(){
        const width = 800;
        const height = 500;
        const svg = d3.select("svg").attr("width", width).attr("height", height);
        const g = svg.append("g");

        this.chart = new Chart(data);
        this.svg = getBarChart(this.chart);
        this.$refs.container.append(this.svg);
    }
}
</script>