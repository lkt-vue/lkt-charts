import { App } from "vue";
export { createBarChart, createSankeyChart, addBasicTooltip, setChartTitle } from "./functions/functions";
declare const LktCharts: {
    install: (app: App, options: any) => void;
};
export default LktCharts;
