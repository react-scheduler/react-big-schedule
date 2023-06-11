import { g as i, d as l, c as f } from "./index-43e0371a.mjs";
function p(n, s) {
  for (var _ = 0; _ < s.length; _++) {
    const t = s[_];
    if (typeof t != "string" && !Array.isArray(t)) {
      for (const e in t)
        if (e !== "default" && !(e in n)) {
          const o = Object.getOwnPropertyDescriptor(t, e);
          o && Object.defineProperty(n, e, o.get ? o : {
            enumerable: !0,
            get: () => t[e]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
}
var a = { exports: {} };
(function(n, s) {
  (function(_, t) {
    n.exports = t(l);
  })(f, function(_) {
    function t(r) {
      return r && typeof r == "object" && "default" in r ? r : { default: r };
    }
    var e = t(_), o = { name: "cv", weekdays: "вырсарникун_тунтикун_ытларикун_юнкун_кӗҫнерникун_эрнекун_шӑматкун".split("_"), months: "кӑрлач_нарӑс_пуш_ака_май_ҫӗртме_утӑ_ҫурла_авӑн_юпа_чӳк_раштав".split("_"), weekStart: 1, weekdaysShort: "выр_тун_ытл_юн_кӗҫ_эрн_шӑм".split("_"), monthsShort: "кӑр_нар_пуш_ака_май_ҫӗр_утӑ_ҫур_авн_юпа_чӳк_раш".split("_"), weekdaysMin: "вр_тн_ыт_юн_кҫ_эр_шм".split("_"), ordinal: function(r) {
      return r;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD-MM-YYYY", LL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ]", LLL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm", LLLL: "dddd, YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm" } };
    return e.default.locale(o, null, !0), o;
  });
})(a);
var c = a.exports;
const u = /* @__PURE__ */ i(c), d = /* @__PURE__ */ p({
  __proto__: null,
  default: u
}, [c]);
export {
  d as c
};
