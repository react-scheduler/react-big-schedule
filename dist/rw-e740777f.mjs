import { g as m, d, c as f } from "./index-43e0371a.mjs";
function _(o, u) {
  for (var r = 0; r < u.length; r++) {
    const a = u[r];
    if (typeof a != "string" && !Array.isArray(a)) {
      for (const e in a)
        if (e !== "default" && !(e in o)) {
          const n = Object.getOwnPropertyDescriptor(a, e);
          n && Object.defineProperty(o, e, n.get ? n : {
            enumerable: !0,
            get: () => a[e]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(o, Symbol.toStringTag, { value: "Module" }));
}
var s = { exports: {} };
(function(o, u) {
  (function(r, a) {
    o.exports = a(d);
  })(f, function(r) {
    function a(t) {
      return t && typeof t == "object" && "default" in t ? t : { default: t };
    }
    var e = a(r), n = { name: "rw", weekdays: "Ku Cyumweru_Kuwa Mbere_Kuwa Kabiri_Kuwa Gatatu_Kuwa Kane_Kuwa Gatanu_Kuwa Gatandatu".split("_"), months: "Mutarama_Gashyantare_Werurwe_Mata_Gicurasi_Kamena_Nyakanga_Kanama_Nzeri_Ukwakira_Ugushyingo_Ukuboza".split("_"), relativeTime: { future: "mu %s", past: "%s", s: "amasegonda", m: "Umunota", mm: "%d iminota", h: "isaha", hh: "%d amasaha", d: "Umunsi", dd: "%d iminsi", M: "ukwezi", MM: "%d amezi", y: "umwaka", yy: "%d imyaka" }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, ordinal: function(t) {
      return t;
    } };
    return e.default.locale(n, null, !0), n;
  });
})(s);
var i = s.exports;
const l = /* @__PURE__ */ m(i), M = /* @__PURE__ */ _({
  __proto__: null,
  default: l
}, [i]);
export {
  M as r
};
