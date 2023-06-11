import { g as m, d as l, c as d } from "./index-43e0371a.mjs";
function y(_, o) {
  for (var a = 0; a < o.length; a++) {
    const t = o[a];
    if (typeof t != "string" && !Array.isArray(t)) {
      for (const r in t)
        if (r !== "default" && !(r in _)) {
          const n = Object.getOwnPropertyDescriptor(t, r);
          n && Object.defineProperty(_, r, n.get ? n : {
            enumerable: !0,
            get: () => t[r]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(_, Symbol.toStringTag, { value: "Module" }));
}
var s = { exports: {} };
(function(_, o) {
  (function(a, t) {
    _.exports = t(l);
  })(d, function(a) {
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var r = t(a), n = { name: "az", weekdays: "Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə".split("_"), weekdaysShort: "Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən".split("_"), weekdaysMin: "Bz_BE_ÇA_Çə_CA_Cü_Şə".split("_"), months: "yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split("_"), monthsShort: "yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"), weekStart: 1, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY г.", LLL: "D MMMM YYYY г., H:mm", LLLL: "dddd, D MMMM YYYY г., H:mm" }, relativeTime: { future: "%s sonra", past: "%s əvvəl", s: "bir neçə saniyə", m: "bir dəqiqə", mm: "%d dəqiqə", h: "bir saat", hh: "%d saat", d: "bir gün", dd: "%d gün", M: "bir ay", MM: "%d ay", y: "bir il", yy: "%d il" }, ordinal: function(e) {
      return e;
    } };
    return r.default.locale(n, null, !0), n;
  });
})(s);
var i = s.exports;
const f = /* @__PURE__ */ m(i), p = /* @__PURE__ */ y({
  __proto__: null,
  default: f
}, [i]);
export {
  p as a
};
