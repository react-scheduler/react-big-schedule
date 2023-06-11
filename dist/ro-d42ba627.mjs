import { g as s, d as m, c as l } from "./index-43e0371a.mjs";
function c(n, _) {
  for (var i = 0; i < _.length; i++) {
    const e = _[i];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const t in e)
        if (t !== "default" && !(t in n)) {
          const o = Object.getOwnPropertyDescriptor(e, t);
          o && Object.defineProperty(n, t, o.get ? o : {
            enumerable: !0,
            get: () => e[t]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
}
var a = { exports: {} };
(function(n, _) {
  (function(i, e) {
    n.exports = e(m);
  })(l, function(i) {
    function e(r) {
      return r && typeof r == "object" && "default" in r ? r : { default: r };
    }
    var t = e(i), o = { name: "ro", weekdays: "Duminică_Luni_Marți_Miercuri_Joi_Vineri_Sâmbătă".split("_"), weekdaysShort: "Dum_Lun_Mar_Mie_Joi_Vin_Sâm".split("_"), weekdaysMin: "Du_Lu_Ma_Mi_Jo_Vi_Sâ".split("_"), months: "Ianuarie_Februarie_Martie_Aprilie_Mai_Iunie_Iulie_August_Septembrie_Octombrie_Noiembrie_Decembrie".split("_"), monthsShort: "Ian._Febr._Mart._Apr._Mai_Iun._Iul._Aug._Sept._Oct._Nov._Dec.".split("_"), weekStart: 1, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY H:mm", LLLL: "dddd, D MMMM YYYY H:mm" }, relativeTime: { future: "peste %s", past: "acum %s", s: "câteva secunde", m: "un minut", mm: "%d minute", h: "o oră", hh: "%d ore", d: "o zi", dd: "%d zile", M: "o lună", MM: "%d luni", y: "un an", yy: "%d ani" }, ordinal: function(r) {
      return r;
    } };
    return t.default.locale(o, null, !0), o;
  });
})(a);
var u = a.exports;
const M = /* @__PURE__ */ s(u), p = /* @__PURE__ */ c({
  __proto__: null,
  default: M
}, [u]);
export {
  p as r
};
