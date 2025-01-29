import { defineComponent as w, useSlots as z, ref as p, computed as m, onMounted as B, onUnmounted as L, watch as A, resolveComponent as J, openBlock as c, createElementBlock as v, createBlock as b, createCommentVNode as k, unref as C, renderSlot as M, resolveDynamicComponent as V, Fragment as R, createTextVNode as F, toDisplayString as G, withDirectives as I, createElementVNode as T, normalizeStyle as U, setBlockTracking as O, vShow as $, nextTick as q } from "vue";
import * as j from "echarts";
import { httpCall as H } from "lkt-http-client";
const g = {
  defaultEmptySlot: void 0
};
function K(t = 10) {
  let e = "";
  const r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", s = r.length;
  for (let d = 0; d < t; d++)
    e += r.charAt(Math.floor(Math.random() * s));
  return e;
}
const P = { class: "lkt-chart" }, Q = {
  key: 1,
  class: "lkt-chart-empty"
}, W = /* @__PURE__ */ w({
  __name: "LktChart",
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
  emits: [
    "results"
  ],
  setup(t, { emit: e }) {
    const r = e, s = t, d = K(12), E = z(), l = p(void 0), f = p(null), a = p(!1), u = p(!1), _ = m(() => {
      let o = [];
      return o.push(`height: ${s.height}px`), o.join(";");
    }), S = () => {
      l.value && l.value.resize && l.value.resize();
    }, y = async () => {
      let o = l.value;
      typeof o > "u" && (o = j.init(f.value)), a.value = !0, u.value = !1;
      try {
        const n = await H(s.resource, s.resourceData);
        r("results", n);
        let i = JSON.parse(JSON.stringify(s.options));
        i = { ...i, ...n.data }, (Array.isArray(i.series) && i.series.length === 0 || !Array.isArray(i.series) && typeof i.series == "object" && (!Array.isArray(i.series.data) || i.series.data.length === 0)) && (u.value = !0), o.setOption(i), l.value = o, a.value = !1;
      } catch {
        a.value = !1;
      }
    }, h = () => {
      typeof l.value < "u" && l.value.dispose(), a.value = !0;
      let o = j.init(f.value), n = JSON.parse(JSON.stringify(s.options));
      o.setOption(n), l.value = o, q(() => {
        a.value = !1;
      });
    };
    B(() => {
      s.resource ? y() : h(), addEventListener("resize", S);
    }), L(() => {
      removeEventListener("resize", S), typeof l.value < "u" && l.value.dispose();
    }), A(() => s.options, () => {
      s.resource ? y() : h();
    }, { deep: !0 }), A(() => s.resourceData, () => {
      s.resource ? y() : h();
    }, { deep: !0 });
    const D = m(() => typeof g.defaultEmptySlot < "u"), N = m(() => g.defaultEmptySlot);
    return (o, n) => {
      const i = J("lkt-loader");
      return c(), v("div", P, [
        a.value ? (c(), b(i, { key: 0 })) : k("", !0),
        u.value ? (c(), v("div", Q, [
          C(E).empty ? M(o.$slots, "empty", { key: 0 }) : D.value ? (c(), b(V(N.value), {
            key: 1,
            message: o.emptyText
          }, null, 8, ["message"])) : o.emptyText ? (c(), v(R, { key: 2 }, [
            F(G(o.emptyText), 1)
          ], 64)) : k("", !0)
        ])) : k("", !0),
        I(T("div", {
          class: "lkt-chart-content",
          ref_key: "container",
          ref: f,
          style: U(_.value)
        }, [
          n[0] || (O(-1), (n[0] = T("div", { id: C(d) }, null, 8, ["id"])).cacheIndex = 0, O(1), n[0])
        ], 4), [
          [$, !a.value && !u.value]
        ])
      ]);
    };
  }
});
class x {
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
const Y = (t, e = {}, r = {}) => {
  const s = new x();
  return Array.isArray(t) && t.length > 0 && s.setSeries(t), typeof e == "object" && Object.keys(e).length > 0 && s.setAxisX(e), typeof r == "object" && Object.keys(r).length > 0 && s.setAxisY(r), s;
}, ee = (t, e = void 0, r = void 0) => {
  const s = new x();
  return Array.isArray(t) && t.length > 0 && s.setSeries(t), typeof e == "object" && Object.keys(e).length > 0 && s.setAxisX(e), typeof r == "object" && Object.keys(r).length > 0 && s.setAxisY(r), s;
}, te = (t, e = "item", r = "mousemove") => (t.setTooltip({ trigger: e, triggerOn: r }), t), se = (t, e = void 0, r = void 0) => (t.setTitle({ text: e, subtext: r }), t), re = {
  install: (t, e) => {
    t.component("lkt-chart", W);
  }
}, oe = (t) => {
  g.defaultEmptySlot = t;
};
export {
  te as addBasicTooltip,
  Y as createBarChart,
  ee as createSankeyChart,
  re as default,
  oe as setChartEmptySlot,
  se as setChartTitle
};
