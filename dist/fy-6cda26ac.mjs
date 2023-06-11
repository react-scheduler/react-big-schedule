import { g as m, d, c as f } from "./index-43e0371a.mjs";
function u(i, s) {
  for (var r = 0; r < s.length; r++) {
    const e = s[r];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const t in e)
        if (t !== "default" && !(t in i)) {
          const o = Object.getOwnPropertyDescriptor(e, t);
          o && Object.defineProperty(i, t, o.get ? o : {
            enumerable: !0,
            get: () => e[t]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(i, Symbol.toStringTag, { value: "Module" }));
}
var a = { exports: {} };
(function(i, s) {
  (function(r, e) {
    i.exports = e(d);
  })(f, function(r) {
    function e(n) {
      return n && typeof n == "object" && "default" in n ? n : { default: n };
    }
    var t = e(r), o = { name: "fy", weekdays: "snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon".split("_"), months: "jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber".split("_"), monthsShort: "jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split("_"), weekStart: 1, weekdaysShort: "si._mo._ti._wo._to._fr._so.".split("_"), weekdaysMin: "Si_Mo_Ti_Wo_To_Fr_So".split("_"), ordinal: function(n) {
      return n;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD-MM-YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, relativeTime: { future: "oer %s", past: "%s lyn", s: "in pear sekonden", m: "ien minút", mm: "%d minuten", h: "ien oere", hh: "%d oeren", d: "ien dei", dd: "%d dagen", M: "ien moanne", MM: "%d moannen", y: "ien jier", yy: "%d jierren" } };
    return t.default.locale(o, null, !0), o;
  });
})(a);
var _ = a.exports;
const l = /* @__PURE__ */ m(_), y = /* @__PURE__ */ u({
  __proto__: null,
  default: l
}, [_]);
export {
  y as f
};
