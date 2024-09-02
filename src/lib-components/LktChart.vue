<script lang="ts">
export default {name: 'LktChart', inheritAttrs: false};
</script>

<script setup lang="ts">
import {computed, onMounted, onUnmounted, ref, useSlots, watch} from "vue";
import {AxisX} from "../interfaces/AxisX";
import {DataSet} from "../interfaces/DataSet";
import {Chart} from "../instances/Chart";
import * as echarts from "echarts";
import {httpCall} from "lkt-http-client";
import {LktObject} from "lkt-ts-interfaces";
import {Settings} from "../settings/Settings";

// Props
const props = withDefaults(defineProps<{
    height?: number
    resource?: string
    resourceData?: LktObject|undefined
    title?: string
    subtitle?: string
    axisX?: AxisX|undefined
    series?: DataSet[]
    options?: Chart|null
    emptyText: string
}>(), {
    height: 500,
    resource: '',
    resourceData: undefined,
    title: '',
    subtitle: '',
    axisX: undefined,
    options: null,
    emptyText: ''
});

const slots = useSlots();

const chart = ref(undefined),
    container = ref(null),
    isLoading = ref(false),
    emptyChart = ref(false);

const containerStyle = computed(() => {
    let r = [];
    r.push(`height: ${props.height}px`);
    return r.join(';');
});

const onResize = () => {
    //@ts-ignore
    if (chart.value && chart.value.resize) {
        //@ts-ignore
        chart.value.resize();
    }
}

const buildResourceData = async () => {
    let _chart = echarts.init(container.value);
    isLoading.value = true;
    emptyChart.value = false;

    try {
        const r = await httpCall(props.resource, props.resourceData);
        let opts = JSON.parse(JSON.stringify(props.options));
        opts = {...opts, ...r.data};

        if (Array.isArray(opts.series) && opts.series.length === 0) {
            emptyChart.value = true;

        } else if (!Array.isArray(opts.series) && typeof opts.series === 'object' && (!Array.isArray(opts.series.data) || opts.series.data.length === 0)) {
            emptyChart.value = true;
        }

        //@ts-ignore
        _chart.setOption(opts);
        //@ts-ignore
        chart.value = _chart;
        isLoading.value = false;
    } catch (r_1) {
        isLoading.value = false;
    }
}

const buildLocalData = () => {
    let _chart = echarts.init(container.value);
    let opts = JSON.parse(JSON.stringify(props.options));
    //@ts-ignore
    _chart.setOption(opts);
    //@ts-ignore
    chart.value = _chart;
}

onMounted(() => {
    if (props.resource) buildResourceData();
    else buildLocalData();

    addEventListener('resize', onResize);
})

onUnmounted(() => {
    removeEventListener('resize', onResize);
})

watch(() => props.options, () => {
    if (props.resource) buildResourceData();
    else buildLocalData();
}, {deep: true})

watch(() => props.resourceData, () => {
    if (props.resource) buildResourceData();
    else buildLocalData();
}, {deep: true})


const hasEmptySlot = computed(() => {
        return typeof Settings.defaultEmptySlot !== 'undefined';
    }),
    emptySlot = computed(() => {
        return Settings.defaultEmptySlot;
    });

</script>

<template>
    <div class="lkt-chart">
        <lkt-loader v-if="isLoading"/>
        <div class="lkt-chart-empty" v-if="emptyChart">
            <template v-if="slots.empty">
                <slot name="empty"/>
            </template>
            <template v-else-if="hasEmptySlot">
                <component :is="emptySlot" :message="emptyText"/>
            </template>
            <template v-else-if="emptyText">
                {{emptyText}}
            </template>
        </div>
        <div v-show="!isLoading && !emptyChart" class="lkt-chart-content" ref="container" v-bind:style="containerStyle"></div>
    </div>
</template>