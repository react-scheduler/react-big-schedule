import { g as Y, d as y, c as h } from "./index-43e0371a.mjs";
function c(i, s) {
  for (var a = 0; a < s.length; a++) {
    const u = s[a];
    if (typeof u != "string" && !Array.isArray(u)) {
      for (const n in u)
        if (n !== "default" && !(n in i)) {
          const t = Object.getOwnPropertyDescriptor(u, n);
          t && Object.defineProperty(i, n, t.get ? t : {
            enumerable: !0,
            get: () => u[n]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(i, Symbol.toStringTag, { value: "Module" }));
}
var l = { exports: {} };
(function(i, s) {
  (function(a, u) {
    i.exports = u(y);
  })(h, function(a) {
    function u(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var n = u(a);
    function t(e, k, d, p) {
      var M = { s: "muutama sekunti", m: "minuutti", mm: "%d minuuttia", h: "tunti", hh: "%d tuntia", d: "päivä", dd: "%d päivää", M: "kuukausi", MM: "%d kuukautta", y: "vuosi", yy: "%d vuotta", numbers: "nolla_yksi_kaksi_kolme_neljä_viisi_kuusi_seitsemän_kahdeksan_yhdeksän".split("_") }, f = { s: "muutaman sekunnin", m: "minuutin", mm: "%d minuutin", h: "tunnin", hh: "%d tunnin", d: "päivän", dd: "%d päivän", M: "kuukauden", MM: "%d kuukauden", y: "vuoden", yy: "%d vuoden", numbers: "nollan_yhden_kahden_kolmen_neljän_viiden_kuuden_seitsemän_kahdeksan_yhdeksän".split("_") }, _ = p && !k ? f : M, r = _[d];
      return e < 10 ? r.replace("%d", _.numbers[e]) : r.replace("%d", e);
    }
    var o = { name: "fi", weekdays: "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"), weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"), weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"), months: "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"), monthsShort: "tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split("_"), ordinal: function(e) {
      return e + ".";
    }, weekStart: 1, yearStart: 4, relativeTime: { future: "%s päästä", past: "%s sitten", s: t, m: t, mm: t, h: t, hh: t, d: t, dd: t, M: t, MM: t, y: t, yy: t }, formats: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD.MM.YYYY", LL: "D. MMMM[ta] YYYY", LLL: "D. MMMM[ta] YYYY, [klo] HH.mm", LLLL: "dddd, D. MMMM[ta] YYYY, [klo] HH.mm", l: "D.M.YYYY", ll: "D. MMM YYYY", lll: "D. MMM YYYY, [klo] HH.mm", llll: "ddd, D. MMM YYYY, [klo] HH.mm" } };
    return n.default.locale(o, null, !0), o;
  });
})(l);
var m = l.exports;
const v = /* @__PURE__ */ Y(m), H = /* @__PURE__ */ c({
  __proto__: null,
  default: v
}, [m]);
export {
  H as f
};
