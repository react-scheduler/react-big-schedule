import { g as s, d as h, c as m } from "./index-43e0371a.mjs";
function c(o, _) {
  for (var j = 0; j < _.length; j++) {
    const a = _[j];
    if (typeof a != "string" && !Array.isArray(a)) {
      for (const t in a)
        if (t !== "default" && !(t in o)) {
          const e = Object.getOwnPropertyDescriptor(a, t);
          e && Object.defineProperty(o, t, e.get ? e : {
            enumerable: !0,
            get: () => a[t]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(o, Symbol.toStringTag, { value: "Module" }));
}
var l = { exports: {} };
(function(o, _) {
  (function(j, a) {
    o.exports = a(h);
  })(m, function(j) {
    function a(r) {
      return r && typeof r == "object" && "default" in r ? r : { default: r };
    }
    var t = a(j), e = { name: "tlh", weekdays: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"), months: "tera’ jar wa’_tera’ jar cha’_tera’ jar wej_tera’ jar loS_tera’ jar vagh_tera’ jar jav_tera’ jar Soch_tera’ jar chorgh_tera’ jar Hut_tera’ jar wa’maH_tera’ jar wa’maH wa’_tera’ jar wa’maH cha’".split("_"), weekStart: 1, weekdaysShort: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"), monthsShort: "jar wa’_jar cha’_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa’maH_jar wa’maH wa’_jar wa’maH cha’".split("_"), weekdaysMin: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"), ordinal: function(r) {
      return r;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" } };
    return t.default.locale(e, null, !0), e;
  });
})(l);
var n = l.exports;
const u = /* @__PURE__ */ s(n), p = /* @__PURE__ */ c({
  __proto__: null,
  default: u
}, [n]);
export {
  p as t
};
