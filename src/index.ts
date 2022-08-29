/* eslint-disable import/prefer-default-export */
import LktChartBar from "./lib-components/LktChartBar.vue";
import {App} from "vue";

const LktCharts = {
    install: (app: App, options: any) => {
        app.component('lkt-chart-bar', LktChartBar);
    },
};

export default LktCharts;