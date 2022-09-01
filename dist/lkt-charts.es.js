import * as l from "echarts";
import { openBlock as a, createElementBlock as u, createElementVNode as d, normalizeStyle as p } from "vue";
import { isArray as h, isObject as i } from "lkt-tools";
class n {
  constructor() {
    this.series = [];
  }
  setSeries(t) {
    return this.series = t, this;
  }
  setAxisX(t) {
    return this.xAxis = t, this;
  }
  setAxisY(t) {
    return this.yAxis = t, this;
  }
  setTitle(t) {
    return this.title = t, this;
  }
  setGrid(t) {
    return this.grid = t, this;
  }
  setTooltip(t) {
    return this.tooltip = t, this;
  }
}
const f = {
  name: "LktChart",
  props: {
    height: { type: Number, default: 500 },
    color: { type: String, default: "steelblue" },
    title: { type: Object, default: () => ({}) },
    axisX: { type: Object, default: () => ({}) },
    series: { type: Array, default: () => [] },
    subtitle: { type: String, default: "" },
    options: { type: n, default: () => null }
  },
  data() {
    return {
      chart: void 0,
      opts: void 0
    };
  },
  computed: {
    containerStyle() {
      let e = [];
      return e.push(`height: ${this.height}px`), e.join(";");
    }
  },
  methods: {
    onResize() {
      this.chart && this.chart.resize && this.chart.resize();
    }
  },
  mounted() {
    this.$nextTick(() => {
      let e = l.init(this.$refs.container);
      e.setOption(this.options), this.chart = e, addEventListener("resize", this.onResize);
    });
  },
  unmounted() {
    removeEventListener("resize", this.onResize);
  }
}, m = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [s, o] of t)
    r[s] = o;
  return r;
}, y = { "data-lkt": "chart" };
function k(e, t, r, s, o, c) {
  return a(), u("div", y, [
    d("div", {
      "data-lkt": "chart-content",
      ref: "container",
      style: p(c.containerStyle)
    }, null, 4)
  ]);
}
const v = /* @__PURE__ */ m(f, [["render", k]]), b = (e, t = {}, r = {}) => {
  let s = new n();
  return h(e) && e.length > 0 && s.setSeries(e), i(t) && Object.keys(t).length > 0 && s.setAxisX(t), i(r) && Object.keys(r).length > 0 && s.setAxisY(r), s;
}, A = (e, t = void 0, r = void 0) => {
  let s = new n();
  return h(e) && e.length > 0 && s.setSeries(e), i(t) && Object.keys(t).length > 0 && s.setAxisX(t), i(r) && Object.keys(r).length > 0 && s.setAxisY(r), s;
}, x = (e, t = "item", r = "mousemove") => (e.setTooltip({ trigger: t, triggerOn: r }), e), O = (e, t = void 0, r = void 0) => (e.setTitle({ text: t, subtext: r }), e), S = {
  install: (e, t) => {
    e.component("lkt-chart", v);
  }
};
export {
  x as addBasicTooltip,
  b as createBarChart,
  A as createSankeyChart,
  S as default,
  O as setChartTitle
};
