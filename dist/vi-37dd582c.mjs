import { g as i, d as l, c as a } from "./index-43e0371a.mjs";
function Y(h, o) {
  for (var r = 0; r < o.length; r++) {
    const t = o[r];
    if (typeof t != "string" && !Array.isArray(t)) {
      for (const e in t)
        if (e !== "default" && !(e in h)) {
          const _ = Object.getOwnPropertyDescriptor(t, e);
          _ && Object.defineProperty(h, e, _.get ? _ : {
            enumerable: !0,
            get: () => t[e]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(h, Symbol.toStringTag, { value: "Module" }));
}
var s = { exports: {} };
(function(h, o) {
  (function(r, t) {
    h.exports = t(l);
  })(a, function(r) {
    function t(n) {
      return n && typeof n == "object" && "default" in n ? n : { default: n };
    }
    var e = t(r), _ = { name: "vi", weekdays: "chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy".split("_"), months: "tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12".split("_"), weekStart: 1, weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"), monthsShort: "Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"), weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"), ordinal: function(n) {
      return n;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM [năm] YYYY", LLL: "D MMMM [năm] YYYY HH:mm", LLLL: "dddd, D MMMM [năm] YYYY HH:mm", l: "DD/M/YYYY", ll: "D MMM YYYY", lll: "D MMM YYYY HH:mm", llll: "ddd, D MMM YYYY HH:mm" }, relativeTime: { future: "%s tới", past: "%s trước", s: "vài giây", m: "một phút", mm: "%d phút", h: "một giờ", hh: "%d giờ", d: "một ngày", dd: "%d ngày", M: "một tháng", MM: "%d tháng", y: "một năm", yy: "%d năm" } };
    return e.default.locale(_, null, !0), _;
  });
})(s);
var m = s.exports;
const d = /* @__PURE__ */ i(m), M = /* @__PURE__ */ Y({
  __proto__: null,
  default: d
}, [m]);
export {
  M as v
};
