declare function R(t: any, e?: string, r?: string): any;
declare function E(t: any, e?: {}, r?: {}): v;
declare function J(t: any, e?: undefined, r?: undefined): v;
declare namespace G {
    function install(t: any, e: any): void;
}
declare function V(t: any, e?: undefined, r?: undefined): any;
declare class v {
    series: any[];
    setSeries(e: any): this;
    setAxisX(e: any): this;
    xAxis: any;
    setAxisY(e: any): this;
    yAxis: any;
    setTitle(e: any): this;
    title: any;
    setGrid(e: any): this;
    grid: any;
    setTooltip(e: any): this;
    tooltip: any;
}
export { R as addBasicTooltip, E as createBarChart, J as createSankeyChart, G as default, V as setChartTitle };
