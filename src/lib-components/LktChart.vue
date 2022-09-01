<template>
    <div data-lkt="chart">
        <div data-lkt="chart-content" ref="container" v-bind:style="containerStyle"></div>
    </div>
</template>

<script lang="ts">

import * as echarts from 'echarts';
import {ILktObject} from "lkt-tools";
import {Chart} from "../instances/Chart";
import {IDataSet} from "../interfaces/IDataSet";
import {IAxisX} from "../interfaces/IAxisX";
import {ITitle} from "../interfaces/ITitle";

export default {
    name: "LktChart",
    props: {
        height: {type: Number, default: 500},
        color: {type: String, default: 'steelblue'},


        title: {type: Object, default: (): ITitle => { return {} }},
        axisX: {type: Object, default: (): IAxisX => { return {} }},
        series: {type: Array, default: (): IDataSet[] => []},
        subtitle: {type: String, default: ''},
        options: {type: Chart, default: ():Chart => {return null;}}
    },
    data(): ILktObject {
        return {
            chart: undefined,
            opts: undefined,
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
            }
        }
    },
    mounted() {
        this.$nextTick(() => {

            let chart = echarts.init(this.$refs.container);
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