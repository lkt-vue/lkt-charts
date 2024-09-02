import { defineComponent as j, useSlots as E, ref as c, computed as y, onMounted as O, onUnmounted as x, watch as S, resolveComponent as D, openBlock as u, createElementBlock as f, createBlock as g, createCommentVNode as m, unref as N, renderSlot as w, resolveDynamicComponent as z, Fragment as L, createTextVNode as B, toDisplayString as J, withDirectives as V, createElementVNode as R, normalizeStyle as $, vShow as F } from "vue";
import * as A from "echarts";
import { httpCall as G } from "lkt-http-client";
const v = {
  defaultEmptySlot: void 0
}, M = { class: "lkt-chart" }, U = {
  key: 1,
  class: "lkt-chart-empty"
}, q = { name: "LktChart", inheritAttrs: !1 }, H = /* @__PURE__ */ j({
  ...q,
  props: {
    height: { default: 500 },
    resource: { default: "" },
    resourceData: { default: void 0 },
    title: { default: "" },
    subtitle: { default: "" },
    axisX: { default: void 0 },
    series: {},
    options: { default: null },
    emptyText: { default: "" }
  },
  setup(t) {
    const e = t, r = E(), s = c(void 0), p = c(null), i = c(!1), l = c(!1), b = y(() => {
      let o = [];
      return o.push(`height: ${e.height}px`), o.join(";");
    }), k = () => {
      s.value && s.value.resize && s.value.resize();
    }, d = async () => {
      let o = A.init(p.value);
      i.value = !0, l.value = !1;
      try {
        const n = await G(e.resource, e.resourceData);
        let a = JSON.parse(JSON.stringify(e.options));
        a = { ...a, ...n.data }, (Array.isArray(a.series) && a.series.length === 0 || !Array.isArray(a.series) && typeof a.series == "object" && (!Array.isArray(a.series.data) || a.series.data.length === 0)) && (l.value = !0), o.setOption(a), s.value = o, i.value = !1;
      } catch {
        i.value = !1;
      }
    }, h = () => {
      let o = A.init(p.value), n = JSON.parse(JSON.stringify(e.options));
      o.setOption(n), s.value = o;
    };
    O(() => {
      e.resource ? d() : h(), addEventListener("resize", k);
    }), x(() => {
      removeEventListener("resize", k);
    }), S(() => e.options, () => {
      e.resource ? d() : h();
    }, { deep: !0 }), S(() => e.resourceData, () => {
      e.resource ? d() : h();
    }, { deep: !0 });
    const C = y(() => typeof v.defaultEmptySlot < "u"), T = y(() => v.defaultEmptySlot);
    return (o, n) => {
      const a = D("lkt-loader");
      return u(), f("div", M, [
        i.value ? (u(), g(a, { key: 0 })) : m("", !0),
        l.value ? (u(), f("div", U, [
          N(r).empty ? w(o.$slots, "empty", { key: 0 }) : C.value ? (u(), g(z(T.value), {
            key: 1,
            message: o.emptyText
          }, null, 8, ["message"])) : o.emptyText ? (u(), f(L, { key: 2 }, [
            B(J(o.emptyText), 1)
          ], 64)) : m("", !0)
        ])) : m("", !0),
        V(R("div", {
          class: "lkt-chart-content",
          ref_key: "container",
          ref: p,
          style: $(b.value)
        }, null, 4), [
          [F, !i.value && !l.value]
        ])
      ]);
    };
  }
});
class _ {
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
const P = (t, e = {}, r = {}) => {
  const s = new _();
  return Array.isArray(t) && t.length > 0 && s.setSeries(t), typeof e == "object" && Object.keys(e).length > 0 && s.setAxisX(e), typeof r == "object" && Object.keys(r).length > 0 && s.setAxisY(r), s;
}, Q = (t, e = void 0, r = void 0) => {
  const s = new _();
  return Array.isArray(t) && t.length > 0 && s.setSeries(t), typeof e == "object" && Object.keys(e).length > 0 && s.setAxisX(e), typeof r == "object" && Object.keys(r).length > 0 && s.setAxisY(r), s;
}, W = (t, e = "item", r = "mousemove") => (t.setTooltip({ trigger: e, triggerOn: r }), t), X = (t, e = void 0, r = void 0) => (t.setTitle({ text: e, subtext: r }), t), Z = {
  install: (t, e) => {
    t.component("lkt-chart", H);
  }
}, Y = (t) => {
  v.defaultEmptySlot = t;
};
export {
  W as addBasicTooltip,
  P as createBarChart,
  Q as createSankeyChart,
  Z as default,
  Y as setChartEmptySlot,
  X as setChartTitle
};
