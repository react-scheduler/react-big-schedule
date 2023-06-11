import { g as d, d as i, c as l } from "./index-43e0371a.mjs";
function f(n, s) {
  for (var _ = 0; _ < s.length; _++) {
    const t = s[_];
    if (typeof t != "string" && !Array.isArray(t)) {
      for (const e in t)
        if (e !== "default" && !(e in n)) {
          const o = Object.getOwnPropertyDescriptor(t, e);
          o && Object.defineProperty(n, e, o.get ? o : {
            enumerable: !0,
            get: () => t[e]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
}
var a = { exports: {} };
(function(n, s) {
  (function(_, t) {
    n.exports = t(i);
  })(l, function(_) {
    function t(r) {
      return r && typeof r == "object" && "default" in r ? r : { default: r };
    }
    var e = t(_), o = { name: "ug-cn", weekdays: "يەكشەنبە_دۈشەنبە_سەيشەنبە_چارشەنبە_پەيشەنبە_جۈمە_شەنبە".split("_"), months: "يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر".split("_"), weekStart: 1, weekdaysShort: "يە_دۈ_سە_چا_پە_جۈ_شە".split("_"), monthsShort: "يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر".split("_"), weekdaysMin: "يە_دۈ_سە_چا_پە_جۈ_شە".split("_"), ordinal: function(r) {
      return r;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "YYYY-يىلىM-ئاينىڭD-كۈنى", LLL: "YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm", LLLL: "dddd، YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm" }, relativeTime: { future: "%s كېيىن", past: "%s بۇرۇن", s: "نەچچە سېكونت", m: "بىر مىنۇت", mm: "%d مىنۇت", h: "بىر سائەت", hh: "%d سائەت", d: "بىر كۈن", dd: "%d كۈن", M: "بىر ئاي", MM: "%d ئاي", y: "بىر يىل", yy: "%d يىل" } };
    return e.default.locale(o, null, !0), o;
  });
})(a);
var u = a.exports;
const m = /* @__PURE__ */ d(u), c = /* @__PURE__ */ f({
  __proto__: null,
  default: m
}, [u]);
export {
  c as u
};
