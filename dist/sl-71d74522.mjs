import { g as d, d as m, c as u } from "./index-43e0371a.mjs";
function p(n, a) {
  for (var o = 0; o < a.length; o++) {
    const e = a[o];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const t in e)
        if (t !== "default" && !(t in n)) {
          const s = Object.getOwnPropertyDescriptor(e, t);
          s && Object.defineProperty(n, t, s.get ? s : {
            enumerable: !0,
            get: () => e[t]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
}
var _ = { exports: {} };
(function(n, a) {
  (function(o, e) {
    n.exports = e(m);
  })(u, function(o) {
    function e(r) {
      return r && typeof r == "object" && "default" in r ? r : { default: r };
    }
    var t = e(o), s = { name: "sl", weekdays: "nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split("_"), months: "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"), weekStart: 1, weekdaysShort: "ned._pon._tor._sre._čet._pet._sob.".split("_"), monthsShort: "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"), weekdaysMin: "ne_po_to_sr_če_pe_so".split("_"), ordinal: function(r) {
      return r + ".";
    }, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm" }, relativeTime: { future: "čez %s", past: "pred %s", s: "nekaj sekund", m: "minuta", mm: "%d minut", h: "ura", hh: "%d ur", d: "dan", dd: "%d dni", M: "mesec", MM: "%d mesecev", y: "leto", yy: "%d let" } };
    return t.default.locale(s, null, !0), s;
  });
})(_);
var l = _.exports;
const i = /* @__PURE__ */ d(l), c = /* @__PURE__ */ p({
  __proto__: null,
  default: i
}, [l]);
export {
  c as s
};
