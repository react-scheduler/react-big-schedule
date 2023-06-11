import { g as l, d as m, c as p } from "./index-43e0371a.mjs";
function M(_, a) {
  for (var o = 0; o < a.length; o++) {
    const r = a[o];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const e in r)
        if (e !== "default" && !(e in _)) {
          const s = Object.getOwnPropertyDescriptor(r, e);
          s && Object.defineProperty(_, e, s.get ? s : {
            enumerable: !0,
            get: () => r[e]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(_, Symbol.toStringTag, { value: "Module" }));
}
var u = { exports: {} };
(function(_, a) {
  (function(o, r) {
    _.exports = r(m);
  })(p, function(o) {
    function r(t) {
      return t && typeof t == "object" && "default" in t ? t : { default: t };
    }
    var e = r(o), s = { 1: "১", 2: "২", 3: "৩", 4: "৪", 5: "৫", 6: "৬", 7: "৭", 8: "৮", 9: "৯", 0: "০" }, c = { "১": "1", "২": "2", "৩": "3", "৪": "4", "৫": "5", "৬": "6", "৭": "7", "৮": "8", "৯": "9", "০": "0" }, d = { name: "bn-bd", weekdays: "রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পতিবার_শুক্রবার_শনিবার".split("_"), months: "জানুয়ারি_ফেব্রুয়ারি_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর".split("_"), weekdaysShort: "রবি_সোম_মঙ্গল_বুধ_বৃহস্পতি_শুক্র_শনি".split("_"), monthsShort: "জানু_ফেব্রু_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্ট_অক্টো_নভে_ডিসে".split("_"), weekdaysMin: "রবি_সোম_মঙ্গ_বুধ_বৃহঃ_শুক্র_শনি".split("_"), weekStart: 0, preparse: function(t) {
      return t.replace(/[১২৩৪৫৬৭৮৯০]/g, function(n) {
        return c[n];
      });
    }, postformat: function(t) {
      return t.replace(/\d/g, function(n) {
        return s[n];
      });
    }, ordinal: function(t) {
      var n = ["ই", "লা", "রা", "ঠা", "শে"], i = t % 100;
      return "[" + t + (n[(i - 20) % 10] || n[i] || n[0]) + "]";
    }, formats: { LT: "A h:mm সময়", LTS: "A h:mm:ss সময়", L: "DD/MM/YYYY খ্রিস্টাব্দ", LL: "D MMMM YYYY খ্রিস্টাব্দ", LLL: "D MMMM YYYY খ্রিস্টাব্দ, A h:mm সময়", LLLL: "dddd, D MMMM YYYY খ্রিস্টাব্দ, A h:mm সময়" }, meridiem: function(t) {
      return t < 4 ? "রাত" : t < 6 ? "ভোর" : t < 12 ? "সকাল" : t < 15 ? "দুপুর" : t < 18 ? "বিকাল" : t < 20 ? "সন্ধ্যা" : "রাত";
    }, relativeTime: { future: "%s পরে", past: "%s আগে", s: "কয়েক সেকেন্ড", m: "এক মিনিট", mm: "%d মিনিট", h: "এক ঘন্টা", hh: "%d ঘন্টা", d: "এক দিন", dd: "%d দিন", M: "এক মাস", MM: "%d মাস", y: "এক বছর", yy: "%d বছর" } };
    return e.default.locale(d, null, !0), d;
  });
})(u);
var f = u.exports;
const Y = /* @__PURE__ */ l(f), y = /* @__PURE__ */ M({
  __proto__: null,
  default: Y
}, [f]);
export {
  y as b
};
