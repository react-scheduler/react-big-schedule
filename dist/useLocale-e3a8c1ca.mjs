import { i as y } from "./interopRequireDefault-40f894e3.mjs";
import O from "react";
import { c as g } from "./context-8a360554.mjs";
import { e as M } from "./en_US-375111a8.mjs";
var v = { exports: {} }, x = { exports: {} };
(function(t) {
  function i(r) {
    "@babel/helpers - typeof";
    return t.exports = i = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
      return typeof n;
    } : function(n) {
      return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
    }, t.exports.__esModule = !0, t.exports.default = t.exports, i(r);
  }
  t.exports = i, t.exports.__esModule = !0, t.exports.default = t.exports;
})(x);
var h = x.exports;
(function(t) {
  var i = h.default;
  function r(e) {
    if (typeof WeakMap != "function")
      return null;
    var o = /* @__PURE__ */ new WeakMap(), a = /* @__PURE__ */ new WeakMap();
    return (r = function(f) {
      return f ? a : o;
    })(e);
  }
  function n(e, o) {
    if (!o && e && e.__esModule)
      return e;
    if (e === null || i(e) !== "object" && typeof e != "function")
      return {
        default: e
      };
    var a = r(o);
    if (a && a.has(e))
      return a.get(e);
    var u = {}, f = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var l in e)
      if (l !== "default" && Object.prototype.hasOwnProperty.call(e, l)) {
        var p = f ? Object.getOwnPropertyDescriptor(e, l) : null;
        p && (p.get || p.set) ? Object.defineProperty(u, l, p) : u[l] = e[l];
      }
    return u.default = e, a && a.set(e, u), u;
  }
  t.exports = n, t.exports.__esModule = !0, t.exports.default = t.exports;
})(v);
var q = v.exports, s = {}, _ = y.default, R = q.default;
Object.defineProperty(s, "__esModule", {
  value: !0
});
s.default = void 0;
var c = R(O), W = _(g), d = _(M);
const P = (t, i) => {
  const r = c.useContext(W.default), n = c.useMemo(() => {
    var o;
    const a = i || d.default[t], u = (o = r == null ? void 0 : r[t]) !== null && o !== void 0 ? o : {};
    return Object.assign(Object.assign({}, typeof a == "function" ? a() : a), u || {});
  }, [t, i, r]), e = c.useMemo(() => {
    const o = r == null ? void 0 : r.locale;
    return r != null && r.exist && !o ? d.default.locale : o;
  }, [r]);
  return [n, e];
};
var S = P;
s.default = S;
export {
  q as i,
  s as u
};
