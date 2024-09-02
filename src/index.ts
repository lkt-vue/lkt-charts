/* eslint-disable import/prefer-default-export */
import LktChart from "./lib-components/LktChart.vue";
import {App, Component, Plugin} from "vue";

export {createBarChart, createSankeyChart, addBasicTooltip, setChartTitle} from "./functions/functions";

import "./../lkt-charts.css";
import {Settings} from "./settings/Settings";

const LktCharts: Plugin = {
    install: (app: App, options: any) => {
        app.component('lkt-chart', LktChart);
    },
};

export default LktCharts;


export const setChartEmptySlot = (component?: string|Component) => {
    Settings.defaultEmptySlot = component;
}