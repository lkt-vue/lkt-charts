import * as o from "echarts";
import { openBlock as h, createElementBlock as a, createElementVNode as c, normalizeStyle as l } from "vue";
class u {
  constructor() {
    this.series = [];
  }
  setSeries(t) {
    return this.series = t, this;
  }
  setAxisX(t) {
    return this.xAxis = t, this;
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
const p = {
  name: "LktChartBar",
  props: {
    height: { type: Number, default: 500 },
    color: { type: String, default: "steelblue" },
    title: { type: Object, default: () => ({}) },
    axisX: { type: Object, default: () => ({}) },
    series: { type: Array, default: () => [] },
    subtitle: { type: String, default: "" }
  },
  data() {
    return {
      chart: void 0,
      options: void 0,
      resizeTimeout: void 0
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
    let e = new u().setTooltip({ trigger: "item", triggerOn: "mousemove" });
    this.series.length > 0 && e.setSeries(this.series), Object.keys(this.axisX).length > 0 && e.setAxisX(this.axisX), Object.keys(this.title).length > 0 && e.setTitle(this.title), this.options = e, this.$nextTick(() => {
      let t = o.init(this.$refs.container);
      t.setOption(this.options), this.chart = t, addEventListener("resize", this.onResize);
    });
  },
  unmounted() {
    removeEventListener("resize", this.onResize);
  }
}, d = (e, t) => {
  const i = e.__vccOpts || e;
  for (const [s, r] of t)
    i[s] = r;
  return i;
}, f = { "data-lkt": "chart" };
function m(e, t, i, s, r, n) {
  return h(), a("div", f, [
    c("div", {
      "data-lkt": "chart-content",
      ref: "container",
      style: l(n.containerStyle)
    }, null, 4)
  ]);
}
const g = /* @__PURE__ */ d(p, [["render", m]]), k = {
  install: (e, t) => {
    e.component("lkt-chart-bar", g);
  }
};
export {
  k as default
};
