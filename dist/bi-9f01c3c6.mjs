import { g as d, d as m, c as u } from "./index-43e0371a.mjs";
function l(o, s) {
  for (var r = 0; r < s.length; r++) {
    const e = s[r];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const a in e)
        if (a !== "default" && !(a in o)) {
          const n = Object.getOwnPropertyDescriptor(e, a);
          n && Object.defineProperty(o, a, n.get ? n : {
            enumerable: !0,
            get: () => e[a]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(o, Symbol.toStringTag, { value: "Module" }));
}
var _ = { exports: {} };
(function(o, s) {
  (function(r, e) {
    o.exports = e(m);
  })(u, function(r) {
    function e(t) {
      return t && typeof t == "object" && "default" in t ? t : { default: t };
    }
    var a = e(r), n = { name: "bi", weekdays: "Sande_Mande_Tusde_Wenesde_Tosde_Fraede_Sarade".split("_"), months: "Januari_Februari_Maj_Eprel_Mei_Jun_Julae_Okis_Septemba_Oktoba_Novemba_Disemba".split("_"), weekStart: 1, weekdaysShort: "San_Man_Tus_Wen_Tos_Frae_Sar".split("_"), monthsShort: "Jan_Feb_Maj_Epr_Mai_Jun_Jul_Oki_Sep_Okt_Nov_Dis".split("_"), weekdaysMin: "San_Ma_Tu_We_To_Fr_Sar".split("_"), ordinal: function(t) {
      return t;
    }, formats: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" }, relativeTime: { future: "lo %s", past: "%s bifo", s: "sam seken", m: "wan minit", mm: "%d minit", h: "wan haoa", hh: "%d haoa", d: "wan dei", dd: "%d dei", M: "wan manis", MM: "%d manis", y: "wan yia", yy: "%d yia" } };
    return a.default.locale(n, null, !0), n;
  });
})(_);
var i = _.exports;
const p = /* @__PURE__ */ d(i), M = /* @__PURE__ */ l({
  __proto__: null,
  default: p
}, [i]);
export {
  M as b
};
