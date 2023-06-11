import { g as u, d, c as l } from "./index-43e0371a.mjs";
function m(_, n) {
  for (var a = 0; a < n.length; a++) {
    const t = n[a];
    if (typeof t != "string" && !Array.isArray(t)) {
      for (const e in t)
        if (e !== "default" && !(e in _)) {
          const o = Object.getOwnPropertyDescriptor(t, e);
          o && Object.defineProperty(_, e, o.get ? o : {
            enumerable: !0,
            get: () => t[e]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(_, Symbol.toStringTag, { value: "Module" }));
}
var s = { exports: {} };
(function(_, n) {
  (function(a, t) {
    _.exports = t(d);
  })(l, function(a) {
    function t(r) {
      return r && typeof r == "object" && "default" in r ? r : { default: r };
    }
    var e = t(a), o = { name: "yo", weekdays: "Àìkú_Ajé_Ìsẹ́gun_Ọjọ́rú_Ọjọ́bọ_Ẹtì_Àbámẹ́ta".split("_"), months: "Sẹ́rẹ́_Èrèlè_Ẹrẹ̀nà_Ìgbé_Èbibi_Òkùdu_Agẹmo_Ògún_Owewe_Ọ̀wàrà_Bélú_Ọ̀pẹ̀̀".split("_"), weekStart: 1, weekdaysShort: "Àìk_Ajé_Ìsẹ́_Ọjr_Ọjb_Ẹtì_Àbá".split("_"), monthsShort: "Sẹ́r_Èrl_Ẹrn_Ìgb_Èbi_Òkù_Agẹ_Ògú_Owe_Ọ̀wà_Bél_Ọ̀pẹ̀̀".split("_"), weekdaysMin: "Àì_Aj_Ìs_Ọr_Ọb_Ẹt_Àb".split("_"), ordinal: function(r) {
      return r;
    }, formats: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" }, relativeTime: { future: "ní %s", past: "%s kọjá", s: "ìsẹjú aayá die", m: "ìsẹjú kan", mm: "ìsẹjú %d", h: "wákati kan", hh: "wákati %d", d: "ọjọ́ kan", dd: "ọjọ́ %d", M: "osù kan", MM: "osù %d", y: "ọdún kan", yy: "ọdún %d" } };
    return e.default.locale(o, null, !0), o;
  });
})(s);
var i = s.exports;
const f = /* @__PURE__ */ u(i), y = /* @__PURE__ */ m({
  __proto__: null,
  default: f
}, [i]);
export {
  y
};
