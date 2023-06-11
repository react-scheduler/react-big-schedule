import { g as i, d as l, c as d } from "./index-43e0371a.mjs";
function y(o, _) {
  for (var r = 0; r < _.length; r++) {
    const a = _[r];
    if (typeof a != "string" && !Array.isArray(a)) {
      for (const t in a)
        if (t !== "default" && !(t in o)) {
          const n = Object.getOwnPropertyDescriptor(a, t);
          n && Object.defineProperty(o, t, n.get ? n : {
            enumerable: !0,
            get: () => a[t]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(o, Symbol.toStringTag, { value: "Module" }));
}
var s = { exports: {} };
(function(o, _) {
  (function(r, a) {
    o.exports = a(l);
  })(d, function(r) {
    function a(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var t = a(r), n = { name: "uz-latn", weekdays: "Yakshanba_Dushanba_Seshanba_Chorshanba_Payshanba_Juma_Shanba".split("_"), months: "Yanvar_Fevral_Mart_Aprel_May_Iyun_Iyul_Avgust_Sentabr_Oktabr_Noyabr_Dekabr".split("_"), weekStart: 1, weekdaysShort: "Yak_Dush_Sesh_Chor_Pay_Jum_Shan".split("_"), monthsShort: "Yan_Fev_Mar_Apr_May_Iyun_Iyul_Avg_Sen_Okt_Noy_Dek".split("_"), weekdaysMin: "Ya_Du_Se_Cho_Pa_Ju_Sha".split("_"), ordinal: function(e) {
      return e;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "D MMMM YYYY, dddd HH:mm" }, relativeTime: { future: "Yaqin %s ichida", past: "Bir necha %s oldin", s: "soniya", m: "bir daqiqa", mm: "%d daqiqa", h: "bir soat", hh: "%d soat", d: "bir kun", dd: "%d kun", M: "bir oy", MM: "%d oy", y: "bir yil", yy: "%d yil" } };
    return t.default.locale(n, null, !0), n;
  });
})(s);
var u = s.exports;
const m = /* @__PURE__ */ i(u), p = /* @__PURE__ */ y({
  __proto__: null,
  default: m
}, [u]);
export {
  p as u
};
