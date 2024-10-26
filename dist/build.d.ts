declare function ee(t: any, e?: string, s?: string): any;
declare function Z(t: any, e?: {}, s?: {}): _;
declare function Y(t: any, e?: undefined, s?: undefined): _;
declare namespace se {
    function install(t: any, e: any): void;
}
declare function re(t: any): void;
declare function te(t: any, e?: undefined, s?: undefined): any;
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
export { ee as addBasicTooltip, Z as createBarChart, Y as createSankeyChart, se as default, re as setChartEmptySlot, te as setChartTitle };
