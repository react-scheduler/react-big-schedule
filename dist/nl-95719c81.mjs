import { g as u, d as i, c as m } from "./index-43e0371a.mjs";
function l(o, d) {
  for (var a = 0; a < d.length; a++) {
    const t = d[a];
    if (typeof t != "string" && !Array.isArray(t)) {
      for (const r in t)
        if (r !== "default" && !(r in o)) {
          const n = Object.getOwnPropertyDescriptor(t, r);
          n && Object.defineProperty(o, r, n.get ? n : {
            enumerable: !0,
            get: () => t[r]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(o, Symbol.toStringTag, { value: "Module" }));
}
var _ = { exports: {} };
(function(o, d) {
  (function(a, t) {
    o.exports = t(i);
  })(m, function(a) {
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var r = t(a), n = { name: "nl", weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"), weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"), weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"), months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"), monthsShort: "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"), ordinal: function(e) {
      return "[" + e + (e === 1 || e === 8 || e >= 20 ? "ste" : "de") + "]";
    }, weekStart: 1, yearStart: 4, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD-MM-YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, relativeTime: { future: "over %s", past: "%s geleden", s: "een paar seconden", m: "een minuut", mm: "%d minuten", h: "een uur", hh: "%d uur", d: "een dag", dd: "%d dagen", M: "een maand", MM: "%d maanden", y: "een jaar", yy: "%d jaar" } };
    return r.default.locale(n, null, !0), n;
  });
})(_);
var s = _.exports;
const p = /* @__PURE__ */ u(s), c = /* @__PURE__ */ l({
  __proto__: null,
  default: p
}, [s]);
export {
  c as n
};
