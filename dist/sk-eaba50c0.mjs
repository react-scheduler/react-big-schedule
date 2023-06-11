import { g as f, d as k, c as M } from "./index-43e0371a.mjs";
function y(u, _) {
  for (var m = 0; m < _.length; m++) {
    const a = _[m];
    if (typeof a != "string" && !Array.isArray(a)) {
      for (const i in a)
        if (i !== "default" && !(i in u)) {
          const o = Object.getOwnPropertyDescriptor(a, i);
          o && Object.defineProperty(u, i, o.get ? o : {
            enumerable: !0,
            get: () => a[i]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(u, Symbol.toStringTag, { value: "Module" }));
}
var c = { exports: {} };
(function(u, _) {
  (function(m, a) {
    u.exports = a(k);
  })(M, function(m) {
    function a(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var i = a(m);
    function o(e) {
      return e > 1 && e < 5 && ~~(e / 10) != 1;
    }
    function r(e, t, l, n) {
      var s = e + " ";
      switch (l) {
        case "s":
          return t || n ? "pár sekúnd" : "pár sekundami";
        case "m":
          return t ? "minúta" : n ? "minútu" : "minútou";
        case "mm":
          return t || n ? s + (o(e) ? "minúty" : "minút") : s + "minútami";
        case "h":
          return t ? "hodina" : n ? "hodinu" : "hodinou";
        case "hh":
          return t || n ? s + (o(e) ? "hodiny" : "hodín") : s + "hodinami";
        case "d":
          return t || n ? "deň" : "dňom";
        case "dd":
          return t || n ? s + (o(e) ? "dni" : "dní") : s + "dňami";
        case "M":
          return t || n ? "mesiac" : "mesiacom";
        case "MM":
          return t || n ? s + (o(e) ? "mesiace" : "mesiacov") : s + "mesiacmi";
        case "y":
          return t || n ? "rok" : "rokom";
        case "yy":
          return t || n ? s + (o(e) ? "roky" : "rokov") : s + "rokmi";
      }
    }
    var d = { name: "sk", weekdays: "nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"), weekdaysShort: "ne_po_ut_st_št_pi_so".split("_"), weekdaysMin: "ne_po_ut_st_št_pi_so".split("_"), months: "január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_"), monthsShort: "jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_"), weekStart: 1, yearStart: 4, ordinal: function(e) {
      return e + ".";
    }, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd D. MMMM YYYY H:mm", l: "D. M. YYYY" }, relativeTime: { future: "za %s", past: "pred %s", s: r, m: r, mm: r, h: r, hh: r, d: r, dd: r, M: r, MM: r, y: r, yy: r } };
    return i.default.locale(d, null, !0), d;
  });
})(c);
var p = c.exports;
const Y = /* @__PURE__ */ f(p), j = /* @__PURE__ */ y({
  __proto__: null,
  default: Y
}, [p]);
export {
  j as s
};
