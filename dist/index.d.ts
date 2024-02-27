import { Plugin } from "vue";
export { createBarChart, createSankeyChart, addBasicTooltip, setChartTitle } from "./functions/functions";
import "./../lkt-charts.css";
declare const LktCharts: Plugin;
export default LktCharts;
