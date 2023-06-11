import { g as i, d as m, c as u } from "./index-43e0371a.mjs";
function l(o, s) {
  for (var n = 0; n < s.length; n++) {
    const t = s[n];
    if (typeof t != "string" && !Array.isArray(t)) {
      for (const e in t)
        if (e !== "default" && !(e in o)) {
          const a = Object.getOwnPropertyDescriptor(t, e);
          a && Object.defineProperty(o, e, a.get ? a : {
            enumerable: !0,
            get: () => t[e]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(o, Symbol.toStringTag, { value: "Module" }));
}
var _ = { exports: {} };
(function(o, s) {
  (function(n, t) {
    o.exports = t(m);
  })(u, function(n) {
    function t(r) {
      return r && typeof r == "object" && "default" in r ? r : { default: r };
    }
    var e = t(n), a = { name: "nn", weekdays: "sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"), weekdaysShort: "sun_mån_tys_ons_tor_fre_lau".split("_"), weekdaysMin: "su_må_ty_on_to_fr_la".split("_"), months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"), monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"), ordinal: function(r) {
      return r + ".";
    }, weekStart: 1, relativeTime: { future: "om %s", past: "for %s sidan", s: "nokre sekund", m: "eitt minutt", mm: "%d minutt", h: "ein time", hh: "%d timar", d: "ein dag", dd: "%d dagar", M: "ein månad", MM: "%d månadar", y: "eitt år", yy: "%d år" }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY [kl.] H:mm", LLLL: "dddd D. MMMM YYYY [kl.] HH:mm" } };
    return e.default.locale(a, null, !0), a;
  });
})(_);
var d = _.exports;
const f = /* @__PURE__ */ i(d), c = /* @__PURE__ */ l({
  __proto__: null,
  default: f
}, [d]);
export {
  c as n
};
