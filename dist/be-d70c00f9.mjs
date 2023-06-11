import { g as l, d as f, c as p } from "./index-43e0371a.mjs";
function u(n, s) {
  for (var _ = 0; _ < s.length; _++) {
    const e = s[_];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const t in e)
        if (t !== "default" && !(t in n)) {
          const o = Object.getOwnPropertyDescriptor(e, t);
          o && Object.defineProperty(n, t, o.get ? o : {
            enumerable: !0,
            get: () => e[t]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
}
var a = { exports: {} };
(function(n, s) {
  (function(_, e) {
    n.exports = e(f);
  })(p, function(_) {
    function e(r) {
      return r && typeof r == "object" && "default" in r ? r : { default: r };
    }
    var t = e(_), o = { name: "be", weekdays: "нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу".split("_"), months: "студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня".split("_"), weekStart: 1, weekdaysShort: "нд_пн_ат_ср_чц_пт_сб".split("_"), monthsShort: "студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж".split("_"), weekdaysMin: "нд_пн_ат_ср_чц_пт_сб".split("_"), ordinal: function(r) {
      return r;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY г.", LLL: "D MMMM YYYY г., HH:mm", LLLL: "dddd, D MMMM YYYY г., HH:mm" } };
    return t.default.locale(o, null, !0), o;
  });
})(a);
var i = a.exports;
const c = /* @__PURE__ */ l(i), d = /* @__PURE__ */ u({
  __proto__: null,
  default: c
}, [i]);
export {
  d as b
};
