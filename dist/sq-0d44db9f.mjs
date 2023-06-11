import { g as u, d, c as m } from "./index-43e0371a.mjs";
function l(s, _) {
  for (var n = 0; n < _.length; n++) {
    const t = _[n];
    if (typeof t != "string" && !Array.isArray(t)) {
      for (const r in t)
        if (r !== "default" && !(r in s)) {
          const o = Object.getOwnPropertyDescriptor(t, r);
          o && Object.defineProperty(s, r, o.get ? o : {
            enumerable: !0,
            get: () => t[r]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(s, Symbol.toStringTag, { value: "Module" }));
}
var a = { exports: {} };
(function(s, _) {
  (function(n, t) {
    s.exports = t(d);
  })(m, function(n) {
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var r = t(n), o = { name: "sq", weekdays: "E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë".split("_"), months: "Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor".split("_"), weekStart: 1, weekdaysShort: "Die_Hën_Mar_Mër_Enj_Pre_Sht".split("_"), monthsShort: "Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj".split("_"), weekdaysMin: "D_H_Ma_Më_E_P_Sh".split("_"), ordinal: function(e) {
      return e;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, relativeTime: { future: "në %s", past: "%s më parë", s: "disa sekonda", m: "një minutë", mm: "%d minuta", h: "një orë", hh: "%d orë", d: "një ditë", dd: "%d ditë", M: "një muaj", MM: "%d muaj", y: "një vit", yy: "%d vite" } };
    return r.default.locale(o, null, !0), o;
  });
})(a);
var i = a.exports;
const M = /* @__PURE__ */ u(i), p = /* @__PURE__ */ l({
  __proto__: null,
  default: M
}, [i]);
export {
  p as s
};
