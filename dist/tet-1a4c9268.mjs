import { g as i, d as l, c as d } from "./index-43e0371a.mjs";
function m(o, n) {
  for (var a = 0; a < n.length; a++) {
    const t = n[a];
    if (typeof t != "string" && !Array.isArray(t)) {
      for (const e in t)
        if (e !== "default" && !(e in o)) {
          const u = Object.getOwnPropertyDescriptor(t, e);
          u && Object.defineProperty(o, e, u.get ? u : {
            enumerable: !0,
            get: () => t[e]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(o, Symbol.toStringTag, { value: "Module" }));
}
var _ = { exports: {} };
(function(o, n) {
  (function(a, t) {
    o.exports = t(l);
  })(d, function(a) {
    function t(r) {
      return r && typeof r == "object" && "default" in r ? r : { default: r };
    }
    var e = t(a), u = { name: "tet", weekdays: "Domingu_Segunda_Tersa_Kuarta_Kinta_Sesta_Sabadu".split("_"), months: "Janeiru_Fevereiru_Marsu_Abril_Maiu_Juñu_Jullu_Agustu_Setembru_Outubru_Novembru_Dezembru".split("_"), weekStart: 1, weekdaysShort: "Dom_Seg_Ters_Kua_Kint_Sest_Sab".split("_"), monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"), weekdaysMin: "Do_Seg_Te_Ku_Ki_Ses_Sa".split("_"), ordinal: function(r) {
      return r;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, relativeTime: { future: "iha %s", past: "%s liuba", s: "minutu balun", m: "minutu ida", mm: "minutu %d", h: "oras ida", hh: "oras %d", d: "loron ida", dd: "loron %d", M: "fulan ida", MM: "fulan %d", y: "tinan ida", yy: "tinan %d" } };
    return e.default.locale(u, null, !0), u;
  });
})(_);
var s = _.exports;
const f = /* @__PURE__ */ i(s), M = /* @__PURE__ */ m({
  __proto__: null,
  default: f
}, [s]);
export {
  M as t
};
