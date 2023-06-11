import { g as d, d as m, c as f } from "./index-43e0371a.mjs";
function l(a, n) {
  for (var _ = 0; _ < n.length; _++) {
    const t = n[_];
    if (typeof t != "string" && !Array.isArray(t)) {
      for (const r in t)
        if (r !== "default" && !(r in a)) {
          const o = Object.getOwnPropertyDescriptor(t, r);
          o && Object.defineProperty(a, r, o.get ? o : {
            enumerable: !0,
            get: () => t[r]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(a, Symbol.toStringTag, { value: "Module" }));
}
var s = { exports: {} };
(function(a, n) {
  (function(_, t) {
    a.exports = t(m);
  })(f, function(_) {
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var r = t(_), o = { name: "ar-sa", weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"), months: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"), weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"), monthsShort: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"), weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"), ordinal: function(e) {
      return e;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, meridiem: function(e) {
      return e > 12 ? "م" : "ص";
    }, relativeTime: { future: "في %s", past: "منذ %s", s: "ثوان", m: "دقيقة", mm: "%d دقائق", h: "ساعة", hh: "%d ساعات", d: "يوم", dd: "%d أيام", M: "شهر", MM: "%d أشهر", y: "سنة", yy: "%d سنوات" } };
    return r.default.locale(o, null, !0), o;
  });
})(s);
var i = s.exports;
const u = /* @__PURE__ */ d(i), c = /* @__PURE__ */ l({
  __proto__: null,
  default: u
}, [i]);
export {
  c as a
};
