import { g as m, d as y, c as l } from "./index-43e0371a.mjs";
function c(o, s) {
  for (var a = 0; a < s.length; a++) {
    const e = s[a];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const r in e)
        if (r !== "default" && !(r in o)) {
          const n = Object.getOwnPropertyDescriptor(e, r);
          n && Object.defineProperty(o, r, n.get ? n : {
            enumerable: !0,
            get: () => e[r]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(o, Symbol.toStringTag, { value: "Module" }));
}
var d = { exports: {} };
(function(o, s) {
  (function(a, e) {
    o.exports = e(y);
  })(l, function(a) {
    function e(t) {
      return t && typeof t == "object" && "default" in t ? t : { default: t };
    }
    var r = e(a), n = { name: "en-in", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekStart: 1, yearStart: 4, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, ordinal: function(t) {
      var _ = ["th", "st", "nd", "rd"], u = t % 100;
      return "[" + t + (_[(u - 20) % 10] || _[u] || _[0]) + "]";
    } };
    return r.default.locale(n, null, !0), n;
  });
})(d);
var i = d.exports;
const p = /* @__PURE__ */ m(i), M = /* @__PURE__ */ c({
  __proto__: null,
  default: p
}, [i]);
export {
  M as e
};
