<template>
    <div data-lkt="chart" ref="container"></div>
</template>

<script lang="ts">

import * as d3 from 'd3';
import {BarChart} from "../charts/BarChart";
import {IChartSizing} from "../types/IChartSizing";
import {ILktObject} from "lkt-tools";

const data = [
    {letter: "A", frequency: 0.08167},
    {letter: "B", frequency: 0.01492},
    {letter: "C", frequency: 0.02782},
    {letter: "D", frequency: 0.04253},
    {letter: "E", frequency: 0.12702},
    {letter: "F", frequency: 0.02288},
    {letter: "G", frequency: 0.02015},
    {letter: "H", frequency: 0.06094},
    {letter: "I", frequency: 0.06966},
    {letter: "J", frequency: 0.00153},
    {letter: "K", frequency: 0.00772},
    {letter: "L", frequency: 0.04025},
    {letter: "M", frequency: 0.02406},
    {letter: "N", frequency: 0.06749},
    {letter: "O", frequency: 0.07507},
    {letter: "P", frequency: 0.01929},
    {letter: "Q", frequency: 0.00095},
    {letter: "R", frequency: 0.05987},
    {letter: "S", frequency: 0.06327},
    {letter: "T", frequency: 0.09056},
    {letter: "U", frequency: 0.02758},
    {letter: "V", frequency: 0.00978},
    {letter: "W", frequency: 0.0236},
    {letter: "X", frequency: 0.0015},
    {letter: "Y", frequency: 0.01974},
    {letter: "Z", frequency: 0.00074},
];
export default {
    name: "LktChartBar",
    props: {
        width: {type: Number, default: 1280},
        height: {type: Number, default: 500},
        marginTop: {type: Number, default: undefined},
        marginRight: {type: Number, default: undefined},
        marginBottom: {type: Number, default: undefined},
        marginLeft: {type: Number, default: undefined},
        color: {type: String, default: 'steelblue'},
    },
    data(): ILktObject {
        return {
            chart: undefined,
            svg: undefined,
        }
    },
    computed: {
        sizing() {
            let r:IChartSizing = {};
            if (this.width) {
                r.width = this.width;
            }
            if (this.height) {
                r.height = this.height;
            }
            if (this.marginTop) {
                r.marginTop = this.marginTop;
            }
            if (this.marginRight) {
                r.marginRight = this.marginRight;
            }
            if (this.marginBottom) {
                r.marginBottom = this.marginBottom;
            }
            if (this.marginLeft) {
                r.marginLeft = this.marginLeft;
            }
            return r;
        }
    },
    mounted() {
        this.chart = new BarChart(data).setAxisYScaleLinear()
            .setAxisY({
                y: (d: any) => d.frequency,
                yFormat: "%",
                yLabel: "↑ Frequency",
            })
            .setAxisX({
                x: (d: any) => d.letter,
                xDomain: d3.groupSort(data, ([d]) => -d.frequency, d => d.letter), // sort by descending frequency
            })
            .setColor({
                color: this.color
            });

        if (Object.keys(this.sizing).length > 0) {
            this.chart.setSizing(this.sizing);
        }

        this.chart.prepare();

        this.svg = this.chart.getSVG();
        this.$refs.container.append(this.svg);
    }
}
</script>