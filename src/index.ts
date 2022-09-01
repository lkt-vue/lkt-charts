/* eslint-disable import/prefer-default-export */
import LktChart from "./lib-components/LktChart.vue";
import {App} from "vue";

export {createBarChart, createSankeyChart, addBasicTooltip, setChartTitle} from "./functions/functions";

const LktCharts = {
    install: (app: App, options: any) => {
        app.component('lkt-chart', LktChart);
    },
};

export default LktCharts;