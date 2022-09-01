import { ILktObject } from "lkt-tools";
import { IDataSet } from "../types/IDataSet";
import { IAxisX } from "../types/IAxisX";
import { ITitle } from "../types/ITitle";
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
