import { g as f, d as c, c as M } from "./index-43e0371a.mjs";
function k(n, i) {
  for (var s = 0; s < i.length; s++) {
    const a = i[s];
    if (typeof a != "string" && !Array.isArray(a)) {
      for (const r in a)
        if (r !== "default" && !(r in n)) {
          const e = Object.getOwnPropertyDescriptor(a, r);
          e && Object.defineProperty(n, r, e.get ? e : {
            enumerable: !0,
            get: () => a[r]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
}
var d = { exports: {} };
(function(n, i) {
  (function(s, a) {
    n.exports = a(c);
  })(M, function(s) {
    function a(t) {
      return t && typeof t == "object" && "default" in t ? t : { default: t };
    }
    var r = a(s);
    function e(t, p, u, l) {
      var o = { s: ["mõne sekundi", "mõni sekund", "paar sekundit"], m: ["ühe minuti", "üks minut"], mm: ["%d minuti", "%d minutit"], h: ["ühe tunni", "tund aega", "üks tund"], hh: ["%d tunni", "%d tundi"], d: ["ühe päeva", "üks päev"], M: ["kuu aja", "kuu aega", "üks kuu"], MM: ["%d kuu", "%d kuud"], y: ["ühe aasta", "aasta", "üks aasta"], yy: ["%d aasta", "%d aastat"] };
      return p ? (o[u][2] ? o[u][2] : o[u][1]).replace("%d", t) : (l ? o[u][0] : o[u][1]).replace("%d", t);
    }
    var _ = { name: "et", weekdays: "pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev".split("_"), weekdaysShort: "P_E_T_K_N_R_L".split("_"), weekdaysMin: "P_E_T_K_N_R_L".split("_"), months: "jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"), monthsShort: "jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"), ordinal: function(t) {
      return t + ".";
    }, weekStart: 1, relativeTime: { future: "%s pärast", past: "%s tagasi", s: e, m: e, mm: e, h: e, hh: e, d: e, dd: "%d päeva", M: e, MM: e, y: e, yy: e }, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm" } };
    return r.default.locale(_, null, !0), _;
  });
})(d);
var m = d.exports;
const v = /* @__PURE__ */ f(m), h = /* @__PURE__ */ k({
  __proto__: null,
  default: v
}, [m]);
export {
  h as e
};
