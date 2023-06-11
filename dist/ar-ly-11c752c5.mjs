import { g as l, d as f, c as u } from "./index-43e0371a.mjs";
function m(n, a) {
  for (var _ = 0; _ < a.length; _++) {
    const t = a[_];
    if (typeof t != "string" && !Array.isArray(t)) {
      for (const r in t)
        if (r !== "default" && !(r in n)) {
          const o = Object.getOwnPropertyDescriptor(t, r);
          o && Object.defineProperty(n, r, o.get ? o : {
            enumerable: !0,
            get: () => t[r]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
}
var s = { exports: {} };
(function(n, a) {
  (function(_, t) {
    n.exports = t(f);
  })(u, function(_) {
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var r = t(_), o = { name: "ar-ly", weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"), months: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"), weekStart: 6, weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"), monthsShort: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"), weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"), ordinal: function(e) {
      return e;
    }, meridiem: function(e) {
      return e > 12 ? "م" : "ص";
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "D/‏M/‏YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" } };
    return r.default.locale(o, null, !0), o;
  });
})(s);
var i = s.exports;
const c = /* @__PURE__ */ l(i), d = /* @__PURE__ */ m({
  __proto__: null,
  default: c
}, [i]);
export {
  d as a
};
