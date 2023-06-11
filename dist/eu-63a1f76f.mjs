import { g as i, d as s, c as d } from "./index-43e0371a.mjs";
function m(u, l) {
  for (var r = 0; r < l.length; r++) {
    const a = l[r];
    if (typeof a != "string" && !Array.isArray(a)) {
      for (const e in a)
        if (e !== "default" && !(e in u)) {
          const o = Object.getOwnPropertyDescriptor(a, e);
          o && Object.defineProperty(u, e, o.get ? o : {
            enumerable: !0,
            get: () => a[e]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(u, Symbol.toStringTag, { value: "Module" }));
}
var n = { exports: {} };
(function(u, l) {
  (function(r, a) {
    u.exports = a(s);
  })(d, function(r) {
    function a(t) {
      return t && typeof t == "object" && "default" in t ? t : { default: t };
    }
    var e = a(r), o = { name: "eu", weekdays: "igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"), months: "urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"), weekStart: 1, weekdaysShort: "ig._al._ar._az._og._ol._lr.".split("_"), monthsShort: "urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"), weekdaysMin: "ig_al_ar_az_og_ol_lr".split("_"), ordinal: function(t) {
      return t;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "YYYY[ko] MMMM[ren] D[a]", LLL: "YYYY[ko] MMMM[ren] D[a] HH:mm", LLLL: "dddd, YYYY[ko] MMMM[ren] D[a] HH:mm", l: "YYYY-M-D", ll: "YYYY[ko] MMM D[a]", lll: "YYYY[ko] MMM D[a] HH:mm", llll: "ddd, YYYY[ko] MMM D[a] HH:mm" }, relativeTime: { future: "%s barru", past: "duela %s", s: "segundo batzuk", m: "minutu bat", mm: "%d minutu", h: "ordu bat", hh: "%d ordu", d: "egun bat", dd: "%d egun", M: "hilabete bat", MM: "%d hilabete", y: "urte bat", yy: "%d urte" } };
    return e.default.locale(o, null, !0), o;
  });
})(n);
var _ = n.exports;
const Y = /* @__PURE__ */ i(_), f = /* @__PURE__ */ m({
  __proto__: null,
  default: Y
}, [_]);
export {
  f as e
};
