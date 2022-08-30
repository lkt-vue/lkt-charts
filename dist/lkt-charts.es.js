import * as r from "d3";
import { openBlock as y, createElementBlock as f } from "vue";
const d = (e, t) => t, g = (e) => e;
class u {
  constructor(t, {
    title: a = void 0
  } = {}) {
    this.x = d, this.y = g, this.title = "", this.marginTop = 20, this.marginRight = 0, this.marginBottom = 30, this.marginLeft = 40, this.width = 640, this.height = 400, this.xDomain = void 0, this.xRange = [40, this.width - this.marginRight], this.yType = r.scaleLinear, this.yDomain = void 0, this.yRange = [this.height - this.marginBottom, this.marginTop], this.xPadding = 0.1, this.yFormat = "", this.yLabel = "", this.color = "currentColor", this.X = void 0, this.Y = void 0, this.I = void 0, this.xScale = void 0, this.yScale = void 0, this.xAxis = void 0, this.yAxis = void 0, this.data = [], this.data = t, this.title = a;
  }
  setSizing(t) {
    return t.width && (this.width = t.width), t.height && (this.height = t.height), t.marginRight && (this.marginRight = t.marginRight), t.marginTop && (this.marginTop = t.marginTop), t.marginBottom && (this.marginBottom = t.marginBottom), t.marginLeft && (this.marginLeft = t.marginLeft), t.yRange && (this.yRange = t.yRange), t.xPadding && (this.xPadding = t.xPadding), t.xRange ? this.xRange = t.xRange : this.xRange = [this.marginLeft, this.width - this.marginRight], t.yRange ? this.xRange = t.xRange : this.yRange = [this.height - this.marginBottom, this.marginTop], this;
  }
  setAxisYScaleLinear() {
    return this.yType = r.scaleLinear, this;
  }
  setAxisY(t) {
    return t.y && (this.y = t.y), t.yType && (this.yType = t.yType), t.yDomain && (this.yDomain = t.yDomain), t.yFormat && (this.yFormat = t.yFormat), t.yLabel && (this.yLabel = t.yLabel), this;
  }
  setAxisX(t) {
    return t.x && (this.x = t.x), t.xDomain && (this.xDomain = t.xDomain), this;
  }
  setColor(t) {
    return t.color && (this.color = t.color), this;
  }
  prepare() {
    const t = r.map(this.data, this.x), a = r.map(this.data, this.y);
    this.X = t, this.Y = a, this.xDomain === void 0 && (this.xDomain = this.X), this.yDomain === void 0 && (this.yDomain = [0, r.max(this.Y)]), this.xDomain = new r.InternSet(this.xDomain), this.I = r.range(t.length).filter((s) => this.xDomain.has(this.X[s]));
    const i = r.scaleBand(this.xDomain, this.xRange).padding(this.xPadding), h = this.yType(this.yDomain, this.yRange), l = r.axisBottom(i).tickSizeOuter(0), m = r.axisLeft(h).ticks(this.height / 40, this.yFormat);
    if (this.title === void 0) {
      const s = h.tickFormat(100, this.yFormat);
      this.title = (n) => `${this.X[n]}
${s(this.Y[n])}`;
    } else {
      const s = r.map(this.data, (o) => o), n = this.title;
      this.title = (o) => n(s[o], o, this.data);
    }
    return this.xScale = i, this.yScale = h, this.xAxis = l, this.yAxis = m, this;
  }
}
class x extends u {
  constructor(t, {
    title: a = void 0
  } = {}) {
    super(arguments[0], arguments[1]);
  }
  getSVG() {
    const t = r.create("svg").attr("width", this.width).attr("height", this.height).attr("viewBox", [0, 0, this.width, this.height]).attr("style", "max-width: 100%; height: auto; height: intrinsic;");
    t.append("g").attr("transform", `translate(${this.marginLeft},0)`).call(this.yAxis).call((i) => i.select(".domain").remove()).call((i) => i.selectAll(".tick line").clone().attr("x2", this.width - this.marginLeft - this.marginRight).attr("stroke-opacity", 0.1)).call((i) => i.append("text").attr("x", -this.marginLeft).attr("y", 10).attr("fill", "currentColor").attr("text-anchor", "start").text(this.yLabel));
    const a = t.append("g").attr("fill", this.color).selectAll("rect").data(this.I).join("rect").attr("x", (i) => this.xScale(this.X[i])).attr("y", (i) => this.yScale(this.Y[i])).attr("height", (i) => this.yScale(0) - this.yScale(this.Y[i])).attr("width", this.xScale.bandwidth());
    return this.title && a.append("title").text(this.title), t.append("g").attr("transform", `translate(0,${this.height - this.marginBottom})`).call(this.xAxis), t.node();
  }
}
const c = [
  { letter: "A", frequency: 0.08167 },
  { letter: "B", frequency: 0.01492 },
  { letter: "C", frequency: 0.02782 },
  { letter: "D", frequency: 0.04253 },
  { letter: "E", frequency: 0.12702 },
  { letter: "F", frequency: 0.02288 },
  { letter: "G", frequency: 0.02015 },
  { letter: "H", frequency: 0.06094 },
  { letter: "I", frequency: 0.06966 },
  { letter: "J", frequency: 153e-5 },
  { letter: "K", frequency: 772e-5 },
  { letter: "L", frequency: 0.04025 },
  { letter: "M", frequency: 0.02406 },
  { letter: "N", frequency: 0.06749 },
  { letter: "O", frequency: 0.07507 },
  { letter: "P", frequency: 0.01929 },
  { letter: "Q", frequency: 95e-5 },
  { letter: "R", frequency: 0.05987 },
  { letter: "S", frequency: 0.06327 },
  { letter: "T", frequency: 0.09056 },
  { letter: "U", frequency: 0.02758 },
  { letter: "V", frequency: 978e-5 },
  { letter: "W", frequency: 0.0236 },
  { letter: "X", frequency: 15e-4 },
  { letter: "Y", frequency: 0.01974 },
  { letter: "Z", frequency: 74e-5 }
], p = {
  name: "LktChartBar",
  props: {
    width: { type: Number, default: 1280 },
    height: { type: Number, default: 500 },
    marginTop: { type: Number, default: void 0 },
    marginRight: { type: Number, default: void 0 },
    marginBottom: { type: Number, default: void 0 },
    marginLeft: { type: Number, default: void 0 },
    color: { type: String, default: "steelblue" }
  },
  data() {
    return {
      chart: void 0,
      svg: void 0
    };
  },
  computed: {
    sizing() {
      let e = {};
      return this.width && (e.width = this.width), this.height && (e.height = this.height), this.marginTop && (e.marginTop = this.marginTop), this.marginRight && (e.marginRight = this.marginRight), this.marginBottom && (e.marginBottom = this.marginBottom), this.marginLeft && (e.marginLeft = this.marginLeft), e;
    }
  },
  mounted() {
    this.chart = new x(c).setAxisYScaleLinear().setAxisY({
      y: (e) => e.frequency,
      yFormat: "%",
      yLabel: "\u2191 Frequency"
    }).setAxisX({
      x: (e) => e.letter,
      xDomain: r.groupSort(c, ([e]) => -e.frequency, (e) => e.letter)
    }).setColor({
      color: this.color
    }), Object.keys(this.sizing).length > 0 && this.chart.setSizing(this.sizing), this.chart.prepare(), this.svg = this.chart.getSVG(), this.$refs.container.append(this.svg);
  }
}, v = (e, t) => {
  const a = e.__vccOpts || e;
  for (const [i, h] of t)
    a[i] = h;
  return a;
}, q = {
  "data-lkt": "chart",
  ref: "container"
};
function L(e, t, a, i, h, l) {
  return y(), f("div", q, null, 512);
}
const R = /* @__PURE__ */ v(p, [["render", L]]), w = {
  install: (e, t) => {
    e.component("lkt-chart-bar", R);
  }
};
export {
  w as default
};
