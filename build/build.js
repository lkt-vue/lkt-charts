import { defineComponent as D, useSlots as N, ref as d, computed as h, onMounted as w, onUnmounted as z, watch as S, resolveComponent as B, openBlock as c, createElementBlock as v, createBlock as A, createCommentVNode as m, unref as b, renderSlot as L, resolveDynamicComponent as J, Fragment as M, createTextVNode as V, toDisplayString as R, withDirectives as F, createElementVNode as C, normalizeStyle as G, setBlockTracking as T, vShow as I, nextTick as U } from "vue";
import * as O from "echarts";
import { httpCall as $ } from "lkt-http-client";
const k = {
  defaultEmptySlot: void 0
};
function q(t = 10) {
  let e = "";
  const s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", o = s.length;
  for (let i = 0; i < t; i++)
    e += s.charAt(Math.floor(Math.random() * o));
  return e;
}
const H = { class: "lkt-chart" }, K = {
  key: 1,
  class: "lkt-chart-empty"
}, P = { name: "LktChart", inheritAttrs: !1 }, Q = /* @__PURE__ */ D({
  ...P,
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
    const e = t, s = q(12), o = N(), i = d(void 0), f = d(null), a = d(!1), u = d(!1), j = h(() => {
      let r = [];
      return r.push(`height: ${e.height}px`), r.join(";");
    }), g = () => {
      i.value && i.value.resize && i.value.resize();
    }, p = async () => {
      let r = i.value;
      typeof r > "u" && (r = O.init(f.value)), a.value = !0, u.value = !1;
      try {
        const l = await $(e.resource, e.resourceData);
        let n = JSON.parse(JSON.stringify(e.options));
        n = { ...n, ...l.data }, (Array.isArray(n.series) && n.series.length === 0 || !Array.isArray(n.series) && typeof n.series == "object" && (!Array.isArray(n.series.data) || n.series.data.length === 0)) && (u.value = !0), r.setOption(n), i.value = r, a.value = !1;
      } catch {
        a.value = !1;
      }
    }, y = () => {
      typeof i.value < "u" && i.value.dispose(), a.value = !0;
      let r = O.init(f.value), l = JSON.parse(JSON.stringify(e.options));
      r.setOption(l), i.value = r, U(() => {
        a.value = !1;
      });
    };
    w(() => {
      e.resource ? p() : y(), addEventListener("resize", g);
    }), z(() => {
      removeEventListener("resize", g), typeof i.value < "u" && i.value.dispose();
    }), S(() => e.options, () => {
      e.resource ? p() : y();
    }, { deep: !0 }), S(() => e.resourceData, () => {
      e.resource ? p() : y();
    }, { deep: !0 });
    const x = h(() => typeof k.defaultEmptySlot < "u"), E = h(() => k.defaultEmptySlot);
    return (r, l) => {
      const n = B("lkt-loader");
      return c(), v("div", H, [
        a.value ? (c(), A(n, { key: 0 })) : m("", !0),
        u.value ? (c(), v("div", K, [
          b(o).empty ? L(r.$slots, "empty", { key: 0 }) : x.value ? (c(), A(J(E.value), {
            key: 1,
            message: r.emptyText
          }, null, 8, ["message"])) : r.emptyText ? (c(), v(M, { key: 2 }, [
            V(R(r.emptyText), 1)
          ], 64)) : m("", !0)
        ])) : m("", !0),
        F(C("div", {
          class: "lkt-chart-content",
          ref_key: "container",
          ref: f,
          style: G(j.value)
        }, [
          l[0] || (T(-1), (l[0] = C("div", { id: b(s) }, null, 8, ["id"])).cacheIndex = 0, T(1), l[0])
        ], 4), [
          [I, !a.value && !u.value]
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
const Z = (t, e = {}, s = {}) => {
  const o = new _();
  return Array.isArray(t) && t.length > 0 && o.setSeries(t), typeof e == "object" && Object.keys(e).length > 0 && o.setAxisX(e), typeof s == "object" && Object.keys(s).length > 0 && o.setAxisY(s), o;
}, Y = (t, e = void 0, s = void 0) => {
  const o = new _();
  return Array.isArray(t) && t.length > 0 && o.setSeries(t), typeof e == "object" && Object.keys(e).length > 0 && o.setAxisX(e), typeof s == "object" && Object.keys(s).length > 0 && o.setAxisY(s), o;
}, ee = (t, e = "item", s = "mousemove") => (t.setTooltip({ trigger: e, triggerOn: s }), t), te = (t, e = void 0, s = void 0) => (t.setTitle({ text: e, subtext: s }), t), se = {
  install: (t, e) => {
    t.component("lkt-chart", Q);
  }
}, re = (t) => {
  k.defaultEmptySlot = t;
};
export {
  ee as addBasicTooltip,
  Z as createBarChart,
  Y as createSankeyChart,
  se as default,
  re as setChartEmptySlot,
  te as setChartTitle
};
