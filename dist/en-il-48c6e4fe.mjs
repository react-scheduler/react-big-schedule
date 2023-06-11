import { g as d, d as i, c as l } from "./index-43e0371a.mjs";
function m(o, _) {
  for (var a = 0; a < _.length; a++) {
    const e = _[a];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const t in e)
        if (t !== "default" && !(t in o)) {
          const n = Object.getOwnPropertyDescriptor(e, t);
          n && Object.defineProperty(o, t, n.get ? n : {
            enumerable: !0,
            get: () => e[t]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(o, Symbol.toStringTag, { value: "Module" }));
}
var s = { exports: {} };
(function(o, _) {
  (function(a, e) {
    o.exports = e(i);
  })(l, function(a) {
    function e(r) {
      return r && typeof r == "object" && "default" in r ? r : { default: r };
    }
    var t = e(a), n = { name: "en-il", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), ordinal: function(r) {
      return r;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" } };
    return t.default.locale(n, null, !0), n;
  });
})(s);
var u = s.exports;
const y = /* @__PURE__ */ d(u), p = /* @__PURE__ */ m({
  __proto__: null,
  default: y
}, [u]);
export {
  p as e
};
