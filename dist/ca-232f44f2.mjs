import { g as i, d as u, c as m } from "./index-43e0371a.mjs";
function d(o, a) {
  for (var s = 0; s < a.length; s++) {
    const t = a[s];
    if (typeof t != "string" && !Array.isArray(t)) {
      for (const r in t)
        if (r !== "default" && !(r in o)) {
          const n = Object.getOwnPropertyDescriptor(t, r);
          n && Object.defineProperty(o, r, n.get ? n : {
            enumerable: !0,
            get: () => t[r]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(o, Symbol.toStringTag, { value: "Module" }));
}
var _ = { exports: {} };
(function(o, a) {
  (function(s, t) {
    o.exports = t(u);
  })(m, function(s) {
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var r = t(s), n = { name: "ca", weekdays: "Diumenge_Dilluns_Dimarts_Dimecres_Dijous_Divendres_Dissabte".split("_"), weekdaysShort: "Dg._Dl._Dt._Dc._Dj._Dv._Ds.".split("_"), weekdaysMin: "Dg_Dl_Dt_Dc_Dj_Dv_Ds".split("_"), months: "Gener_Febrer_Març_Abril_Maig_Juny_Juliol_Agost_Setembre_Octubre_Novembre_Desembre".split("_"), monthsShort: "Gen._Febr._Març_Abr._Maig_Juny_Jul._Ag._Set._Oct._Nov._Des.".split("_"), weekStart: 1, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM [de] YYYY", LLL: "D MMMM [de] YYYY [a les] H:mm", LLLL: "dddd D MMMM [de] YYYY [a les] H:mm", ll: "D MMM YYYY", lll: "D MMM YYYY, H:mm", llll: "ddd D MMM YYYY, H:mm" }, relativeTime: { future: "d'aquí %s", past: "fa %s", s: "uns segons", m: "un minut", mm: "%d minuts", h: "una hora", hh: "%d hores", d: "un dia", dd: "%d dies", M: "un mes", MM: "%d mesos", y: "un any", yy: "%d anys" }, ordinal: function(e) {
      return "" + e + (e === 1 || e === 3 ? "r" : e === 2 ? "n" : e === 4 ? "t" : "è");
    } };
    return r.default.locale(n, null, !0), n;
  });
})(_);
var l = _.exports;
const D = /* @__PURE__ */ i(l), M = /* @__PURE__ */ d({
  __proto__: null,
  default: D
}, [l]);
export {
  M as c
};
