import { AxisX } from "../interfaces/AxisX";
import { DataSet } from "../interfaces/DataSet";
import { Chart } from "../instances/Chart";
import { LktObject } from "lkt-ts-interfaces";
declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    height?: number | undefined;
    resource?: string | undefined;
    resourceData?: LktObject | undefined;
    title?: string | undefined;
    subtitle?: string | undefined;
    axisX?: AxisX | undefined;
    series?: DataSet[] | undefined;
    options?: Chart | null | undefined;
}>, {
    height: number;
    resource: string;
    resourceData: undefined;
    title: string;
    subtitle: string;
    axisX: undefined;
    options: null;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    height?: number | undefined;
    resource?: string | undefined;
    resourceData?: LktObject | undefined;
    title?: string | undefined;
    subtitle?: string | undefined;
    axisX?: AxisX | undefined;
    series?: DataSet[] | undefined;
    options?: Chart | null | undefined;
}>, {
    height: number;
    resource: string;
    resourceData: undefined;
    title: string;
    subtitle: string;
    axisX: undefined;
    options: null;
}>>>, {
    height: number;
    title: string;
    options: Chart | null;
    resource: string;
    resourceData: LktObject;
    subtitle: string;
    axisX: AxisX;
}, {}>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
