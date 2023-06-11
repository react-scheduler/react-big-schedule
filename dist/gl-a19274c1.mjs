import { g as d, d as u, c as l } from "./index-43e0371a.mjs";
function i(n, a) {
  for (var r = 0; r < a.length; r++) {
    const e = a[r];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const o in e)
        if (o !== "default" && !(o in n)) {
          const s = Object.getOwnPropertyDescriptor(e, o);
          s && Object.defineProperty(n, o, s.get ? s : {
            enumerable: !0,
            get: () => e[o]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
}
var _ = { exports: {} };
(function(n, a) {
  (function(r, e) {
    n.exports = e(u);
  })(l, function(r) {
    function e(t) {
      return t && typeof t == "object" && "default" in t ? t : { default: t };
    }
    var o = e(r), s = { name: "gl", weekdays: "domingo_luns_martes_mércores_xoves_venres_sábado".split("_"), months: "xaneiro_febreiro_marzo_abril_maio_xuño_xullo_agosto_setembro_outubro_novembro_decembro".split("_"), weekStart: 1, weekdaysShort: "dom._lun._mar._mér._xov._ven._sáb.".split("_"), monthsShort: "xan._feb._mar._abr._mai._xuñ._xul._ago._set._out._nov._dec.".split("_"), weekdaysMin: "do_lu_ma_mé_xo_ve_sá".split("_"), ordinal: function(t) {
      return t + "º";
    }, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY H:mm", LLLL: "dddd, D [de] MMMM [de] YYYY H:mm" }, relativeTime: { future: "en %s", past: "fai %s", s: "uns segundos", m: "un minuto", mm: "%d minutos", h: "unha hora", hh: "%d horas", d: "un día", dd: "%d días", M: "un mes", MM: "%d meses", y: "un ano", yy: "%d anos" } };
    return o.default.locale(s, null, !0), s;
  });
})(_);
var m = _.exports;
const f = /* @__PURE__ */ d(m), p = /* @__PURE__ */ i({
  __proto__: null,
  default: f
}, [m]);
export {
  p as g
};
