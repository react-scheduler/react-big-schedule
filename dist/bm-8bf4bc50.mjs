import { g as s, d as u, c as m } from "./index-43e0371a.mjs";
function d(l, n) {
  for (var r = 0; r < n.length; r++) {
    const e = n[r];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const t in e)
        if (t !== "default" && !(t in l)) {
          const o = Object.getOwnPropertyDescriptor(e, t);
          o && Object.defineProperty(l, t, o.get ? o : {
            enumerable: !0,
            get: () => e[t]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(l, Symbol.toStringTag, { value: "Module" }));
}
var i = { exports: {} };
(function(l, n) {
  (function(r, e) {
    l.exports = e(u);
  })(m, function(r) {
    function e(a) {
      return a && typeof a == "object" && "default" in a ? a : { default: a };
    }
    var t = e(r), o = { name: "bm", weekdays: "Kari_Ntɛnɛn_Tarata_Araba_Alamisa_Juma_Sibiri".split("_"), months: "Zanwuyekalo_Fewuruyekalo_Marisikalo_Awirilikalo_Mɛkalo_Zuwɛnkalo_Zuluyekalo_Utikalo_Sɛtanburukalo_ɔkutɔburukalo_Nowanburukalo_Desanburukalo".split("_"), weekStart: 1, weekdaysShort: "Kar_Ntɛ_Tar_Ara_Ala_Jum_Sib".split("_"), monthsShort: "Zan_Few_Mar_Awi_Mɛ_Zuw_Zul_Uti_Sɛt_ɔku_Now_Des".split("_"), weekdaysMin: "Ka_Nt_Ta_Ar_Al_Ju_Si".split("_"), ordinal: function(a) {
      return a;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "MMMM [tile] D [san] YYYY", LLL: "MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm", LLLL: "dddd MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm" }, relativeTime: { future: "%s kɔnɔ", past: "a bɛ %s bɔ", s: "sanga dama dama", m: "miniti kelen", mm: "miniti %d", h: "lɛrɛ kelen", hh: "lɛrɛ %d", d: "tile kelen", dd: "tile %d", M: "kalo kelen", MM: "kalo %d", y: "san kelen", yy: "san %d" } };
    return t.default.locale(o, null, !0), o;
  });
})(i);
var _ = i.exports;
const k = /* @__PURE__ */ s(_), b = /* @__PURE__ */ d({
  __proto__: null,
  default: k
}, [_]);
export {
  b
};
