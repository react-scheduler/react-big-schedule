import { g as i, d as m, c as d } from "./index-43e0371a.mjs";
function f(o, s) {
  for (var a = 0; a < s.length; a++) {
    const r = s[a];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const e in r)
        if (e !== "default" && !(e in o)) {
          const n = Object.getOwnPropertyDescriptor(r, e);
          n && Object.defineProperty(o, e, n.get ? n : {
            enumerable: !0,
            get: () => r[e]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(o, Symbol.toStringTag, { value: "Module" }));
}
var u = { exports: {} };
(function(o, s) {
  (function(a, r) {
    o.exports = r(m);
  })(d, function(a) {
    function r(t) {
      return t && typeof t == "object" && "default" in t ? t : { default: t };
    }
    var e = r(a), n = { name: "fo", weekdays: "sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur".split("_"), months: "januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember".split("_"), weekStart: 1, weekdaysShort: "sun_mán_týs_mik_hós_frí_ley".split("_"), monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"), weekdaysMin: "su_má_tý_mi_hó_fr_le".split("_"), ordinal: function(t) {
      return t;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D. MMMM, YYYY HH:mm" }, relativeTime: { future: "um %s", past: "%s síðani", s: "fá sekund", m: "ein minuttur", mm: "%d minuttir", h: "ein tími", hh: "%d tímar", d: "ein dagur", dd: "%d dagar", M: "ein mánaður", MM: "%d mánaðir", y: "eitt ár", yy: "%d ár" } };
    return e.default.locale(n, null, !0), n;
  });
})(u);
var _ = u.exports;
const l = /* @__PURE__ */ i(_), g = /* @__PURE__ */ f({
  __proto__: null,
  default: l
}, [_]);
export {
  g as f
};
