import { ILktObject } from "lkt-tools";
import { Chart } from "../instances/Chart";
import { IDataSet } from "../interfaces/IDataSet";
import { IAxisX } from "../interfaces/IAxisX";
import { ITitle } from "../interfaces/ITitle";
declare const _default: {
    name: string;
    props: {
        height: {
            type: NumberConstructor;
            default: number;
        };
        color: {
            type: StringConstructor;
            default: string;
        };
        title: {
            type: ObjectConstructor;
            default: () => ITitle;
        };
        axisX: {
            type: ObjectConstructor;
            default: () => IAxisX;
        };
        series: {
            type: ArrayConstructor;
            default: () => IDataSet[];
        };
        subtitle: {
            type: StringConstructor;
            default: string;
        };
        options: {
            type: typeof Chart;
            default: () => Chart;
        };
    };
    data(): ILktObject;
    computed: {
        containerStyle(): string;
    };
    methods: {
        onResize(): void;
    };
    mounted(): void;
    unmounted(): void;
};
export default _default;
