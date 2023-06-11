import { g as i, d as l, c as f } from "./index-43e0371a.mjs";
function m(s, n) {
  for (var _ = 0; _ < n.length; _++) {
    const t = n[_];
    if (typeof t != "string" && !Array.isArray(t)) {
      for (const e in t)
        if (e !== "default" && !(e in s)) {
          const o = Object.getOwnPropertyDescriptor(t, e);
          o && Object.defineProperty(s, e, o.get ? o : {
            enumerable: !0,
            get: () => t[e]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(s, Symbol.toStringTag, { value: "Module" }));
}
var a = { exports: {} };
(function(s, n) {
  (function(_, t) {
    s.exports = t(l);
  })(f, function(_) {
    function t(r) {
      return r && typeof r == "object" && "default" in r ? r : { default: r };
    }
    var e = t(_), o = { name: "te", weekdays: "ఆదివారం_సోమవారం_మంగళవారం_బుధవారం_గురువారం_శుక్రవారం_శనివారం".split("_"), months: "జనవరి_ఫిబ్రవరి_మార్చి_ఏప్రిల్_మే_జూన్_జులై_ఆగస్టు_సెప్టెంబర్_అక్టోబర్_నవంబర్_డిసెంబర్".split("_"), weekdaysShort: "ఆది_సోమ_మంగళ_బుధ_గురు_శుక్ర_శని".split("_"), monthsShort: "జన._ఫిబ్ర._మార్చి_ఏప్రి._మే_జూన్_జులై_ఆగ._సెప్._అక్టో._నవ._డిసె.".split("_"), weekdaysMin: "ఆ_సో_మం_బు_గు_శు_శ".split("_"), ordinal: function(r) {
      return r;
    }, formats: { LT: "A h:mm", LTS: "A h:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm", LLLL: "dddd, D MMMM YYYY, A h:mm" }, relativeTime: { future: "%s లో", past: "%s క్రితం", s: "కొన్ని క్షణాలు", m: "ఒక నిమిషం", mm: "%d నిమిషాలు", h: "ఒక గంట", hh: "%d గంటలు", d: "ఒక రోజు", dd: "%d రోజులు", M: "ఒక నెల", MM: "%d నెలలు", y: "ఒక సంవత్సరం", yy: "%d సంవత్సరాలు" } };
    return e.default.locale(o, null, !0), o;
  });
})(a);
var d = a.exports;
const u = /* @__PURE__ */ i(d), c = /* @__PURE__ */ m({
  __proto__: null,
  default: u
}, [d]);
export {
  c as t
};
