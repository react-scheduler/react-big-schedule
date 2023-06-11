import { g as Y, d as h, c as L } from "./index-43e0371a.mjs";
function g(u, m) {
  for (var n = 0; n < m.length; n++) {
    const t = m[n];
    if (typeof t != "string" && !Array.isArray(t)) {
      for (const e in t)
        if (e !== "default" && !(e in u)) {
          const a = Object.getOwnPropertyDescriptor(t, e);
          a && Object.defineProperty(u, e, a.get ? a : {
            enumerable: !0,
            get: () => t[e]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(u, Symbol.toStringTag, { value: "Module" }));
}
var M = { exports: {} };
(function(u, m) {
  (function(n, t) {
    u.exports = t(h);
  })(L, function(n) {
    function t(_) {
      return _ && typeof _ == "object" && "default" in _ ? _ : { default: _ };
    }
    var e = t(n), a = "січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split("_"), d = "січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split("_"), y = /D[oD]?(\[[^[\]]*\]|\s)+MMMM?/;
    function r(_, o, l) {
      var s, i;
      return l === "m" ? o ? "хвилина" : "хвилину" : l === "h" ? o ? "година" : "годину" : _ + " " + (s = +_, i = { ss: o ? "секунда_секунди_секунд" : "секунду_секунди_секунд", mm: o ? "хвилина_хвилини_хвилин" : "хвилину_хвилини_хвилин", hh: o ? "година_години_годин" : "годину_години_годин", dd: "день_дні_днів", MM: "місяць_місяці_місяців", yy: "рік_роки_років" }[l].split("_"), s % 10 == 1 && s % 100 != 11 ? i[0] : s % 10 >= 2 && s % 10 <= 4 && (s % 100 < 10 || s % 100 >= 20) ? i[1] : i[2]);
    }
    var f = function(_, o) {
      return y.test(o) ? a[_.month()] : d[_.month()];
    };
    f.s = d, f.f = a;
    var p = { name: "uk", weekdays: "неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split("_"), weekdaysShort: "ндл_пнд_втр_срд_чтв_птн_сбт".split("_"), weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"), months: f, monthsShort: "січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"), weekStart: 1, relativeTime: { future: "за %s", past: "%s тому", s: "декілька секунд", m: r, mm: r, h: r, hh: r, d: "день", dd: r, M: "місяць", MM: r, y: "рік", yy: r }, ordinal: function(_) {
      return _;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY р.", LLL: "D MMMM YYYY р., HH:mm", LLLL: "dddd, D MMMM YYYY р., HH:mm" } };
    return e.default.locale(p, null, !0), p;
  });
})(M);
var c = M.exports;
const k = /* @__PURE__ */ Y(c), D = /* @__PURE__ */ g({
  __proto__: null,
  default: k
}, [c]);
export {
  D as u
};
