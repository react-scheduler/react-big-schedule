import { g as l, d as m, c as u } from "./index-43e0371a.mjs";
function d(o, i) {
  for (var a = 0; a < i.length; a++) {
    const e = i[a];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const n in e)
        if (n !== "default" && !(n in o)) {
          const s = Object.getOwnPropertyDescriptor(e, n);
          s && Object.defineProperty(o, n, s.get ? s : {
            enumerable: !0,
            get: () => e[n]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(o, Symbol.toStringTag, { value: "Module" }));
}
var r = { exports: {} };
(function(o, i) {
  (function(a, e) {
    o.exports = e(m);
  })(u, function(a) {
    function e(t) {
      return t && typeof t == "object" && "default" in t ? t : { default: t };
    }
    var n = e(a), s = { name: "ss", weekdays: "Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo".split("_"), months: "Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split("_"), weekStart: 1, weekdaysShort: "Lis_Umb_Lsb_Les_Lsi_Lsh_Umg".split("_"), monthsShort: "Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo".split("_"), weekdaysMin: "Li_Us_Lb_Lt_Ls_Lh_Ug".split("_"), ordinal: function(t) {
      return t;
    }, formats: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" }, relativeTime: { future: "nga %s", past: "wenteka nga %s", s: "emizuzwana lomcane", m: "umzuzu", mm: "%d emizuzu", h: "lihora", hh: "%d emahora", d: "lilanga", dd: "%d emalanga", M: "inyanga", MM: "%d tinyanga", y: "umnyaka", yy: "%d iminyaka" } };
    return n.default.locale(s, null, !0), s;
  });
})(r);
var _ = r.exports;
const L = /* @__PURE__ */ l(_), h = /* @__PURE__ */ d({
  __proto__: null,
  default: L
}, [_]);
export {
  h as s
};
