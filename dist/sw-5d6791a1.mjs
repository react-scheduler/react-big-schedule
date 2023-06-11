import { g as n, d as u, c as l } from "./index-43e0371a.mjs";
function d(s, i) {
  for (var o = 0; o < i.length; o++) {
    const e = i[o];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const t in e)
        if (t !== "default" && !(t in s)) {
          const r = Object.getOwnPropertyDescriptor(e, t);
          r && Object.defineProperty(s, t, r.get ? r : {
            enumerable: !0,
            get: () => e[t]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(s, Symbol.toStringTag, { value: "Module" }));
}
var m = { exports: {} };
(function(s, i) {
  (function(o, e) {
    s.exports = e(u);
  })(l, function(o) {
    function e(a) {
      return a && typeof a == "object" && "default" in a ? a : { default: a };
    }
    var t = e(o), r = { name: "sw", weekdays: "Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi".split("_"), weekdaysShort: "Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos".split("_"), weekdaysMin: "J2_J3_J4_J5_Al_Ij_J1".split("_"), months: "Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba".split("_"), monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des".split("_"), weekStart: 1, ordinal: function(a) {
      return a;
    }, relativeTime: { future: "%s baadaye", past: "tokea %s", s: "hivi punde", m: "dakika moja", mm: "dakika %d", h: "saa limoja", hh: "masaa %d", d: "siku moja", dd: "masiku %d", M: "mwezi mmoja", MM: "miezi %d", y: "mwaka mmoja", yy: "miaka %d" }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" } };
    return t.default.locale(r, null, !0), r;
  });
})(m);
var _ = m.exports;
const p = /* @__PURE__ */ n(_), c = /* @__PURE__ */ d({
  __proto__: null,
  default: p
}, [_]);
export {
  c as s
};
