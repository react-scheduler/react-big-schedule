import { g as $ } from "./index-43e0371a.mjs";
import { i as m } from "./interopRequireDefault-40f894e3.mjs";
import { i as N, u as V } from "./useLocale-e3a8c1ca.mjs";
import q from "react";
import { e as T } from "./en_US-375111a8.mjs";
import { c as K } from "./context-8a360554.mjs";
function S(e, r) {
  for (var t = 0; t < r.length; t++) {
    const n = r[t];
    if (typeof n != "string" && !Array.isArray(n)) {
      for (const o in n)
        if (o !== "default" && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(n, o);
          i && Object.defineProperty(e, o, i.get ? i : {
            enumerable: !0,
            get: () => n[o]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
var b = {}, E = {}, a = {};
Object.defineProperty(a, "__esModule", {
  value: !0
});
a.call = g;
a.default = void 0;
a.note = P;
a.noteOnce = w;
a.preMessage = void 0;
a.resetWarned = y;
a.warning = j;
a.warningOnce = u;
var p = {}, _ = [], M = function(r) {
  _.push(r);
};
a.preMessage = M;
function j(e, r) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var t = _.reduce(function(n, o) {
      return o(n ?? "", "warning");
    }, r);
    t && console.error("Warning: ".concat(t));
  }
}
function P(e, r) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var t = _.reduce(function(n, o) {
      return o(n ?? "", "note");
    }, r);
    t && console.warn("Note: ".concat(t));
  }
}
function y() {
  p = {};
}
function g(e, r, t) {
  !r && !p[t] && (e(!1, t), p[t] = !0);
}
function u(e, r) {
  g(j, e, r);
}
function w(e, r) {
  g(P, e, r);
}
u.preMessage = M;
u.resetWarned = y;
u.noteOnce = w;
var k = u;
a.default = k;
(function(e) {
  var r = N.default;
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = void 0, e.noop = n, Object.defineProperty(e, "resetWarned", {
    enumerable: !0,
    get: function() {
      return t.resetWarned;
    }
  });
  var t = r(a);
  function n() {
  }
  let o = n;
  process.env.NODE_ENV !== "production" && (o = (s, v, l) => {
    (0, t.default)(s, `[antd: ${v}] ${l}`), process.env.NODE_ENV === "test" && (0, t.resetWarned)();
  });
  var i = o;
  e.default = i;
})(E);
var f = {}, z = m.default;
Object.defineProperty(f, "__esModule", {
  value: !0
});
f.changeConfirmLocale = F;
f.getConfirmLocale = U;
var L = z(T);
let d = Object.assign({}, L.default.Modal);
function F(e) {
  e ? d = Object.assign(Object.assign({}, d), e) : d = Object.assign({}, L.default.Modal);
}
function U() {
  return d;
}
(function(e) {
  var r = m.default, t = N.default;
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = e.ANT_MARK = void 0, Object.defineProperty(e, "useLocale", {
    enumerable: !0,
    get: function() {
      return v.default;
    }
  });
  var n = t(q), o = r(E), i = f, s = r(K), v = r(V);
  const l = "internalMark";
  e.ANT_MARK = l;
  const O = (W) => {
    const {
      locale: c = {},
      children: A,
      _ANT_MARK__: h
    } = W;
    process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && (0, o.default)(h === l, "LocaleProvider", "`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead: http://u.ant.design/locale"), n.useEffect(() => ((0, i.changeConfirmLocale)(c && c.Modal), () => {
      (0, i.changeConfirmLocale)();
    }), [c]);
    const C = n.useMemo(() => Object.assign(Object.assign({}, c), {
      exist: !0
    }), [c]);
    return /* @__PURE__ */ n.createElement(s.default.Provider, {
      value: C
    }, A);
  };
  process.env.NODE_ENV !== "production" && (O.displayName = "LocaleProvider");
  var R = O;
  e.default = R;
})(b);
var D = b;
const x = /* @__PURE__ */ $(D), X = /* @__PURE__ */ S({
  __proto__: null,
  default: x
}, [D]);
export {
  X as i
};
