import { g as m, d as y, c as w } from "./index-43e0371a.mjs";
function d(e, i) {
  for (var r = 0; r < i.length; r++) {
    const a = i[r];
    if (typeof a != "string" && !Array.isArray(a)) {
      for (const s in a)
        if (s !== "default" && !(s in e)) {
          const n = Object.getOwnPropertyDescriptor(a, s);
          n && Object.defineProperty(e, s, n.get ? n : {
            enumerable: !0,
            get: () => a[s]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
var _ = { exports: {} };
(function(e, i) {
  (function(r, a) {
    e.exports = a(y);
  })(w, function(r) {
    function a(t) {
      return t && typeof t == "object" && "default" in t ? t : { default: t };
    }
    var s = a(r), n = { name: "tzm-latn", weekdays: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"), months: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"), weekStart: 6, weekdaysShort: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"), monthsShort: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"), weekdaysMin: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"), ordinal: function(t) {
      return t;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, relativeTime: { future: "dadkh s yan %s", past: "yan %s", s: "imik", m: "minuḍ", mm: "%d minuḍ", h: "saɛa", hh: "%d tassaɛin", d: "ass", dd: "%d ossan", M: "ayowr", MM: "%d iyyirn", y: "asgas", yy: "%d isgasn" } };
    return s.default.locale(n, null, !0), n;
  });
})(_);
var o = _.exports;
const l = /* @__PURE__ */ m(o), f = /* @__PURE__ */ d({
  __proto__: null,
  default: l
}, [o]);
export {
  f as t
};
