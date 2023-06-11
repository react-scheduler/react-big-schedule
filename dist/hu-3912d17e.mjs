import { g as f, d as m, c as d } from "./index-43e0371a.mjs";
function l(_, i) {
  for (var u = 0; u < i.length; u++) {
    const o = i[u];
    if (typeof o != "string" && !Array.isArray(o)) {
      for (const s in o)
        if (s !== "default" && !(s in _)) {
          const a = Object.getOwnPropertyDescriptor(o, s);
          a && Object.defineProperty(_, s, a.get ? a : {
            enumerable: !0,
            get: () => o[s]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(_, Symbol.toStringTag, { value: "Module" }));
}
var c = { exports: {} };
(function(_, i) {
  (function(u, o) {
    _.exports = o(m);
  })(d, function(u) {
    function o(t) {
      return t && typeof t == "object" && "default" in t ? t : { default: t };
    }
    var s = o(u), a = { name: "hu", weekdays: "vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"), weekdaysShort: "vas_hét_kedd_sze_csüt_pén_szo".split("_"), weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"), months: "január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"), monthsShort: "jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec".split("_"), ordinal: function(t) {
      return t + ".";
    }, weekStart: 1, relativeTime: { future: "%s múlva", past: "%s", s: function(t, e, n, r) {
      return "néhány másodperc" + (r || e ? "" : "e");
    }, m: function(t, e, n, r) {
      return "egy perc" + (r || e ? "" : "e");
    }, mm: function(t, e, n, r) {
      return t + " perc" + (r || e ? "" : "e");
    }, h: function(t, e, n, r) {
      return "egy " + (r || e ? "óra" : "órája");
    }, hh: function(t, e, n, r) {
      return t + " " + (r || e ? "óra" : "órája");
    }, d: function(t, e, n, r) {
      return "egy " + (r || e ? "nap" : "napja");
    }, dd: function(t, e, n, r) {
      return t + " " + (r || e ? "nap" : "napja");
    }, M: function(t, e, n, r) {
      return "egy " + (r || e ? "hónap" : "hónapja");
    }, MM: function(t, e, n, r) {
      return t + " " + (r || e ? "hónap" : "hónapja");
    }, y: function(t, e, n, r) {
      return "egy " + (r || e ? "év" : "éve");
    }, yy: function(t, e, n, r) {
      return t + " " + (r || e ? "év" : "éve");
    } }, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "YYYY.MM.DD.", LL: "YYYY. MMMM D.", LLL: "YYYY. MMMM D. H:mm", LLLL: "YYYY. MMMM D., dddd H:mm" } };
    return s.default.locale(a, null, !0), a;
  });
})(c);
var p = c.exports;
const h = /* @__PURE__ */ f(p), y = /* @__PURE__ */ l({
  __proto__: null,
  default: h
}, [p]);
export {
  y as h
};
