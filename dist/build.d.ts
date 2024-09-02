declare function W(t: any, e?: string, r?: string): any;
declare function P(t: any, e?: {}, r?: {}): _;
declare function Q(t: any, e?: undefined, r?: undefined): _;
declare namespace Z {
    function install(t: any, e: any): void;
}
declare function Y(t: any): void;
declare function X(t: any, e?: undefined, r?: undefined): any;
declare class _ {
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
export { W as addBasicTooltip, P as createBarChart, Q as createSankeyChart, Z as default, Y as setChartEmptySlot, X as setChartTitle };
