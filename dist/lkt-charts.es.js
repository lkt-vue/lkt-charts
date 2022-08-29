import * as e from "d3";
import { openBlock as m, createElementBlock as l } from "vue";
class g {
  constructor(a) {
    this.x = (o, d) => d, this.y = (o) => o, this.title = "", this.marginTop = 20, this.marginRight = 0, this.marginBottom = 30, this.marginLeft = 40, this.width = 640, this.height = 400, this.xDomain = [], this.xRange = [40, this.width - this.marginRight], this.yType = e.scaleLinear, this.yDomain = [], this.yRange = [this.height - this.marginBottom, this.marginTop], this.xPadding = 0.1, this.yFormat = "", this.yLabel = "", this.color = "currentColor", this.mapX = void 0, this.mapY = void 0, this.I = void 0, this.xScale = void 0, this.yScale = void 0, this.xAxis = void 0, this.yAxis = void 0, this.data = [], this.data = a, this.mapX = e.map(a, this.x), this.mapY = e.map(a, this.y), this.xDomain === void 0 && (this.xDomain = this.mapX), this.yDomain === void 0 && (this.yDomain = [0, e.max(this.mapY)]), this.xDomain = new e.InternSet(this.xDomain);
    const s = e.range(this.mapX.length).filter((o) => this.xDomain.has(this.mapX[o])), i = e.scaleBand(this.xDomain, this.xRange).padding(this.xPadding), n = this.yType(this.yDomain, this.yRange), h = e.axisBottom(i).tickSizeOuter(0), r = e.axisLeft(n).ticks(this.height / 40, this.yFormat);
    this.I = s, this.xScale = i, this.yScale = n, this.xAxis = h, this.yAxis = r;
  }
}
const c = (t) => {
  const a = e.create("svg").attr("width", t.width).attr("height", t.height).attr("viewBox", [0, 0, t.width, t.height]).attr("style", "max-width: 100%; height: auto; height: intrinsic;");
  a.append("g").attr("transform", `translate(${t.marginLeft},0)`).call(t.yAxis).call((i) => i.select(".domain").remove()).call((i) => i.selectAll(".tick line").clone().attr("x2", t.width - t.marginLeft - t.marginRight).attr("stroke-opacity", 0.1)).call((i) => i.append("text").attr("x", -t.marginLeft).attr("y", 10).attr("fill", "currentColor").attr("text-anchor", "start").text(t.yLabel));
  const s = a.append("g").attr("fill", t.color).selectAll("rect").data(t.I).join("rect").attr("x", (i) => t.xScale(t.mapX(t.data)[i])).attr("y", (i) => t.yScale(t.mapY(t.data)[i])).attr("height", (i) => t.yScale(0) - t.yScale(t.mapY[i])).attr("width", t.xScale.bandwidth());
  return t.title && s.append("title").text(t.title), a.append("g").attr("transform", `translate(0,${t.height - t.marginBottom})`).call(t.xAxis), a.node();
}, p = (t, a) => {
  const s = t.__vccOpts || t;
  for (const [i, n] of a)
    s[i] = n;
  return s;
}, x = [
  { date: "24-Apr-07", amount: 93.24 },
  { date: "25-Apr-07", amount: 95.35 },
  { date: "26-Apr-07", amount: 98.84 },
  { date: "27-Apr-07", amount: 99.92 },
  { date: "30-Apr-07", amount: 99.8 },
  { date: "1-May-07", amount: 99.47 },
  { date: "2-May-07", amount: 100.39 },
  { date: "3-May-07", amount: 100.4 },
  { date: "4-May-07", amount: 100.81 },
  { date: "7-May-07", amount: 103.92 },
  { date: "8-May-07", amount: 105.06 },
  { date: "9-May-07", amount: 106.88 },
  { date: "10-May-07", amount: 107.34 }
], y = {
  name: "LktChartBar",
  data() {
    return {
      chart: void 0,
      svg: void 0
    };
  },
  mounted() {
    e.select("svg").attr("width", 800).attr("height", 500).append("g"), this.chart = new g(x), this.svg = c(this.chart), this.$refs.container.append(this.svg);
  }
}, u = {
  "data-lkt": "chart",
  ref: "container"
};
function f(t, a, s, i, n, h) {
  return m(), l("div", u, null, 512);
}
const v = /* @__PURE__ */ p(y, [["render", f]]), A = {
  install: (t, a) => {
    t.component("lkt-chart-bar", v);
  }
};
export {
  A as default
};
