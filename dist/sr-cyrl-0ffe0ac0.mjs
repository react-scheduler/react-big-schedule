import { g as y, d as p, c as M } from "./index-43e0371a.mjs";
function v(i, s) {
  for (var m = 0; m < s.length; m++) {
    const t = s[m];
    if (typeof t != "string" && !Array.isArray(t)) {
      for (const a in t)
        if (a !== "default" && !(a in i)) {
          const e = Object.getOwnPropertyDescriptor(t, a);
          e && Object.defineProperty(i, a, e.get ? e : {
            enumerable: !0,
            get: () => t[a]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(i, Symbol.toStringTag, { value: "Module" }));
}
var c = { exports: {} };
(function(i, s) {
  (function(m, t) {
    i.exports = t(p);
  })(M, function(m) {
    function t(r) {
      return r && typeof r == "object" && "default" in r ? r : { default: r };
    }
    var a = t(m), e = { words: { m: ["један минут", "једног минута"], mm: ["%d минут", "%d минута", "%d минута"], h: ["један сат", "једног сата"], hh: ["%d сат", "%d сата", "%d сати"], d: ["један дан", "једног дана"], dd: ["%d дан", "%d дана", "%d дана"], M: ["један месец", "једног месеца"], MM: ["%d месец", "%d месеца", "%d месеци"], y: ["једну годину", "једне године"], yy: ["%d годину", "%d године", "%d година"] }, correctGrammarCase: function(r, o) {
      return r % 10 >= 1 && r % 10 <= 4 && (r % 100 < 10 || r % 100 >= 20) ? r % 10 == 1 ? o[0] : o[1] : o[2];
    }, relativeTimeFormatter: function(r, o, _, f) {
      var n = e.words[_];
      if (_.length === 1)
        return _ === "y" && o ? "једна година" : f || o ? n[0] : n[1];
      var l = e.correctGrammarCase(r, n);
      return _ === "yy" && o && l === "%d годину" ? r + " година" : l.replace("%d", r);
    } }, d = { name: "sr-cyrl", weekdays: "Недеља_Понедељак_Уторак_Среда_Четвртак_Петак_Субота".split("_"), weekdaysShort: "Нед._Пон._Уто._Сре._Чет._Пет._Суб.".split("_"), weekdaysMin: "не_по_ут_ср_че_пе_су".split("_"), months: "Јануар_Фебруар_Март_Април_Мај_Јун_Јул_Август_Септембар_Октобар_Новембар_Децембар".split("_"), monthsShort: "Јан._Феб._Мар._Апр._Мај_Јун_Јул_Авг._Сеп._Окт._Нов._Дец.".split("_"), weekStart: 1, relativeTime: { future: "за %s", past: "пре %s", s: "неколико секунди", m: e.relativeTimeFormatter, mm: e.relativeTimeFormatter, h: e.relativeTimeFormatter, hh: e.relativeTimeFormatter, d: e.relativeTimeFormatter, dd: e.relativeTimeFormatter, M: e.relativeTimeFormatter, MM: e.relativeTimeFormatter, y: e.relativeTimeFormatter, yy: e.relativeTimeFormatter }, ordinal: function(r) {
      return r + ".";
    }, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "D. M. YYYY.", LL: "D. MMMM YYYY.", LLL: "D. MMMM YYYY. H:mm", LLLL: "dddd, D. MMMM YYYY. H:mm" } };
    return a.default.locale(d, null, !0), d;
  });
})(c);
var u = c.exports;
const Y = /* @__PURE__ */ y(u), h = /* @__PURE__ */ v({
  __proto__: null,
  default: Y
}, [u]);
export {
  h as s
};
