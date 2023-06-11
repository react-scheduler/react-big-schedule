import { g as l, d as u, c as d } from "./index-43e0371a.mjs";
function m(_, o) {
  for (var n = 0; n < o.length; n++) {
    const e = o[n];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const t in e)
        if (t !== "default" && !(t in _)) {
          const a = Object.getOwnPropertyDescriptor(e, t);
          a && Object.defineProperty(_, t, a.get ? a : {
            enumerable: !0,
            get: () => e[t]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(_, Symbol.toStringTag, { value: "Module" }));
}
var s = { exports: {} };
(function(_, o) {
  (function(n, e) {
    _.exports = e(u);
  })(d, function(n) {
    function e(r) {
      return r && typeof r == "object" && "default" in r ? r : { default: r };
    }
    var t = e(n), a = { name: "tk", weekdays: "Ýekşenbe_Duşenbe_Sişenbe_Çarşenbe_Penşenbe_Anna_Şenbe".split("_"), weekdaysShort: "Ýek_Duş_Siş_Çar_Pen_Ann_Şen".split("_"), weekdaysMin: "Ýk_Dş_Sş_Çr_Pn_An_Şn".split("_"), months: "Ýanwar_Fewral_Mart_Aprel_Maý_Iýun_Iýul_Awgust_Sentýabr_Oktýabr_Noýabr_Dekabr".split("_"), monthsShort: "Ýan_Few_Mar_Apr_Maý_Iýn_Iýl_Awg_Sen_Okt_Noý_Dek".split("_"), weekStart: 1, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, relativeTime: { future: "%s soň", past: "%s öň", s: "birnäçe sekunt", m: "bir minut", mm: "%d minut", h: "bir sagat", hh: "%d sagat", d: "bir gün", dd: "%d gün", M: "bir aý", MM: "%d aý", y: "bir ýyl", yy: "%d ýyl" }, ordinal: function(r) {
      return r + ".";
    } };
    return t.default.locale(a, null, !0), a;
  });
})(s);
var i = s.exports;
const f = /* @__PURE__ */ l(i), b = /* @__PURE__ */ m({
  __proto__: null,
  default: f
}, [i]);
export {
  b as t
};
