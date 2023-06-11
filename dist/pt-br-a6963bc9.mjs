import { g as i, d as m, c as d } from "./index-43e0371a.mjs";
function f(s, n) {
  for (var r = 0; r < n.length; r++) {
    const e = n[r];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const t in e)
        if (t !== "default" && !(t in s)) {
          const a = Object.getOwnPropertyDescriptor(e, t);
          a && Object.defineProperty(s, t, a.get ? a : {
            enumerable: !0,
            get: () => e[t]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(s, Symbol.toStringTag, { value: "Module" }));
}
var _ = { exports: {} };
(function(s, n) {
  (function(r, e) {
    s.exports = e(m);
  })(d, function(r) {
    function e(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var t = e(r), a = { name: "pt-br", weekdays: "domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado".split("_"), weekdaysShort: "dom_seg_ter_qua_qui_sex_sáb".split("_"), weekdaysMin: "Do_2ª_3ª_4ª_5ª_6ª_Sá".split("_"), months: "janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"), monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"), ordinal: function(o) {
      return o + "º";
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY [às] HH:mm", LLLL: "dddd, D [de] MMMM [de] YYYY [às] HH:mm" }, relativeTime: { future: "em %s", past: "há %s", s: "poucos segundos", m: "um minuto", mm: "%d minutos", h: "uma hora", hh: "%d horas", d: "um dia", dd: "%d dias", M: "um mês", MM: "%d meses", y: "um ano", yy: "%d anos" } };
    return t.default.locale(a, null, !0), a;
  });
})(_);
var u = _.exports;
const p = /* @__PURE__ */ i(u), c = /* @__PURE__ */ f({
  __proto__: null,
  default: p
}, [u]);
export {
  c as p
};
