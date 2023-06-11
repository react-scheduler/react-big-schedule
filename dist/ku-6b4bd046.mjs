import { g as p, d as _, c as M } from "./index-43e0371a.mjs";
function y(u, a) {
  for (var r = 0; r < a.length; r++) {
    const t = a[r];
    if (typeof t != "string" && !Array.isArray(t)) {
      for (const o in t)
        if (o !== "default" && !(o in u)) {
          const n = Object.getOwnPropertyDescriptor(t, o);
          n && Object.defineProperty(u, o, n.get ? n : {
            enumerable: !0,
            get: () => t[o]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(u, Symbol.toStringTag, { value: "Module" }));
}
var i = { exports: {} };
(function(u, a) {
  (function(r, t) {
    t(a, _);
  })(M, function(r, t) {
    function o(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var n = o(t), d = { 1: "١", 2: "٢", 3: "٣", 4: "٤", 5: "٥", 6: "٦", 7: "٧", 8: "٨", 9: "٩", 0: "٠" }, m = { "١": "1", "٢": "2", "٣": "3", "٤": "4", "٥": "5", "٦": "6", "٧": "7", "٨": "8", "٩": "9", "٠": "0" }, f = ["کانوونی دووەم", "شوبات", "ئادار", "نیسان", "ئایار", "حوزەیران", "تەممووز", "ئاب", "ئەیلوول", "تشرینی یەکەم", "تشرینی دووەم", "کانوونی یەکەم"], l = { name: "ku", months: f, monthsShort: f, weekdays: "یەکشەممە_دووشەممە_سێشەممە_چوارشەممە_پێنجشەممە_هەینی_شەممە".split("_"), weekdaysShort: "یەکشەم_دووشەم_سێشەم_چوارشەم_پێنجشەم_هەینی_شەممە".split("_"), weekStart: 6, weekdaysMin: "ی_د_س_چ_پ_هـ_ش".split("_"), preparse: function(e) {
      return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function(s) {
        return m[s];
      }).replace(/،/g, ",");
    }, postformat: function(e) {
      return e.replace(/\d/g, function(s) {
        return d[s];
      }).replace(/,/g, "،");
    }, ordinal: function(e) {
      return e;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, meridiem: function(e) {
      return e < 12 ? "پ.ن" : "د.ن";
    }, relativeTime: { future: "لە %s", past: "لەمەوپێش %s", s: "چەند چرکەیەک", m: "یەک خولەک", mm: "%d خولەک", h: "یەک کاتژمێر", hh: "%d کاتژمێر", d: "یەک ڕۆژ", dd: "%d ڕۆژ", M: "یەک مانگ", MM: "%d مانگ", y: "یەک ساڵ", yy: "%d ساڵ" } };
    n.default.locale(l, null, !0), r.default = l, r.englishToArabicNumbersMap = d, Object.defineProperty(r, "__esModule", { value: !0 });
  });
})(i, i.exports);
var c = i.exports;
const Y = /* @__PURE__ */ p(c), L = /* @__PURE__ */ y({
  __proto__: null,
  default: Y
}, [c]);
export {
  L as k
};
