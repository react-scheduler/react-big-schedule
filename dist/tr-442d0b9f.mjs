import { g as m, d as l, c as u } from "./index-43e0371a.mjs";
function d(_, o) {
  for (var a = 0; a < o.length; a++) {
    const t = o[a];
    if (typeof t != "string" && !Array.isArray(t)) {
      for (const e in t)
        if (e !== "default" && !(e in _)) {
          const s = Object.getOwnPropertyDescriptor(t, e);
          s && Object.defineProperty(_, e, s.get ? s : {
            enumerable: !0,
            get: () => t[e]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(_, Symbol.toStringTag, { value: "Module" }));
}
var n = { exports: {} };
(function(_, o) {
  (function(a, t) {
    _.exports = t(l);
  })(u, function(a) {
    function t(r) {
      return r && typeof r == "object" && "default" in r ? r : { default: r };
    }
    var e = t(a), s = { name: "tr", weekdays: "Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi".split("_"), weekdaysShort: "Paz_Pts_Sal_Çar_Per_Cum_Cts".split("_"), weekdaysMin: "Pz_Pt_Sa_Ça_Pe_Cu_Ct".split("_"), months: "Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık".split("_"), monthsShort: "Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara".split("_"), weekStart: 1, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, relativeTime: { future: "%s sonra", past: "%s önce", s: "birkaç saniye", m: "bir dakika", mm: "%d dakika", h: "bir saat", hh: "%d saat", d: "bir gün", dd: "%d gün", M: "bir ay", MM: "%d ay", y: "bir yıl", yy: "%d yıl" }, ordinal: function(r) {
      return r + ".";
    } };
    return e.default.locale(s, null, !0), s;
  });
})(n);
var i = n.exports;
const f = /* @__PURE__ */ m(i), y = /* @__PURE__ */ d({
  __proto__: null,
  default: f
}, [i]);
export {
  y as t
};
