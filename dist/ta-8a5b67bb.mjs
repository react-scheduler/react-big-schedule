import { g as i, d as l, c as f } from "./index-43e0371a.mjs";
function m(s, n) {
  for (var _ = 0; _ < n.length; _++) {
    const t = n[_];
    if (typeof t != "string" && !Array.isArray(t)) {
      for (const e in t)
        if (e !== "default" && !(e in s)) {
          const o = Object.getOwnPropertyDescriptor(t, e);
          o && Object.defineProperty(s, e, o.get ? o : {
            enumerable: !0,
            get: () => t[e]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(s, Symbol.toStringTag, { value: "Module" }));
}
var a = { exports: {} };
(function(s, n) {
  (function(_, t) {
    s.exports = t(l);
  })(f, function(_) {
    function t(r) {
      return r && typeof r == "object" && "default" in r ? r : { default: r };
    }
    var e = t(_), o = { name: "ta", weekdays: "ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை".split("_"), months: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"), weekdaysShort: "ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி".split("_"), monthsShort: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"), weekdaysMin: "ஞா_தி_செ_பு_வி_வெ_ச".split("_"), ordinal: function(r) {
      return r;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, HH:mm", LLLL: "dddd, D MMMM YYYY, HH:mm" }, relativeTime: { future: "%s இல்", past: "%s முன்", s: "ஒரு சில விநாடிகள்", m: "ஒரு நிமிடம்", mm: "%d நிமிடங்கள்", h: "ஒரு மணி நேரம்", hh: "%d மணி நேரம்", d: "ஒரு நாள்", dd: "%d நாட்கள்", M: "ஒரு மாதம்", MM: "%d மாதங்கள்", y: "ஒரு வருடம்", yy: "%d ஆண்டுகள்" } };
    return e.default.locale(o, null, !0), o;
  });
})(a);
var d = a.exports;
const u = /* @__PURE__ */ i(d), c = /* @__PURE__ */ m({
  __proto__: null,
  default: u
}, [d]);
export {
  c as t
};
