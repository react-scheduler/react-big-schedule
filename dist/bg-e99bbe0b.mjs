import { g as l, d as m, c as u } from "./index-43e0371a.mjs";
function p(s, a) {
  for (var _ = 0; _ < a.length; _++) {
    const e = a[_];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const r in e)
        if (r !== "default" && !(r in s)) {
          const o = Object.getOwnPropertyDescriptor(e, r);
          o && Object.defineProperty(s, r, o.get ? o : {
            enumerable: !0,
            get: () => e[r]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(s, Symbol.toStringTag, { value: "Module" }));
}
var i = { exports: {} };
(function(s, a) {
  (function(_, e) {
    s.exports = e(m);
  })(u, function(_) {
    function e(t) {
      return t && typeof t == "object" && "default" in t ? t : { default: t };
    }
    var r = e(_), o = { name: "bg", weekdays: "неделя_понеделник_вторник_сряда_четвъртък_петък_събота".split("_"), weekdaysShort: "нед_пон_вто_сря_чет_пет_съб".split("_"), weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"), months: "януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември".split("_"), monthsShort: "янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек".split("_"), weekStart: 1, ordinal: function(t) {
      var d = t % 100;
      if (d > 10 && d < 20)
        return t + "-ти";
      var n = t % 10;
      return n === 1 ? t + "-ви" : n === 2 ? t + "-ри" : n === 7 || n === 8 ? t + "-ми" : t + "-ти";
    }, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "D.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY H:mm", LLLL: "dddd, D MMMM YYYY H:mm" }, relativeTime: { future: "след %s", past: "преди %s", s: "няколко секунди", m: "минута", mm: "%d минути", h: "час", hh: "%d часа", d: "ден", dd: "%d дена", M: "месец", MM: "%d месеца", y: "година", yy: "%d години" } };
    return r.default.locale(o, null, !0), o;
  });
})(i);
var f = i.exports;
const c = /* @__PURE__ */ l(f), Y = /* @__PURE__ */ p({
  __proto__: null,
  default: c
}, [f]);
export {
  Y as b
};
