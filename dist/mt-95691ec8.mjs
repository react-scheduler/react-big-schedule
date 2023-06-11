import { g as u, d as m, c as l } from "./index-43e0371a.mjs";
function d(_, i) {
  for (var a = 0; a < i.length; a++) {
    const t = i[a];
    if (typeof t != "string" && !Array.isArray(t)) {
      for (const e in t)
        if (e !== "default" && !(e in _)) {
          const n = Object.getOwnPropertyDescriptor(t, e);
          n && Object.defineProperty(_, e, n.get ? n : {
            enumerable: !0,
            get: () => t[e]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(_, Symbol.toStringTag, { value: "Module" }));
}
var o = { exports: {} };
(function(_, i) {
  (function(a, t) {
    _.exports = t(m);
  })(l, function(a) {
    function t(r) {
      return r && typeof r == "object" && "default" in r ? r : { default: r };
    }
    var e = t(a), n = { name: "mt", weekdays: "Il-Ħadd_It-Tnejn_It-Tlieta_L-Erbgħa_Il-Ħamis_Il-Ġimgħa_Is-Sibt".split("_"), months: "Jannar_Frar_Marzu_April_Mejju_Ġunju_Lulju_Awwissu_Settembru_Ottubru_Novembru_Diċembru".split("_"), weekStart: 1, weekdaysShort: "Ħad_Tne_Tli_Erb_Ħam_Ġim_Sib".split("_"), monthsShort: "Jan_Fra_Mar_Apr_Mej_Ġun_Lul_Aww_Set_Ott_Nov_Diċ".split("_"), weekdaysMin: "Ħa_Tn_Tl_Er_Ħa_Ġi_Si".split("_"), ordinal: function(r) {
      return r;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, relativeTime: { future: "f’ %s", past: "%s ilu", s: "ftit sekondi", m: "minuta", mm: "%d minuti", h: "siegħa", hh: "%d siegħat", d: "ġurnata", dd: "%d ġranet", M: "xahar", MM: "%d xhur", y: "sena", yy: "%d sni" } };
    return e.default.locale(n, null, !0), n;
  });
})(o);
var s = o.exports;
const f = /* @__PURE__ */ u(s), M = /* @__PURE__ */ d({
  __proto__: null,
  default: f
}, [s]);
export {
  M as m
};
