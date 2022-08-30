export interface ITooltip {
    trigger?: 'item' | 'axis';
    triggerOn?: 'mousemove';
    axisPointer?: {
        type?: 'shadow';
    };
    formatter?: Function;
}
