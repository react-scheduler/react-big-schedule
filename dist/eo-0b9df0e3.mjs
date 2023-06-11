import { g as d, d as u, c as i } from "./index-43e0371a.mjs";
function l(n, _) {
  for (var r = 0; r < _.length; r++) {
    const o = _[r];
    if (typeof o != "string" && !Array.isArray(o)) {
      for (const e in o)
        if (e !== "default" && !(e in n)) {
          const a = Object.getOwnPropertyDescriptor(o, e);
          a && Object.defineProperty(n, e, a.get ? a : {
            enumerable: !0,
            get: () => o[e]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
}
var s = { exports: {} };
(function(n, _) {
  (function(r, o) {
    n.exports = o(u);
  })(i, function(r) {
    function o(t) {
      return t && typeof t == "object" && "default" in t ? t : { default: t };
    }
    var e = o(r), a = { name: "eo", weekdays: "dimanĉo_lundo_mardo_merkredo_ĵaŭdo_vendredo_sabato".split("_"), months: "januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro".split("_"), weekStart: 1, weekdaysShort: "dim_lun_mard_merk_ĵaŭ_ven_sab".split("_"), monthsShort: "jan_feb_mar_apr_maj_jun_jul_aŭg_sep_okt_nov_dec".split("_"), weekdaysMin: "di_lu_ma_me_ĵa_ve_sa".split("_"), ordinal: function(t) {
      return t;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "D[-a de] MMMM, YYYY", LLL: "D[-a de] MMMM, YYYY HH:mm", LLLL: "dddd, [la] D[-a de] MMMM, YYYY HH:mm" }, relativeTime: { future: "post %s", past: "antaŭ %s", s: "sekundoj", m: "minuto", mm: "%d minutoj", h: "horo", hh: "%d horoj", d: "tago", dd: "%d tagoj", M: "monato", MM: "%d monatoj", y: "jaro", yy: "%d jaroj" } };
    return e.default.locale(a, null, !0), a;
  });
})(s);
var m = s.exports;
const p = /* @__PURE__ */ d(m), j = /* @__PURE__ */ l({
  __proto__: null,
  default: p
}, [m]);
export {
  j as e
};
