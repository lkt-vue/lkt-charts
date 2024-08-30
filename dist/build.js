import { defineComponent as y, ref as u, computed as k, onMounted as _, onUnmounted as g, watch as d, resolveComponent as A, openBlock as p, createElementBlock as b, createBlock as S, createCommentVNode as C, withDirectives as O, createElementVNode as j, normalizeStyle as x, vShow as w } from "vue";
import * as f from "echarts";
import { httpCall as z } from "lkt-http-client";
const D = { class: "lkt-chart" }, L = { name: "LktChart", inheritAttrs: !1 }, N = /* @__PURE__ */ y({
  ...L,
  props: {
    height: { default: 500 },
    resource: { default: "" },
    resourceData: { default: void 0 },
    title: { default: "" },
    subtitle: { default: "" },
    axisX: { default: void 0 },
    series: {},
    options: { default: null }
  },
  setup(t) {
    const e = t, r = u(void 0), s = u(null), i = u(!1), m = k(() => {
      let o = [];
      return o.push(`height: ${e.height}px`), o.join(";");
    }), h = () => {
      r.value && r.value.resize && r.value.resize();
    }, a = async () => {
      let o = f.init(s.value);
      i.value = !0;
      try {
        const n = await z(e.resource, e.resourceData);
        let l = JSON.parse(JSON.stringify(e.options));
        l = { ...l, ...n.data }, o.setOption(l), r.value = o, i.value = !1;
      } catch {
        i.value = !1;
      }
    }, c = () => {
      let o = f.init(s.value), n = JSON.parse(JSON.stringify(e.options));
      o.setOption(n), r.value = o;
    };
    return _(() => {
      e.resource ? a() : c(), addEventListener("resize", h);
    }), g(() => {
      removeEventListener("resize", h);
    }), d(() => e.options, () => {
      e.resource ? a() : c();
    }, { deep: !0 }), d(() => e.resourceData, () => {
      e.resource ? a() : c();
    }, { deep: !0 }), (o, n) => {
      const l = A("lkt-loader");
      return p(), b("div", D, [
        i.value ? (p(), S(l, { key: 0 })) : C("", !0),
        O(j("div", {
          class: "lkt-chart-content",
          ref_key: "container",
          ref: s,
          style: x(m.value)
        }, null, 4), [
          [w, !i.value]
        ])
      ]);
    };
  }
});
class v {
  constructor() {
    this.series = [];
  }
  setSeries(e) {
    return this.series = e, this;
  }
  setAxisX(e) {
    return this.xAxis = e, this;
  }
  setAxisY(e) {
    return this.yAxis = e, this;
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
const E = (t, e = {}, r = {}) => {
  const s = new v();
  return Array.isArray(t) && t.length > 0 && s.setSeries(t), typeof e == "object" && Object.keys(e).length > 0 && s.setAxisX(e), typeof r == "object" && Object.keys(r).length > 0 && s.setAxisY(r), s;
}, J = (t, e = void 0, r = void 0) => {
  const s = new v();
  return Array.isArray(t) && t.length > 0 && s.setSeries(t), typeof e == "object" && Object.keys(e).length > 0 && s.setAxisX(e), typeof r == "object" && Object.keys(r).length > 0 && s.setAxisY(r), s;
}, R = (t, e = "item", r = "mousemove") => (t.setTooltip({ trigger: e, triggerOn: r }), t), V = (t, e = void 0, r = void 0) => (t.setTitle({ text: e, subtext: r }), t), G = {
  install: (t, e) => {
    t.component("lkt-chart", N);
  }
};
export {
  R as addBasicTooltip,
  E as createBarChart,
  J as createSankeyChart,
  G as default,
  V as setChartTitle
};
