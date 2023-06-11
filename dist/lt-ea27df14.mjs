import { g as u, d as p, c as f } from "./index-43e0371a.mjs";
function D(l, r) {
  for (var a = 0; a < r.length; a++) {
    const t = r[a];
    if (typeof t != "string" && !Array.isArray(t)) {
      for (const s in t)
        if (s !== "default" && !(s in l)) {
          const i = Object.getOwnPropertyDescriptor(t, s);
          i && Object.defineProperty(l, s, i.get ? i : {
            enumerable: !0,
            get: () => t[s]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(l, Symbol.toStringTag, { value: "Module" }));
}
var n = { exports: {} };
(function(l, r) {
  (function(a, t) {
    l.exports = t(p);
  })(f, function(a) {
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var s = t(a), i = "sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"), o = "sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split("_"), Y = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/, M = function(e, _) {
      return Y.test(_) ? i[e.month()] : o[e.month()];
    };
    M.s = o, M.f = i;
    var d = { name: "lt", weekdays: "sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"), weekdaysShort: "sek_pir_ant_tre_ket_pen_šeš".split("_"), weekdaysMin: "s_p_a_t_k_pn_š".split("_"), months: M, monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"), ordinal: function(e) {
      return e + ".";
    }, weekStart: 1, relativeTime: { future: "už %s", past: "prieš %s", s: "kelias sekundes", m: "minutę", mm: "%d minutes", h: "valandą", hh: "%d valandas", d: "dieną", dd: "%d dienas", M: "mėnesį", MM: "%d mėnesius", y: "metus", yy: "%d metus" }, format: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "YYYY [m.] MMMM D [d.]", LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]", LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]", l: "YYYY-MM-DD", ll: "YYYY [m.] MMMM D [d.]", lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]", llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]" }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "YYYY [m.] MMMM D [d.]", LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]", LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]", l: "YYYY-MM-DD", ll: "YYYY [m.] MMMM D [d.]", lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]", llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]" } };
    return s.default.locale(d, null, !0), d;
  });
})(n);
var m = n.exports;
const g = /* @__PURE__ */ u(m), H = /* @__PURE__ */ D({
  __proto__: null,
  default: g
}, [m]);
export {
  H as l
};
