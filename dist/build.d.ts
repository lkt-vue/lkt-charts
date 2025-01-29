declare function te(t: any, e?: string, r?: string): any;
declare function Y(t: any, e?: {}, r?: {}): x;
declare function ee(t: any, e?: undefined, r?: undefined): x;
declare namespace re {
    function install(t: any, e: any): void;
}
declare function oe(t: any): void;
declare function se(t: any, e?: undefined, r?: undefined): any;
declare class x {
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
export { te as addBasicTooltip, Y as createBarChart, ee as createSankeyChart, re as default, oe as setChartEmptySlot, se as setChartTitle };
