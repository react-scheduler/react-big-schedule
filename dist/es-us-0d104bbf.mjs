import { g as i, d as m, c as d } from "./index-43e0371a.mjs";
function l(n, a) {
  for (var t = 0; t < a.length; t++) {
    const e = a[t];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const o in e)
        if (o !== "default" && !(o in n)) {
          const r = Object.getOwnPropertyDescriptor(e, o);
          r && Object.defineProperty(n, o, r.get ? r : {
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
  (function(t, e) {
    n.exports = e(m);
  })(d, function(t) {
    function e(s) {
      return s && typeof s == "object" && "default" in s ? s : { default: s };
    }
    var o = e(t), r = { name: "es-us", weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"), weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"), weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"), months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"), monthsShort: "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"), relativeTime: { future: "en %s", past: "hace %s", s: "unos segundos", m: "un minuto", mm: "%d minutos", h: "una hora", hh: "%d horas", d: "un día", dd: "%d días", M: "un mes", MM: "%d meses", y: "un año", yy: "%d años" }, ordinal: function(s) {
      return s + "º";
    }, formats: { LT: "h:mm A", LTS: "h:mm:ss A", L: "MM/DD/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY h:mm A", LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A" } };
    return o.default.locale(r, null, !0), r;
  });
})(_);
var u = _.exports;
const c = /* @__PURE__ */ i(u), p = /* @__PURE__ */ l({
  __proto__: null,
  default: c
}, [u]);
export {
  p as e
};
