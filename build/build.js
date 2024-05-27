import { defineComponent as m, ref as a, computed as y, onMounted as k, onUnmounted as _, watch as g, resolveComponent as A, openBlock as d, createElementBlock as b, createBlock as S, createCommentVNode as C, withDirectives as O, createElementVNode as j, normalizeStyle as x, vShow as w } from "vue";
import * as p from "echarts";
import { httpCall as z } from "lkt-http-client";
const L = { class: "lkt-chart" }, N = { name: "LktChart", inheritAttrs: !1 }, T = /* @__PURE__ */ m({
  ...N,
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
  setup(e) {
    const t = e, s = a(void 0), r = a(null), i = a(!1), v = y(() => {
      let o = [];
      return o.push(`height: ${t.height}px`), o.join(";");
    }), c = () => {
      s.value && s.value.resize && s.value.resize();
    }, u = async () => {
      let o = p.init(r.value);
      i.value = !0;
      try {
        const n = await z(t.resource, t.resourceData);
        let l = JSON.parse(JSON.stringify(t.options));
        l = { ...l, ...n.data }, o.setOption(l), s.value = o, i.value = !1;
      } catch {
        i.value = !1;
      }
    }, h = () => {
      let o = p.init(r.value), n = JSON.parse(JSON.stringify(t.options));
      o.setOption(n), s.value = o;
    };
    return k(() => {
      t.resource ? u() : h(), addEventListener("resize", c);
    }), _(() => {
      removeEventListener("resize", c);
    }), g(() => t.options, () => {
      t.resource ? u() : h();
    }, { deep: !0 }), (o, n) => {
      const l = A("lkt-loader");
      return d(), b("div", L, [
        i.value ? (d(), S(l, { key: 0 })) : C("", !0),
        O(j("div", {
          class: "lkt-chart-content",
          ref_key: "container",
          ref: r,
          style: x(v.value)
        }, null, 4), [
          [w, !i.value]
        ])
      ]);
    };
  }
});
class f {
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
const E = (e, t = {}, s = {}) => {
  const r = new f();
  return Array.isArray(e) && e.length > 0 && r.setSeries(e), typeof t == "object" && Object.keys(t).length > 0 && r.setAxisX(t), typeof s == "object" && Object.keys(s).length > 0 && r.setAxisY(s), r;
}, J = (e, t = void 0, s = void 0) => {
  const r = new f();
  return Array.isArray(e) && e.length > 0 && r.setSeries(e), typeof t == "object" && Object.keys(t).length > 0 && r.setAxisX(t), typeof s == "object" && Object.keys(s).length > 0 && r.setAxisY(s), r;
}, R = (e, t = "item", s = "mousemove") => (e.setTooltip({ trigger: t, triggerOn: s }), e), V = (e, t = void 0, s = void 0) => (e.setTitle({ text: t, subtext: s }), e), G = {
  install: (e, t) => {
    e.component("lkt-chart", T);
  }
};
export {
  R as addBasicTooltip,
  E as createBarChart,
  J as createSankeyChart,
  G as default,
  V as setChartTitle
};
