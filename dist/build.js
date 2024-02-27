import { defineComponent as y, ref as c, computed as k, onMounted as _, onUnmounted as A, resolveComponent as b, openBlock as h, createElementBlock as g, createBlock as C, createCommentVNode as j, withDirectives as S, createElementVNode as O, normalizeStyle as x, vShow as z } from "vue";
import * as d from "echarts";
import { httpCall as L } from "lkt-http-client";
const T = { class: "lkt-chart" }, w = { name: "LktChart", inheritAttrs: !1 }, B = /* @__PURE__ */ y({
  ...w,
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
    const t = e, s = c(void 0), o = c(null), n = c(!1), p = k(() => {
      let i = [];
      return i.push(`height: ${t.height}px`), i.join(";");
    }), u = () => {
      s.value && s.value.resize && s.value.resize();
    }, v = async () => {
      let i = d.init(o.value);
      n.value = !0;
      try {
        const l = await L(t.resource, t.resourceData);
        let a = JSON.parse(JSON.stringify(t.options));
        a = { ...a, ...l.data }, i.setOption(a), s.value = i, n.value = !1;
      } catch {
        n.value = !1;
      }
    }, m = () => {
      let i = d.init(o.value);
      i.setOption(r.data), s.value = i;
    };
    return _(() => {
      t.resource ? v() : m(), addEventListener("resize", u);
    }), A(() => {
      removeEventListener("resize", u);
    }), (i, l) => {
      const a = b("lkt-loader");
      return h(), g("div", T, [
        n.value ? (h(), C(a, { key: 0 })) : j("", !0),
        S(O("div", {
          class: "lkt-chart-content",
          ref_key: "container",
          ref: o,
          style: x(p.value)
        }, null, 4), [
          [z, !n.value]
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
const N = (e, t = {}, s = {}) => {
  const o = new f();
  return Array.isArray(e) && e.length > 0 && o.setSeries(e), typeof t == "object" && Object.keys(t).length > 0 && o.setAxisX(t), typeof s == "object" && Object.keys(s).length > 0 && o.setAxisY(s), o;
}, J = (e, t = void 0, s = void 0) => {
  const o = new f();
  return Array.isArray(e) && e.length > 0 && o.setSeries(e), typeof t == "object" && Object.keys(t).length > 0 && o.setAxisX(t), typeof s == "object" && Object.keys(s).length > 0 && o.setAxisY(s), o;
}, R = (e, t = "item", s = "mousemove") => (e.setTooltip({ trigger: t, triggerOn: s }), e), V = (e, t = void 0, s = void 0) => (e.setTitle({ text: t, subtext: s }), e), G = {
  install: (e, t) => {
    e.component("lkt-chart", B);
  }
};
export {
  R as addBasicTooltip,
  N as createBarChart,
  J as createSankeyChart,
  G as default,
  V as setChartTitle
};
