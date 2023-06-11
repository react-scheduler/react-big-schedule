import { g as m, d as l, c as u } from "./index-43e0371a.mjs";
function p(o, d) {
  for (var s = 0; s < d.length; s++) {
    const t = d[s];
    if (typeof t != "string" && !Array.isArray(t)) {
      for (const r in t)
        if (r !== "default" && !(r in o)) {
          const _ = Object.getOwnPropertyDescriptor(t, r);
          _ && Object.defineProperty(o, r, _.get ? _ : {
            enumerable: !0,
            get: () => t[r]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(o, Symbol.toStringTag, { value: "Module" }));
}
var n = { exports: {} };
(function(o, d) {
  (function(s, t) {
    o.exports = t(l);
  })(u, function(s) {
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var r = t(s), _ = { name: "x-pseudo", weekdays: "S~úñdá~ý_Mó~ñdáý~_Túé~sdáý~_Wéd~ñésd~áý_T~húrs~dáý_~Fríd~áý_S~átúr~dáý".split("_"), months: "J~áñúá~rý_F~ébrú~árý_~Márc~h_Áp~ríl_~Máý_~Júñé~_Júl~ý_Áú~gúst~_Sép~témb~ér_Ó~ctób~ér_Ñ~óvém~bér_~Décé~mbér".split("_"), weekStart: 1, weekdaysShort: "S~úñ_~Móñ_~Túé_~Wéd_~Thú_~Frí_~Sát".split("_"), monthsShort: "J~áñ_~Féb_~Már_~Ápr_~Máý_~Júñ_~Júl_~Áúg_~Sép_~Óct_~Ñóv_~Déc".split("_"), weekdaysMin: "S~ú_Mó~_Tú_~Wé_T~h_Fr~_Sá".split("_"), ordinal: function(e) {
      return e;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, relativeTime: { future: "í~ñ %s", past: "%s á~gó", s: "á ~féw ~sécó~ñds", m: "á ~míñ~úté", mm: "%d m~íñú~tés", h: "á~ñ hó~úr", hh: "%d h~óúrs", d: "á ~dáý", dd: "%d d~áýs", M: "á ~móñ~th", MM: "%d m~óñt~hs", y: "á ~ýéár", yy: "%d ý~éárs" } };
    return r.default.locale(_, null, !0), _;
  });
})(n);
var a = n.exports;
const c = /* @__PURE__ */ m(a), f = /* @__PURE__ */ p({
  __proto__: null,
  default: c
}, [a]);
export {
  f as x
};
