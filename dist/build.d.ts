declare function R(e: any, t?: string, s?: string): any;
declare function N(e: any, t?: {}, s?: {}): f;
declare function J(e: any, t?: undefined, s?: undefined): f;
declare namespace G {
    function install(e: any, t: any): void;
}
declare function V(e: any, t?: undefined, s?: undefined): any;
declare class f {
    series: any[];
    setSeries(t: any): this;
    setAxisX(t: any): this;
    xAxis: any;
    setAxisY(t: any): this;
    yAxis: any;
    setTitle(t: any): this;
    title: any;
    setGrid(t: any): this;
    grid: any;
    setTooltip(t: any): this;
    tooltip: any;
}
export { R as addBasicTooltip, N as createBarChart, J as createSankeyChart, G as default, V as setChartTitle };
