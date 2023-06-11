import { g as p, d as f, c } from "./index-43e0371a.mjs";
function g(o, s) {
  for (var a = 0; a < s.length; a++) {
    const t = s[a];
    if (typeof t != "string" && !Array.isArray(t)) {
      for (const n in t)
        if (n !== "default" && !(n in o)) {
          const i = Object.getOwnPropertyDescriptor(t, n);
          i && Object.defineProperty(o, n, i.get ? i : {
            enumerable: !0,
            get: () => t[n]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(o, Symbol.toStringTag, { value: "Module" }));
}
var u = { exports: {} };
(function(o, s) {
  (function(a, t) {
    o.exports = t(f);
  })(c, function(a) {
    function t(r) {
      return r && typeof r == "object" && "default" in r ? r : { default: r };
    }
    var n = t(a), i = { s: "ein paar Sekunden", m: ["eine Minute", "einer Minute"], mm: "%d Minuten", h: ["eine Stunde", "einer Stunde"], hh: "%d Stunden", d: ["ein Tag", "einem Tag"], dd: ["%d Tage", "%d Tagen"], M: ["ein Monat", "einem Monat"], MM: ["%d Monate", "%d Monaten"], y: ["ein Jahr", "einem Jahr"], yy: ["%d Jahre", "%d Jahren"] };
    function e(r, m, l) {
      var _ = i[l];
      return Array.isArray(_) && (_ = _[m ? 0 : 1]), _.replace("%d", r);
    }
    var d = { name: "de", weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"), weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"), weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"), months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"), monthsShort: "Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sept._Okt._Nov._Dez.".split("_"), ordinal: function(r) {
      return r + ".";
    }, weekStart: 1, yearStart: 4, formats: { LTS: "HH:mm:ss", LT: "HH:mm", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY HH:mm", LLLL: "dddd, D. MMMM YYYY HH:mm" }, relativeTime: { future: "in %s", past: "vor %s", s: e, m: e, mm: e, h: e, hh: e, d: e, dd: e, M: e, MM: e, y: e, yy: e } };
    return n.default.locale(d, null, !0), d;
  });
})(u);
var M = u.exports;
const y = /* @__PURE__ */ p(M), h = /* @__PURE__ */ g({
  __proto__: null,
  default: y
}, [M]);
export {
  h as d
};
