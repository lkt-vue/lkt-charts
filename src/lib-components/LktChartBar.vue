<template>
    <div data-lkt="chart">
        <div data-lkt="chart-content" ref="container" v-bind:style="containerStyle"></div>
    </div>
</template>

<script lang="ts">

import * as echarts from 'echarts';
import {ILktObject} from "lkt-tools";
import {Chart} from "../instances/Chart";
import {IDataSet} from "../types/IDataSet";
import {IAxisX} from "../types/IAxisX";
import {ITitle} from "../types/ITitle";

export default {
    name: "LktChartBar",
    props: {
        height: {type: Number, default: 500},
        color: {type: String, default: 'steelblue'},


        title: {type: Object, default: (): ITitle => { return {} }},
        axisX: {type: Object, default: (): IAxisX => { return {} }},
        series: {type: Array, default: (): IDataSet[] => []},
        subtitle: {type: String, default: ''},
    },
    data(): ILktObject {
        return {
            chart: undefined,
            options: undefined,
            resizeTimeout: undefined,
        }
    },
    computed: {
        containerStyle() {
            let r = [];

            r.push(`height: ${this.height}px`);

            return r.join(';');
        }
    },
    methods: {
        onResize() {
            if (this.chart && this.chart.resize) {
                this.chart.resize();
                // if (this.resizeTimeout !== undefined) {
                //     clearTimeout(this.resizeTimeout);
                // }
                // this.resizeTimeout = setTimeout(() => {
                //     // Resize chart
                //     this.resizeTimeout = undefined;
                // }, 200);
            }
        }
    },
    mounted() {

        let options = new Chart().setTooltip({trigger: "item", triggerOn: "mousemove"});

        if (this.series.length > 0) {
            options.setSeries(this.series);
        }

        if (Object.keys(this.axisX).length > 0) {
            options.setAxisX(this.axisX);
        }

        if (Object.keys(this.title).length > 0) {
            options.setTitle(this.title);
        }

        this.options = options;

        this.$nextTick(() => {

            let chart = echarts.init(this.$refs.container);

            // Draw the chart
            chart.setOption(this.options);

            this.chart = chart;
            addEventListener('resize', this.onResize);
        })
    },
    unmounted() {
        removeEventListener('resize', this.onResize);
    }
}
</script>