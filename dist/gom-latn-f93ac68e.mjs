import { g as m, d as u, c as i } from "./index-43e0371a.mjs";
function M(n, _) {
  for (var a = 0; a < _.length; a++) {
    const t = _[a];
    if (typeof t != "string" && !Array.isArray(t)) {
      for (const r in t)
        if (r !== "default" && !(r in n)) {
          const o = Object.getOwnPropertyDescriptor(t, r);
          o && Object.defineProperty(n, r, o.get ? o : {
            enumerable: !0,
            get: () => t[r]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
}
var s = { exports: {} };
(function(n, _) {
  (function(a, t) {
    n.exports = t(u);
  })(i, function(a) {
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var r = t(a), o = { name: "gom-latn", weekdays: "Aitar_Somar_Mongllar_Budvar_Brestar_Sukrar_Son'var".split("_"), months: "Janer_Febrer_Mars_Abril_Mai_Jun_Julai_Agost_Setembr_Otubr_Novembr_Dezembr".split("_"), weekStart: 1, weekdaysShort: "Ait._Som._Mon._Bud._Bre._Suk._Son.".split("_"), monthsShort: "Jan._Feb._Mars_Abr._Mai_Jun_Jul._Ago._Set._Otu._Nov._Dez.".split("_"), weekdaysMin: "Ai_Sm_Mo_Bu_Br_Su_Sn".split("_"), ordinal: function(e) {
      return e;
    }, formats: { LT: "A h:mm [vazta]", LTS: "A h:mm:ss [vazta]", L: "DD-MM-YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY A h:mm [vazta]", LLLL: "dddd, MMMM[achea] Do, YYYY, A h:mm [vazta]", llll: "ddd, D MMM YYYY, A h:mm [vazta]" } };
    return r.default.locale(o, null, !0), o;
  });
})(s);
var l = s.exports;
const d = /* @__PURE__ */ m(l), c = /* @__PURE__ */ M({
  __proto__: null,
  default: d
}, [l]);
export {
  c as g
};
