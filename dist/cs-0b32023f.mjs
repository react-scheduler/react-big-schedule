import { g as f, d as y, c as M } from "./index-43e0371a.mjs";
function Y(c, d) {
  for (var _ = 0; _ < d.length; _++) {
    const o = d[_];
    if (typeof o != "string" && !Array.isArray(o)) {
      for (const u in o)
        if (u !== "default" && !(u in c)) {
          const a = Object.getOwnPropertyDescriptor(o, u);
          a && Object.defineProperty(c, u, a.get ? a : {
            enumerable: !0,
            get: () => o[u]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(c, Symbol.toStringTag, { value: "Module" }));
}
var m = { exports: {} };
(function(c, d) {
  (function(_, o) {
    c.exports = o(y);
  })(M, function(_) {
    function o(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var u = o(_);
    function a(e) {
      return e > 1 && e < 5 && ~~(e / 10) != 1;
    }
    function t(e, r, l, n) {
      var s = e + " ";
      switch (l) {
        case "s":
          return r || n ? "pár sekund" : "pár sekundami";
        case "m":
          return r ? "minuta" : n ? "minutu" : "minutou";
        case "mm":
          return r || n ? s + (a(e) ? "minuty" : "minut") : s + "minutami";
        case "h":
          return r ? "hodina" : n ? "hodinu" : "hodinou";
        case "hh":
          return r || n ? s + (a(e) ? "hodiny" : "hodin") : s + "hodinami";
        case "d":
          return r || n ? "den" : "dnem";
        case "dd":
          return r || n ? s + (a(e) ? "dny" : "dní") : s + "dny";
        case "M":
          return r || n ? "měsíc" : "měsícem";
        case "MM":
          return r || n ? s + (a(e) ? "měsíce" : "měsíců") : s + "měsíci";
        case "y":
          return r || n ? "rok" : "rokem";
        case "yy":
          return r || n ? s + (a(e) ? "roky" : "let") : s + "lety";
      }
    }
    var i = { name: "cs", weekdays: "neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"), weekdaysShort: "ne_po_út_st_čt_pá_so".split("_"), weekdaysMin: "ne_po_út_st_čt_pá_so".split("_"), months: "leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_"), monthsShort: "led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_"), weekStart: 1, yearStart: 4, ordinal: function(e) {
      return e + ".";
    }, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd D. MMMM YYYY H:mm", l: "D. M. YYYY" }, relativeTime: { future: "za %s", past: "před %s", s: t, m: t, mm: t, h: t, hh: t, d: t, dd: t, M: t, MM: t, y: t, yy: t } };
    return u.default.locale(i, null, !0), i;
  });
})(m);
var p = m.exports;
const h = /* @__PURE__ */ f(p), k = /* @__PURE__ */ Y({
  __proto__: null,
  default: h
}, [p]);
export {
  k as c
};
