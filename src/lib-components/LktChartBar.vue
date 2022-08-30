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

export default {
    name: "LktChartBar",
    props: {
        height: {type: Number, default: 500},
        color: {type: String, default: 'steelblue'},


        series: {type: Array, default: (): IDataSet[] => []},
        title: {type: String, default: ''},
        subtitle: {type: String, default: ''},
    },
    data(): ILktObject {
        return {
            chart: undefined,
            options: undefined,
        }
    },
    computed: {
        containerStyle() {
            let r = [];

            r.push(`height: ${this.height}px`);

            return r.join(';');
        },
        sizing() {
            let r: ILktObject = {};
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

        this.options = new Chart()
            .setSeries([
                {
                    name: 'sales',
                    type: 'bar',
                    data: [
                        {value: 55},
                        {value: 20},
                        {value: -36, itemStyle: {color: 'red'}},
                        {value: 10},
                        {value: 10},
                        {value: 20},
                    ]
                }
            ])
            .setAxisX({
                data: ['a', 'b', 'c', 'd', 'e', 'f']
            })
            .setTitle({text: 'Test tester'})
            .setTooltip({trigger: "item", triggerOn: "mousemove"})
        ;

        // initialize the echarts instance
        this.chart = echarts.init(this.$refs.container);

        // Draw the chart
        this.chart.setOption(this.options);
    }
}
</script>