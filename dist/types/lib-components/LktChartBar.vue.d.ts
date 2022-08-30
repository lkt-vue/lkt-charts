import { IChartSizing } from "../types/IChartSizing";
import { ILktObject } from "lkt-tools";
declare const _default: {
    name: string;
    props: {
        width: {
            type: NumberConstructor;
            default: number;
        };
        height: {
            type: NumberConstructor;
            default: number;
        };
        marginTop: {
            type: NumberConstructor;
            default: any;
        };
        marginRight: {
            type: NumberConstructor;
            default: any;
        };
        marginBottom: {
            type: NumberConstructor;
            default: any;
        };
        marginLeft: {
            type: NumberConstructor;
            default: any;
        };
        color: {
            type: StringConstructor;
            default: string;
        };
    };
    data(): ILktObject;
    computed: {
        sizing(): IChartSizing;
    };
    mounted(): void;
};
export default _default;
