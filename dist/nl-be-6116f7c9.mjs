import { g as u, d as i, c as m } from "./index-43e0371a.mjs";
function l(o, _) {
  for (var n = 0; n < _.length; n++) {
    const e = _[n];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const t in e)
        if (t !== "default" && !(t in o)) {
          const a = Object.getOwnPropertyDescriptor(e, t);
          a && Object.defineProperty(o, t, a.get ? a : {
            enumerable: !0,
            get: () => e[t]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(o, Symbol.toStringTag, { value: "Module" }));
}
var d = { exports: {} };
(function(o, _) {
  (function(n, e) {
    o.exports = e(i);
  })(m, function(n) {
    function e(r) {
      return r && typeof r == "object" && "default" in r ? r : { default: r };
    }
    var t = e(n), a = { name: "nl-be", weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"), months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"), monthsShort: "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"), weekStart: 1, weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"), weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"), ordinal: function(r) {
      return r;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, relativeTime: { future: "over %s", past: "%s geleden", s: "een paar seconden", m: "één minuut", mm: "%d minuten", h: "één uur", hh: "%d uur", d: "één dag", dd: "%d dagen", M: "één maand", MM: "%d maanden", y: "één jaar", yy: "%d jaar" } };
    return t.default.locale(a, null, !0), a;
  });
})(d);
var s = d.exports;
const p = /* @__PURE__ */ u(s), c = /* @__PURE__ */ l({
  __proto__: null,
  default: p
}, [s]);
export {
  c as n
};
