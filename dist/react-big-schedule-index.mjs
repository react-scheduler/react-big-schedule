var qt = Object.defineProperty;
var Yt = (y, t, e) => t in y ? qt(y, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : y[t] = e;
var M = (y, t, e) => (Yt(y, typeof t != "symbol" ? t + "" : t, e), e);
import st, { Component as _e, createElement as he, useState as $t } from "react";
import u, { PropTypes as oe } from "prop-types";
import { MinusSquareOutlined as Bt, PlusSquareOutlined as Vt, CloseOutlined as Gt, LeftOutlined as Xt, RightOutlined as Ut } from "@ant-design/icons";
import { Row as ue, Col as ee, Popover as He, Radio as it, Calendar as Qt } from "antd";
import { DragSource as Jt, DropTarget as Kt } from "react-dnd";
import je from "moment";
import { rrulestr as ke, RRuleSet as Zt } from "rrule";
var We = { exports: {} }, me = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var et;
function er() {
  if (et)
    return me;
  et = 1;
  var y = st, t = Symbol.for("react.element"), e = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, s = y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(a, d, c) {
    var h, p = {}, f = null, m = null;
    c !== void 0 && (f = "" + c), d.key !== void 0 && (f = "" + d.key), d.ref !== void 0 && (m = d.ref);
    for (h in d)
      r.call(d, h) && !o.hasOwnProperty(h) && (p[h] = d[h]);
    if (a && a.defaultProps)
      for (h in d = a.defaultProps, d)
        p[h] === void 0 && (p[h] = d[h]);
    return { $$typeof: t, type: a, key: f, ref: m, props: p, _owner: s.current };
  }
  return me.Fragment = e, me.jsx = i, me.jsxs = i, me;
}
var ge = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tt;
function tr() {
  return tt || (tt = 1, process.env.NODE_ENV !== "production" && function() {
    var y = st, t = Symbol.for("react.element"), e = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), E = Symbol.iterator, C = "@@iterator";
    function R(n) {
      if (n === null || typeof n != "object")
        return null;
      var g = E && n[E] || n[C];
      return typeof g == "function" ? g : null;
    }
    var x = y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function v(n) {
      {
        for (var g = arguments.length, b = new Array(g > 1 ? g - 1 : 0), I = 1; I < g; I++)
          b[I - 1] = arguments[I];
        T("error", n, b);
      }
    }
    function T(n, g, b) {
      {
        var I = x.ReactDebugCurrentFrame, z = I.getStackAddendum();
        z !== "" && (g += "%s", b = b.concat([z]));
        var $ = b.map(function(N) {
          return String(N);
        });
        $.unshift("Warning: " + g), Function.prototype.apply.call(console[n], console, $);
      }
    }
    var w = !1, j = !1, k = !1, O = !1, P = !1, S;
    S = Symbol.for("react.module.reference");
    function W(n) {
      return !!(typeof n == "string" || typeof n == "function" || n === r || n === o || P || n === s || n === c || n === h || O || n === m || w || j || k || typeof n == "object" && n !== null && (n.$$typeof === f || n.$$typeof === p || n.$$typeof === i || n.$$typeof === a || n.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      n.$$typeof === S || n.getModuleId !== void 0));
    }
    function q(n, g, b) {
      var I = n.displayName;
      if (I)
        return I;
      var z = g.displayName || g.name || "";
      return z !== "" ? b + "(" + z + ")" : b;
    }
    function Q(n) {
      return n.displayName || "Context";
    }
    function V(n) {
      if (n == null)
        return null;
      if (typeof n.tag == "number" && v("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof n == "function")
        return n.displayName || n.name || null;
      if (typeof n == "string")
        return n;
      switch (n) {
        case r:
          return "Fragment";
        case e:
          return "Portal";
        case o:
          return "Profiler";
        case s:
          return "StrictMode";
        case c:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof n == "object")
        switch (n.$$typeof) {
          case a:
            var g = n;
            return Q(g) + ".Consumer";
          case i:
            var b = n;
            return Q(b._context) + ".Provider";
          case d:
            return q(n, n.render, "ForwardRef");
          case p:
            var I = n.displayName || null;
            return I !== null ? I : V(n.type) || "Memo";
          case f: {
            var z = n, $ = z._payload, N = z._init;
            try {
              return V(N($));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var K = Object.assign, G = 0, A, F, Y, B, ne, Le, Pe;
    function Ae() {
    }
    Ae.__reactDisabledLog = !0;
    function vt() {
      {
        if (G === 0) {
          A = console.log, F = console.info, Y = console.warn, B = console.error, ne = console.group, Le = console.groupCollapsed, Pe = console.groupEnd;
          var n = {
            configurable: !0,
            enumerable: !0,
            value: Ae,
            writable: !0
          };
          Object.defineProperties(console, {
            info: n,
            log: n,
            warn: n,
            error: n,
            group: n,
            groupCollapsed: n,
            groupEnd: n
          });
        }
        G++;
      }
    }
    function Et() {
      {
        if (G--, G === 0) {
          var n = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: K({}, n, {
              value: A
            }),
            info: K({}, n, {
              value: F
            }),
            warn: K({}, n, {
              value: Y
            }),
            error: K({}, n, {
              value: B
            }),
            group: K({}, n, {
              value: ne
            }),
            groupCollapsed: K({}, n, {
              value: Le
            }),
            groupEnd: K({}, n, {
              value: Pe
            })
          });
        }
        G < 0 && v("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Re = x.ReactCurrentDispatcher, Ce;
    function ve(n, g, b) {
      {
        if (Ce === void 0)
          try {
            throw Error();
          } catch (z) {
            var I = z.stack.trim().match(/\n( *(at )?)/);
            Ce = I && I[1] || "";
          }
        return `
` + Ce + n;
      }
    }
    var Se = !1, Ee;
    {
      var bt = typeof WeakMap == "function" ? WeakMap : Map;
      Ee = new bt();
    }
    function ze(n, g) {
      if (!n || Se)
        return "";
      {
        var b = Ee.get(n);
        if (b !== void 0)
          return b;
      }
      var I;
      Se = !0;
      var z = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var $;
      $ = Re.current, Re.current = null, vt();
      try {
        if (g) {
          var N = function() {
            throw Error();
          };
          if (Object.defineProperty(N.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(N, []);
            } catch (se) {
              I = se;
            }
            Reflect.construct(n, [], N);
          } else {
            try {
              N.call();
            } catch (se) {
              I = se;
            }
            n.call(N.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (se) {
            I = se;
          }
          n();
        }
      } catch (se) {
        if (se && I && typeof se.stack == "string") {
          for (var _ = se.stack.split(`
`), Z = I.stack.split(`
`), U = _.length - 1, J = Z.length - 1; U >= 1 && J >= 0 && _[U] !== Z[J]; )
            J--;
          for (; U >= 1 && J >= 0; U--, J--)
            if (_[U] !== Z[J]) {
              if (U !== 1 || J !== 1)
                do
                  if (U--, J--, J < 0 || _[U] !== Z[J]) {
                    var te = `
` + _[U].replace(" at new ", " at ");
                    return n.displayName && te.includes("<anonymous>") && (te = te.replace("<anonymous>", n.displayName)), typeof n == "function" && Ee.set(n, te), te;
                  }
                while (U >= 1 && J >= 0);
              break;
            }
        }
      } finally {
        Se = !1, Re.current = $, Et(), Error.prepareStackTrace = z;
      }
      var ce = n ? n.displayName || n.name : "", Ze = ce ? ve(ce) : "";
      return typeof n == "function" && Ee.set(n, Ze), Ze;
    }
    function yt(n, g, b) {
      return ze(n, !1);
    }
    function xt(n) {
      var g = n.prototype;
      return !!(g && g.isReactComponent);
    }
    function be(n, g, b) {
      if (n == null)
        return "";
      if (typeof n == "function")
        return ze(n, xt(n));
      if (typeof n == "string")
        return ve(n);
      switch (n) {
        case c:
          return ve("Suspense");
        case h:
          return ve("SuspenseList");
      }
      if (typeof n == "object")
        switch (n.$$typeof) {
          case d:
            return yt(n.render);
          case p:
            return be(n.type, g, b);
          case f: {
            var I = n, z = I._payload, $ = I._init;
            try {
              return be($(z), g, b);
            } catch {
            }
          }
        }
      return "";
    }
    var ye = Object.prototype.hasOwnProperty, Fe = {}, qe = x.ReactDebugCurrentFrame;
    function xe(n) {
      if (n) {
        var g = n._owner, b = be(n.type, n._source, g ? g.type : null);
        qe.setExtraStackFrame(b);
      } else
        qe.setExtraStackFrame(null);
    }
    function Rt(n, g, b, I, z) {
      {
        var $ = Function.call.bind(ye);
        for (var N in n)
          if ($(n, N)) {
            var _ = void 0;
            try {
              if (typeof n[N] != "function") {
                var Z = Error((I || "React class") + ": " + b + " type `" + N + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof n[N] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Z.name = "Invariant Violation", Z;
              }
              _ = n[N](g, N, I, b, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (U) {
              _ = U;
            }
            _ && !(_ instanceof Error) && (xe(z), v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", I || "React class", b, N, typeof _), xe(null)), _ instanceof Error && !(_.message in Fe) && (Fe[_.message] = !0, xe(z), v("Failed %s type: %s", b, _.message), xe(null));
          }
      }
    }
    var Ct = Array.isArray;
    function De(n) {
      return Ct(n);
    }
    function St(n) {
      {
        var g = typeof Symbol == "function" && Symbol.toStringTag, b = g && n[Symbol.toStringTag] || n.constructor.name || "Object";
        return b;
      }
    }
    function Dt(n) {
      try {
        return Ye(n), !1;
      } catch {
        return !0;
      }
    }
    function Ye(n) {
      return "" + n;
    }
    function $e(n) {
      if (Dt(n))
        return v("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", St(n)), Ye(n);
    }
    var fe = x.ReactCurrentOwner, wt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Be, Ve, we;
    we = {};
    function Tt(n) {
      if (ye.call(n, "ref")) {
        var g = Object.getOwnPropertyDescriptor(n, "ref").get;
        if (g && g.isReactWarning)
          return !1;
      }
      return n.ref !== void 0;
    }
    function Mt(n) {
      if (ye.call(n, "key")) {
        var g = Object.getOwnPropertyDescriptor(n, "key").get;
        if (g && g.isReactWarning)
          return !1;
      }
      return n.key !== void 0;
    }
    function It(n, g) {
      if (typeof n.ref == "string" && fe.current && g && fe.current.stateNode !== g) {
        var b = V(fe.current.type);
        we[b] || (v('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', V(fe.current.type), n.ref), we[b] = !0);
      }
    }
    function jt(n, g) {
      {
        var b = function() {
          Be || (Be = !0, v("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", g));
        };
        b.isReactWarning = !0, Object.defineProperty(n, "key", {
          get: b,
          configurable: !0
        });
      }
    }
    function kt(n, g) {
      {
        var b = function() {
          Ve || (Ve = !0, v("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", g));
        };
        b.isReactWarning = !0, Object.defineProperty(n, "ref", {
          get: b,
          configurable: !0
        });
      }
    }
    var Wt = function(n, g, b, I, z, $, N) {
      var _ = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: n,
        key: g,
        ref: b,
        props: N,
        // Record the component responsible for creating this element.
        _owner: $
      };
      return _._store = {}, Object.defineProperty(_._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(_, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: I
      }), Object.defineProperty(_, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: z
      }), Object.freeze && (Object.freeze(_.props), Object.freeze(_)), _;
    };
    function _t(n, g, b, I, z) {
      {
        var $, N = {}, _ = null, Z = null;
        b !== void 0 && ($e(b), _ = "" + b), Mt(g) && ($e(g.key), _ = "" + g.key), Tt(g) && (Z = g.ref, It(g, z));
        for ($ in g)
          ye.call(g, $) && !wt.hasOwnProperty($) && (N[$] = g[$]);
        if (n && n.defaultProps) {
          var U = n.defaultProps;
          for ($ in U)
            N[$] === void 0 && (N[$] = U[$]);
        }
        if (_ || Z) {
          var J = typeof n == "function" ? n.displayName || n.name || "Unknown" : n;
          _ && jt(N, J), Z && kt(N, J);
        }
        return Wt(n, _, Z, z, I, fe.current, N);
      }
    }
    var Te = x.ReactCurrentOwner, Ge = x.ReactDebugCurrentFrame;
    function de(n) {
      if (n) {
        var g = n._owner, b = be(n.type, n._source, g ? g.type : null);
        Ge.setExtraStackFrame(b);
      } else
        Ge.setExtraStackFrame(null);
    }
    var Me;
    Me = !1;
    function Ie(n) {
      return typeof n == "object" && n !== null && n.$$typeof === t;
    }
    function Xe() {
      {
        if (Te.current) {
          var n = V(Te.current.type);
          if (n)
            return `

Check the render method of \`` + n + "`.";
        }
        return "";
      }
    }
    function Ht(n) {
      {
        if (n !== void 0) {
          var g = n.fileName.replace(/^.*[\\\/]/, ""), b = n.lineNumber;
          return `

Check your code at ` + g + ":" + b + ".";
        }
        return "";
      }
    }
    var Ue = {};
    function Ot(n) {
      {
        var g = Xe();
        if (!g) {
          var b = typeof n == "string" ? n : n.displayName || n.name;
          b && (g = `

Check the top-level render call using <` + b + ">.");
        }
        return g;
      }
    }
    function Qe(n, g) {
      {
        if (!n._store || n._store.validated || n.key != null)
          return;
        n._store.validated = !0;
        var b = Ot(g);
        if (Ue[b])
          return;
        Ue[b] = !0;
        var I = "";
        n && n._owner && n._owner !== Te.current && (I = " It was passed a child from " + V(n._owner.type) + "."), de(n), v('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', b, I), de(null);
      }
    }
    function Je(n, g) {
      {
        if (typeof n != "object")
          return;
        if (De(n))
          for (var b = 0; b < n.length; b++) {
            var I = n[b];
            Ie(I) && Qe(I, g);
          }
        else if (Ie(n))
          n._store && (n._store.validated = !0);
        else if (n) {
          var z = R(n);
          if (typeof z == "function" && z !== n.entries)
            for (var $ = z.call(n), N; !(N = $.next()).done; )
              Ie(N.value) && Qe(N.value, g);
        }
      }
    }
    function Nt(n) {
      {
        var g = n.type;
        if (g == null || typeof g == "string")
          return;
        var b;
        if (typeof g == "function")
          b = g.propTypes;
        else if (typeof g == "object" && (g.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        g.$$typeof === p))
          b = g.propTypes;
        else
          return;
        if (b) {
          var I = V(g);
          Rt(b, n.props, "prop", I, n);
        } else if (g.PropTypes !== void 0 && !Me) {
          Me = !0;
          var z = V(g);
          v("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", z || "Unknown");
        }
        typeof g.getDefaultProps == "function" && !g.getDefaultProps.isReactClassApproved && v("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Lt(n) {
      {
        for (var g = Object.keys(n.props), b = 0; b < g.length; b++) {
          var I = g[b];
          if (I !== "children" && I !== "key") {
            de(n), v("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", I), de(null);
            break;
          }
        }
        n.ref !== null && (de(n), v("Invalid attribute `ref` supplied to `React.Fragment`."), de(null));
      }
    }
    function Ke(n, g, b, I, z, $) {
      {
        var N = W(n);
        if (!N) {
          var _ = "";
          (n === void 0 || typeof n == "object" && n !== null && Object.keys(n).length === 0) && (_ += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Z = Ht(z);
          Z ? _ += Z : _ += Xe();
          var U;
          n === null ? U = "null" : De(n) ? U = "array" : n !== void 0 && n.$$typeof === t ? (U = "<" + (V(n.type) || "Unknown") + " />", _ = " Did you accidentally export a JSX literal instead of a component?") : U = typeof n, v("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", U, _);
        }
        var J = _t(n, g, b, z, $);
        if (J == null)
          return J;
        if (N) {
          var te = g.children;
          if (te !== void 0)
            if (I)
              if (De(te)) {
                for (var ce = 0; ce < te.length; ce++)
                  Je(te[ce], n);
                Object.freeze && Object.freeze(te);
              } else
                v("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Je(te, n);
        }
        return n === r ? Lt(J) : Nt(J), J;
      }
    }
    function Pt(n, g, b) {
      return Ke(n, g, b, !0);
    }
    function At(n, g, b) {
      return Ke(n, g, b, !1);
    }
    var zt = At, Ft = Pt;
    ge.Fragment = r, ge.jsx = zt, ge.jsxs = Ft;
  }()), ge;
}
process.env.NODE_ENV === "production" ? We.exports = er() : We.exports = tr();
var l = We.exports;
function Oe({
  schedulerData: y,
  eventItem: t,
  title: e,
  startTime: r,
  endTime: s,
  statusColor: o,
  subtitleGetter: i,
  viewEventClick: a,
  viewEventText: d,
  viewEvent2Click: c,
  viewEvent2Text: h,
  eventItemPopoverTemplateResolver: p
}) {
  const { localeMoment: f, config: m } = y, E = f(r), C = f(s);
  if (p != null)
    return p(y, t, e, E, C, o);
  let R = /* @__PURE__ */ l.jsx("div", {});
  if (i !== void 0) {
    let T = i(y, t);
    T != null && (R = /* @__PURE__ */ l.jsxs(ue, { align: "middle", children: [
      /* @__PURE__ */ l.jsx(ee, { span: 2, children: /* @__PURE__ */ l.jsx("div", {}) }),
      /* @__PURE__ */ l.jsx(ee, { span: 22, className: "overflow-text", children: /* @__PURE__ */ l.jsx("span", { className: "header2-text", title: T, children: T }) })
    ] }));
  }
  let x = /* @__PURE__ */ l.jsx("div", {});
  if (d !== void 0 && a !== void 0 && (t.clickable1 == null || t.clickable1)) {
    let T = /* @__PURE__ */ l.jsx(ee, { span: 22, children: /* @__PURE__ */ l.jsx("span", { className: "header2-text", style: { color: "#108EE9", cursor: "pointer" }, onClick: () => a(y, t), children: d }) });
    h !== void 0 && c !== void 0 && (t.clickable2 == null || t.clickable2) && (T = /* @__PURE__ */ l.jsxs(ee, { span: 22, children: [
      /* @__PURE__ */ l.jsx("span", { className: "header2-text", style: { color: "#108EE9", cursor: "pointer" }, onClick: () => a(y, t), children: d }),
      /* @__PURE__ */ l.jsx("span", { className: "header2-text", style: { color: "#108EE9", cursor: "pointer", marginLeft: "16px" }, onClick: () => c(y, t), children: h })
    ] })), x = /* @__PURE__ */ l.jsxs(ue, { align: "middle", children: [
      /* @__PURE__ */ l.jsx(ee, { span: 2, children: /* @__PURE__ */ l.jsx("div", {}) }),
      T
    ] });
  } else if (h !== void 0 && c !== void 0 && (t.clickable2 == null || t.clickable2)) {
    let T = /* @__PURE__ */ l.jsx(ee, { span: 22, children: /* @__PURE__ */ l.jsx("span", { className: "header2-text", style: { color: "#108EE9", cursor: "pointer" }, onClick: () => c(y, t), children: h }) });
    x = /* @__PURE__ */ l.jsxs(ue, { align: "middle", children: [
      /* @__PURE__ */ l.jsx(ee, { span: 2, children: /* @__PURE__ */ l.jsx("div", {}) }),
      T
    ] });
  }
  let v = m.eventItemPopoverDateFormat;
  return /* @__PURE__ */ l.jsxs("div", { style: { width: "300px" }, children: [
    /* @__PURE__ */ l.jsxs(ue, { align: "middle", children: [
      /* @__PURE__ */ l.jsx(ee, { span: 2, children: /* @__PURE__ */ l.jsx("div", { className: "status-dot", style: { backgroundColor: o } }) }),
      /* @__PURE__ */ l.jsx(ee, { span: 22, className: "overflow-text", children: /* @__PURE__ */ l.jsx("span", { className: "header2-text", title: e, children: e }) })
    ] }),
    R,
    /* @__PURE__ */ l.jsxs(ue, { align: "middle", children: [
      /* @__PURE__ */ l.jsx(ee, { span: 2, children: /* @__PURE__ */ l.jsx("div", {}) }),
      /* @__PURE__ */ l.jsxs(ee, { span: 22, children: [
        /* @__PURE__ */ l.jsx("span", { className: "header1-text", children: E.format("HH:mm") }),
        /* @__PURE__ */ l.jsx("span", { className: "help-text", style: { marginLeft: "8px" }, children: E.format(v) }),
        /* @__PURE__ */ l.jsx("span", { className: "header2-text", style: { marginLeft: "8px" }, children: "-" }),
        /* @__PURE__ */ l.jsx("span", { className: "header1-text", style: { marginLeft: "8px" }, children: C.format("HH:mm") }),
        /* @__PURE__ */ l.jsx("span", { className: "help-text", style: { marginLeft: "8px" }, children: C.format(v) })
      ] })
    ] }),
    x
  ] });
}
Oe.propTypes = {
  schedulerData: u.object.isRequired,
  eventItem: u.object.isRequired,
  title: u.string.isRequired,
  startTime: u.string.isRequired,
  endTime: u.string.isRequired,
  statusColor: u.string.isRequired,
  subtitleGetter: u.func,
  viewEventClick: u.func,
  viewEventText: u.string,
  viewEvent2Click: u.func,
  viewEvent2Text: u.string,
  eventItemPopoverTemplateResolver: u.func
};
const H = "YYYY-MM-DD", L = "YYYY-MM-DD HH:mm:ss", D = { Day: 0, Week: 1, Month: 2, Quarter: 3, Year: 4, Custom: 5, Custom1: 6, Custom2: 7 }, X = { Day: 0, Hour: 1 }, ae = { Top: 0, TopRight: 1, TopLeft: 2, Bottom: 3, BottomRight: 4, BottomLeft: 5 }, ie = { EVENT: "event" }, re = "ontouchstart" in window;
class Ne extends _e {
  constructor(e) {
    super(e);
    M(this, "initStartDrag", (e) => {
      const { schedulerData: r, eventItem: s } = this.props;
      let o = r._getEventSlotId(s), i = r.getSlotById(o);
      if (i && i.groupOnly || r._isResizing())
        return;
      e.stopPropagation();
      let a = 0;
      if (re) {
        if (e.changedTouches.length == 0)
          return;
        a = e.changedTouches[0].pageX;
      } else {
        if (e.buttons !== void 0 && e.buttons !== 1)
          return;
        a = e.clientX;
      }
      this.setState({
        startX: a
      }), r._startResizing(), re ? (this.startResizer.addEventListener("touchmove", this.doStartDrag, !1), this.startResizer.addEventListener("touchend", this.stopStartDrag, !1), this.startResizer.addEventListener("touchcancel", this.cancelStartDrag, !1)) : (document.documentElement.addEventListener("mousemove", this.doStartDrag, !1), document.documentElement.addEventListener("mouseup", this.stopStartDrag, !1)), document.onselectstart = function() {
        return !1;
      }, document.ondragstart = function() {
        return !1;
      };
    });
    M(this, "doStartDrag", (e) => {
      e.stopPropagation();
      let r = 0;
      if (re) {
        if (e.changedTouches.length == 0)
          return;
        r = e.changedTouches[0].pageX;
      } else
        r = e.clientX;
      const { left: s, width: o, leftIndex: i, rightIndex: a, schedulerData: d } = this.props;
      let c = d.getContentCellWidth(), h = i > 0 ? 5 : 6, p = c - h, f = a * c - h;
      const { startX: m } = this.state;
      let E = s + r - m, C = o + m - r;
      C < p ? (C = p, E = (a - 1) * c + (a - 1 > 0 ? 2 : 3)) : C > f && (C = f, E = 3), this.setState({ left: E, width: C });
    });
    M(this, "stopStartDrag", (e) => {
      e.stopPropagation(), re ? (this.startResizer.removeEventListener("touchmove", this.doStartDrag, !1), this.startResizer.removeEventListener("touchend", this.stopStartDrag, !1), this.startResizer.removeEventListener("touchcancel", this.cancelStartDrag, !1)) : (document.documentElement.removeEventListener("mousemove", this.doStartDrag, !1), document.documentElement.removeEventListener("mouseup", this.stopStartDrag, !1)), document.onselectstart = null, document.ondragstart = null;
      const { width: r, left: s, top: o, leftIndex: i, rightIndex: a, schedulerData: d, eventItem: c, updateEventStart: h, conflictOccurred: p } = this.props;
      if (d._stopResizing(), this.state.width === r)
        return;
      let f = 0;
      if (re) {
        if (e.changedTouches.length == 0) {
          this.setState({
            left: s,
            top: o,
            width: r
          });
          return;
        }
        f = e.changedTouches[0].pageX;
      } else
        f = e.clientX;
      const { cellUnit: m, events: E, config: C, localeMoment: R } = d;
      let x = d.getContentCellWidth(), v = i > 0 ? 5 : 6, T = x - v, w = a * x - v;
      const { startX: j } = this.state;
      let k = r + j - f, O = f - j, P = O < 0 ? -1 : O === 0 ? 0 : 1, S = (P > 0 ? Math.floor(Math.abs(O) / x) : Math.ceil(Math.abs(O) / x)) * P;
      k < T ? S = a - i - 1 : k > w && (S = -i);
      let W = R(c.start).add(m === X.Hour ? S * C.minuteStep : S, m === X.Hour ? "minutes" : "days").format(L);
      if (S !== 0 && m !== X.Hour && C.displayWeekend === !1)
        if (S > 0) {
          let G = 0, A = 0;
          for (; ; ) {
            A++;
            let F = R(c.start).add(A, "days"), Y = F.weekday();
            if (Y !== 0 && Y !== 6 && (G++, G === S)) {
              W = F.format(L);
              break;
            }
          }
        } else {
          let G = 0, A = 0;
          for (; ; ) {
            A--;
            let F = R(c.start).add(A, "days"), Y = F.weekday();
            if (Y !== 0 && Y !== 6 && (G--, G === S)) {
              W = F.format(L);
              break;
            }
          }
        }
      let q = !1, Q = d._getEventSlotId(c), V, K = d.getSlotById(Q);
      if (K && (V = K.name), C.checkConflict) {
        let G = R(W), A = R(c.end);
        E.forEach((F) => {
          if (d._getEventSlotId(F) === Q && F.id !== c.id) {
            let Y = R(F.start), B = R(F.end);
            (G >= Y && G < B || A > Y && A <= B || Y >= G && Y < A || B > G && B <= A) && (q = !0);
          }
        });
      }
      q ? (this.setState({
        left: s,
        top: o,
        width: r
      }), p != null ? p(d, "StartResize", c, ie.EVENT, Q, V, W, c.end) : console.log("Conflict occurred, set conflictOccurred func in Scheduler to handle it"), this.subscribeResizeEvent(this.props)) : h != null && h(d, c, W);
    });
    M(this, "cancelStartDrag", (e) => {
      e.stopPropagation(), this.startResizer.removeEventListener("touchmove", this.doStartDrag, !1), this.startResizer.removeEventListener("touchend", this.stopStartDrag, !1), this.startResizer.removeEventListener("touchcancel", this.cancelStartDrag, !1), document.onselectstart = null, document.ondragstart = null;
      const { schedulerData: r, left: s, top: o, width: i } = this.props;
      r._stopResizing(), this.setState({
        left: s,
        top: o,
        width: i
      });
    });
    M(this, "initEndDrag", (e) => {
      const { schedulerData: r, eventItem: s } = this.props;
      let o = r._getEventSlotId(s), i = r.getSlotById(o);
      if (i && i.groupOnly || r._isResizing())
        return;
      e.stopPropagation();
      let a = 0;
      if (re) {
        if (e.changedTouches.length == 0)
          return;
        a = e.changedTouches[0].pageX;
      } else {
        if (e.buttons !== void 0 && e.buttons !== 1)
          return;
        a = e.clientX;
      }
      this.setState({
        endX: a
      }), r._startResizing(), re ? (this.endResizer.addEventListener("touchmove", this.doEndDrag, !1), this.endResizer.addEventListener("touchend", this.stopEndDrag, !1), this.endResizer.addEventListener("touchcancel", this.cancelEndDrag, !1)) : (document.documentElement.addEventListener("mousemove", this.doEndDrag, !1), document.documentElement.addEventListener("mouseup", this.stopEndDrag, !1)), document.onselectstart = function() {
        return !1;
      }, document.ondragstart = function() {
        return !1;
      };
    });
    M(this, "doEndDrag", (e) => {
      e.stopPropagation();
      let r = 0;
      if (re) {
        if (e.changedTouches.length == 0)
          return;
        r = e.changedTouches[0].pageX;
      } else
        r = e.clientX;
      const { width: s, leftIndex: o, schedulerData: i } = this.props, { headers: a } = i;
      let d = i.getContentCellWidth(), c = o > 0 ? 5 : 6, h = d - c, p = (a.length - o) * d - c;
      const { endX: f } = this.state;
      let m = s + r - f;
      m < h ? m = h : m > p && (m = p), this.setState({ width: m });
    });
    M(this, "stopEndDrag", (e) => {
      e.stopPropagation(), re ? (this.endResizer.removeEventListener("touchmove", this.doEndDrag, !1), this.endResizer.removeEventListener("touchend", this.stopEndDrag, !1), this.endResizer.removeEventListener("touchcancel", this.cancelEndDrag, !1)) : (document.documentElement.removeEventListener("mousemove", this.doEndDrag, !1), document.documentElement.removeEventListener("mouseup", this.stopEndDrag, !1)), document.onselectstart = null, document.ondragstart = null;
      const { width: r, left: s, top: o, leftIndex: i, rightIndex: a, schedulerData: d, eventItem: c, updateEventEnd: h, conflictOccurred: p } = this.props;
      if (d._stopResizing(), this.state.width === r)
        return;
      let f = 0;
      if (re) {
        if (e.changedTouches.length == 0) {
          this.setState({
            left: s,
            top: o,
            width: r
          });
          return;
        }
        f = e.changedTouches[0].pageX;
      } else
        f = e.clientX;
      const { headers: m, cellUnit: E, events: C, config: R, localeMoment: x } = d;
      let v = d.getContentCellWidth(), T = i > 0 ? 5 : 6, w = v - T, j = (m.length - i) * v - T;
      const { endX: k } = this.state;
      let O = r + f - k, P = O - r, S = P < 0 ? -1 : P === 0 ? 0 : 1, W = (S < 0 ? Math.floor(Math.abs(P) / v) : Math.ceil(Math.abs(P) / v)) * S;
      O < w ? W = i - a + 1 : O > j && (W = m.length - a);
      let q = x(c.end).add(E === X.Hour ? W * R.minuteStep : W, E === X.Hour ? "minutes" : "days").format(L);
      if (W !== 0 && E !== X.Hour && R.displayWeekend === !1)
        if (W > 0) {
          let A = 0, F = 0;
          for (; ; ) {
            F++;
            let Y = x(c.end).add(F, "days"), B = Y.weekday();
            if (B !== 0 && B !== 6 && (A++, A === W)) {
              q = Y.format(L);
              break;
            }
          }
        } else {
          let A = 0, F = 0;
          for (; ; ) {
            F--;
            let Y = x(c.end).add(F, "days"), B = Y.weekday();
            if (B !== 0 && B !== 6 && (A--, A === W)) {
              q = Y.format(L);
              break;
            }
          }
        }
      let Q = !1, V = d._getEventSlotId(c), K, G = d.getSlotById(V);
      if (G && (K = G.name), R.checkConflict) {
        let A = x(c.start), F = x(q);
        C.forEach((Y) => {
          if (d._getEventSlotId(Y) === V && Y.id !== c.id) {
            let B = x(Y.start), ne = x(Y.end);
            (A >= B && A < ne || F > B && F <= ne || B >= A && B < F || ne > A && ne <= F) && (Q = !0);
          }
        });
      }
      Q ? (this.setState({
        left: s,
        top: o,
        width: r
      }), p != null ? p(d, "EndResize", c, ie.EVENT, V, K, c.start, q) : console.log("Conflict occurred, set conflictOccurred func in Scheduler to handle it"), this.subscribeResizeEvent(this.props)) : h != null && h(d, c, q);
    });
    M(this, "cancelEndDrag", (e) => {
      e.stopPropagation(), this.endResizer.removeEventListener("touchmove", this.doEndDrag, !1), this.endResizer.removeEventListener("touchend", this.stopEndDrag, !1), this.endResizer.removeEventListener("touchcancel", this.cancelEndDrag, !1), document.onselectstart = null, document.ondragstart = null;
      const { schedulerData: r, left: s, top: o, width: i } = this.props;
      r._stopResizing(), this.setState({
        left: s,
        top: o,
        width: i
      });
    });
    M(this, "startResizable", (e) => {
      const { eventItem: r, isInPopover: s, schedulerData: o } = e, { config: i } = o;
      return i.startResizable === !0 && s === !1 && (r.resizable == null || r.resizable !== !1) && (r.startResizable == null || r.startResizable !== !1);
    });
    M(this, "endResizable", (e) => {
      const { eventItem: r, isInPopover: s, schedulerData: o } = e, { config: i } = o;
      return i.endResizable === !0 && s === !1 && (r.resizable == null || r.resizable !== !1) && (r.endResizable == null || r.endResizable !== !1);
    });
    M(this, "subscribeResizeEvent", (e) => {
      this.startResizer != null && (re || (this.startResizer.removeEventListener("mousedown", this.initStartDrag, !1), this.startResizable(e) && this.startResizer.addEventListener("mousedown", this.initStartDrag, !1))), this.endResizer != null && (re || (this.endResizer.removeEventListener("mousedown", this.initEndDrag, !1), this.endResizable(e) && this.endResizer.addEventListener("mousedown", this.initEndDrag, !1)));
    });
    const { left: r, top: s, width: o } = e;
    this.state = {
      left: r,
      top: s,
      width: o
    }, this.startResizer = null, this.endResizer = null;
  }
  UNSAFE_componentWillReceiveProps(e) {
    const { left: r, top: s, width: o } = e;
    this.setState({
      left: r,
      top: s,
      width: o
    }), this.subscribeResizeEvent(e);
  }
  componentDidMount() {
    this.subscribeResizeEvent(this.props);
  }
  render() {
    const { eventItem: e, isStart: r, isEnd: s, isInPopover: o, eventItemClick: i, schedulerData: a, isDragging: d, connectDragSource: c, connectDragPreview: h, eventItemTemplateResolver: p } = this.props, { config: f, localeMoment: m } = a, { left: E, width: C, top: R } = this.state;
    let x = r ? s ? "round-all" : "round-head" : s ? "round-tail" : "round-none", v = f.defaultEventBgColor;
    e.bgColor && (v = e.bgColor);
    let T = a.behaviors.getEventTextFunc(a, e), w = /* @__PURE__ */ l.jsx(Oe, { ...this.props, eventItem: e, title: e.title, startTime: e.start, endTime: e.end, statusColor: v }), j = m(e.start), k = o ? `${j.format("HH:mm")} ${T}` : T, O = /* @__PURE__ */ l.jsx("div", {});
    this.startResizable(this.props) && (O = /* @__PURE__ */ l.jsx("div", { className: "event-resizer event-start-resizer", ref: (q) => this.startResizer = q }));
    let P = /* @__PURE__ */ l.jsx("div", {});
    this.endResizable(this.props) && (P = /* @__PURE__ */ l.jsx("div", { className: "event-resizer event-end-resizer", ref: (q) => this.endResizer = q }));
    let S = /* @__PURE__ */ l.jsx("div", { className: x + " event-item", style: { height: f.eventItemHeight, backgroundColor: v }, children: /* @__PURE__ */ l.jsx("span", { style: { marginLeft: "10px", lineHeight: `${f.eventItemHeight}px` }, children: k }) }, e.id);
    p != null && (S = p(a, e, v, r, s, "event-item", f.eventItemHeight, void 0));
    let W = /* @__PURE__ */ l.jsxs(
      "a",
      {
        className: "timeline-event",
        style: { left: E, width: C, top: R },
        onClick: () => {
          i && i(a, e);
        },
        children: [
          S,
          O,
          P
        ]
      }
    );
    return d ? null : a._isResizing() || f.eventItemPopoverEnabled == !1 || e.showPopover == !1 ? /* @__PURE__ */ l.jsx("div", { children: h(c(W)) }) : /* @__PURE__ */ l.jsx(He, { placement: "bottomLeft", content: w, trigger: "hover", children: h(c(W)) });
  }
}
M(Ne, "propTypes", {
  schedulerData: u.object.isRequired,
  eventItem: u.object.isRequired,
  isStart: u.bool.isRequired,
  isEnd: u.bool.isRequired,
  left: u.number.isRequired,
  width: u.number.isRequired,
  top: u.number.isRequired,
  isInPopover: u.bool.isRequired,
  leftIndex: u.number.isRequired,
  rightIndex: u.number.isRequired,
  isDragging: u.bool.isRequired,
  connectDragSource: u.func.isRequired,
  connectDragPreview: u.func.isRequired,
  updateEventStart: u.func,
  updateEventEnd: u.func,
  moveEvent: u.func,
  subtitleGetter: u.func,
  eventItemClick: u.func,
  viewEventClick: u.func,
  viewEventText: u.string,
  viewEvent2Click: u.func,
  viewEvent2Text: u.string,
  conflictOccurred: u.func,
  eventItemTemplateResolver: u.func
});
class ot {
  constructor(t, e, r = ie.EVENT) {
    M(this, "getDragSpec", () => ({
      beginDrag: (t, e, r) => this.resolveDragObjFunc(t),
      endDrag: (t, e, r) => {
        if (!e.didDrop())
          return;
        const { moveEvent: s, newEvent: o, schedulerData: i } = t, { events: a, config: d, viewType: c, localeMoment: h } = i, p = e.getItem(), f = e.getItemType(), m = e.getDropResult();
        let E = m.slotId, C = m.slotName, R = m.start, x = m.end, v = m.initialStart;
        m.initialEnd;
        let T = "New", w = f === ie.EVENT;
        if (w) {
          const k = p;
          if (d.relativeMove)
            R = h(k.start).add(h(R).diff(h(v)), "ms").format(L);
          else if (c !== D.Day) {
            let O = h(R);
            R = h(k.start).year(O.year()).month(O.month()).date(O.date()).format(L);
          }
          if (x = h(R).add(h(k.end).diff(h(k.start)), "ms").format(L), d.crossResourceMove === !1) {
            E = i._getEventSlotId(p), C = void 0;
            let O = i.getSlotById(E);
            O && (C = O.name);
          }
          T = "Move";
        }
        let j = !1;
        if (d.checkConflict) {
          let k = h(R), O = h(x);
          a.forEach((P) => {
            if (i._getEventSlotId(P) === E && (!w || P.id !== p.id)) {
              let S = h(P.start), W = h(P.end);
              (k >= S && k < W || O > S && O <= W || S >= k && S < O || W > k && W <= O) && (j = !0);
            }
          });
        }
        if (j) {
          const { conflictOccurred: k } = t;
          k != null ? k(i, T, p, f, E, C, R, x) : console.log("Conflict occurred, set conflictOccurred func in Scheduler to handle it");
        } else
          w ? s !== void 0 && s(i, p, E, C, R, x) : o !== void 0 && o(i, E, C, R, x, f, p);
      },
      canDrag: (t) => {
        const { schedulerData: e, resourceEvents: r } = t, s = this.resolveDragObjFunc(t);
        if (e._isResizing())
          return !1;
        const { config: o } = e;
        return o.movable && (r == null || !r.groupOnly) && (s.movable == null || s.movable !== !1);
      }
    }));
    M(this, "getDragCollect", (t, e) => ({
      connectDragSource: t.dragSource(),
      isDragging: e.isDragging(),
      connectDragPreview: t.dragPreview()
    }));
    M(this, "getDragSource", () => this.dragSource);
    this.resolveDragObjFunc = t, this.DecoratedComponent = e, this.dndType = r, this.dragSource = Jt(this.dndType, this.getDragSpec(), this.getDragCollect)(this.DecoratedComponent);
  }
}
function pe(y) {
  let t = 0, e = 0, r = y;
  for (; r; )
    t += r.offsetLeft - r.scrollLeft, e += r.offsetTop - r.scrollTop, r = r.offsetParent;
  return { x: t, y: e };
}
class rr {
  constructor(t, e) {
    M(this, "getDropSpec", () => ({
      drop: (t, e, r) => {
        const { schedulerData: s, resourceEvents: o } = t, { cellUnit: i, localeMoment: a } = s, d = e.getItemType(), c = pe(r.eventContainer);
        let h = s.getContentCellWidth(), p = null, f = null;
        if (d === ie.EVENT) {
          const x = e.getInitialClientOffset();
          let v = Math.floor((x.x - c.x) / h);
          p = o.headerItems[v].start, f = o.headerItems[v].end, i !== X.Hour && (f = a(o.headerItems[v].start).hour(23).minute(59).second(59).format(L));
        }
        const m = e.getClientOffset();
        let E = Math.floor((m.x - c.x) / h), C = o.headerItems[E].start, R = o.headerItems[E].end;
        return i !== X.Hour && (R = a(o.headerItems[E].start).hour(23).minute(59).second(59).format(L)), {
          slotId: o.slotId,
          slotName: o.slotName,
          start: C,
          end: R,
          initialStart: p,
          initialEnd: f
        };
      },
      hover: (t, e, r) => {
        const { schedulerData: s, resourceEvents: o, movingEvent: i } = t, { cellUnit: a, config: d, viewType: c, localeMoment: h } = s, p = e.getItem(), f = e.getItemType(), m = pe(r.eventContainer);
        let E = s.getContentCellWidth(), C = null;
        if (f === ie.EVENT) {
          const P = e.getInitialClientOffset();
          let S = Math.floor((P.x - m.x) / E);
          C = o.headerItems[S].start, o.headerItems[S].end, a !== X.Hour && h(o.headerItems[S].start).hour(23).minute(59).second(59).format(L);
        }
        const R = e.getClientOffset();
        let x = Math.floor((R.x - m.x) / E);
        if (!o.headerItems[x])
          return;
        let v = o.headerItems[x].start, T = o.headerItems[x].end;
        a !== X.Hour && (T = h(o.headerItems[x].start).hour(23).minute(59).second(59).format(L));
        let w = o.slotId, j = o.slotName, k = "New";
        if (f === ie.EVENT) {
          const P = p;
          if (d.relativeMove)
            v = h(P.start).add(h(v).diff(h(C)), "ms").format(L);
          else if (c !== D.Day) {
            let S = h(v);
            v = h(P.start).year(S.year()).month(S.month()).date(S.date()).format(L);
          }
          if (T = h(v).add(h(P.end).diff(h(P.start)), "ms").format(L), d.crossResourceMove === !1) {
            w = s._getEventSlotId(p), j = void 0;
            let S = s.getSlotById(w);
            S && (j = S.name);
          }
          k = "Move";
        }
        i && i(s, w, j, v, T, k, f, p);
      },
      canDrop: (t, e) => {
        const { schedulerData: r, resourceEvents: s } = t, o = e.getItem();
        if (r._isResizing())
          return !1;
        const { config: i } = r;
        return i.movable && !s.groupOnly && (o.movable == null || o.movable !== !1);
      }
    }));
    M(this, "getDropCollect", (t, e) => ({
      connectDropTarget: t.dropTarget(),
      isOver: e.isOver()
    }));
    M(this, "getDropTarget", () => Kt([...this.sourceMap.keys()], this.getDropSpec(), this.getDropCollect)(this.DecoratedComponent));
    M(this, "getDndSource", (t = ie.EVENT) => this.sourceMap.get(t));
    this.sourceMap = /* @__PURE__ */ new Map(), t.forEach((r) => {
      this.sourceMap.set(r.dndType, r);
    }), this.DecoratedComponent = e;
  }
}
function at({ schedulerData: y, contentScrollbarHeight: t, slotClickedFunc: e, slotItemTemplateResolver: r, toggleExpandFunc: s }) {
  const { renderData: o } = y, i = y.getResourceTableWidth() - 2, a = t, d = o.filter((m) => m.render), c = (m) => {
    s && s(y, m.slotId);
  }, h = (m) => {
    e && e(y, m);
  }, p = (m) => {
    const E = Array.from({ length: m.indent }, (T, w) => /* @__PURE__ */ l.jsx("span", { className: "expander-space" }, `es${w}`)), C = m.hasChildren ? m.expanded ? /* @__PURE__ */ l.jsx(Bt, { onClick: () => c(m) }, `es${m.indent}`) : /* @__PURE__ */ l.jsx(Vt, { onClick: () => c(m) }, `es${m.indent}`) : /* @__PURE__ */ l.jsx("span", { className: "expander-space" }, `es${m.indent}`);
    E.push(C);
    const R = e ? /* @__PURE__ */ l.jsx("a", { className: "slot-text", onClick: () => h(m), children: m.slotName }) : /* @__PURE__ */ l.jsx("span", { className: "slot-text", children: m.slotName });
    let x = /* @__PURE__ */ l.jsx("div", { title: m.slotName, className: "overflow-text header2-text", style: { textAlign: "left" }, children: /* @__PURE__ */ l.jsxs("span", { className: "slot-cell", children: [
      E,
      R
    ] }) });
    if (r) {
      const T = r(y, m, e, i, "overflow-text header2-text");
      T && (x = T);
    }
    const v = {
      height: m.rowHeight,
      backgroundColor: m.groupOnly ? y.config.groupOnlySlotColor : void 0
    };
    return /* @__PURE__ */ l.jsx("tr", { children: /* @__PURE__ */ l.jsx("td", { "data-resource-id": m.slotId, style: v, children: x }) }, m.slotId);
  }, f = d.map(p);
  return /* @__PURE__ */ l.jsx("div", { style: { paddingBottom: a }, children: /* @__PURE__ */ l.jsx("table", { className: "resource-table", children: /* @__PURE__ */ l.jsx("tbody", { children: f }) }) });
}
at.propTypes = {
  schedulerData: u.object.isRequired,
  contentScrollbarHeight: u.number.isRequired,
  slotClickedFunc: u.func,
  slotItemTemplateResolver: u.func,
  toggleExpandFunc: u.func
};
function lt({ schedulerData: y, nonAgendaCellHeaderTemplateResolver: t }) {
  const { headers: e, cellUnit: r, config: s, localeMoment: o } = y, i = y.getTableHeaderHeight(), a = y.getContentCellWidth(), d = y.getMinuteStepsInHour(), c = (f, m, E) => {
    const C = o(f.time), R = !!f.nonWorkingTime;
    let x = R ? { width: a * d, color: s.nonWorkingTimeHeadColor, backgroundColor: s.nonWorkingTimeHeadBgColor } : { width: a * d };
    E || (x.width = a), m === e.length - (E ? d : 1) && (x = R ? { color: s.nonWorkingTimeHeadColor, backgroundColor: s.nonWorkingTimeHeadBgColor } : {});
    const v = (E ? s.nonAgendaDayCellHeaderFormat : s.nonAgendaOtherCellHeaderFormat).split("|").map((w) => C.format(w));
    if (typeof t == "function")
      return t(y, f, v, x);
    const T = v.map((w, j) => /* @__PURE__ */ l.jsx("div", { children: w }, j));
    return /* @__PURE__ */ l.jsx("th", { className: "header3-text", style: x, children: /* @__PURE__ */ l.jsx("div", { children: T }) }, f.time);
  }, p = (() => e.map((f, m) => {
    if (r === X.Hour && m % d !== 0)
      return null;
    const E = r === X.Hour;
    return c(f, m, E);
  }))();
  return /* @__PURE__ */ l.jsx("thead", { children: /* @__PURE__ */ l.jsx("tr", { style: { height: i }, children: p }) });
}
lt.propTypes = {
  schedulerData: u.object.isRequired,
  nonAgendaCellHeaderTemplateResolver: u.func
};
function dt({ schedulerData: y }) {
  const { renderData: t, headers: e, config: r, behaviors: s } = y;
  let o = y.getContentCellWidth();
  const i = t.filter((a) => a.render).map(({ slotId: a, groupOnly: d, rowHeight: c }) => {
    let h = e.map((p, f) => {
      const m = `${a}_${p.time}`, E = f === e.length - 1 ? {} : { width: o };
      if (p.nonWorkingTime && (E.backgroundColor = r.nonWorkingTimeBodyBgColor), d && (E.backgroundColor = r.groupOnlySlotColor), s.getNonAgendaViewBodyCellBgColorFunc) {
        let C = s.getNonAgendaViewBodyCellBgColorFunc(y, a, p);
        C && (E.backgroundColor = C);
      }
      return /* @__PURE__ */ l.jsx("td", { style: E, children: /* @__PURE__ */ l.jsx("div", {}) }, m);
    });
    return /* @__PURE__ */ l.jsx("tr", { style: { height: c }, children: h }, a);
  });
  return /* @__PURE__ */ l.jsx("tbody", { children: i });
}
dt.propTypes = {
  schedulerData: u.object.isRequired
};
function ct({ number: y, left: t, width: e, top: r, clickAction: s, headerItem: o, schedulerData: i }) {
  const { config: a } = i;
  let d = "+" + y + "more";
  return /* @__PURE__ */ l.jsx("a", { className: "timeline-event", style: { left: t, width: e, top: r }, onClick: () => s(o), children: /* @__PURE__ */ l.jsx("div", { style: { height: a.eventItemHeight, color: "#999", textAlign: "center" }, children: d }) });
}
ct.propTypes = {
  schedulerData: u.object.isRequired,
  number: u.number.isRequired,
  left: u.number.isRequired,
  width: u.number.isRequired,
  top: u.number.isRequired,
  clickAction: u.func.isRequired,
  headerItem: u.object.isRequired
};
function ut({ summary: y, left: t, width: e, top: r, schedulerData: s }) {
  const { config: o } = s, i = y.color || o.summaryColor;
  let a = "center";
  o.summaryPos === ae.TopRight || o.summaryPos === ae.BottomRight ? a = "right" : (o.summaryPos === ae.TopLeft || o.summaryPos === ae.BottomLeft) && (a = "left");
  const d = {
    height: o.eventItemHeight,
    color: i,
    textAlign: a,
    margin: "0 6px",
    fontSize: y.fontSize
  };
  return /* @__PURE__ */ l.jsx("a", { className: "timeline-event header2-text", style: { left: t, width: e, top: r, cursor: "default" }, children: /* @__PURE__ */ l.jsx("div", { style: d, children: y.text }) });
}
ut.propTypes = {
  schedulerData: u.object.isRequired,
  summary: u.object.isRequired,
  left: u.number.isRequired,
  width: u.number.isRequired,
  top: u.number.isRequired
};
function ht({ left: y, width: t, schedulerData: e }) {
  const { config: r } = e, s = {
    left: y,
    width: t,
    top: 0,
    bottom: 0,
    backgroundColor: r.selectedAreaColor
  };
  return /* @__PURE__ */ l.jsx("div", { className: "selected-area", style: s });
}
ht.propTypes = {
  schedulerData: u.object.isRequired,
  left: u.number.isRequired,
  width: u.number.isRequired
};
const le = "ontouchstart" in window;
class ft extends _e {
  constructor(e) {
    super(e);
    M(this, "initDrag", (e) => {
      const { isSelecting: r } = this.state;
      if (r || (e.srcElement || e.target) !== this.eventContainer)
        return;
      e.stopPropagation();
      const { resourceEvents: s } = this.props;
      if (s.groupOnly)
        return;
      let o = 0;
      if (le) {
        if (e.changedTouches.length == 0)
          return;
        o = e.changedTouches[0].pageX;
      } else {
        if (e.buttons !== void 0 && e.buttons !== 1)
          return;
        o = e.clientX;
      }
      const { schedulerData: i } = this.props;
      let a = i.getContentCellWidth(), d = pe(this.eventContainer), c = o - d.x, h = Math.floor(c / a), p = h * a, f = Math.ceil(c / a), m = (f - h) * a;
      this.setState({
        startX: c,
        left: p,
        leftIndex: h,
        width: m,
        rightIndex: f,
        isSelecting: !0
      }), le ? (document.documentElement.addEventListener("touchmove", this.doDrag, !1), document.documentElement.addEventListener("touchend", this.stopDrag, !1), document.documentElement.addEventListener("touchcancel", this.cancelDrag, !1)) : (document.documentElement.addEventListener("mousemove", this.doDrag, !1), document.documentElement.addEventListener("mouseup", this.stopDrag, !1)), document.onselectstart = function() {
        return !1;
      }, document.ondragstart = function() {
        return !1;
      };
    });
    M(this, "doDrag", (e) => {
      e.stopPropagation();
      let r = 0;
      if (le) {
        if (e.changedTouches.length == 0)
          return;
        r = e.changedTouches[0].pageX;
      } else
        r = e.clientX;
      const { startX: s } = this.state, { schedulerData: o } = this.props, { headers: i } = o;
      let a = o.getContentCellWidth(), d = pe(this.eventContainer), c = r - d.x, h = Math.floor(Math.min(s, c) / a);
      h = h < 0 ? 0 : h;
      let p = h * a, f = Math.ceil(Math.max(s, c) / a);
      f = f > i.length ? i.length : f;
      let m = (f - h) * a;
      this.setState({
        leftIndex: h,
        left: p,
        rightIndex: f,
        width: m,
        isSelecting: !0
      });
    });
    M(this, "stopDrag", (e) => {
      e.stopPropagation();
      const { schedulerData: r, newEvent: s, resourceEvents: o } = this.props, { headers: i, events: a, config: d, cellUnit: c, localeMoment: h } = r, { leftIndex: p, rightIndex: f } = this.state;
      le ? (document.documentElement.removeEventListener("touchmove", this.doDrag, !1), document.documentElement.removeEventListener("touchend", this.stopDrag, !1), document.documentElement.removeEventListener("touchcancel", this.cancelDrag, !1)) : (document.documentElement.removeEventListener("mousemove", this.doDrag, !1), document.documentElement.removeEventListener("mouseup", this.stopDrag, !1)), document.onselectstart = null, document.ondragstart = null;
      let m = i[p].time, E = o.headerItems[f - 1].end;
      c !== X.Hour && (E = h(o.headerItems[f - 1].start).hour(23).minute(59).second(59).format(L));
      let C = o.slotId, R = o.slotName;
      this.setState({
        startX: 0,
        leftIndex: 0,
        left: 0,
        rightIndex: 0,
        width: 0,
        isSelecting: !1
      });
      let x = !1;
      if (d.checkConflict) {
        let v = h(m), T = h(E);
        a.forEach((w) => {
          if (r._getEventSlotId(w) === C) {
            let j = h(w.start), k = h(w.end);
            (v >= j && v < k || T > j && T <= k || j >= v && j < T || k > v && k <= T) && (x = !0);
          }
        });
      }
      if (x) {
        const { conflictOccurred: v } = this.props;
        v != null ? v(
          r,
          "New",
          {
            id: void 0,
            start: m,
            end: E,
            slotId: C,
            slotName: R,
            title: void 0
          },
          ie.EVENT,
          C,
          R,
          m,
          E
        ) : console.log("Conflict occurred, set conflictOccurred func in Scheduler to handle it");
      } else
        s != null && s(r, C, R, m, E);
    });
    M(this, "cancelDrag", (e) => {
      e.stopPropagation();
      const { isSelecting: r } = this.state;
      r && (document.documentElement.removeEventListener("touchmove", this.doDrag, !1), document.documentElement.removeEventListener("touchend", this.stopDrag, !1), document.documentElement.removeEventListener("touchcancel", this.cancelDrag, !1), document.onselectstart = null, document.ondragstart = null, this.setState({
        startX: 0,
        leftIndex: 0,
        left: 0,
        rightIndex: 0,
        width: 0,
        isSelecting: !1
      }));
    });
    M(this, "onAddMoreClick", (e) => {
      const { onSetAddMoreState: r, resourceEvents: s, schedulerData: o } = this.props;
      if (r) {
        const { config: i } = o;
        let a = o.getContentCellWidth(), d = s.headerItems.indexOf(e);
        if (d !== -1) {
          let c = d * (a - 1), h = pe(this.eventContainer);
          c = c + h.x;
          let p = h.y, f = (e.count + 1) * i.eventItemLineHeight + 20;
          r({
            headerItem: e,
            left: c,
            top: p,
            height: f
          });
        }
      }
    });
    M(this, "eventContainerRef", (e) => {
      this.eventContainer = e;
    });
    this.state = {
      isSelecting: !1,
      left: 0,
      width: 0
    };
  }
  componentDidMount() {
    const { schedulerData: e } = this.props, { config: r } = e;
    r.creatable === !0 && (le || this.eventContainer.addEventListener("mousedown", this.initDrag, !1));
  }
  UNSAFE_componentWillReceiveProps(e) {
    le || this.eventContainer.removeEventListener("mousedown", this.initDrag, !1), e.schedulerData.config.creatable && (le || this.eventContainer.addEventListener("mousedown", this.initDrag, !1));
  }
  render() {
    const { resourceEvents: e, schedulerData: r, connectDropTarget: s, dndSource: o } = this.props, { cellUnit: i, startDate: a, endDate: d, config: c, localeMoment: h } = r, { isSelecting: p, left: f, width: m } = this.state;
    let E = r.getContentCellWidth(), C = r.getCellMaxEvents(), R = r.getContentTableWidth(), x = o.getDragSource(), v = p ? /* @__PURE__ */ l.jsx(ht, { ...this.props, left: f, width: m }) : /* @__PURE__ */ l.jsx("div", {}), T = [];
    return e.headerItems.forEach((w, j) => {
      if (w.count > 0 || w.summary != null) {
        let k = c.summaryPos === ae.TopRight || c.summaryPos === ae.Top || c.summaryPos === ae.TopLeft, O = e.hasSummary && k ? 1 + c.eventItemLineHeight : 1, P = w.addMore === 0 ? C : w.addMoreIndex;
        if (w.events.forEach((S, W) => {
          if (W < P && S !== void 0 && S.render) {
            let q = h(a), Q = h(d).add(1, "days");
            i === X.Hour && (q = h(a).add(c.dayStartFrom, "hours"), Q = h(d).add(c.dayStopTo + 1, "hours"));
            let V = h(S.eventItem.start), K = h(S.eventItem.end), G = V >= q, A = K <= Q, F = j * E + (j > 0 ? 2 : 3), Y = S.span * E - (j > 0 ? 5 : 6) > 0 ? S.span * E - (j > 0 ? 5 : 6) : 0, B = O + W * c.eventItemLineHeight, ne = /* @__PURE__ */ he(
              x,
              {
                ...this.props,
                key: S.eventItem.id,
                eventItem: S.eventItem,
                isStart: G,
                isEnd: A,
                isInPopover: !1,
                left: F,
                width: Y,
                top: B,
                leftIndex: j,
                rightIndex: j + S.span
              }
            );
            T.push(ne);
          }
        }), w.addMore > 0) {
          let S = j * E + (j > 0 ? 2 : 3), W = E - (j > 0 ? 5 : 6), q = O + w.addMoreIndex * c.eventItemLineHeight, Q = /* @__PURE__ */ he(ct, { ...this.props, key: w.time, headerItem: w, number: w.addMore, left: S, width: W, top: q, clickAction: this.onAddMoreClick });
          T.push(Q);
        }
        if (w.summary != null) {
          let S = k ? 1 : e.rowHeight - c.eventItemLineHeight + 1, W = j * E + (j > 0 ? 2 : 3), q = E - (j > 0 ? 5 : 6), Q = `${e.slotId}_${w.time}`, V = /* @__PURE__ */ l.jsx(ut, { schedulerData: r, summary: w.summary, left: W, width: q, top: S }, Q);
          T.push(V);
        }
      }
    }), /* @__PURE__ */ l.jsx("tr", { children: /* @__PURE__ */ l.jsx("td", { style: { width: R }, children: s(
      /* @__PURE__ */ l.jsxs("div", { ref: this.eventContainerRef, className: "event-container", style: { height: e.rowHeight }, children: [
        v,
        T
      ] })
    ) }) });
  }
}
M(ft, "propTypes", {
  resourceEvents: u.object.isRequired,
  schedulerData: u.object.isRequired,
  dndSource: u.object.isRequired,
  onSetAddMoreState: u.func,
  updateEventStart: u.func,
  updateEventEnd: u.func,
  moveEvent: u.func,
  movingEvent: u.func,
  conflictOccurred: u.func,
  subtitleGetter: u.func,
  eventItemClick: u.func,
  viewEventClick: u.func,
  viewEventText: u.string,
  viewEvent2Click: u.func,
  viewEvent2Text: u.string,
  newEvent: u.func,
  eventItemTemplateResolver: u.func
});
function mt(y) {
  const { eventItem: t, isStart: e, isEnd: r, eventItemClick: s, schedulerData: o, eventItemTemplateResolver: i } = y, { config: a, behaviors: d } = o, c = e ? r ? "round-all" : "round-head" : r ? "round-tail" : "round-none", h = t.bgColor || a.defaultEventBgColor, p = d.getEventTextFunc(o, t);
  let f = /* @__PURE__ */ l.jsx("div", { className: `${c} event-item`, style: { height: a.eventItemHeight, maxWidth: a.agendaMaxEventWidth, backgroundColor: h }, children: /* @__PURE__ */ l.jsx("span", { style: { marginLeft: "10px", lineHeight: `${a.eventItemHeight}px` }, children: p }) }, t.id);
  i && (f = i(o, t, h, e, r, "event-item", a.eventItemHeight, a.agendaMaxEventWidth));
  const m = () => {
    s && s(o, t);
  }, E = /* @__PURE__ */ l.jsx("a", { className: "day-event", onClick: m, children: f });
  let C = /* @__PURE__ */ l.jsx(Oe, { ...y, title: t.title, startTime: t.start, endTime: t.end, statusColor: h });
  return a.eventItemPopoverEnabled ? /* @__PURE__ */ l.jsx(He, { placement: "bottomLeft", content: C, trigger: "hover", children: E }) : /* @__PURE__ */ l.jsx("span", { children: E });
}
mt.propTypes = {
  schedulerData: u.object.isRequired,
  eventItem: u.object.isRequired,
  isStart: u.bool.isRequired,
  isEnd: u.bool.isRequired,
  subtitleGetter: u.func,
  eventItemClick: u.func,
  viewEventClick: u.func,
  viewEventText: u.string,
  viewEvent2Click: u.func,
  viewEvent2Text: u.string,
  eventItemTemplateResolver: u.func
};
function gt(y) {
  const { schedulerData: t, resourceEvents: e, slotClickedFunc: r, slotItemTemplateResolver: s } = y, { startDate: o, endDate: i, config: a, localeMoment: d } = t, { slotId: c, slotName: h, headerItems: p } = e;
  let m = t.getResourceTableWidth() - 2;
  const E = d(o).format(H), C = d(i).add(1, "days").format(H);
  let R = [];
  p.forEach(({ start: T, end: w, events: j }) => {
    E === d(T).format(H) && C === d(w).format(H) && j.forEach(({ eventItem: k }) => {
      const { start: O, end: P, id: S } = k, W = d(o), q = d(i).add(1, "days"), Q = d(O) >= W, V = d(P) < q, K = /* @__PURE__ */ he(mt, { ...y, key: S, eventItem: k, isStart: Q, isEnd: V });
      j.push(K);
    });
  });
  const x = r && /* @__PURE__ */ l.jsx("a", { onClick: () => r(t, e), children: h });
  let v = /* @__PURE__ */ l.jsx("div", { style: { width: m }, title: h, className: "overflow-text header2-text", children: x || /* @__PURE__ */ l.jsx("span", { children: h }) });
  if (s) {
    const T = s(t, e, r, m, "overflow-text header2-text");
    T && (v = T);
  }
  return /* @__PURE__ */ l.jsxs("tr", { style: { minHeight: a.eventItemLineHeight + 2 }, children: [
    /* @__PURE__ */ l.jsx("td", { "data-resource-id": c, children: v }),
    /* @__PURE__ */ l.jsx("td", { children: /* @__PURE__ */ l.jsx("div", { className: "day-event-container", children: R }) })
  ] });
}
gt.propTypes = {
  schedulerData: u.object.isRequired,
  resourceEvents: u.object.isRequired,
  subtitleGetter: u.func,
  eventItemClick: u.func,
  viewEventClick: u.func,
  viewEventText: u.string,
  viewEvent2Click: u.func,
  viewEvent2Text: u.string,
  slotClickedFunc: u.func,
  slotItemTemplateResolver: u.func
};
function pt(y) {
  const { schedulerData: t } = y, { config: e, renderData: r, getResourceTableWidth: s, getTableHeaderHeight: o, isEventPerspective: i } = t, a = s(), d = o(), c = r.map((f) => /* @__PURE__ */ he(gt, { ...y, resourceEvents: f, key: f.slotId })), h = i ? e.taskName : e.resourceName, p = e.agendaViewHeader;
  return /* @__PURE__ */ l.jsx("tr", { children: /* @__PURE__ */ l.jsx("td", { children: /* @__PURE__ */ l.jsxs("table", { className: "scheduler-table", children: [
    /* @__PURE__ */ l.jsx("thead", { children: /* @__PURE__ */ l.jsxs("tr", { style: { height: d }, children: [
      /* @__PURE__ */ l.jsx("th", { style: { width: a }, className: "header3-text", children: h }),
      /* @__PURE__ */ l.jsx("th", { className: "header3-text", children: p })
    ] }) }),
    /* @__PURE__ */ l.jsx("tbody", { children: c })
  ] }) }) });
}
pt.propTypes = {
  schedulerData: oe.object.isRequired,
  subtitleGetter: oe.func,
  eventItemClick: oe.func,
  viewEventClick: oe.func,
  viewEventText: oe.string,
  viewEvent2Click: oe.func,
  viewEvent2Text: oe.string,
  slotClickedFunc: oe.func
};
function nr(y) {
  const [t] = $t(new ot((w) => w.eventItem, Ne)), { headerItem: e, left: r, top: s, height: o, closeAction: i, schedulerData: a } = y, { config: d, localeMoment: c } = a, { time: h, start: p, end: f, events: m } = e;
  let E = c(h).format(d.addMorePopoverHeaderFormat), C = c(p), R = c(f), x = 0, v = t.getDragSource();
  const T = m.map((w) => {
    if (w !== void 0) {
      x++;
      let j = c(w.eventItem.start), k = c(w.eventItem.end), O = j >= C, P = k < R, S = 10, W = 138, q = 12 + x * d.eventItemLineHeight;
      return /* @__PURE__ */ he(
        v,
        {
          ...y,
          key: w.eventItem.id,
          eventItem: w.eventItem,
          leftIndex: 0,
          isInPopover: !0,
          isStart: O,
          isEnd: P,
          rightIndex: 1,
          left: S,
          width: W,
          top: q
        }
      );
    }
    return null;
  });
  return /* @__PURE__ */ l.jsxs("div", { className: "add-more-popover-overlay", style: { left: r, top: s, height: o, width: "170px" }, children: [
    /* @__PURE__ */ l.jsxs(ue, { justify: "space-between", align: "middle", children: [
      /* @__PURE__ */ l.jsx(ee, { span: "22", children: /* @__PURE__ */ l.jsx("span", { className: "base-text", children: E }) }),
      /* @__PURE__ */ l.jsx(ee, { span: "2", children: /* @__PURE__ */ l.jsx("span", { onClick: () => i(void 0), children: /* @__PURE__ */ l.jsx(Gt, {}) }) })
    ] }),
    T
  ] });
}
nr.propTypes = {
  schedulerData: u.object.isRequired,
  headerItem: u.object.isRequired,
  left: u.number.isRequired,
  top: u.number.isRequired,
  height: u.number.isRequired,
  closeAction: u.func.isRequired,
  subtitleGetter: u.func,
  moveEvent: u.func,
  eventItemClick: u.func,
  viewEventClick: u.func,
  viewEventText: u.string,
  viewEvent2Click: u.func,
  viewEvent2Text: u.string,
  eventItemTemplateResolver: u.func
};
const rt = {
  schedulerWidth: "100%",
  besidesWidth: 20,
  schedulerMaxHeight: 0,
  tableHeaderHeight: 40,
  agendaResourceTableWidth: 160,
  agendaMaxEventWidth: 100,
  dayResourceTableWidth: 160,
  weekResourceTableWidth: "16%",
  monthResourceTableWidth: 160,
  quarterResourceTableWidth: 160,
  yearResourceTableWidth: 160,
  customResourceTableWidth: 160,
  dayCellWidth: 30,
  weekCellWidth: "12%",
  monthCellWidth: 80,
  quarterCellWidth: 80,
  yearCellWidth: 80,
  customCellWidth: 80,
  dayMaxEvents: 99,
  weekMaxEvents: 99,
  monthMaxEvents: 99,
  quarterMaxEvents: 99,
  yearMaxEvents: 99,
  customMaxEvents: 99,
  eventItemHeight: 22,
  eventItemLineHeight: 24,
  nonAgendaSlotMinHeight: 0,
  dayStartFrom: 0,
  dayStopTo: 23,
  defaultEventBgColor: "#80C5F6",
  selectedAreaColor: "#7EC2F3",
  nonWorkingTimeHeadColor: "#999999",
  nonWorkingTimeHeadBgColor: "#fff0f6",
  nonWorkingTimeBodyBgColor: "#fff0f6",
  summaryColor: "#666",
  summaryPos: ae.TopRight,
  groupOnlySlotColor: "#F8F8F8",
  startResizable: !0,
  endResizable: !0,
  movable: !0,
  creatable: !0,
  crossResourceMove: !0,
  checkConflict: !1,
  scrollToSpecialMomentEnabled: !0,
  eventItemPopoverEnabled: !0,
  calendarPopoverEnabled: !0,
  recurringEventsEnabled: !0,
  headerEnabled: !0,
  displayWeekend: !0,
  relativeMove: !0,
  defaultExpanded: !0,
  resourceName: "Resource Name",
  taskName: "Task Name",
  agendaViewHeader: "Agenda",
  addMorePopoverHeaderFormat: "MMM D, YYYY dddd",
  eventItemPopoverDateFormat: "MMM D",
  nonAgendaDayCellHeaderFormat: "ha",
  nonAgendaOtherCellHeaderFormat: "ddd M/D",
  minuteStep: 30,
  views: [
    { viewName: "Day", viewType: D.Day, showAgenda: !1, isEventPerspective: !1 },
    { viewName: "Week", viewType: D.Week, showAgenda: !1, isEventPerspective: !1 },
    { viewName: "Month", viewType: D.Month, showAgenda: !1, isEventPerspective: !1 },
    { viewName: "Quarter", viewType: D.Quarter, showAgenda: !1, isEventPerspective: !1 },
    { viewName: "Year", viewType: D.Year, showAgenda: !1, isEventPerspective: !1 }
  ]
}, sr = (y, t, e, r) => {
  const s = y.localeMoment(e), o = y.localeMoment(r);
  let i;
  switch (t) {
    case D.Week:
    case D.Custom:
    case D.Custom1:
    case D.Custom2:
      s !== o && (i = `${s.format("MMM D")}-${o.format("D, YYYY")}`, s.month() !== o.month() && (i = `${s.format("MMM D")}-${o.format("MMM D, YYYY")}`), s.year() !== o.year() && (i = `${s.format("MMM D, YYYY")}-${o.format("MMM D, YYYY")}`));
      break;
    case D.Month:
      i = s.format("MMMM YYYY");
      break;
    case D.Quarter:
      i = `${s.format("MMM D")}-${o.format("MMM D, YYYY")}`;
      break;
    case D.Year:
      i = s.format("YYYY");
      break;
    default:
      i = s.format("MMM D, YYYY");
  }
  return i;
}, ir = (y, t) => {
  if (!y.isEventPerspective)
    return t.title;
  const e = y.resources.find((r) => r.id === t.resourceId);
  return e ? e.name : t.title;
}, or = (y, t, e) => y.localeMoment(), ar = (y, t) => {
  const { localeMoment: e, cellUnit: r } = y;
  if (r === X.Hour) {
    const o = e(t).hour();
    return o < 9 || o > 18;
  }
  const s = e(t).weekday();
  return s === 0 || s === 6;
}, nt = {
  getSummaryFunc: void 0,
  getCustomDateFunc: void 0,
  getNonAgendaViewBodyCellBgColorFunc: void 0,
  getScrollSpecialMomentFunc: or,
  getDateLabelFunc: sr,
  getEventTextFunc: ir,
  isNonWorkingTimeFunc: ar
  // getNonAgendaViewBodyCellBgColorFunc: getNonAgendaViewBodyCellBgColor,
  //getCustomDateFunc: getCustomDate,
  //getSummaryFunc: getSummary,
};
class br {
  constructor(t = je().format(H), e = D.Week, r = !1, s = !1, o = void 0, i = void 0, a = void 0) {
    this.resources = [], this.events = [], this.eventGroups = [], this.eventGroupsAutoGenerated = !0, this.viewType = e, this.cellUnit = e === D.Day ? X.Hour : X.Day, this.showAgenda = r, this.isEventPerspective = s, this.resizing = !1, this.scrollToSpecialMoment = !1, this.documentWidth = 0, this.localeMoment = je, a && (this.localeMoment = a), this.config = o == null ? rt : { ...rt, ...o }, this._validateMinuteStep(this.config.minuteStep), this.behaviors = i == null ? nt : { ...nt, ...i }, this._resolveDate(0, t), this._createHeaders(), this._createRenderData();
  }
  setLocaleMoment(t) {
    t && (this.localeMoment = t, this._createHeaders(), this._createRenderData());
  }
  setResources(t) {
    this._validateResource(t), this.resources = Array.from(new Set(t)), this._createRenderData(), this.setScrollToSpecialMoment(!0);
  }
  setEventGroupsAutoGenerated(t) {
    this.eventGroupsAutoGenerated = t;
  }
  //optional
  setEventGroups(t) {
    this._validateEventGroups(t), this.eventGroups = Array.from(new Set(t)), this.eventGroupsAutoGenerated = !1, this._createRenderData(), this.setScrollToSpecialMoment(!0);
  }
  setMinuteStep(t) {
    this.config.minuteStep !== t && (this._validateMinuteStep(t), this.config.minuteStep = t, this._createHeaders(), this._createRenderData());
  }
  setBesidesWidth(t) {
    t >= 0 && (this.config.besidesWidth = t);
  }
  getMinuteStepsInHour() {
    return 60 / this.config.minuteStep;
  }
  addResource(t) {
    this.resources.filter((r) => r.id === t.id).length === 0 && (this.resources.push(t), this._createRenderData());
  }
  addEventGroup(t) {
    this.eventGroups.filter((r) => r.id === t.id).length === 0 && (this.eventGroups.push(t), this._createRenderData());
  }
  removeEventGroupById(t) {
    let e = -1;
    this.eventGroups.forEach((r, s) => {
      r.id === t && (e = s);
    }), e !== -1 && this.eventGroups.splice(e, 1);
  }
  containsEventGroupId(t) {
    let e = -1;
    return this.eventGroups.forEach((r, s) => {
      r.id === t && (e = s);
    }), e !== -1;
  }
  setEvents(t) {
    this._validateEvents(t), this.events = Array.from(t), this.eventGroupsAutoGenerated && this._generateEventGroups(), this.config.recurringEventsEnabled && this._handleRecurringEvents(), this._createRenderData();
  }
  setScrollToSpecialMoment(t) {
    this.config.scrollToSpecialMomentEnabled && (this.scrollToSpecialMoment = t);
  }
  prev() {
    this._resolveDate(-1), this.events = [], this._createHeaders(), this._createRenderData();
  }
  next() {
    this._resolveDate(1), this.events = [], this._createHeaders(), this._createRenderData();
  }
  setDate(t = je().format(H)) {
    this._resolveDate(0, t), this.events = [], this._createHeaders(), this._createRenderData();
  }
  setViewType(t = D.Week, e = !1, r = !1) {
    if (this.showAgenda = e, this.isEventPerspective = r, this.cellUnit = X.Day, this.viewType !== t) {
      let s = this.startDate;
      if (t === D.Custom || t === D.Custom1 || t === D.Custom2)
        this.viewType = t, this._resolveDate(0, s);
      else {
        if (this.viewType < t)
          t === D.Week ? (this.startDate = this.localeMoment(s).startOf("week").format(H), this.endDate = this.localeMoment(this.startDate).endOf("week").format(H)) : t === D.Month ? (this.startDate = this.localeMoment(s).startOf("month").format(H), this.endDate = this.localeMoment(this.startDate).endOf("month").format(H)) : t === D.Quarter ? (this.startDate = this.localeMoment(s).startOf("quarter").format(H), this.endDate = this.localeMoment(this.startDate).endOf("quarter").format(H)) : t === D.Year && (this.startDate = this.localeMoment(s).startOf("year").format(H), this.endDate = this.localeMoment(this.startDate).endOf("year").format(H));
        else {
          let o = this.localeMoment(this.startDate), i = this.localeMoment(this.endDate).add(1, "days");
          if (this.selectDate !== void 0) {
            let d = this.localeMoment(this.selectDate);
            d >= o && d < i && (s = this.selectDate);
          }
          let a = this.localeMoment();
          a >= o && a < i && (s = a.format(H)), t === D.Day ? (this.startDate = s, this.endDate = this.startDate, this.cellUnit = X.Hour) : t === D.Week ? (this.startDate = this.localeMoment(s).startOf("week").format(H), this.endDate = this.localeMoment(this.startDate).endOf("week").format(H)) : t === D.Month ? (this.startDate = this.localeMoment(s).startOf("month").format(H), this.endDate = this.localeMoment(this.startDate).endOf("month").format(H)) : t === D.Quarter && (this.startDate = this.localeMoment(s).startOf("quarter").format(H), this.endDate = this.localeMoment(this.startDate).endOf("quarter").format(H));
        }
        this.viewType = t;
      }
      this.events = [], this._createHeaders(), this._createRenderData(), this.setScrollToSpecialMoment(!0);
    }
  }
  setSchedulerMaxHeight(t) {
    this.config.schedulerMaxHeight = t;
  }
  isSchedulerResponsive() {
    return !!this.config.schedulerWidth.endsWith && this.config.schedulerWidth.endsWith("%");
  }
  toggleExpandStatus(t) {
    let e = !1, r = -1, s = !1, o = /* @__PURE__ */ new Map();
    this.renderData.forEach((i) => {
      if (e === !1)
        i.slotId === t && i.hasChildren && (e = !0, s = !i.expanded, i.expanded = s, r = i.indent, o.set(i.indent, {
          expanded: i.expanded,
          render: i.render
        }));
      else if (i.indent > r) {
        let a = o.get(i.indent - 1);
        i.render = a.expanded && a.render, i.hasChildren && o.set(i.indent, {
          expanded: i.expanded,
          render: i.render
        });
      } else
        e = !1;
    });
  }
  isResourceViewResponsive() {
    let t = this.getResourceTableConfigWidth();
    return !!t.endsWith && t.endsWith("%");
  }
  isContentViewResponsive() {
    let t = this.getContentCellConfigWidth();
    return !!t.endsWith && t.endsWith("%");
  }
  getSchedulerWidth() {
    let t = this.documentWidth - this.config.besidesWidth > 0 ? this.documentWidth - this.config.besidesWidth : 0;
    return this.isSchedulerResponsive() ? parseInt(t * Number(this.config.schedulerWidth.slice(0, -1)) / 100) : this.config.schedulerWidth;
  }
  getResourceTableWidth() {
    let t = this.getResourceTableConfigWidth(), e = this.getSchedulerWidth(), r = this.isResourceViewResponsive() ? parseInt(e * Number(t.slice(0, -1)) / 100) : t;
    return this.isSchedulerResponsive() && this.getContentTableWidth() + r < e && (r = e - this.getContentTableWidth()), r;
  }
  getContentCellWidth() {
    let t = this.getContentCellConfigWidth(), e = this.getSchedulerWidth();
    return this.isContentViewResponsive() ? parseInt(e * Number(t.slice(0, -1)) / 100) : t;
  }
  getContentTableWidth() {
    return this.headers.length * this.getContentCellWidth();
  }
  getScrollToSpecialMoment() {
    return this.config.scrollToSpecialMomentEnabled ? this.scrollToSpecialMoment : !1;
  }
  getSlots() {
    return this.isEventPerspective ? this.eventGroups : this.resources;
  }
  getSlotById(t) {
    let e = this.getSlots(), r;
    return e.forEach((s) => {
      s.id === t && (r = s);
    }), r;
  }
  getResourceById(t) {
    let e;
    return this.resources.forEach((r) => {
      r.id === t && (e = r);
    }), e;
  }
  getTableHeaderHeight() {
    return this.config.tableHeaderHeight;
  }
  getSchedulerContentDesiredHeight() {
    let t = 0;
    return this.renderData.forEach((e) => {
      e.render && (t += e.rowHeight);
    }), t;
  }
  getCellMaxEvents() {
    return this.viewType === D.Week ? this.config.weekMaxEvents : this.viewType === D.Day ? this.config.dayMaxEvents : this.viewType === D.Month ? this.config.monthMaxEvents : this.viewType === D.Year ? this.config.yearMaxEvents : this.viewType === D.Quarter ? this.config.quarterMaxEvents : this.config.customMaxEvents;
  }
  getDateLabel() {
    let t = this.localeMoment(this.startDate), e = this.localeMoment(this.endDate), r = t.format("LL");
    return t != e && (r = `${t.format("LL")}-${e.format("LL")}`), this.behaviors.getDateLabelFunc && (r = this.behaviors.getDateLabelFunc(this, this.viewType, this.startDate, this.endDate)), r;
  }
  addEvent(t) {
    this._attachEvent(t), this.eventGroupsAutoGenerated && this._generateEventGroups(), this._createRenderData();
  }
  updateEventStart(t, e) {
    this._detachEvent(t), t.start = e, this._attachEvent(t), this._createRenderData();
  }
  updateEventEnd(t, e) {
    t.end = e, this._createRenderData();
  }
  moveEvent(t, e, r, s, o) {
    this._detachEvent(t), this.isEventPerspective ? (t.groupId = e, t.groupName = r) : t.resourceId = e, t.end = o, t.start = s, this._attachEvent(t), this._createRenderData();
  }
  isEventInTimeWindow(t, e, r, s) {
    return t < s && e > r;
  }
  removeEvent(t) {
    let e = this.events.indexOf(t);
    e !== -1 && (this.events.splice(e, 1), this._createRenderData());
  }
  removeEventById(t) {
    let e = -1;
    this.events.forEach((r, s) => {
      r.id === t && (e = s);
    }), e !== -1 && (this.events.splice(e, 1), this._createRenderData());
  }
  getResourceTableConfigWidth() {
    return this.showAgenda ? this.config.agendaResourceTableWidth : this.viewType === D.Week ? this.config.weekResourceTableWidth : this.viewType === D.Day ? this.config.dayResourceTableWidth : this.viewType === D.Month ? this.config.monthResourceTableWidth : this.viewType === D.Year ? this.config.yearResourceTableWidth : this.viewType === D.Quarter ? this.config.quarterResourceTableWidth : this.config.customResourceTableWidth;
  }
  getContentCellConfigWidth() {
    return this.viewType === D.Week ? this.config.weekCellWidth : this.viewType === D.Day ? this.config.dayCellWidth : this.viewType === D.Month ? this.config.monthCellWidth : this.viewType === D.Year ? this.config.yearCellWidth : this.viewType === D.Quarter ? this.config.quarterCellWidth : this.config.customCellWidth;
  }
  _setDocumentWidth(t) {
    t >= 0 && (this.documentWidth = t);
  }
  _detachEvent(t) {
    let e = this.events.indexOf(t);
    e !== -1 && this.events.splice(e, 1);
  }
  _attachEvent(t) {
    let e = 0, r = this.localeMoment(t.start);
    this.events.forEach((s, o) => {
      let i = this.localeMoment(s.start);
      r >= i && (e = o + 1);
    }), this.events.splice(e, 0, t);
  }
  _handleRecurringEvents() {
    let t = this.events.filter((e) => !!e.rrule);
    t.forEach((e) => {
      this._detachEvent(e);
    }), t.forEach((e) => {
      let r = this.localeMoment(this.startDate), s = this.localeMoment(this.endDate).add(1, "days"), o = this.localeMoment(e.start), i = this.localeMoment(e.end), a = ke(e.rrule), d, c = a.origOptions.until || s.toDate();
      if (a.origOptions.dtstart && (d = this.localeMoment(a.origOptions.dtstart)), s < c && (a.origOptions.until = s.toDate()), a = ke(a.toString()), e.exdates || e.exrule) {
        const f = new Zt();
        f.rrule(a), e.exrule && f.exrule(ke(e.exrule)), e.exdates && e.exdates.forEach((m) => {
          f.exdate(this.localeMoment(m).toDate());
        }), a = f;
      }
      a.all().map((f, m) => ({
        ...e,
        recurringEventId: e.id,
        recurringEventStart: e.start,
        recurringEventEnd: e.end,
        id: `${e.id}-${m}`,
        start: a.origOptions.tzid ? this.localeMoment.utc(f).utcOffset(this.localeMoment().utcOffset(), !0).format(L) : this.localeMoment(f).format(L),
        end: a.origOptions.tzid ? this.localeMoment.utc(f).utcOffset(this.localeMoment().utcOffset(), !0).add(i.diff(o), "ms").add(this.localeMoment(c).utcOffset() - this.localeMoment(e.start).utcOffset(), "m").format(L) : this.localeMoment(f).add(i.diff(o), "ms").format(L)
      })).forEach((f) => {
        let m = this.localeMoment(f.start), E = this.localeMoment(f.end);
        this.isEventInTimeWindow(m, E, r, s) && (!d || m >= d) && this._attachEvent(f);
      });
    });
  }
  _resolveDate(t, e = void 0) {
    if (e != null && (this.selectDate = this.localeMoment(e).format(H)), this.viewType === D.Week)
      this.startDate = e != null ? this.localeMoment(e).startOf("week").format(H) : this.localeMoment(this.startDate).add(t, "weeks").format(H), this.endDate = this.localeMoment(this.startDate).endOf("week").format(H);
    else if (this.viewType === D.Day)
      this.startDate = e != null ? this.selectDate : this.localeMoment(this.startDate).add(t, "days").format(H), this.endDate = this.startDate;
    else if (this.viewType === D.Month)
      this.startDate = e != null ? this.localeMoment(e).startOf("month").format(H) : this.localeMoment(this.startDate).add(t, "months").format(H), this.endDate = this.localeMoment(this.startDate).endOf("month").format(H);
    else if (this.viewType === D.Quarter)
      this.startDate = e != null ? this.localeMoment(e).startOf("quarter").format(H) : this.localeMoment(this.startDate).add(t, "quarters").format(H), this.endDate = this.localeMoment(this.startDate).endOf("quarter").format(H);
    else if (this.viewType === D.Year)
      this.startDate = e != null ? this.localeMoment(e).startOf("year").format(H) : this.localeMoment(this.startDate).add(t, "years").format(H), this.endDate = this.localeMoment(this.startDate).endOf("year").format(H);
    else if (this.viewType === D.Custom || this.viewType === D.Custom1 || this.viewType === D.Custom2)
      if (this.behaviors.getCustomDateFunc != null) {
        let r = this.behaviors.getCustomDateFunc(this, t, e);
        this.startDate = r.startDate, this.endDate = r.endDate, r.cellUnit && (this.cellUnit = r.cellUnit);
      } else
        throw new Error("This is custom view type, set behaviors.getCustomDateFunc func to resolve the time window(startDate and endDate) yourself");
  }
  _createHeaders() {
    let t = [], e = this.localeMoment(this.startDate), r = this.localeMoment(this.endDate), s = e;
    if (this.showAgenda)
      t.push({ time: s.format(L), nonWorkingTime: !1 });
    else if (this.cellUnit === X.Hour)
      for (e = e.add(this.config.dayStartFrom, "hours"), r = r.add(this.config.dayStopTo, "hours"), s = e; s >= e && s <= r; ) {
        let o = this.getMinuteStepsInHour();
        for (let i = 0; i < o; i++) {
          let a = s.hour();
          if (a >= this.config.dayStartFrom && a <= this.config.dayStopTo) {
            let d = s.format(L), c = this.behaviors.isNonWorkingTimeFunc(this, d);
            t.push({ time: d, nonWorkingTime: c });
          }
          s = s.add(this.config.minuteStep, "minutes");
        }
      }
    else
      for (; s >= e && s <= r; ) {
        let o = s.format(L), i = s.weekday();
        if (this.config.displayWeekend || i !== 0 && i !== 6) {
          let a = this.behaviors.isNonWorkingTimeFunc(this, o);
          t.push({ time: o, nonWorkingTime: a });
        }
        s = s.add(1, "days");
      }
    this.headers = t;
  }
  _createInitHeaderEvents(t) {
    let e = this.localeMoment(t.time), r = e.format(L), s = this.showAgenda ? this.viewType === D.Week ? e.add(1, "weeks").format(L) : this.viewType === D.Day ? e.add(1, "days").format(L) : this.viewType === D.Month ? e.add(1, "months").format(L) : this.viewType === D.Year ? e.add(1, "years").format(L) : this.viewType === D.Quarter ? e.add(1, "quarters").format(L) : this.localeMoment(this.endDate).add(1, "days").format(L) : this.cellUnit === X.Hour ? e.add(this.config.minuteStep, "minutes").format(L) : e.add(1, "days").format(L);
    return {
      time: t.time,
      nonWorkingTime: t.nonWorkingTime,
      start: r,
      end: s,
      count: 0,
      addMore: 0,
      addMoreIndex: 0,
      events: [, , ,]
    };
  }
  _createHeaderEvent(t, e, r) {
    return {
      render: t,
      span: e,
      eventItem: r
    };
  }
  _getEventSlotId(t) {
    return this.isEventPerspective ? this._getEventGroupId(t) : t.resourceId;
  }
  _getEventGroupId(t) {
    return t.groupId ? t.groupId.toString() : t.id.toString();
  }
  _getEventGroupName(t) {
    return t.groupName ? t.groupName : t.title;
  }
  _generateEventGroups() {
    let t = [], e = /* @__PURE__ */ new Set();
    this.events.forEach((r) => {
      let s = this._getEventGroupId(r), o = this._getEventGroupName(r);
      e.has(s) || (t.push({
        id: s,
        name: o,
        state: r
      }), e.add(s));
    }), this.eventGroups = t;
  }
  _createInitRenderData(t, e, r, s) {
    let o = t ? e : r, i = [], a = /* @__PURE__ */ new Map();
    o.forEach((f) => {
      let m = s.map((v) => this._createInitHeaderEvents(v)), E = {
        slotId: f.id,
        slotName: f.name,
        parentId: f.parentId,
        groupOnly: f.groupOnly,
        hasSummary: !1,
        rowMaxCount: 0,
        rowHeight: this.config.nonAgendaSlotMinHeight !== 0 ? this.config.nonAgendaSlotMinHeight : this.config.eventItemLineHeight + 2,
        headerItems: m,
        indent: 0,
        hasChildren: !1,
        expanded: !0,
        render: !0
      }, C = f.id, R;
      a.has(C) ? (R = a.get(C), R.data = E) : (R = {
        data: E,
        children: []
      }, a.set(C, R));
      let x = f.parentId;
      if (!x || x === C)
        i.push(R);
      else {
        let v;
        a.has(x) ? v = a.get(x) : (v = {
          data: void 0,
          children: []
        }, a.set(x, v)), v.children.push(R);
      }
    });
    let d = [], c;
    for (c = i.length - 1; c >= 0; c--)
      d.push(i[c]);
    let h = [], p;
    for (; d.length > 0; )
      for (p = d.pop(), p.data.indent > 0 && (p.data.render = this.config.defaultExpanded), p.children.length > 0 && (p.data.hasChildren = !0, p.data.expanded = this.config.defaultExpanded), h.push(p.data), c = p.children.length - 1; c >= 0; c--)
        p.children[c].data.indent = p.data.indent + 1, d.push(p.children[c]);
    return h;
  }
  _getSpan(t, e, r) {
    if (this.showAgenda)
      return 1;
    let s = this.localeMoment(t), o = this.localeMoment(e), i = 0;
    for (let a of r) {
      let d = this.localeMoment(a.time), c = this.cellUnit === X.Hour ? this.localeMoment(a.time).add(this.config.minuteStep, "minutes") : this.localeMoment(a.time).add(1, "days");
      d < o && c > s && i++;
    }
    return i;
  }
  _validateResource(t) {
    if (Object.prototype.toString.call(t) !== "[object Array]")
      throw new Error("Resources should be Array object");
    t.forEach((e, r) => {
      if (e == null)
        throw console.error(`Resource undefined: ${r}`), new Error(`Resource undefined: ${r}`);
      if (e.id == null || e.name == null)
        throw console.error("Resource property missed", r, e), new Error(`Resource property undefined: ${r}`);
    });
  }
  _validateEventGroups(t) {
    if (Object.prototype.toString.call(t) !== "[object Array]")
      throw new Error("Event groups should be Array object");
    t.forEach((e, r) => {
      if (e == null)
        throw console.error(`Event group undefined: ${r}`), new Error(`Event group undefined: ${r}`);
      if (e.id == null || e.name == null)
        throw console.error("Event group property missed", r, e), new Error(`Event group property undefined: ${r}`);
    });
  }
  _validateEvents(t) {
    if (Object.prototype.toString.call(t) !== "[object Array]")
      throw new Error("Events should be Array object");
    t.forEach((e, r) => {
      if (e == null)
        throw console.error(`Event undefined: ${r}`), new Error(`Event undefined: ${r}`);
      if (e.id == null || e.resourceId == null || e.title == null || e.start == null || e.end == null)
        throw console.error("Event property missed", r, e), new Error(`Event property undefined: ${r}`);
    });
  }
  _validateMinuteStep(t) {
    if (60 % t !== 0)
      throw console.error("Minute step is not set properly - 60 minutes must be divisible without remainder by this number"), new Error("Minute step is not set properly - 60 minutes must be divisible without remainder by this number");
  }
  _compare(t, e) {
    let r = this.localeMoment(t.start), s = this.localeMoment(e.start);
    if (r !== s)
      return r < s ? -1 : 1;
    let o = this.localeMoment(t.end), i = this.localeMoment(e.end);
    return o !== i ? o < i ? -1 : 1 : t.id < e.id ? -1 : 1;
  }
  _createRenderData() {
    let t = this._createInitRenderData(this.isEventPerspective, this.eventGroups, this.resources, this.headers), e = this.getCellMaxEvents();
    const r = 30;
    this.events.forEach((s) => {
      let o = t.filter((i) => i.slotId === this._getEventSlotId(s));
      if (o.length > 0) {
        let i = o[0], a = this._getSpan(s.start, s.end, this.headers), d = this.localeMoment(s.start), c = this.localeMoment(s.end), h = -1;
        i.headerItems.forEach((p, f) => {
          let m = this.localeMoment(p.start);
          if (this.localeMoment(p.end) > d && m < c) {
            if (p.count = p.count + 1, p.count > i.rowMaxCount) {
              i.rowMaxCount = p.count;
              let x = (e <= r && i.rowMaxCount > e ? e : i.rowMaxCount) * this.config.eventItemLineHeight + (this.config.creatable && this.config.checkConflict === !1 ? 20 : 2);
              x > i.rowHeight && (i.rowHeight = x);
            }
            if (h === -1) {
              let R = 0;
              for (; p.events[R] !== void 0; )
                R++;
              h = R;
            }
            let C = m <= d || f === 0;
            if (C === !1) {
              let R = i.headerItems[f - 1], x = this.localeMoment(R.start);
              (this.localeMoment(R.end) <= d || x >= c) && (C = !0);
            }
            p.events[h] = this._createHeaderEvent(C, a, s);
          }
        });
      }
    }), (e <= r || this.behaviors.getSummaryFunc !== void 0) && t.forEach((s) => {
      let o = !1;
      if (s.headerItems.forEach((i) => {
        if (e <= r) {
          let a = 0, d = 0, c = 0;
          for (; c < e - 1; )
            i.events[c] !== void 0 && (a++, d = c + 1), c++;
          i.events[c] !== void 0 ? a + 1 < i.count && (i.addMore = i.count - a, i.addMoreIndex = d) : a < i.count && (i.addMore = i.count - a, i.addMoreIndex = d);
        }
        if (this.behaviors.getSummaryFunc !== void 0) {
          let a = [];
          i.events.forEach((d) => {
            d && d.eventItem && a.push(d.eventItem);
          }), i.summary = this.behaviors.getSummaryFunc(this, a, s.slotId, s.slotName, i.start, i.end), i.summary && i.summary.text != null && (o = !0);
        }
      }), s.hasSummary = o, o) {
        let a = ((e <= r && s.rowMaxCount > e ? e : s.rowMaxCount) + 1) * this.config.eventItemLineHeight + (this.config.creatable && this.config.checkConflict === !1 ? 20 : 2);
        a > s.rowHeight && (s.rowHeight = a);
      }
    }), this.renderData = t;
  }
  _startResizing() {
    this.resizing = !0;
  }
  _stopResizing() {
    this.resizing = !1;
  }
  _isResizing() {
    return this.resizing;
  }
}
const yr = {
  resources: [
    {
      id: "r0",
      name: "Resource0",
      groupOnly: !0
    },
    {
      id: "r1",
      name: "Resource1",
      parentId: "r0"
    },
    {
      id: "r2",
      name: "Resource2",
      parentId: "r3"
    },
    {
      id: "r3",
      name: "Resource3",
      parentId: "r1"
    },
    {
      id: "r4",
      name: "Resource4"
    },
    {
      id: "r5",
      name: "Resource5"
    },
    {
      id: "r6",
      name: "Resource6"
    },
    {
      id: "r7",
      name: "Resource7Resource7Resource7Resource7Resource7"
    }
  ],
  events: [
    {
      id: 1,
      start: "2022-12-18 09:30:00",
      end: "2022-12-19 23:30:00",
      resourceId: "r1",
      title: "I am finished",
      bgColor: "#D9D9D9",
      showPopover: !1
    },
    {
      id: 2,
      start: "2022-12-18 12:30:00",
      end: "2022-12-26 23:30:00",
      resourceId: "r2",
      title: "I am not resizable",
      resizable: !1
    },
    {
      id: 3,
      start: "2022-12-19 12:30:00",
      end: "2022-12-20 23:30:00",
      resourceId: "r3",
      title: "I am not movable",
      movable: !1
    },
    {
      id: 4,
      start: "2022-12-19 14:30:00",
      end: "2022-12-20 23:30:00",
      resourceId: "r4",
      title: "I am not start-resizable",
      startResizable: !1
    },
    {
      id: 5,
      start: "2022-12-19 15:30:00",
      end: "2022-12-20 23:30:00",
      resourceId: "r5",
      title: "I am not end-resizable",
      endResizable: !1
    },
    {
      id: 6,
      start: "2022-12-19 15:35:00",
      end: "2022-12-19 23:30:00",
      resourceId: "r6",
      title: "I am normal"
    },
    {
      id: 7,
      start: "2022-12-19 15:40:00",
      end: "2022-12-20 23:30:00",
      resourceId: "r7",
      title: "I am exceptional",
      bgColor: "#FA9E95"
    },
    {
      id: 8,
      start: "2022-12-19 15:50:00",
      end: "2022-12-19 23:30:00",
      resourceId: "r1",
      title: "I am locked",
      movable: !1,
      resizable: !1,
      bgColor: "red"
    },
    {
      id: 9,
      start: "2022-12-19 16:30:00",
      end: "2022-12-27 23:30:00",
      resourceId: "r1",
      title: "R1 has many tasks 1"
    },
    {
      id: 10,
      start: "2022-12-19 17:30:00",
      end: "2022-12-19 23:30:00",
      resourceId: "r1",
      title: "R1 has recurring tasks every week on Tuesday, Friday",
      bgColor: "#f759ab"
    },
    {
      id: 11,
      start: "2022-12-19 18:30:00",
      end: "2022-12-20 23:30:00",
      resourceId: "r1",
      title: "R1 has many tasks 3"
    },
    {
      id: 12,
      start: "2022-12-20 18:30:00",
      end: "2022-12-20 23:30:00",
      resourceId: "r1",
      title: "R1 has many tasks 4"
    },
    {
      id: 13,
      start: "2022-12-21 18:30:00",
      end: "2022-12-24 23:30:00",
      resourceId: "r1",
      title: "R1 has many tasks 5"
    },
    {
      id: 14,
      start: "2022-12-23 18:30:00",
      end: "2022-12-27 23:30:00",
      resourceId: "r1",
      title: "R1 has many tasks 6"
    }
  ],
  eventsForTaskView: [
    {
      id: 1,
      start: "2022-12-18 09:30:00",
      end: "2022-12-18 23:30:00",
      resourceId: "r1",
      title: "I am finished",
      bgColor: "#D9D9D9",
      groupId: 1,
      groupName: "Task1"
    },
    {
      id: 2,
      start: "2022-12-18 12:30:00",
      end: "2022-12-26 23:30:00",
      resourceId: "r2",
      title: "I am not resizable",
      resizable: !1,
      groupId: 2,
      groupName: "Task2"
    },
    {
      id: 3,
      start: "2022-12-19 12:30:00",
      end: "2022-12-20 23:30:00",
      resourceId: "r3",
      title: "I am not movable",
      movable: !1,
      groupId: 3,
      groupName: "Task3"
    },
    {
      id: 7,
      start: "2022-12-19 15:40:00",
      end: "2022-12-20 23:30:00",
      resourceId: "r7",
      title: "I am exceptional",
      bgColor: "#FA9E95",
      groupId: 4,
      groupName: "Task4"
    },
    {
      id: 4,
      start: "2022-12-20 14:30:00",
      end: "2022-12-21 23:30:00",
      resourceId: "r4",
      title: "I am not start-resizable",
      startResizable: !1,
      groupId: 1,
      groupName: "Task1"
    },
    {
      id: 5,
      start: "2022-12-21 15:30:00",
      end: "2022-12-22 23:30:00",
      resourceId: "r5",
      title: "I am not end-resizable",
      endResizable: !1,
      groupId: 3,
      groupName: "Task3"
    },
    {
      id: 9,
      start: "2022-12-21 16:30:00",
      end: "2022-12-21 23:30:00",
      resourceId: "r1",
      title: "R1 has many tasks",
      groupId: 4,
      groupName: "Task4"
    },
    {
      id: 6,
      start: "2022-12-22 15:35:00",
      end: "2022-12-23 23:30:00",
      resourceId: "r6",
      title: "I am normal",
      groupId: 1,
      groupName: "Task1"
    },
    {
      id: 8,
      start: "2022-12-25 15:50:00",
      end: "2022-12-26 23:30:00",
      resourceId: "r1",
      title: "I am locked",
      movable: !1,
      resizable: !1,
      bgColor: "red",
      groupId: 1,
      groupName: "Task1"
    },
    {
      id: 10,
      start: "2022-12-26 18:30:00",
      end: "2022-12-26 23:30:00",
      resourceId: "r2",
      title: "R2 has many tasks",
      groupId: 4,
      groupName: "Task4"
    },
    {
      id: 11,
      start: "2022-12-27 18:30:00",
      end: "2022-12-27 23:30:00",
      resourceId: "r14",
      title: "R4 has many tasks",
      groupId: 4,
      groupName: "Task4"
    },
    {
      id: 12,
      start: "2022-12-28 18:30:00",
      end: "2022-12-28 23:30:00",
      resourceId: "r6",
      title: "R6 has many tasks",
      groupId: 3,
      groupName: "Task3"
    }
  ],
  eventsForCustomEventStyle: [
    {
      id: 1,
      start: "2022-12-18 09:30:00",
      end: "2022-12-19 23:30:00",
      resourceId: "r1",
      title: "I am finished",
      bgColor: "#D9D9D9",
      type: 1
    },
    {
      id: 2,
      start: "2022-12-18 12:30:00",
      end: "2022-12-26 23:30:00",
      resourceId: "r2",
      title: "I am not resizable",
      resizable: !1,
      type: 2
    },
    {
      id: 3,
      start: "2022-12-19 12:30:00",
      end: "2022-12-20 23:30:00",
      resourceId: "r3",
      title: "I am not movable",
      movable: !1,
      type: 3
    },
    {
      id: 4,
      start: "2022-12-19 14:30:00",
      end: "2022-12-20 23:30:00",
      resourceId: "r4",
      title: "I am not start-resizable",
      startResizable: !1,
      type: 1
    },
    {
      id: 5,
      start: "2022-12-19 15:30:00",
      end: "2022-12-20 23:30:00",
      resourceId: "r5",
      title: "I am not end-resizable",
      endResizable: !1,
      type: 2
    },
    {
      id: 6,
      start: "2022-12-19 15:35:00",
      end: "2022-12-19 23:30:00",
      resourceId: "r6",
      title: "I am normal",
      type: 3
    },
    {
      id: 7,
      start: "2022-12-19 15:40:00",
      end: "2022-12-20 23:30:00",
      resourceId: "r7",
      title: "I am exceptional",
      bgColor: "#FA9E95",
      type: 1
    },
    {
      id: 8,
      start: "2022-12-19 15:50:00",
      end: "2022-12-19 23:30:00",
      resourceId: "r1",
      title: "I am locked",
      movable: !1,
      resizable: !1,
      bgColor: "red",
      type: 2
    },
    {
      id: 9,
      start: "2022-12-19 16:30:00",
      end: "2022-12-27 23:30:00",
      resourceId: "r1",
      title: "R1 has many tasks 1",
      type: 3
    },
    {
      id: 10,
      start: "2022-12-20 18:30:00",
      end: "2022-12-20 23:30:00",
      resourceId: "r1",
      title: "R1 has many tasks 2",
      type: 1
    },
    {
      id: 11,
      start: "2022-12-21 18:30:00",
      end: "2022-12-22 23:30:00",
      resourceId: "r1",
      title: "R1 has many tasks 3",
      type: 2
    },
    {
      id: 12,
      start: "2022-12-23 18:30:00",
      end: "2022-12-27 23:30:00",
      resourceId: "r1",
      title: "R1 has many tasks 4",
      type: 3
    }
  ]
};
const lr = it.Button, dr = it.Group;
class cr extends _e {
  constructor(e) {
    super(e);
    M(this, "onWindowResize", (e) => {
      const { schedulerData: r } = this.props;
      r._setDocumentWidth(document.documentElement.clientWidth), this.setState({
        documentWidth: document.documentElement.clientWidth,
        documentHeight: document.documentElement.clientHeight
      });
    });
    M(this, "resolveScrollbarSize", () => {
      const { schedulerData: e } = this.props;
      let r = 17, s = 17, o = 17, i = 17, a = e.getSchedulerContentDesiredHeight();
      this.schedulerContent && (r = this.schedulerContent.offsetHeight - this.schedulerContent.clientHeight, s = this.schedulerContent.offsetWidth - this.schedulerContent.clientWidth), this.schedulerResource && (o = this.schedulerResource.offsetHeight - this.schedulerResource.clientHeight, i = this.schedulerResource.offsetWidth - this.schedulerResource.clientWidth), this.schedulerContentBgTable && this.schedulerContentBgTable.offsetHeight && (a = this.schedulerContentBgTable.offsetHeight);
      let d = {}, c = !1;
      r != this.state.contentScrollbarHeight && (d = {
        ...d,
        contentScrollbarHeight: r
      }, c = !0), s != this.state.contentScrollbarWidth && (d = { ...d, contentScrollbarWidth: s }, c = !0), a != this.state.contentHeight && (d = { ...d, contentHeight: a }, c = !0), o != this.state.resourceScrollbarHeight && (d = {
        ...d,
        resourceScrollbarHeight: o
      }, c = !0), i != this.state.resourceScrollbarWidth && (d = {
        ...d,
        resourceScrollbarWidth: i
      }, c = !0), c && this.setState(d);
    });
    M(this, "schedulerHeadRef", (e) => {
      this.schedulerHead = e;
    });
    M(this, "onSchedulerHeadMouseOver", () => {
      this.currentArea = 2;
    });
    M(this, "onSchedulerHeadMouseOut", () => {
      this.currentArea = -1;
    });
    M(this, "onSchedulerHeadScroll", (e, r) => {
      (this.currentArea === 2 || this.currentArea === -1) && this.schedulerContent.scrollLeft != this.schedulerHead.scrollLeft && (this.schedulerContent.scrollLeft = this.schedulerHead.scrollLeft);
    });
    M(this, "schedulerResourceRef", (e) => {
      this.schedulerResource = e;
    });
    M(this, "onSchedulerResourceMouseOver", () => {
      this.currentArea = 1;
    });
    M(this, "onSchedulerResourceMouseOut", () => {
      this.currentArea = -1;
    });
    M(this, "onSchedulerResourceScroll", (e, r) => {
      (this.currentArea === 1 || this.currentArea === -1) && this.schedulerContent.scrollTop != this.schedulerResource.scrollTop && (this.schedulerContent.scrollTop = this.schedulerResource.scrollTop);
    });
    M(this, "schedulerContentRef", (e) => {
      this.schedulerContent = e;
    });
    M(this, "schedulerContentBgTableRef", (e) => {
      this.schedulerContentBgTable = e;
    });
    M(this, "onSchedulerContentMouseOver", () => {
      this.currentArea = 0;
    });
    M(this, "onSchedulerContentMouseOut", () => {
      this.currentArea = -1;
    });
    M(this, "onSchedulerContentScroll", (e, r) => {
      (this.currentArea === 0 || this.currentArea === -1) && (this.schedulerHead.scrollLeft != this.schedulerContent.scrollLeft && (this.schedulerHead.scrollLeft = this.schedulerContent.scrollLeft), this.schedulerResource.scrollTop != this.schedulerContent.scrollTop && (this.schedulerResource.scrollTop = this.schedulerContent.scrollTop));
      const { schedulerData: s, onScrollLeft: o, onScrollRight: i, onScrollTop: a, onScrollBottom: d } = this.props, { scrollLeft: c, scrollTop: h } = this.state;
      this.schedulerContent.scrollLeft !== c ? (this.schedulerContent.scrollLeft === 0 && o != null && o(s, this.schedulerContent, this.schedulerContent.scrollWidth - this.schedulerContent.clientWidth), this.schedulerContent.scrollLeft === this.schedulerContent.scrollWidth - this.schedulerContent.clientWidth && i != null && i(s, this.schedulerContent, this.schedulerContent.scrollWidth - this.schedulerContent.clientWidth)) : this.schedulerContent.scrollTop !== h && (this.schedulerContent.scrollTop === 0 && a != null && a(s, this.schedulerContent, this.schedulerContent.scrollHeight - this.schedulerContent.clientHeight), this.schedulerContent.scrollTop === this.schedulerContent.scrollHeight - this.schedulerContent.clientHeight && d != null && d(s, this.schedulerContent, this.schedulerContent.scrollHeight - this.schedulerContent.clientHeight)), this.setState({
        scrollLeft: this.schedulerContent.scrollLeft,
        scrollTop: this.schedulerContent.scrollTop
      });
    });
    M(this, "onViewChange", (e) => {
      const { onViewChange: r, schedulerData: s } = this.props;
      let o = parseInt(e.target.value.charAt(0)), i = e.target.value.charAt(1) === "1", a = e.target.value.charAt(2) === "1";
      r(s, {
        viewType: o,
        showAgenda: i,
        isEventPerspective: a
      });
    });
    M(this, "goNext", () => {
      const { nextClick: e, schedulerData: r } = this.props;
      e(r);
    });
    M(this, "goBack", () => {
      const { prevClick: e, schedulerData: r } = this.props;
      e(r);
    });
    M(this, "handleVisibleChange", (e) => {
      this.setState({ visible: e });
    });
    M(this, "onSelect", (e) => {
      this.setState({
        visible: !1
      });
      const { onSelectDate: r, schedulerData: s } = this.props;
      r(s, e);
    });
    const { schedulerData: r, dndSources: s } = e;
    let o = [];
    o.push(new ot((a) => a.eventItem, Ne)), s != null && s.length > 0 && (o = [...o, ...s]);
    let i = new rr(o, ft);
    this.currentArea = -1, r._setDocumentWidth(document.documentElement.clientWidth), this.state = {
      visible: !1,
      dndContext: i,
      contentHeight: r.getSchedulerContentDesiredHeight(),
      contentScrollbarHeight: 17,
      contentScrollbarWidth: 17,
      resourceScrollbarHeight: 17,
      resourceScrollbarWidth: 17,
      scrollLeft: 0,
      scrollTop: 0,
      documentWidth: document.documentElement.clientWidth,
      documentHeight: document.documentElement.clientHeight
    }, r.isSchedulerResponsive() && (window.onresize = this.onWindowResize);
  }
  componentDidMount(e, r) {
    this.resolveScrollbarSize();
  }
  componentDidUpdate(e, r) {
    this.resolveScrollbarSize();
    const { schedulerData: s } = this.props, { localeMoment: o, behaviors: i } = s;
    if (s.getScrollToSpecialMoment() && i.getScrollSpecialMomentFunc && this.schedulerContent && this.schedulerContent.scrollWidth > this.schedulerContent.clientWidth) {
      let a = o(s.startDate).startOf("day"), d = o(s.endDate).endOf("day"), c = i.getScrollSpecialMomentFunc(s, a, d);
      if (c >= a && c <= d) {
        let h = 0;
        s.headers.forEach((p) => {
          let f = o(p.time);
          c >= f && h++;
        }), this.schedulerContent.scrollLeft = (h - 1) * s.getContentCellWidth(), s.setScrollToSpecialMoment(!1);
      }
    }
  }
  render() {
    const { schedulerData: e, leftCustomHeader: r, rightCustomHeader: s } = this.props, { renderData: o, viewType: i, showAgenda: a, isEventPerspective: d, config: c } = e, h = e.getSchedulerWidth(), p = c.calendarPopoverEnabled;
    let f = e.getDateLabel(), m = `${i}${a ? 1 : 0}${d ? 1 : 0}`, E = c.views.map((v) => /* @__PURE__ */ l.jsx(lr, { value: `${v.viewType}${v.showAgenda ? 1 : 0}${v.isEventPerspective ? 1 : 0}`, children: /* @__PURE__ */ l.jsx("span", { style: { margin: "0px 8px" }, children: v.viewName }) }, `${v.viewType}${v.showAgenda ? 1 : 0}${v.isEventPerspective ? 1 : 0}`)), C = /* @__PURE__ */ l.jsx("tr", {});
    if (a)
      C = /* @__PURE__ */ l.jsx(pt, { ...this.props });
    else {
      let v = e.getResourceTableWidth(), T = h - v + 1, w = e.getContentTableWidth() - 1, j = this.state.dndContext.getDropTarget(), k = this.state.dndContext.getDndSource(), P = o.filter((B) => B.render).map((B) => /* @__PURE__ */ he(j, { ...this.props, key: B.slotId, resourceEvents: B, dndSource: k })), S = this.state.contentScrollbarHeight, W = this.state.contentScrollbarWidth, q = this.state.resourceScrollbarHeight, Q = this.state.resourceScrollbarWidth, V = this.state.contentHeight, K = q === 0 ? S : 0, A = {
        overflow: "auto",
        margin: "0px",
        position: "relative",
        paddingBottom: S === 0 ? q : 0
      }, F = {
        overflowX: "auto",
        overflowY: "auto",
        width: v + Q - 2,
        margin: `0px -${W}px 0px 0px`
      };
      c.schedulerMaxHeight > 0 && (A = {
        ...A,
        maxHeight: c.schedulerMaxHeight - c.tableHeaderHeight
      }, F = {
        ...F,
        maxHeight: c.schedulerMaxHeight - c.tableHeaderHeight
      });
      let Y = e.isEventPerspective ? c.taskName : c.resourceName;
      C = /* @__PURE__ */ l.jsxs("tr", { children: [
        /* @__PURE__ */ l.jsx("td", { style: { width: v, verticalAlign: "top" }, children: /* @__PURE__ */ l.jsxs("div", { className: "resource-view", children: [
          /* @__PURE__ */ l.jsx(
            "div",
            {
              style: {
                overflow: "hidden",
                borderBottom: "1px solid #e9e9e9",
                height: c.tableHeaderHeight
              },
              children: /* @__PURE__ */ l.jsx(
                "div",
                {
                  style: {
                    overflowX: "scroll",
                    overflowY: "hidden",
                    margin: `0px 0px -${S}px`
                  },
                  children: /* @__PURE__ */ l.jsx("table", { className: "resource-table", children: /* @__PURE__ */ l.jsx("thead", { children: /* @__PURE__ */ l.jsx("tr", { style: { height: c.tableHeaderHeight }, children: /* @__PURE__ */ l.jsx("th", { className: "header3-text", children: Y }) }) }) })
                }
              )
            }
          ),
          /* @__PURE__ */ l.jsx(
            "div",
            {
              style: F,
              ref: this.schedulerResourceRef,
              onMouseOver: this.onSchedulerResourceMouseOver,
              onMouseOut: this.onSchedulerResourceMouseOut,
              onScroll: this.onSchedulerResourceScroll,
              children: /* @__PURE__ */ l.jsx(at, { ...this.props, contentScrollbarHeight: K })
            }
          )
        ] }) }),
        /* @__PURE__ */ l.jsx("td", { children: /* @__PURE__ */ l.jsxs("div", { className: "scheduler-view", style: { width: T, verticalAlign: "top" }, children: [
          /* @__PURE__ */ l.jsx(
            "div",
            {
              style: {
                overflow: "hidden",
                borderBottom: "1px solid #e9e9e9",
                height: c.tableHeaderHeight
              },
              children: /* @__PURE__ */ l.jsx(
                "div",
                {
                  style: {
                    overflowX: "scroll",
                    overflowY: "hidden",
                    margin: `0px 0px -${S}px`
                  },
                  ref: this.schedulerHeadRef,
                  onMouseOver: this.onSchedulerHeadMouseOver,
                  onMouseOut: this.onSchedulerHeadMouseOut,
                  onScroll: this.onSchedulerHeadScroll,
                  children: /* @__PURE__ */ l.jsx(
                    "div",
                    {
                      style: {
                        paddingRight: `${W}px`,
                        width: w + W
                      },
                      children: /* @__PURE__ */ l.jsx("table", { className: "scheduler-bg-table", children: /* @__PURE__ */ l.jsx(lt, { ...this.props }) })
                    }
                  )
                }
              )
            }
          ),
          /* @__PURE__ */ l.jsx(
            "div",
            {
              style: A,
              ref: this.schedulerContentRef,
              onMouseOver: this.onSchedulerContentMouseOver,
              onMouseOut: this.onSchedulerContentMouseOut,
              onScroll: this.onSchedulerContentScroll,
              children: /* @__PURE__ */ l.jsxs("div", { style: { width: w, height: V }, children: [
                /* @__PURE__ */ l.jsx("div", { className: "scheduler-content", children: /* @__PURE__ */ l.jsx("table", { className: "scheduler-content-table", children: /* @__PURE__ */ l.jsx("tbody", { children: P }) }) }),
                /* @__PURE__ */ l.jsx("div", { className: "scheduler-bg", children: /* @__PURE__ */ l.jsx("table", { className: "scheduler-bg-table", style: { width: w }, ref: this.schedulerContentBgTableRef, children: /* @__PURE__ */ l.jsx(dt, { ...this.props }) }) })
              ] })
            }
          )
        ] }) })
      ] });
    }
    let R = /* @__PURE__ */ l.jsx("div", { className: "popover-calendar", children: /* @__PURE__ */ l.jsx(Qt, { fullscreen: !1, onSelect: this.onSelect }) }), x = /* @__PURE__ */ l.jsx("div", {});
    return c.headerEnabled && (x = /* @__PURE__ */ l.jsxs(
      "div",
      {
        style: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "24px"
        },
        children: [
          r,
          /* @__PURE__ */ l.jsx("div", { children: /* @__PURE__ */ l.jsxs("div", { className: "header2-text", children: [
            /* @__PURE__ */ l.jsx(Xt, { style: { marginRight: "8px" }, className: "icon-nav", onClick: this.goBack }),
            p ? /* @__PURE__ */ l.jsx(He, { content: R, placement: "bottom", trigger: "click", open: this.state.visible, onOpenChange: this.handleVisibleChange, children: /* @__PURE__ */ l.jsx("span", { className: "header2-text-label", style: { cursor: "pointer" }, children: f }) }) : /* @__PURE__ */ l.jsx("span", { className: "header2-text-label", children: f }),
            /* @__PURE__ */ l.jsx(Ut, { style: { marginLeft: "8px" }, className: "icon-nav", onClick: this.goNext })
          ] }) }),
          /* @__PURE__ */ l.jsx("div", { children: /* @__PURE__ */ l.jsxs(dr, { defaultValue: m, size: "default", onChange: this.onViewChange, children: [
            E,
            "xx"
          ] }) }),
          s
        ]
      }
    )), /* @__PURE__ */ l.jsx("div", { className: "scheduler-component-module", children: /* @__PURE__ */ l.jsxs("table", { id: "RBS-Scheduler-root", className: "scheduler", style: { width: `${h}px` }, children: [
      /* @__PURE__ */ l.jsx("thead", { children: /* @__PURE__ */ l.jsx("tr", { children: /* @__PURE__ */ l.jsx("td", { colSpan: "2", children: x }) }) }),
      /* @__PURE__ */ l.jsx("tbody", { children: C })
    ] }) });
  }
}
M(cr, "propTypes", {
  schedulerData: u.object.isRequired,
  prevClick: u.func.isRequired,
  nextClick: u.func.isRequired,
  onViewChange: u.func.isRequired,
  onSelectDate: u.func.isRequired,
  onSetAddMoreState: u.func,
  updateEventStart: u.func,
  updateEventEnd: u.func,
  moveEvent: u.func,
  movingEvent: u.func,
  leftCustomHeader: u.object,
  rightCustomHeader: u.object,
  newEvent: u.func,
  subtitleGetter: u.func,
  eventItemClick: u.func,
  viewEventClick: u.func,
  viewEventText: u.string,
  viewEvent2Click: u.func,
  viewEvent2Text: u.string,
  conflictOccurred: u.func,
  eventItemTemplateResolver: u.func,
  dndSources: u.array,
  slotClickedFunc: u.func,
  toggleExpandFunc: u.func,
  slotItemTemplateResolver: u.func,
  nonAgendaCellHeaderTemplateResolver: u.func,
  onScrollLeft: u.func,
  onScrollRight: u.func,
  onScrollTop: u.func,
  onScrollBottom: u.func
});
export {
  nr as AddMorePopover,
  X as CellUnits,
  L as DATETIME_FORMAT,
  H as DATE_FORMAT,
  rr as DnDContext,
  ot as DnDSource,
  yr as SampleData,
  cr as Scheduler,
  br as SchedulerData,
  ae as SummaryPos,
  D as ViewTypes
};
