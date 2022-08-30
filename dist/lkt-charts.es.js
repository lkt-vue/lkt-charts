import * as n from "echarts";
import { openBlock as o, createElementBlock as h, createElementVNode as l, normalizeStyle as c } from "vue";
class m {
  constructor() {
    this.yAxis = {}, this.series = [];
  }
  setSeries(e) {
    return this.series = e, this;
  }
  setAxisX(e) {
    return this.xAxis = e, this;
  }
  setTitle(e) {
    return this.title = e, this;
  }
  setGrid(e) {
    return this.grid = e, this;
  }
  setTooltip(e) {
    return this.tooltip = e, this;
  }
}
const u = {
  name: "LktChartBar",
  props: {
    height: { type: Number, default: 500 },
    color: { type: String, default: "steelblue" },
    series: { type: Array, default: () => [] },
    title: { type: String, default: "" },
    subtitle: { type: String, default: "" }
  },
  data() {
    return {
      chart: void 0,
      options: void 0
    };
  },
  computed: {
    containerStyle() {
      let t = [];
      return t.push(`height: ${this.height}px`), t.join(";");
    },
    sizing() {
      let t = {};
      return this.width && (t.width = this.width), this.height && (t.height = this.height), this.marginTop && (t.marginTop = this.marginTop), this.marginRight && (t.marginRight = this.marginRight), this.marginBottom && (t.marginBottom = this.marginBottom), this.marginLeft && (t.marginLeft = this.marginLeft), t;
    }
  },
  mounted() {
    this.options = new m().setSeries([
      {
        name: "sales",
        type: "bar",
        data: [
          { value: 55 },
          { value: 20 },
          { value: -36, itemStyle: { color: "red" } },
          { value: 10 },
          { value: 10 },
          { value: 20 }
        ]
      }
    ]).setAxisX({
      data: ["a", "b", "c", "d", "e", "f"]
    }).setTitle({ text: "Test tester" }).setTooltip({ trigger: "item", triggerOn: "mousemove" }), this.chart = n.init(this.$refs.container), this.chart.setOption(this.options);
  }
}, p = (t, e) => {
  const i = t.__vccOpts || t;
  for (const [r, s] of e)
    i[r] = s;
  return i;
}, g = { "data-lkt": "chart" };
function d(t, e, i, r, s, a) {
  return o(), h("div", g, [
    l("div", {
      "data-lkt": "chart-content",
      ref: "container",
      style: c(a.containerStyle)
    }, null, 4)
  ]);
}
const f = /* @__PURE__ */ p(u, [["render", d]]), v = {
  install: (t, e) => {
    t.component("lkt-chart-bar", f);
  }
};
export {
  v as default
};
