import { g as l, d as i, c as u } from "./index-43e0371a.mjs";
function f(s, o) {
  for (var a = 0; a < o.length; a++) {
    const e = o[a];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const r in e)
        if (r !== "default" && !(r in s)) {
          const n = Object.getOwnPropertyDescriptor(e, r);
          n && Object.defineProperty(s, r, n.get ? n : {
            enumerable: !0,
            get: () => e[r]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(s, Symbol.toStringTag, { value: "Module" }));
}
var m = { exports: {} };
(function(s, o) {
  (function(a, e) {
    s.exports = e(i);
  })(u, function(a) {
    function e(t) {
      return t && typeof t == "object" && "default" in t ? t : { default: t };
    }
    var r = e(a), n = { name: "sv-fi", weekdays: "söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split("_"), weekdaysShort: "sön_mån_tis_ons_tor_fre_lör".split("_"), weekdaysMin: "sö_må_ti_on_to_fr_lö".split("_"), months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"), monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"), weekStart: 1, yearStart: 4, ordinal: function(t) {
      var _ = t % 10;
      return "[" + t + (_ === 1 || _ === 2 ? "a" : "e") + "]";
    }, formats: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY, [kl.] HH.mm", LLLL: "dddd, D. MMMM YYYY, [kl.] HH.mm", l: "D.M.YYYY", ll: "D. MMM YYYY", lll: "D. MMM YYYY, [kl.] HH.mm", llll: "ddd, D. MMM YYYY, [kl.] HH.mm" }, relativeTime: { future: "om %s", past: "för %s sedan", s: "några sekunder", m: "en minut", mm: "%d minuter", h: "en timme", hh: "%d timmar", d: "en dag", dd: "%d dagar", M: "en månad", MM: "%d månader", y: "ett år", yy: "%d år" } };
    return r.default.locale(n, null, !0), n;
  });
})(m);
var d = m.exports;
const Y = /* @__PURE__ */ l(d), p = /* @__PURE__ */ f({
  __proto__: null,
  default: Y
}, [d]);
export {
  p as s
};
