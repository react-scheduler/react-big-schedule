import { g as d, d as i, c as l } from "./index-43e0371a.mjs";
function f(s, n) {
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
    s.exports = t(i);
  })(l, function(_) {
    function t(r) {
      return r && typeof r == "object" && "default" in r ? r : { default: r };
    }
    var e = t(_), o = { name: "hy-am", weekdays: "կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ".split("_"), months: "հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի".split("_"), weekStart: 1, weekdaysShort: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"), monthsShort: "հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ".split("_"), weekdaysMin: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"), ordinal: function(r) {
      return r;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY թ.", LLL: "D MMMM YYYY թ., HH:mm", LLLL: "dddd, D MMMM YYYY թ., HH:mm" }, relativeTime: { future: "%s հետո", past: "%s առաջ", s: "մի քանի վայրկյան", m: "րոպե", mm: "%d րոպե", h: "ժամ", hh: "%d ժամ", d: "օր", dd: "%d օր", M: "ամիս", MM: "%d ամիս", y: "տարի", yy: "%d տարի" } };
    return e.default.locale(o, null, !0), o;
  });
})(a);
var m = a.exports;
const u = /* @__PURE__ */ d(m), c = /* @__PURE__ */ f({
  __proto__: null,
  default: u
}, [m]);
export {
  c as h
};
