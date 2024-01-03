import { Title } from "../interfaces/Title";
import { AxisX } from "../interfaces/AxisX";
import { DataSet } from "../interfaces/DataSet";
import { Chart } from "../instances/Chart";
declare const _default: {
    new (...args: any[]): import("vue").CreateComponentPublicInstance<Readonly<import("vue").ExtractPropTypes<{
        height: {
            type: NumberConstructor;
            default: number;
        };
        resource: {
            type: StringConstructor;
            required: false;
        };
        resourceData: {
            type: ObjectConstructor;
            required: false;
            default: () => {};
        };
        title: {
            type: ObjectConstructor;
            default: () => Title;
        };
        subtitle: {
            type: StringConstructor;
            default: string;
        };
        axisX: {
            type: ObjectConstructor;
            default: () => AxisX;
        };
        series: {
            type: ArrayConstructor;
            default: () => DataSet[];
        };
        options: {
            type: typeof Chart;
            default: () => Chart;
        };
    }>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
        height: {
            type: NumberConstructor;
            default: number;
        };
        resource: {
            type: StringConstructor;
            required: false;
        };
        resourceData: {
            type: ObjectConstructor;
            required: false;
            default: () => {};
        };
        title: {
            type: ObjectConstructor;
            default: () => Title;
        };
        subtitle: {
            type: StringConstructor;
            default: string;
        };
        axisX: {
            type: ObjectConstructor;
            default: () => AxisX;
        };
        series: {
            type: ArrayConstructor;
            default: () => DataSet[];
        };
        options: {
            type: typeof Chart;
            default: () => Chart;
        };
    }>>, {
        height: number;
        title: Record<string, any>;
        options: Chart;
        series: unknown[];
        resourceData: Record<string, any>;
        subtitle: string;
        axisX: Record<string, any>;
    }, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        height: {
            type: NumberConstructor;
            default: number;
        };
        resource: {
            type: StringConstructor;
            required: false;
        };
        resourceData: {
            type: ObjectConstructor;
            required: false;
            default: () => {};
        };
        title: {
            type: ObjectConstructor;
            default: () => Title;
        };
        subtitle: {
            type: StringConstructor;
            default: string;
        };
        axisX: {
            type: ObjectConstructor;
            default: () => AxisX;
        };
        series: {
            type: ArrayConstructor;
            default: () => DataSet[];
        };
        options: {
            type: typeof Chart;
            default: () => Chart;
        };
    }>>, {}, {}, {}, {}, {
        height: number;
        title: Record<string, any>;
        options: Chart;
        series: unknown[];
        resourceData: Record<string, any>;
        subtitle: string;
        axisX: Record<string, any>;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    height: {
        type: NumberConstructor;
        default: number;
    };
    resource: {
        type: StringConstructor;
        required: false;
    };
    resourceData: {
        type: ObjectConstructor;
        required: false;
        default: () => {};
    };
    title: {
        type: ObjectConstructor;
        default: () => Title;
    };
    subtitle: {
        type: StringConstructor;
        default: string;
    };
    axisX: {
        type: ObjectConstructor;
        default: () => AxisX;
    };
    series: {
        type: ArrayConstructor;
        default: () => DataSet[];
    };
    options: {
        type: typeof Chart;
        default: () => Chart;
    };
}>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    height: number;
    title: Record<string, any>;
    options: Chart;
    series: unknown[];
    resourceData: Record<string, any>;
    subtitle: string;
    axisX: Record<string, any>;
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {};
});
export default _default;
