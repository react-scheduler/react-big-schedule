import { g, d as v, c as D } from "./index-43e0371a.mjs";
function b(u, m) {
  for (var n = 0; n < m.length; n++) {
    const _ = m[n];
    if (typeof _ != "string" && !Array.isArray(_)) {
      for (const r in _)
        if (r !== "default" && !(r in u)) {
          const o = Object.getOwnPropertyDescriptor(_, r);
          o && Object.defineProperty(u, r, o.get ? o : {
            enumerable: !0,
            get: () => _[r]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(u, Symbol.toStringTag, { value: "Module" }));
}
var h = { exports: {} };
(function(u, m) {
  (function(n, _) {
    u.exports = _(v);
  })(D, function(n) {
    function _(t) {
      return t && typeof t == "object" && "default" in t ? t : { default: t };
    }
    var r = _(n), o = "января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"), d = "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"), p = "янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"), c = "янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_"), M = /D[oD]?(\[[^[\]]*\]|\s)+MMMM?/;
    function s(t, a, Y) {
      var e, i;
      return Y === "m" ? a ? "минута" : "минуту" : t + " " + (e = +t, i = { mm: a ? "минута_минуты_минут" : "минуту_минуты_минут", hh: "час_часа_часов", dd: "день_дня_дней", MM: "месяц_месяца_месяцев", yy: "год_года_лет" }[Y].split("_"), e % 10 == 1 && e % 100 != 11 ? i[0] : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? i[1] : i[2]);
    }
    var f = function(t, a) {
      return M.test(a) ? o[t.month()] : d[t.month()];
    };
    f.s = d, f.f = o;
    var l = function(t, a) {
      return M.test(a) ? p[t.month()] : c[t.month()];
    };
    l.s = c, l.f = p;
    var y = { name: "ru", weekdays: "воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"), weekdaysShort: "вск_пнд_втр_срд_чтв_птн_сбт".split("_"), weekdaysMin: "вс_пн_вт_ср_чт_пт_сб".split("_"), months: f, monthsShort: l, weekStart: 1, yearStart: 4, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY г.", LLL: "D MMMM YYYY г., H:mm", LLLL: "dddd, D MMMM YYYY г., H:mm" }, relativeTime: { future: "через %s", past: "%s назад", s: "несколько секунд", m: s, mm: s, h: "час", hh: s, d: "день", dd: s, M: "месяц", MM: s, y: "год", yy: s }, ordinal: function(t) {
      return t;
    }, meridiem: function(t) {
      return t < 4 ? "ночи" : t < 12 ? "утра" : t < 17 ? "дня" : "вечера";
    } };
    return r.default.locale(y, null, !0), y;
  });
})(h);
var L = h.exports;
const j = /* @__PURE__ */ g(L), S = /* @__PURE__ */ b({
  __proto__: null,
  default: j
}, [L]);
export {
  S as r
};
