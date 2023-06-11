import { g as i, d as u, c as l } from "./index-43e0371a.mjs";
function p(n, _) {
  for (var r = 0; r < _.length; r++) {
    const e = _[r];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const t in e)
        if (t !== "default" && !(t in n)) {
          const s = Object.getOwnPropertyDescriptor(e, t);
          s && Object.defineProperty(n, t, s.get ? s : {
            enumerable: !0,
            get: () => e[t]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
}
var o = { exports: {} };
(function(n, _) {
  (function(r, e) {
    n.exports = e(u);
  })(l, function(r) {
    function e(a) {
      return a && typeof a == "object" && "default" in a ? a : { default: a };
    }
    var t = e(r), s = { name: "ms-my", weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"), months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"), weekStart: 1, weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"), monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"), weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"), ordinal: function(a) {
      return a;
    }, formats: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [pukul] HH.mm", LLLL: "dddd, D MMMM YYYY [pukul] HH.mm" }, relativeTime: { future: "dalam %s", past: "%s yang lepas", s: "beberapa saat", m: "seminit", mm: "%d minit", h: "sejam", hh: "%d jam", d: "sehari", dd: "%d hari", M: "sebulan", MM: "%d bulan", y: "setahun", yy: "%d tahun" } };
    return t.default.locale(s, null, !0), s;
  });
})(o);
var m = o.exports;
const d = /* @__PURE__ */ i(m), f = /* @__PURE__ */ p({
  __proto__: null,
  default: d
}, [m]);
export {
  f as m
};
