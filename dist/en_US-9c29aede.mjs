import { g as s } from "./index-43e0371a.mjs";
import { e as c } from "./en_US-375111a8.mjs";
function i(r, a) {
  for (var o = 0; o < a.length; o++) {
    const e = a[o];
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
var f = c;
const p = /* @__PURE__ */ s(f), u = /* @__PURE__ */ i({
  __proto__: null,
  default: p
}, [f]);
export {
  u as e
};
