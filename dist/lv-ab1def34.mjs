import { g as d, d as m, c as l } from "./index-43e0371a.mjs";
function u(n, i) {
  for (var s = 0; s < i.length; s++) {
    const e = i[s];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const t in e)
        if (t !== "default" && !(t in n)) {
          const a = Object.getOwnPropertyDescriptor(e, t);
          a && Object.defineProperty(n, t, a.get ? a : {
            enumerable: !0,
            get: () => e[t]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
}
var o = { exports: {} };
(function(n, i) {
  (function(s, e) {
    n.exports = e(m);
  })(l, function(s) {
    function e(r) {
      return r && typeof r == "object" && "default" in r ? r : { default: r };
    }
    var t = e(s), a = { name: "lv", weekdays: "svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena".split("_"), months: "janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris".split("_"), weekStart: 1, weekdaysShort: "Sv_P_O_T_C_Pk_S".split("_"), monthsShort: "jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec".split("_"), weekdaysMin: "Sv_P_O_T_C_Pk_S".split("_"), ordinal: function(r) {
      return r;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY.", LL: "YYYY. [gada] D. MMMM", LLL: "YYYY. [gada] D. MMMM, HH:mm", LLLL: "YYYY. [gada] D. MMMM, dddd, HH:mm" }, relativeTime: { future: "pēc %s", past: "pirms %s", s: "dažām sekundēm", m: "minūtes", mm: "%d minūtēm", h: "stundas", hh: "%d stundām", d: "dienas", dd: "%d dienām", M: "mēneša", MM: "%d mēnešiem", y: "gada", yy: "%d gadiem" } };
    return t.default.locale(a, null, !0), a;
  });
})(o);
var _ = o.exports;
const p = /* @__PURE__ */ d(_), c = /* @__PURE__ */ u({
  __proto__: null,
  default: p
}, [_]);
export {
  c as l
};
