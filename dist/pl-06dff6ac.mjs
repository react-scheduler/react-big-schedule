import { g as M, d as g, c as k } from "./index-43e0371a.mjs";
function w(o, c) {
  for (var a = 0; a < c.length; a++) {
    const e = c[a];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const i in e)
        if (i !== "default" && !(i in o)) {
          const r = Object.getOwnPropertyDescriptor(e, i);
          r && Object.defineProperty(o, i, r.get ? r : {
            enumerable: !0,
            get: () => e[i]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(o, Symbol.toStringTag, { value: "Module" }));
}
var d = { exports: {} };
(function(o, c) {
  (function(a, e) {
    o.exports = e(g);
  })(k, function(a) {
    function e(t) {
      return t && typeof t == "object" && "default" in t ? t : { default: t };
    }
    var i = e(a);
    function r(t) {
      return t % 10 < 5 && t % 10 > 1 && ~~(t / 10) % 10 != 1;
    }
    function n(t, s, z) {
      var _ = t + " ";
      switch (z) {
        case "m":
          return s ? "minuta" : "minutę";
        case "mm":
          return _ + (r(t) ? "minuty" : "minut");
        case "h":
          return s ? "godzina" : "godzinę";
        case "hh":
          return _ + (r(t) ? "godziny" : "godzin");
        case "MM":
          return _ + (r(t) ? "miesiące" : "miesięcy");
        case "yy":
          return _ + (r(t) ? "lata" : "lat");
      }
    }
    var l = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_"), m = "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"), y = /D MMMM/, u = function(t, s) {
      return y.test(s) ? l[t.month()] : m[t.month()];
    };
    u.s = m, u.f = l;
    var p = { name: "pl", weekdays: "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"), weekdaysShort: "ndz_pon_wt_śr_czw_pt_sob".split("_"), weekdaysMin: "Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"), months: u, monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"), ordinal: function(t) {
      return t + ".";
    }, weekStart: 1, yearStart: 4, relativeTime: { future: "za %s", past: "%s temu", s: "kilka sekund", m: n, mm: n, h: n, hh: n, d: "1 dzień", dd: "%d dni", M: "miesiąc", MM: n, y: "rok", yy: n }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" } };
    return i.default.locale(p, null, !0), p;
  });
})(d);
var f = d.exports;
const Y = /* @__PURE__ */ M(f), L = /* @__PURE__ */ w({
  __proto__: null,
  default: Y
}, [f]);
export {
  L as p
};
