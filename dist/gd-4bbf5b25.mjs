import { g as d, d as l, c as m } from "./index-43e0371a.mjs";
function u(r, o) {
  for (var e = 0; e < o.length; e++) {
    const t = o[e];
    if (typeof t != "string" && !Array.isArray(t)) {
      for (const a in t)
        if (a !== "default" && !(a in r)) {
          const i = Object.getOwnPropertyDescriptor(t, a);
          i && Object.defineProperty(r, a, i.get ? i : {
            enumerable: !0,
            get: () => t[a]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(r, Symbol.toStringTag, { value: "Module" }));
}
var _ = { exports: {} };
(function(r, o) {
  (function(e, t) {
    r.exports = t(l);
  })(m, function(e) {
    function t(n) {
      return n && typeof n == "object" && "default" in n ? n : { default: n };
    }
    var a = t(e), i = { name: "gd", weekdays: "Didòmhnaich_Diluain_Dimàirt_Diciadain_Diardaoin_Dihaoine_Disathairne".split("_"), months: "Am Faoilleach_An Gearran_Am Màrt_An Giblean_An Cèitean_An t-Ògmhios_An t-Iuchar_An Lùnastal_An t-Sultain_An Dàmhair_An t-Samhain_An Dùbhlachd".split("_"), weekStart: 1, weekdaysShort: "Did_Dil_Dim_Dic_Dia_Dih_Dis".split("_"), monthsShort: "Faoi_Gear_Màrt_Gibl_Cèit_Ògmh_Iuch_Lùn_Sult_Dàmh_Samh_Dùbh".split("_"), weekdaysMin: "Dò_Lu_Mà_Ci_Ar_Ha_Sa".split("_"), ordinal: function(n) {
      return n;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, relativeTime: { future: "ann an %s", past: "bho chionn %s", s: "beagan diogan", m: "mionaid", mm: "%d mionaidean", h: "uair", hh: "%d uairean", d: "latha", dd: "%d latha", M: "mìos", MM: "%d mìosan", y: "bliadhna", yy: "%d bliadhna" } };
    return a.default.locale(i, null, !0), i;
  });
})(_);
var s = _.exports;
const h = /* @__PURE__ */ d(s), D = /* @__PURE__ */ u({
  __proto__: null,
  default: h
}, [s]);
export {
  D as g
};
