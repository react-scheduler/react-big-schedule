import { g as d, d as i, c as f } from "./index-43e0371a.mjs";
function m(s, n) {
  for (var r = 0; r < n.length; r++) {
    const t = n[r];
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
  (function(r, t) {
    s.exports = t(i);
  })(f, function(r) {
    function t(_) {
      return _ && typeof _ == "object" && "default" in _ ? _ : { default: _ };
    }
    var e = t(r), o = { name: "el", weekdays: "Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο".split("_"), weekdaysShort: "Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ".split("_"), weekdaysMin: "Κυ_Δε_Τρ_Τε_Πε_Πα_Σα".split("_"), months: "Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος".split("_"), monthsShort: "Ιαν_Φεβ_Μαρ_Απρ_Μαι_Ιουν_Ιουλ_Αυγ_Σεπτ_Οκτ_Νοε_Δεκ".split("_"), ordinal: function(_) {
      return _;
    }, weekStart: 1, relativeTime: { future: "σε %s", past: "πριν %s", s: "μερικά δευτερόλεπτα", m: "ένα λεπτό", mm: "%d λεπτά", h: "μία ώρα", hh: "%d ώρες", d: "μία μέρα", dd: "%d μέρες", M: "ένα μήνα", MM: "%d μήνες", y: "ένα χρόνο", yy: "%d χρόνια" }, formats: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" } };
    return e.default.locale(o, null, !0), o;
  });
})(a);
var l = a.exports;
const u = /* @__PURE__ */ d(l), c = /* @__PURE__ */ m({
  __proto__: null,
  default: u
}, [l]);
export {
  c as e
};
