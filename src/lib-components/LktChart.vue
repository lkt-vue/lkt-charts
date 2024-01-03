<script lang="ts">
export default {name: 'LktChart', inheritAttrs: false};
</script>

<script setup lang="ts">
import {computed, onMounted, onUnmounted, ref} from "vue";
import {Title} from "../interfaces/Title";
import {AxisX} from "../interfaces/AxisX";
import {DataSet} from "../interfaces/DataSet";
import {Chart} from "../instances/Chart";
import * as echarts from "echarts";
import {httpCall, HTTPResponse} from "lkt-http-client";

const props = defineProps({
    height: {type: Number, default: 500},
    resource: {type: String, required: false},
    resourceData: {type: Object, required: false, default: () => ({})},

    title: {type: Object, default: (): Title => ({})},
    subtitle: {type: String, default: ''},

    axisX: {type: Object, default: (): AxisX => ({})},
    series: {type: Array, default: (): DataSet[] => []},
    options: {type: Chart, default: (): Chart => null}
});

const chart = ref(undefined),
    container = ref(null),
    isLoading = ref(false);

const containerStyle = computed(() => {
    let r = [];
    r.push(`height: ${props.height}px`);
    return r.join(';');
});

const onResize = () => {
    if (chart.value && chart.value.resize) {
        chart.value.resize();
    }
}

const buildResourceData = async () => {
    let _chart = echarts.init(container.value);
    isLoading.value = true;

    try {
        const r = await httpCall(props.resource, props.resourceData);
        let opts = JSON.parse(JSON.stringify(props.options));
        opts = {...opts, ...r.data};

        //@ts-ignore
        _chart.setOption(opts);

        chart.value = _chart;
        isLoading.value = false;
    } catch (r_1) {
        isLoading.value = false;
    }
}

const buildLocalData = () => {
    let _chart = echarts.init(container.value);
    //@ts-ignore
    _chart.setOption(r.data);

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

</script>

<template>
    <div class="lkt-chart">
        <lkt-loader v-if="isLoading"></lkt-loader>
        <div v-show="!isLoading" class="lkt-chart-content" ref="container" v-bind:style="containerStyle"></div>
    </div>
</template>