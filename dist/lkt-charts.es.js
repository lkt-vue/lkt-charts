var k = Object.defineProperty;
var _ = (e, t, s) => t in e ? k(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : e[t] = s;
var n = (e, t, s) => (_(e, typeof t != "symbol" ? t + "" : t, s), s);
import { defineComponent as b, ref as u, computed as A, onMounted as g, onUnmounted as j, resolveComponent as C, openBlock as d, createElementBlock as O, createBlock as S, createCommentVNode as x, withDirectives as z, createElementVNode as L, normalizeStyle as T, vShow as w } from "vue";
import * as f from "echarts";
import { httpCall as B } from "lkt-http-client";
class h {
  constructor() {
    n(this, "title");
    n(this, "xAxis");
    n(this, "yAxis");
    n(this, "series", []);
    n(this, "tooltip");
    n(this, "grid");
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
const D = { class: "lkt-chart" }, N = { name: "LktChart", inheritAttrs: !1 }, E = /* @__PURE__ */ b({
  ...N,
  props: {
    height: { type: Number, default: 500 },
    resource: { type: String, required: !1 },
    resourceData: { type: Object, required: !1, default: () => ({}) },
    title: { type: Object, default: () => ({}) },
    subtitle: { type: String, default: "" },
    axisX: { type: Object, default: () => ({}) },
    series: { type: Array, default: () => [] },
    options: {
      type: h,
      default: () => null
    }
  },
  setup(e) {
    const t = e, s = u(void 0), o = u(null), l = u(!1), y = A(() => {
      let i = [];
      return i.push(`height: ${t.height}px`), i.join(";");
    }), p = () => {
      s.value && s.value.resize && s.value.resize();
    }, v = async () => {
      let i = f.init(o.value);
      l.value = !0;
      try {
        const c = await B(t.resource, t.resourceData);
        let a = JSON.parse(JSON.stringify(t.options));
        a = { ...a, ...c.data }, i.setOption(a), s.value = i, l.value = !1;
      } catch {
        l.value = !1;
      }
    }, m = () => {
      let i = f.init(o.value);
      i.setOption(r.data), s.value = i;
    };
    return g(() => {
      t.resource ? v() : m(), addEventListener("resize", p);
    }), j(() => {
      removeEventListener("resize", p);
    }), (i, c) => {
      const a = C("lkt-loader");
      return d(), O("div", D, [
        l.value ? (d(), S(a, { key: 0 })) : x("", !0),
        z(L("div", {
          class: "lkt-chart-content",
          ref_key: "container",
          ref: o,
          style: T(y.value)
        }, null, 4), [
          [w, !l.value]
        ])
      ]);
    };
  }
}), V = (e, t = {}, s = {}) => {
  const o = new h();
  return Array.isArray(e) && e.length > 0 && o.setSeries(e), typeof t == "object" && Object.keys(t).length > 0 && o.setAxisX(t), typeof s == "object" && Object.keys(s).length > 0 && o.setAxisY(s), o;
}, G = (e, t = void 0, s = void 0) => {
  const o = new h();
  return Array.isArray(e) && e.length > 0 && o.setSeries(e), typeof t == "object" && Object.keys(t).length > 0 && o.setAxisX(t), typeof s == "object" && Object.keys(s).length > 0 && o.setAxisY(s), o;
}, M = (e, t = "item", s = "mousemove") => (e.setTooltip({ trigger: t, triggerOn: s }), e), U = (e, t = void 0, s = void 0) => (e.setTitle({ text: t, subtext: s }), e);
const $ = {
  install: (e, t) => {
    e.component("lkt-chart", E);
  }
};
export {
  M as addBasicTooltip,
  V as createBarChart,
  G as createSankeyChart,
  $ as default,
  U as setChartTitle
};
