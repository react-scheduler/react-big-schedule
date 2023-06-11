import { g as f } from "./index-43e0371a.mjs";
import { c as s } from "./context-8a360554.mjs";
function i(r, c) {
  for (var o = 0; o < c.length; o++) {
    const e = c[o];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const t in e)
        if (t !== "default" && !(t in r)) {
          const n = Object.getOwnPropertyDescriptor(e, t);
          n && Object.defineProperty(r, t, n.get ? n : {
            enumerable: !0,
            get: () => e[t]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(r, Symbol.toStringTag, { value: "Module" }));
}
var a = s;
const p = /* @__PURE__ */ f(a), u = /* @__PURE__ */ i({
  __proto__: null,
  default: p
}, [a]);
export {
  u as c
};
