import { g as n } from "./index-43e0371a.mjs";
import { u } from "./useLocale-e3a8c1ca.mjs";
function f(r, s) {
  for (var o = 0; o < s.length; o++) {
    const e = s[o];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const t in e)
        if (t !== "default" && !(t in r)) {
          const a = Object.getOwnPropertyDescriptor(e, t);
          a && Object.defineProperty(r, t, a.get ? a : {
            enumerable: !0,
            get: () => e[t]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(r, Symbol.toStringTag, { value: "Module" }));
}
var c = u;
const l = /* @__PURE__ */ n(c), g = /* @__PURE__ */ f({
  __proto__: null,
  default: l
}, [c]);
export {
  g as u
};
