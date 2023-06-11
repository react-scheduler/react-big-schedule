import { g as l, d as p, c as m } from "./index-43e0371a.mjs";
function M(a, s) {
  for (var o = 0; o < s.length; o++) {
    const e = s[o];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const r in e)
        if (r !== "default" && !(r in a)) {
          const n = Object.getOwnPropertyDescriptor(e, r);
          n && Object.defineProperty(a, r, n.get ? n : {
            enumerable: !0,
            get: () => e[r]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(a, Symbol.toStringTag, { value: "Module" }));
}
var f = { exports: {} };
(function(a, s) {
  (function(o, e) {
    a.exports = e(p);
  })(m, function(o) {
    function e(t) {
      return t && typeof t == "object" && "default" in t ? t : { default: t };
    }
    var r = e(o), n = "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"), c = { 1: "١", 2: "٢", 3: "٣", 4: "٤", 5: "٥", 6: "٦", 7: "٧", 8: "٨", 9: "٩", 0: "٠" }, d = { "١": "1", "٢": "2", "٣": "3", "٤": "4", "٥": "5", "٦": "6", "٧": "7", "٨": "8", "٩": "9", "٠": "0" }, u = { name: "ar", weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"), weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"), weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"), months: n, monthsShort: n, weekStart: 6, relativeTime: { future: "بعد %s", past: "منذ %s", s: "ثانية واحدة", m: "دقيقة واحدة", mm: "%d دقائق", h: "ساعة واحدة", hh: "%d ساعات", d: "يوم واحد", dd: "%d أيام", M: "شهر واحد", MM: "%d أشهر", y: "عام واحد", yy: "%d أعوام" }, preparse: function(t) {
      return t.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function(_) {
        return d[_];
      }).replace(/،/g, ",");
    }, postformat: function(t) {
      return t.replace(/\d/g, function(_) {
        return c[_];
      }).replace(/,/g, "،");
    }, ordinal: function(t) {
      return t;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "D/‏M/‏YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" } };
    return r.default.locale(u, null, !0), u;
  });
})(f);
var i = f.exports;
const Y = /* @__PURE__ */ l(i), g = /* @__PURE__ */ M({
  __proto__: null,
  default: Y
}, [i]);
export {
  g as a
};
