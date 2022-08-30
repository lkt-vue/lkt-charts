import { ILktObject } from "lkt-tools";
import { IDataSet } from "../types/IDataSet";
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
        series: {
            type: ArrayConstructor;
            default: () => IDataSet[];
        };
        title: {
            type: StringConstructor;
            default: string;
        };
        subtitle: {
            type: StringConstructor;
            default: string;
        };
    };
    data(): ILktObject;
    computed: {
        containerStyle(): string;
        sizing(): ILktObject;
    };
    mounted(): void;
};
export default _default;
