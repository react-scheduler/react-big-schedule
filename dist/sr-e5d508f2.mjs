import { g as f, d as g, c as M } from "./index-43e0371a.mjs";
function v(d, m) {
  for (var n = 0; n < m.length; n++) {
    const r = m[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const a in r)
        if (a !== "default" && !(a in d)) {
          const t = Object.getOwnPropertyDescriptor(r, a);
          t && Object.defineProperty(d, a, t.get ? t : {
            enumerable: !0,
            get: () => r[a]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(d, Symbol.toStringTag, { value: "Module" }));
}
var l = { exports: {} };
(function(d, m) {
  (function(n, r) {
    d.exports = r(g);
  })(M, function(n) {
    function r(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var a = r(n), t = { words: { m: ["jedan minut", "jednog minuta"], mm: ["%d minut", "%d minuta", "%d minuta"], h: ["jedan sat", "jednog sata"], hh: ["%d sat", "%d sata", "%d sati"], d: ["jedan dan", "jednog dana"], dd: ["%d dan", "%d dana", "%d dana"], M: ["jedan mesec", "jednog meseca"], MM: ["%d mesec", "%d meseca", "%d meseci"], y: ["jednu godinu", "jedne godine"], yy: ["%d godinu", "%d godine", "%d godina"] }, correctGrammarCase: function(e, o) {
      return e % 10 >= 1 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? e % 10 == 1 ? o[0] : o[1] : o[2];
    }, relativeTimeFormatter: function(e, o, i, p) {
      var s = t.words[i];
      if (i.length === 1)
        return i === "y" && o ? "jedna godina" : p || o ? s[0] : s[1];
      var u = t.correctGrammarCase(e, s);
      return i === "yy" && o && u === "%d godinu" ? e + " godina" : u.replace("%d", e);
    } }, _ = { name: "sr", weekdays: "Nedelja_Ponedeljak_Utorak_Sreda_Četvrtak_Petak_Subota".split("_"), weekdaysShort: "Ned._Pon._Uto._Sre._Čet._Pet._Sub.".split("_"), weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"), months: "Januar_Februar_Mart_April_Maj_Jun_Jul_Avgust_Septembar_Oktobar_Novembar_Decembar".split("_"), monthsShort: "Jan._Feb._Mar._Apr._Maj_Jun_Jul_Avg._Sep._Okt._Nov._Dec.".split("_"), weekStart: 1, relativeTime: { future: "za %s", past: "pre %s", s: "nekoliko sekundi", m: t.relativeTimeFormatter, mm: t.relativeTimeFormatter, h: t.relativeTimeFormatter, hh: t.relativeTimeFormatter, d: t.relativeTimeFormatter, dd: t.relativeTimeFormatter, M: t.relativeTimeFormatter, MM: t.relativeTimeFormatter, y: t.relativeTimeFormatter, yy: t.relativeTimeFormatter }, ordinal: function(e) {
      return e + ".";
    }, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "D. M. YYYY.", LL: "D. MMMM YYYY.", LLL: "D. MMMM YYYY. H:mm", LLLL: "dddd, D. MMMM YYYY. H:mm" } };
    return a.default.locale(_, null, !0), _;
  });
})(l);
var c = l.exports;
const j = /* @__PURE__ */ f(c), b = /* @__PURE__ */ v({
  __proto__: null,
  default: j
}, [c]);
export {
  b as s
};
