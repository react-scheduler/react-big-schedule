import { g as d, d as l, c as f } from "./index-43e0371a.mjs";
function m(o, n) {
  for (var s = 0; s < n.length; s++) {
    const t = n[s];
    if (typeof t != "string" && !Array.isArray(t)) {
      for (const e in t)
        if (e !== "default" && !(e in o)) {
          const _ = Object.getOwnPropertyDescriptor(t, e);
          _ && Object.defineProperty(o, e, _.get ? _ : {
            enumerable: !0,
            get: () => t[e]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(o, Symbol.toStringTag, { value: "Module" }));
}
var a = { exports: {} };
(function(o, n) {
  (function(s, t) {
    o.exports = t(l);
  })(f, function(s) {
    function t(r) {
      return r && typeof r == "object" && "default" in r ? r : { default: r };
    }
    var e = t(s), _ = { name: "si", weekdays: "ඉරිදා_සඳුදා_අඟහරුවාදා_බදාදා_බ්‍රහස්පතින්දා_සිකුරාදා_සෙනසුරාදා".split("_"), months: "දුරුතු_නවම්_මැදින්_බක්_වෙසක්_පොසොන්_ඇසළ_නිකිණි_බිනර_වප්_ඉල්_උඳුවප්".split("_"), weekdaysShort: "ඉරි_සඳු_අඟ_බදා_බ්‍රහ_සිකු_සෙන".split("_"), monthsShort: "දුරු_නව_මැදි_බක්_වෙස_පොසො_ඇස_නිකි_බින_වප්_ඉල්_උඳු".split("_"), weekdaysMin: "ඉ_ස_අ_බ_බ්‍ර_සි_සෙ".split("_"), ordinal: function(r) {
      return r;
    }, formats: { LT: "a h:mm", LTS: "a h:mm:ss", L: "YYYY/MM/DD", LL: "YYYY MMMM D", LLL: "YYYY MMMM D, a h:mm", LLLL: "YYYY MMMM D [වැනි] dddd, a h:mm:ss" }, relativeTime: { future: "%sකින්", past: "%sකට පෙර", s: "තත්පර කිහිපය", m: "විනාඩිය", mm: "විනාඩි %d", h: "පැය", hh: "පැය %d", d: "දිනය", dd: "දින %d", M: "මාසය", MM: "මාස %d", y: "වසර", yy: "වසර %d" } };
    return e.default.locale(_, null, !0), _;
  });
})(a);
var i = a.exports;
const u = /* @__PURE__ */ d(i), c = /* @__PURE__ */ m({
  __proto__: null,
  default: u
}, [i]);
export {
  c as s
};
