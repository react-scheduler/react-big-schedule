import { g as m, d as u, c as d } from "./index-43e0371a.mjs";
function l(s, a) {
  for (var n = 0; n < a.length; n++) {
    const e = a[n];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const t in e)
        if (t !== "default" && !(t in s)) {
          const o = Object.getOwnPropertyDescriptor(e, t);
          o && Object.defineProperty(s, t, o.get ? o : {
            enumerable: !0,
            get: () => e[t]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(s, Symbol.toStringTag, { value: "Module" }));
}
var i = { exports: {} };
(function(s, a) {
  (function(n, e) {
    s.exports = e(u);
  })(d, function(n) {
    function e(r) {
      return r && typeof r == "object" && "default" in r ? r : { default: r };
    }
    var t = e(n), o = { name: "fr", weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"), weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"), weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"), months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"), monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"), weekStart: 1, yearStart: 4, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, relativeTime: { future: "dans %s", past: "il y a %s", s: "quelques secondes", m: "une minute", mm: "%d minutes", h: "une heure", hh: "%d heures", d: "un jour", dd: "%d jours", M: "un mois", MM: "%d mois", y: "un an", yy: "%d ans" }, ordinal: function(r) {
      return "" + r + (r === 1 ? "er" : "");
    } };
    return t.default.locale(o, null, !0), o;
  });
})(i);
var _ = i.exports;
const f = /* @__PURE__ */ m(_), p = /* @__PURE__ */ l({
  __proto__: null,
  default: f
}, [_]);
export {
  p as f
};
